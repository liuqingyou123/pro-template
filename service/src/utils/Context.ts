import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";

import { Session } from '../entity/session.entity'
import { Account, Group } from '../entity/account.entity'
import { ResponseException } from "src/common/Response";

@Injectable()
export class Context {
    constructor(
        @InjectRepository(Account)
        private accountRepository: Repository<Account>,
        @InjectRepository(Session)
        private sessionRepository: Repository<Session>,
        @InjectRepository(Group)
        private groupRepository: Repository<Group>
    ){}

    /**
     * 获取当前用户的登入信息
     */
    async geUserAccount(token: string): Promise<Account>{
        const session = await this.sessionRepository.findOne({
            where:{
                token, 
            }
        })
        const account = await this.accountRepository.findOne({
            where:{
                id: session.uId
            }
        })

        if(account){
            return account
        }
        throw new ResponseException('会话已失效,请重新登入')
    }

    /**
     * 获取当前用户的分组信息
     */
    async getGroup(token: string): Promise<Group>{
        const user = await this.geUserAccount(token)
        const group = await this.groupRepository.findOne({
            where:{
                uId: user.id
            }
        })
        if(group){
            return group
        }
        throw new ResponseException('当前人员未维护对应的分组信息。')
    }
}