/**
 * element plus UI组件
 * npm install element-plus --save
 */

/**
 * vue.config.js 配置项
 */
 const vueConfig = {}

/**
 * babel配置
 */
const babelConfig = {
    presets: [
        '@vue/cli-plugin-babel/preset'
    ],
    /**
     * 按需引入组件
     * babel编译配置参数，babel.config.js
     * 依赖插件：npm install babel-plugin-component -D
     */
    "plugins": [
        [
            "component",
            {
                "libraryName": "element-plus",
                "styleLibraryName": "theme-chalk"
            }
        ]
    ]
}

module.exports = {
    vueConfig,
    babelConfig
}