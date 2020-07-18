import { createConnection, Connection } from 'typeorm';

export const providers = [
    {
        provide: 'CORE',
        useFactory: async (): Promise<Connection> =>{
            return await createConnection({
                type: 'mysql',
                host: '127.0.0.1',
                port: 3306,
                username: 'root',
                password: '123456',
                database: 'rwp',
                entities: [
                    process.cwd() + '/src/models/entity/**/*.entity{.ts,.js}',
                ],
                synchronize: true,
            })
        } 
    },
];
