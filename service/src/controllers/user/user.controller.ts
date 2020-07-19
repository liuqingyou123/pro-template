import { Controller, Post, Body} from '@nestjs/common';
import { ApiProperty, ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SHA512, enc} from 'crypto-js';
import { v4 as UUID } from 'uuid'

import { Account } from '../../entity/account.entity';
import { Session } from '../../entity/session.entity';
import { AbnormalResponse, ResponseException } from '../../common/Response'

class LoginParam {
    @ApiProperty({
        description: '账号',
    })
    username: string

    @ApiProperty({
        description: '密码',
    })
    password: string
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

@ApiTags('用户信息接口')
@Controller('user')
export class UserController {
    constructor( 
        @InjectRepository(Account)
        private accountRepository: Repository<Account>,
        @InjectRepository(Session)
        private sessionRepository: Repository<Session>
    ){}

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
                await this.sessionRepository.create({
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
        throw new ResponseException("账号或者密码错误。")
    }

}
