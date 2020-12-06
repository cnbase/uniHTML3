/**
 * postcss配置
 * @type {{getModulePages: function(): {pages: *}, uniName: string, outputDir: string, getPostcssConfig: function(): (string|boolean), apiData: {}, moduleName: string, buildMode: boolean, pageName: string, getPageUrl: function(*), getModulePage: function(): {pages: {}}, getApiUrl: function(*), devMode: boolean, getBabelConfigPath: function(): string, assetsDir: string, babelMode: boolean}|{devMode?: boolean, apiData?: {}, uniName?: string, outputDir?: string, assetsDir?: string, moduleName?: string, pageName?: string, babelMode?: boolean, buildMode?: boolean, getApiUrl?: function(*), getPageUrl?: function(*), getModulePage?: function(): {pages: {}}, getModulePages?: function(): {pages: *}, getBabelConfigPath?: function(): string, getPostcssConfig?: function(): (string|boolean)}}
 */
const uniConfig = require('./uni_config/config')

let config = {}
let path = uniConfig.getPostcssConfig();

if (path){
    config = require(path)
}

module.exports = {
    ...config
}