export interface Context {
    // 用户唯一ID
    id: string;
    // 用户显示名称
    userName: string;
    // 用户当前和服务器交互的token
    token: string;
    // 其他数据
    [key: string]: any;
}

export const localStorageKey = 'RWP-CONTEXT';

/**
 * 获取当前登入人的一些上下文信息
 * @returns 如果获取到则返回对应的上下文信息,如果未正确获取到则返回null
 */
export const getContext = (): Context | null => {
    try {
        const item: string | null = localStorage.getItem(localStorageKey);
        if (item) {
            return JSON.parse(item) as Context;
        }
        return null;
    } catch (error) {
        return null;
    }
};

export const setContext = (context: Context) => {
    localStorage.setItem(localStorageKey, JSON.stringify(context));
};
