import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";

import { Session } from '../entity/session.entity'
import { Account, Group } from '../entity/account.entity'

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

        return await this.accountRepository.findOne({
            where:{
                id: session.uId
            }
        })
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
        return group
    }
}