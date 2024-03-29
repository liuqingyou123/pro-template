import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Session {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        comment: '用户id',
    })
    uId: number

    @Column({
        comment: '用户最后活跃的时间',
    })
    lestActivityTime: Date;

    @Column({
        comment: '用户的凭证信息,存在token里面'
    })
    token: string;
}
