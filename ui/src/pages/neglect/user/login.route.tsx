import React from 'react';
import {
    Button,
    classPrefix,
    Form,
    Input,
    Card,
    notification,
    Checkbox,
} from '@rwp/react-ui';
import { useHistory } from 'react-router-dom';
import { login, fingerprintLogin } from '../../../services/user.service';
import {
    setContext,
    setRememberPassword,
    getRememberPassword,
} from '../../../utils/context';
import './style/index.less';

export default () => {
    const history = useHistory();
    // 账号密码登入
    const onFinish = ({
        username,
        password,
    }: {
        username: string;
        password: string;
    }) => {
        (async () => {
            try {
                // 登入成功
                const loginResponse = await login(username, password);
                setContext({
                    // 用户名称
                    username: loginResponse.username,
                    // 用户id
                    uId: loginResponse.uId,
                    // 唯一token
                    token: loginResponse.token,
                    // 用户头像
                    avatar: loginResponse.avatar,
                });
                // 跳转到首页
                history.replace('/');
            } catch (error) {
                notification.warn({
                    message: '系统消息',
                    description: error.message,
                });
            }
        })();
    };

    // 如果记住了密码，则指纹方式直接登入
    if (getRememberPassword()) {
        (async () => {
            try {
                // 登入成功
                const loginResponse = await fingerprintLogin();
                setContext({
                    // 用户名称
                    username: loginResponse.username,
                    // 用户id
                    uId: loginResponse.uId,
                    // 唯一token
                    token: loginResponse.token,
                    // 用户头像
                    avatar: loginResponse.avatar,
                });
                // 跳转到首页
                history.replace('/');
            } catch (error) {
                console.warn(error);
            }
        })();
    }

    return (
        <div className={`${classPrefix}-login`}>
            <Card
                type="primary"
                title="账号密码登入"
                size="small"
                style={{
                    width: 330,
                    height: 380,
                    marginTop: 80,
                    boxShadow: '0 4px 8px rgba(0,0,0,.05)',
                }}
            >
                <Form
                    cols={1}
                    labelWidth={46}
                    onFinish={({ username, password }) =>
                        onFinish({ username, password })
                    }
                    style={{ marginTop: 20, marginRight: 5, marginLeft: 10 }}
                >
                    <Form.Item key="username" name="username" label="用户名">
                        <Input />
                    </Form.Item>
                    <Form.Item key="password" name="password" label="密码">
                        <Input.Password />
                    </Form.Item>
                    <Checkbox
                        defaultChecked={getRememberPassword()}
                        onChange={(value) => {
                            setRememberPassword(value.target.checked);
                        }}
                    >
                        记住密码
                    </Checkbox>
                    <Button
                        htmlType="submit"
                        type="primary"
                        style={{
                            marginTop: 20,
                        }}
                        key="submit"
                    >
                        登入
                    </Button>
                </Form>
            </Card>
        </div>
    );
};
