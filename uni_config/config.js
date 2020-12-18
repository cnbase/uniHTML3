const path = require('path')

/**
 * 是否开发模式
 * @type {boolean}
 */
const devMode = false;

/**
 * 本地模拟api数据
 */
let apiData = {};

/**
 * 开发模式，请打开注释
 * @type {{}}
 */
//apiData = require('./apiData');

/**
 * 访问url
 * @type {string}
 */
const siteUrl = '/';

/**
 * API地址
 * @type {string}
 */
const apiUrl = '/';

/**
 * 模板组名称
 * @type {string}
 */
const uniName = 'default';

/**
 * 模块的模板名称，如后台admin,前台index
 * @type {string}
 */
const moduleName = 'index';

/**
 * 构建目录，相对vue.config.js目录
 * @type {string}
 */
const outputDir = './dist/index';

/**
 * 静态目录名称，相对于outputDir
 * @type {string}
 */
const assetsDir = 'static';

/**
 * 无需编译，直接copy的文件
 * 依赖copy-webpack-plugin插件，不要引入7.0高版本
 * npm install copy-webpack-plugin@6.4.1 --save-dev
 */
const copyFiles = [
    { from: path.resolve(__dirname, '../uni_static/'+moduleName),force: true}
];

/**
 * 构建方式
 * 注意：每次打包都会删除原构建目录所有文件重新打包
 * true:全页面构建，打包全部文件
 * false:单页面构建，单独打包
 * @type {boolean}
 */
const buildMode = true;

/**
 * 单页面构建[buildMode=true]时，页面名称
 * @type {string}
 */
const pageName = 'menu';

/**
 * 模板 对应页面配置文件路径
 * @type {string}
 */
const pagesPath = '../src/uni_html/'+uniName+'/'+moduleName+'/pages';

/**
 * 载入模板页面配置
 */
const pages = require(pagesPath);

/**
 * 单页面构建
 */
const getModulePage = function () {
    return {
        pages:{
            [`${pageName}`]:pages[`${pageName}`]
        },
    };
}

/**
 * 全页面构建
 * @returns {{pages: *}}
 */
const getModulePages = function (){
    return {
        pages:pages,
    };
}

/**
 * 获取页面url
 * @param page
 * @returns {string}
 */
const getPageUrl = function (page) {
    return siteUrl+page;
}

/**
 * 组装 api url
 * @param api
 * @returns {string}
 */
const getApiUrl = function (api) {
    return apiUrl+api;
}

/**
 * 打包模式
 * true:全量打包
 * false:按需打包
 * @type {boolean}
 */
const babelMode = true;

/**
 * 按需打包时，对应的 babel.config 配置文件名
 * @type {string}
 */
const babelName = 'element';

/**
 * 返回按需打包时babel配置文件路径
 * @returns {string}
 */
const getBabelConfigPath = function () {
    return './uni_config/'+babelName;
}

/**
 * postcss
 * @type {boolean}
 */
const postcssMode = false;

/**
 * postcss配置文件路径
 * @returns {string|boolean}
 */
const getPostcssConfig = function () {
    if (postcssMode) {
        return './uni_config/postcss.js';
    }
    return false;
}

module.exports = {
    devMode,
    apiData,
    uniName,
    outputDir,
    assetsDir,
    moduleName,
    copyFiles,
    pageName,
    babelMode,
    buildMode,
    getApiUrl,
    getPageUrl,
    getModulePage,
    getModulePages,
    getBabelConfigPath,
    getPostcssConfig
}