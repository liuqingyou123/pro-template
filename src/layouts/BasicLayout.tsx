/**
 * 基础的用户布局
 */
import React from 'react';
import { ProLayout } from '@rwp/react-ui';
import config from '../app';
import { Authenticate } from '../components/index';

export const BasicLayout = ({ children }: { children: any }) => {
    return (
        <ProLayout
            logo={config.logo}
            title={config.title}
            navTheme={config.navTheme}
        >
            <Authenticate>{children}</Authenticate>
        </ProLayout>
    );
};
