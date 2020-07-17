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
    title: string;
    logo: string;
    navTheme: 'light' | 'dark';
    fixedHeader: boolean;
    fixSiderbar: boolean;
}

export default ({
    title: 'RWP.JS',
    logo: () => <span />,
    navTheme: 'dark',
    fixedHeader: true,
    fixSiderbar: true,
} as unknown) as Config;
