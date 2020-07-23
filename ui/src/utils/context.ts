import Fingerprint2 from 'fingerprintjs2';

export interface Context {
    // 用户唯一ID
    uId: string;
    // 用户显示名称
    username: string;
    // 用户当前和服务器交互的token
    token: string;
    // 其他数据
    [key: string]: any;
}

export const sessionStorageKey = 'RWP-CONTEXT';

/**
 * 获取当前登入人的一些上下文信息
 * @returns 如果获取到则返回对应的上下文信息,如果未正确获取到则返回null
 */
export const getContext = (): Context | null => {
    try {
        const item: string | null = sessionStorage.getItem(sessionStorageKey);
        if (item) {
            return JSON.parse(item) as Context;
        }
        return null;
    } catch (error) {
        return null;
    }
};

export const setContext = (context: Context) => {
    sessionStorage.setItem(sessionStorageKey, JSON.stringify(context));
};

// 设置是否记住密码
export const setRememberPassword = (isRemember: boolean) => {
    localStorage.setItem('RWP-REMEMBER-PASSWORD', JSON.stringify(isRemember));
};

// 获取记住密码
export const getRememberPassword = () => {
    return JSON.parse(localStorage.getItem('RWP-REMEMBER-PASSWORD') || 'true');
};

/**
 * 获取浏览器指纹
 */
export const getFingerprint = () => {
    return new Promise<string>((resolve) => {
        Fingerprint2.get((components) => {
            const values = components.map((component) => component.value);
            const murmur = Fingerprint2.x64hash128(values.join(''), 31);
            resolve(murmur);
        });
    });
};
