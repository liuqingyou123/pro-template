import React from 'react';
import { useLocation } from 'react-router-dom';
import { BasicLayout } from './BasicLayout';

export default (props: any) => {
    const location = useLocation();

    // 如果是neglect开头的路径,则不使用主布局
    if (/\/neglect\/.*/.test(location.pathname)) {
        return props.children;
    }

    return <BasicLayout> {props.children} </BasicLayout>;
};
