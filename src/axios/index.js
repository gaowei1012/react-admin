/**
 * Copy 2018/7/28 & 执念
 */

import Jsonp from 'jsonp';

/**
 * Axios 网络请求
 */
export default class Axios {
    /**
     * 封装网络请求跨域方法
     * @param {传入的ur请求参数} options 
     */
    static jsonp(options) {
        // 返回一个promise,可以使用then调用
        return new Promise((resolve, reject) => {
            
            Jsonp(options.url, {
                param: 'callback'// 跨域
            }, function(err, response) {
                
                // 判断请求状态是否成功
                if (response.status == 'success') {
                    resolve(response); // 成功返回data
                } else {
                    reject(response.message); // 失败返回 err
                }
            });
        });
    }
};