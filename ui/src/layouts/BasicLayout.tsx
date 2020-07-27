/**
 * 基础的用户布局
 */
import React, { ReactNode, useEffect, useState } from 'react';
import { ProLayout, Dropdown, Menu } from '@rwp/react-ui';
import { useHistory, Link } from 'react-router-dom';
import { obtainMenu } from '../services';
import { basicLayoutConfig } from '../app';
import { getContext } from '../utils/context';
import { getIconByType } from '../utils/icon';
import { isLogin, loginAddr, Authenticate } from '../components/Authenticate';

/** 菜单顶部右边信息 */
const rightContentRender = () => {
    const context = getContext();
    return (
        <Dropdown
            overlay={
                <Menu>
                    <Menu.Item>个人中心</Menu.Item>
                    <Menu.Item>安全退出</Menu.Item>
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

type MenuItem = {
    name: string;
    path: string;
    icon: string | ReactNode;
    children: MenuItem[];
};

const loopsMenu = (menu: MenuItem[]): MenuItem[] =>
    menu.map((ele) => {
        if (ele.children && ele.children.length > 0) {
            return {
                name: ele.name,
                path: ele.path,
                icon: getIconByType(ele.icon as string),
                children: loopsMenu(ele.children),
            };
        }
        return {
            name: ele.name,
            path: ele.path,
            icon: getIconByType(ele.icon as string),
            children: [],
        };
    });

/**
 * 基础的布局信息
 */
export const BasicLayout = ({ children }: { children: ReactNode }) => {
    const history = useHistory();
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        (async () => {
            const menuTemp = await obtainMenu();
            setMenu(menuTemp);
        })();
    }, []);

    // 如果登入权限不正确,则跳转到登入页面。
    if (!isLogin()) {
        history.push(loginAddr);
        return null;
    }
    const config = basicLayoutConfig();

    return (
        <ProLayout
            logo={config.logo}
            title={config.title}
            navTheme={config.navTheme}
            rightContentRender={rightContentRender}
            postMenuData={() => loopsMenu(menu)}
            menuItemRender={(item) => {
                if (item.path) {
                    return (
                        <Link to={item.path}>
                            {item.icon} {item.name}
                        </Link>
                    );
                }
                return (
                    <span>
                        {item.icon} {item.name}
                    </span>
                );
            }}
        >
            <Authenticate>{children}</Authenticate>
        </ProLayout>
    );
};
