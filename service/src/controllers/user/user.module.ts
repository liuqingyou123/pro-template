import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller'
import { Account } from '../../entity/account.entity';
import { Session } from '../../entity/session.entity';

@Module({
    controllers: [UserController],
    imports: [TypeOrmModule.forFeature([Account, Session])]
})
export class UserModule {}
