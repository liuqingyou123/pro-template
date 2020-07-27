import React from 'react';

/**
 * 路由守卫, 用来鉴权哪些路由是可以被当前用户访问的
 * @param pathname 当前路由地址
 * @returns 如果返回true表示允许通过,如果返回false 表示无对应的权限
 */
export const withGuardRoute = (_pathname: string): boolean => {
    return true;
};

// 菜单配置接口
interface Config {
    // 标题
    title: string;
    // 菜单logo
    logo: string | React.FunctionComponent;
    // 主题
    navTheme: 'light' | 'dark';
    // 固定头部
    fixedHeader: boolean;
    // 固定导航
    fixSiderbar: boolean;
}

/**
 * 获取当前基本布局的配置信息
 */
export const basicLayoutConfig = (): Config => {
    return {
        title: 'RWP.JS',
        logo: () => <span />,
        navTheme: 'dark',
        fixedHeader: true,
        fixSiderbar: true,
    };
};
