/**
 * 基础的用户布局
 */
import React, { ReactNode, useEffect, useState } from 'react';
import { ProLayout, Dropdown, Menu } from '@rwp/react-ui';
import { useHistory, Link, useLocation } from 'react-router-dom';
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
    key: string;
    children: MenuItem[];
};

const loopsMenu = (
    menu: MenuItem[],
    callback?: (menuItem: MenuItem) => void,
): MenuItem[] =>
    menu.map((ele) => {
        if (callback) {
            callback(ele);
        }
        if (ele.children && ele.children.length > 0) {
            return {
                name: ele.name,
                path: ele.path,
                key: ele.path,
                icon: getIconByType(ele.icon as string),
                children: loopsMenu(ele.children, callback),
            };
        }
        return {
            name: ele.name,
            path: ele.path,
            icon: getIconByType(ele.icon as string),
            key: ele.path,
            children: [],
        };
    });

const splitOpenKey = (key: string) => {
    const openKeys = key.match(/\/[A-z0-9]+/g);
    const keys: string[] = [];
    if (openKeys) {
        let before = '';
        openKeys.forEach((ele) => {
            before += ele;
            keys.push(before);
        });
    }
    return keys;
};

/**
 * 获取当前的展开节点
 */
const useObtainOpenKeys = () => {
    const location = useLocation();
    return splitOpenKey(location.pathname);
};
/**
 * 基础的布局信息
 */
export const BasicLayout = ({ children }: { children: ReactNode }) => {
    const history = useHistory();
    const location = useLocation();
    const [menu, setMenu] = useState<MenuItem[]>([]);
    const defaultOpenKeys = useObtainOpenKeys();
    const [openKeys, setOpenKeys] = useState<string[]>([]);

    useEffect(() => {
        (async () => {
            const menuTemp = await obtainMenu();
            setMenu(loopsMenu(menuTemp));
            setOpenKeys(defaultOpenKeys);
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
            selectedKeys={[location.pathname]}
            menuDataRender={() => menu}
            openKeys={openKeys}
            onOpenChange={(keys) => {
                if (keys) {
                    let newOpenKeys: string[] = [];
                    keys.forEach((ele) => {
                        if (!openKeys.includes(ele)) {
                            newOpenKeys = splitOpenKey(ele).concat(ele);
                        }
                    });
                    setOpenKeys(newOpenKeys);
                }
            }}
            menuItemRender={(item, defaultDom) => {
                if (item.path) {
                    return <Link to={item.path}>{defaultDom}</Link>;
                }
                return defaultDom;
            }}
        >
            <Authenticate>{children}</Authenticate>
        </ProLayout>
    );
};
