/**
 * 权限守卫
 */

import {
    Injectable,
    CanActivate,
    ExecutionContext,
    Inject,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { Session } from '../entity/Session';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        @Inject('CORE')
        private repository: Repository<Session>,
    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request: Request = context.switchToHttp().getRequest();
        const token: string = request.headers.get('RWP-TOKEN');
        const session = await this.repository.find({
            where: {
                token,
            },
        });
        return session.length > 0;
    }
}
