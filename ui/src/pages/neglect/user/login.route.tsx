import React from 'react';
import { Button, classPrefix, Form, Input, Tabs } from '@rwp/react-ui';
import './style/index.less';

export default () => {
    // 执行登入
    const onFinish = (_values: any) => {};
    return (
        <div className={`${classPrefix}-login`}>
            <div>
                <Tabs defaultActiveKey="UserNameAndPassword">
                    <Tabs.TabPane tab="账户密码登入" key="UserNameAndPassword">
                        <Form cols={1} onFinish={onFinish}>
                            <Form.Item key="username" name="username">
                                <Input placeholder="账号" />
                            </Form.Item>
                            <Form.Item key="password" name="password">
                                <Input.Password placeholder="密码" />
                            </Form.Item>
                            <Button
                                htmlType="submit"
                                type="primary"
                                key="submit"
                            >
                                登入
                            </Button>
                        </Form>
                    </Tabs.TabPane>
                </Tabs>
            </div>
        </div>
    );
};
