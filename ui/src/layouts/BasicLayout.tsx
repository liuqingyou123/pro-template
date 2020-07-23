/**
 * 基础的用户布局
 */
import React, { ReactNode } from 'react';
import { ProLayout, Dropdown, Menu } from '@rwp/react-ui';
import { useHistory } from 'react-router-dom';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import config from '../app';
import { getContext } from '../utils/context';
import { isLogin, loginAddr, Authenticate } from '../components/Authenticate';

/** 菜单顶部右边信息 */
const rightContentRender = () => {
    const context = getContext();
    return (
        <Dropdown
            overlay={
                <Menu>
                    <Menu.Item>
                        <UserOutlined /> 个人中心
                    </Menu.Item>
                    <Menu.Item>
                        <LogoutOutlined /> 安全退出
                    </Menu.Item>
                </Menu>
            }
        >
            <span
                style={{
                    cursor: 'pointer',
                }}
            >
                {context!.username}
            </span>
        </Dropdown>
    );
};

/**
 * 基础的布局信息
 */
export const BasicLayout = ({ children }: { children: ReactNode }) => {
    const history = useHistory();

    // 如果登入权限不正确,则跳转到登入页面。
    if (!isLogin()) {
        history.push(loginAddr);
        return null;
    }

    return (
        <ProLayout
            logo={config.logo}
            title={config.title}
            navTheme={config.navTheme}
            rightContentRender={rightContentRender}
        >
            <Authenticate>{children}</Authenticate>
        </ProLayout>
    );
};
