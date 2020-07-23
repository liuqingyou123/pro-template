import React from 'react';
import { Result } from '@rwp/react-ui';
import { useHistory, useLocation } from 'react-router-dom';
import { withGuardRoute } from '../../app';
import { getContext } from '../../utils/context';

interface AuthenticateProps {
    children: any;
}

/**
 * 判断用户当前是否已经登入系统
 * @returns true表示登入, false表示未登入
 */
export const isLogin = (): boolean => {
    const context = getContext();
    if (context) {
        return true;
    }
    return false;
};

// 登入页面的地址
export const loginAddr = '/neglect/user/login';

/**
 * 权限校验的业务组件
 */
export const Authenticate = (props: AuthenticateProps) => {
    const history = useHistory();
    const location = useLocation();
    // 如果用户未登入,则跳转到登入界面
    if (!isLogin()) {
        history.push(loginAddr);
    }
    // 如果有对应的访问权限,则返回对应的菜单信息
    if (withGuardRoute(location.pathname)) {
        return props.children;
    }
    // 否则返回403无权限访问
    return (
        <Result status="403" title="403" subTitle="对不起,无权限访问此页面。" />
    );
};
