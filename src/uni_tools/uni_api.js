/**
 * 基于uniHTML框架规范，封装的接口ajax处理函数
 * 依赖uni_config及uni_ajax
 */
import { apiMode,getApiUrl } from '../../uni_config/config'
import uniAjax from "./uni_ajax";

const _ajax = function (method,url,data,config) {
    url = getApiUrl(url);
    if (apiMode){
        //开发模式，读取api文件，返回结果
        switch (method){
            case 'get':
                return uniAjax.get(url,data,config);
            case 'post':
                return uniAjax.get(url,data,config);
            case 'formPost':
                return uniAjax.get(url,data,config);
        }
    } else {
        //正式环境，发起请求
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