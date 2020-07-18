import { Module } from '@nestjs/common';
import { providers } from './config/Database';
import { UserController } from './controllers/user/user.controller';

@Module({
    controllers: [UserController],
    providers: [...providers],
    exports: [...providers],
})
export class AppModule {}
