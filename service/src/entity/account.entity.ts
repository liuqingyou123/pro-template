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

/**
 * 用户分组信息
 */
@Entity()
export class Group {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        comment: '用户',
    })
    uId: number

    @Column({
        comment: '组名称',
    })
    name: string

    @Column({
        comment: '用户创建时间',
    })
    createdAt: Date
}

/**
 * 用户指纹信息
 */
@Entity()
export class Fingerprint {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        comment: '用户ID',
    })
    uId: number;

    @Column({
        comment: '用户创建时间',
    })
    createdAt: Date

    @Column({
        comment: '指纹的hash值',
    })
    hash: string
}