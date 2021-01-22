/**
 * 基于uniHTML框架规范，封装的接口ajax处理函数
 * 依赖uni_config及uni_ajax
 */
import { apiMode,getApiData,getApiUrl } from '../../uni_config/config'
import uniAjax from "./uni_ajax";

const _ajax = function (method,url,data,config) {
    if (apiMode){
        //开发模式，读取api文件，返回结果
        return new Promise(function (resolve, reject){
            try {
                let apiData = getApiData();
                if (apiData === false){
                    console.log(url)
                    resolve({code:500,data:{},msg:'接口文件错误'});
                } else {
                    if (typeof apiData[`${url}`] === "undefined") {
                        resolve({code:501,data:{},msg:'接口数据错误'});
                    } else {
                        resolve(apiData[`${url}`]);
                    }
                }
            } catch (e) {
                reject(e);
            }
        });
    } else {
        //正式环境，发起请求
        url = getApiUrl(url);
        switch (method){
            case 'get':
                return uniAjax.get(url,data,config);
            case 'post':
                return uniAjax.post(url,data,config);
            case 'formPost':
                return uniAjax.formPost(url,data,config);
        }
    }
}

const post = function (url,data,config){
    return _ajax('post',url,data,config);
}

const get = function (url,data,config){
    return _ajax('get',url,data,config);
}

const formPost = function (url,data,config){
    return _ajax('formPost',url,data,config);
}

export default {
    post,
    get,
    formPost
}