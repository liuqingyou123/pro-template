import { Module } from '@nestjs/common';
import { providers } from './config/Database';

@Module({
    controllers: [],
    providers: [...providers],
    exports: [...providers],
})
export class AppModule {}
