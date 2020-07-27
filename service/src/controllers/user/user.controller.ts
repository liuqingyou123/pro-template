import { Controller, Post, Body, Get, Headers } from '@nestjs/common';
import { ApiProperty, ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, TreeRepository } from 'typeorm';
import { SHA512, enc} from 'crypto-js';
import { v4 as UUID } from 'uuid'

import { Account, Fingerprint } from '../../entity/account.entity';
import { Session } from '../../entity/session.entity';
import { Menu, MenuAuth } from '../../entity/menu.entity'
import { AbnormalResponse, ResponseException } from '../../common/Response'
import { Context } from '../../utils/Context';

class LoginParam {
    @ApiProperty({
        description: '账号',
    })
    username: string

    @ApiProperty({
        description: '密码',
    })
    password: string

    @ApiProperty({
        description: '指纹',
    })
    fingerprint: string
}

class FingerprintLoginParam {

    @ApiProperty({
        description: '指纹',
    })
    fingerprint: string
}

class LoginResponse{

    @ApiProperty({
        description: '用户请求的token'
    })
    token: string

    @ApiProperty({
        description: '人员ID'
    })
    uId: number

    @ApiProperty({
        description: '账号'
    })
    username: string

    @ApiProperty({
        description: '头像信息'
    })
    avatar: string
}

class MenuResponse {
    @ApiProperty({
        description: '菜单名称',
    })
    name: string

    @ApiProperty({
        description: '菜单图标'
    })
    icon: string

    @ApiProperty({
        description: '菜单路径'
    })
    path: string

    @ApiProperty({
        description: '子菜单信息'
    })
    children: MenuResponse[]
}

@ApiTags('用户信息接口')
@Controller('user')
export class UserController {

    constructor( 
        @InjectRepository(Account)
        private accountRepository: Repository<Account>,
        @InjectRepository(Session)
        private sessionRepository: Repository<Session>,
        @InjectRepository(Fingerprint)
        private fingerprintRepository: Repository<Fingerprint>,
        @InjectRepository(Menu)
        private menuRepository: TreeRepository<Menu>,
        @InjectRepository(MenuAuth)
        private menuAuthRepository: TreeRepository<MenuAuth>,
        private context: Context
    ){}

    /**
     * 通过用户信息创建Session
     */
    async createSessionByUser (user: Account): Promise<LoginResponse>{
        const session = await this.sessionRepository.findOne({
            where:{
                uId: user.id
            }
        })
        if(session){
            session.lestActivityTime = new Date()
            await this.sessionRepository.save(session)
            return {
                token: session.token,
                username: user.username,
                avatar: user.avatar,
                uId: user.id,
            }
        }else{
            const token: string = SHA512(UUID()).toString(enc.Base64)
            await this.sessionRepository.save({
                uId: user.id,
                lestActivityTime: new Date(),
                token,
            })
            return {
                token,
                username: user.username,
                avatar: user.avatar,
                uId: user.id,
            }
        }
    }

    @Post('/login')
    @ApiResponse({ status: 201, description: '登入成功', type: LoginResponse })
    @ApiResponse({ status: 500, description: '登入失败', type: AbnormalResponse })
    @ApiOperation({ summary: '用户登入',description: '用户使用账号密码登入系统'})
    async login(@Body() param: LoginParam): Promise<LoginResponse> {
        const user = await this.accountRepository.findOne({
            where:{
                username: param.username,
                password: SHA512(param.password).toString(enc.Base64)
            }
        })
        if(user){
            const respone = this.createSessionByUser(user)
            const fingerprint = await this.fingerprintRepository.find({
                where:{
                    hash: param.fingerprint
                }
            })
            
            if(fingerprint.length === 0){
                await this.fingerprintRepository.save({
                    hash: SHA512(param.fingerprint).toString(enc.Base64),
                    uId: user.id,
                    createdAt: new Date(),
                })
            }
            return respone
        }
        throw new ResponseException("账号或者密码错误。")
    }


    @Get('/menu')
    @ApiResponse({ status: 201, description: '登入成功', type: LoginResponse })
    @ApiResponse({ status: 500, description: '登入失败', type: AbnormalResponse })
    @ApiOperation({ summary: '菜单信息',description: '用户登入的时候获取菜单信息'})
    async menu(@Headers('rwp-token') token: string): Promise<MenuResponse>{
        const group = await this.context.getGroup(token)
        const dbMenu = await this.menuRepository.findTrees()

        const menuAuth = (await this.menuAuthRepository.find({
            where:{
                gId: group.id
            }
        })).map(ele => ele.mId)

        const loopsMenu = (menus: Menu[]) => {
            return menus.map(menu => {
                if(menu.children && menu.children.length > 0){
                    return {
                        name: menu.name,
                        icon: menu.icon,
                        path: menu.path,
                        key: menu.id,
                        children: loopsMenu(menu.children)
                    }
                }else {
                    return {
                        name: menu.name,
                        icon: menu.icon,
                        path: menu.path,
                        key: menu.id,
                        children: []
                    }
                }
            })
        }

        return loopsMenu(dbMenu.filter(ele => menuAuth.includes(ele.id)))
    }

    @Post('/login/fingerprint')
    @ApiResponse({ status: 201, description: '登入成功', type: LoginResponse })
    @ApiResponse({ status: 500, description: '登入失败', type: AbnormalResponse })
    @ApiOperation({ summary: '指纹登入',description: '用户使用指纹登入系统'})
    async fingerprintLogin(@Body() param: FingerprintLoginParam): Promise<LoginResponse>{
        const fingerprint = await this.fingerprintRepository.find({
            where: {
                hash: param.fingerprint
            }
        })
        if(fingerprint.length > 0){
            const user =  await this.accountRepository.findOne({
                where:{
                    id: fingerprint.pop().id
                }
            })
            if(user){
                return this.createSessionByUser(user)
            }
        }
        throw new ResponseException("指纹已经过期。")
    }
}
