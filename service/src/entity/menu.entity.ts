import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn, TreeParent, TreeChildren, Tree } from 'typeorm';

/**
 * 菜单权限
 */
@Entity()
export class MenuAuth{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        comment: '所在组',
    })
    gId: number

    @Column({
        comment: '关联的菜单',
        nullable: false,
    })
    mId: number

    @Column({
        comment: '创建日期',
    })
    createdAt: Date
}

/**
 * 基础菜单信息
 */
@Entity()
@Tree("materialized-path")
export class Menu {
    @PrimaryGeneratedColumn()
    id: number;


    @Column({
        comment: '菜单名称',
    })
    name: string

    @Column({
        comment: '菜单图标',
    })
    icon: string

    @Column({
        comment: '菜单路径',
    })
    path: string

    @TreeParent()
    parent: Menu;

    @TreeChildren()
    children: Menu[];

    @Column({
        comment: '创建日期',
    })
    createdAt: Date
}
