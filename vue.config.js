/**
 * 构建方式
 * 注意：每次打包都会删除原构建目录所有文件重新打包
 * true:全页面构建，打包全部文件
 * false:单页面构建，单独打包
 */

let uniConfig = require('./uni_config/config')
let vueConfig = {}

if (uniConfig.copyFiles.length > 0){
    //npm install copy-webpack-plugin@6.4.1 --save-dev
    const CopyWebpackPlugin = require('copy-webpack-plugin')
    vueConfig = {
        outputDir:uniConfig.outputDir,
        assetsDir:uniConfig.assetsDir,
        configureWebpack: {
            plugins:[new CopyWebpackPlugin({
                patterns:uniConfig.copyFiles
            })]
        }
    };
} else {
    vueConfig = {
        outputDir:uniConfig.outputDir,
        assetsDir:uniConfig.assetsDir,
    };
}

vueConfig = {
    outputDir:uniConfig.outputDir,
    assetsDir:uniConfig.assetsDir,
};

if (uniConfig.buildMode){
    //全页面打包
    vueConfig = {...vueConfig,...uniConfig.getModulePages()};
} else {
    //单页面打包
    vueConfig = {...vueConfig,...uniConfig.getModulePage()};
}

module.exports = {
    ...vueConfig
}