import { extend, ResponseError } from 'umi-request';
import { getContext } from './context';

export interface AbnormalResponse extends Error {
    // 错误状态码
    statusCode: number;
    // 错误消息
    message: string;
    // 错误的数据
    data?: any;
}

export const request = extend({
    errorHandler: async (error: ResponseError) => {
        const abnormal: AbnormalResponse = await error.response.json();
        throw abnormal;
    },
    // 超时时间为5秒
    timeout: 5000,
    // 缓存Get请求
    useCache: true,
});

/**
 * 拦截请求之前的操作,将token放在body中
 */
request.interceptors.request.use((url, options) => {
    const context = getContext();
    const opt = {
        url,
        options,
    };
    if (context && opt.options.data) {
        opt.options.data = {
            ...opt.options.data,
            token: context.token,
        };
    }
    return opt;
});
