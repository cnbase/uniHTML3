/**
 * 项目名称
 * @type {string}
 */
const uniName = 'default';

/**
 * 项目模板名称，如后台admin,前台index
 * @type {string}
 */
const moduleName = 'index';

/**
 * api请求时，是否采用模拟数据返回
 * true:返回模拟api数据，用于开发模式
 */
const apiMode = false;

/**
 * API地址
 * @type {string}
 */
const apiUrl = '';

/**
 * 编译后，是否需要copy文件
 * 依赖copy-webpack-plugin插件，不要引入7.0高版本
 * npm install copy-webpack-plugin@6.4.1 --save-dev
 * 应用场景：构建后，一些静态资源直接copy到项目打包目录
 * 默认copy目录：../uni_static/uniName/moduleName/
 * 如需额外自定义copy文件，请修改下面的getCopyFiles方法
 */
const copyMode = false;

/**
 * 部署应用时的基本URL
 * 部署在 https://www.my-app.com/my-app/，则设置为 /my-app/
 * 相对路径：设置为空字符串 ('') 或是相对路径 ('./')
 */
const publicPath = './';

/**
 * 构建目录，相对vue.config.js目录
 * @type {string}
 */
const outputDir = './dist/' + moduleName;

/**
 * 静态目录名称，相对于outputDir
 * @type {string}
 */
const assetsDir = 'static';

/**
 * 构建方式
 * 注：不管如何配置，vue每次打包都会删除原构建目录所有文件重新打包
 * true:全页面构建，生成全部模板文件
 * false:单页面构建，仅生成单页面文件
 * @type {boolean}
 */
const buildMode = true;

/**
 * 单页面构建[buildMode=true]时，页面名称
 * @type {string}
 */
const pageName = 'index';

/**
 * 项目模板-页面构建配置文件(pages.js)路径
 * @type {string}
 */
const pagesJsPath = '../src/uni_html/'+uniName+'/'+moduleName+'/pages';

/**
 * 返回页面构建参数
 */
const getPagesJs = function () {
    if (buildMode) {
        //全页面构建
        return {
            pages: require(pagesJsPath),
        };
    } else {
        //单页面构建
        return {
            pages:{
                [`${pageName}`]: require(pagesJsPath)[`${pageName}`]
            },
        };
    }
}

/**
 * 组装 api url
 * @param api
 * @returns {string}
 */
const getApiUrl = function (api) {
    if (apiMode) {
        return apiUrl+api+'.json';
    } else {
        return apiUrl+api;
    }
}

/**
 * 汇总 vue 配置项
 */
const vueConfig = {
    publicPath,
    outputDir,
    assetsDir,
}

module.exports = {
    uniName,
    moduleName,
    apiMode,
    vueConfig,
    getPagesJs,
    getApiUrl,
}