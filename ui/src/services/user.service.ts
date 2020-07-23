import { request } from '../utils/request';
import { getFingerprint } from '../utils/context';

interface LoginResponse {
    // 用户的token信息
    token: string;
    // 用户唯一ID
    uId: string;
    // 用户名称
    username: string;
    // 用户头像
    avatar: string;
}

/**
 * 登入系统
 * @param username 用户名
 * @param password 用户密码
 * @param fingerprint 用户指纹信息
 */
export const login = async (
    username: string,
    password: string,
): Promise<LoginResponse> => {
    const fingerprint = await getFingerprint();
    const result = await request('/user/login', {
        method: 'POST',
        data: {
            username,
            password,
            fingerprint,
        },
    });
    return result;
};

/**
 * 指纹登入系统
 * @param fingerprint 指纹信息
 */
export const fingerprintLogin = async (): Promise<LoginResponse> => {
    const fingerprint = await getFingerprint();
    const result = await request('/user/login/fingerprint', {
        method: 'POST',
        data: {
            fingerprint,
        },
    });
    return result;
};
