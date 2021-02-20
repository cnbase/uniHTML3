/**
 * uniHTML通用配置项
 */
const { uniName,moduleName,vueConfig,copyMode,getPagesJs } = require('./uni_config/config')

/**
 * 无需编译，直接copy的文件列表
 * 依赖copy-webpack-plugin插件，不要引入7.0高版本
 * npm install copy-webpack-plugin@6.4.1 --save-dev
 */
let configureWebpack = {};
if (copyMode) {
    const path = require('path')
    const CopyWebpackPlugin = require('copy-webpack-plugin')
    configureWebpack = {
        plugins:[new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname, './uni_static/'+uniName+'/'+moduleName),force: true}
            ]
        })]
    }
}

/**
 * 自定义配置项
 */
const extraConfig = require('./uni_config/extra').vueConfig

module.exports = {
    ...vueConfig,
    configureWebpack,
    ...extraConfig,
    ...getPagesJs()
}