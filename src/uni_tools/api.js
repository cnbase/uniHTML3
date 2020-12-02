/**
 * 根据uni_config开发模式配置，处理ajax请求
 */
import Config from '../../uni_config/config'
import Ajax from "./ajax";

const _ajax = function (method,url,data,config) {
    if (Config.devMode){
        //开发模式，读取api文件，返回结果
        return new Promise(function (resolve, reject){
            try {
                if (typeof Config.apiData[`${url}`] === 'undefined'){
                    console.log(Config.apiData)
                    console.log(url)
                    resolve({code:5000,data:{},msg:'接口数据错误'});
                } else {
                    resolve(Config.apiData[`${url}`]);
                }
            } catch (e) {
                reject(e);
            }
        });
    } else {
        //正式环境，发起请求
        url = Config.getApiUrl(url);
        switch (method){
            case 'get':
                return Ajax.get(url,data,config);
            case 'post':
                return Ajax.post(url,data,config);
            case 'formPost':
                return Ajax.formPost(url,data,config);
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