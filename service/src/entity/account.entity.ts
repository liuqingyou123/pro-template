import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Account {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        comment: '用户账户名',
    })
    username: string;

    @Column({
        comment: '用户密码',
        length: 88,
    })
    password: string;

    @Column({
        comment: '用户头像信息',
    })
    avatar: string;

    @Column({
        comment: '用户创建时间',
    })
    createdAt: Date
}
