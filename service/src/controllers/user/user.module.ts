import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller'
import { Account, Group } from '../../entity/account.entity';
import { Session } from '../../entity/session.entity';
import { Fingerprint } from '../../entity/account.entity'
import { Menu, MenuAuth } from '../../entity/menu.entity'
import { Context } from '../../utils/Context'

@Module({
    controllers: [UserController],
    imports: [TypeOrmModule.forFeature([
        Account,
        Session,
        Group,
        Fingerprint,
        Menu,
        MenuAuth
    ])],
    providers: [Context]
})
export class UserModule {}
