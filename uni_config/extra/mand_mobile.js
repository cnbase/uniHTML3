/**
 * mand mobile2 UI组件
 * npm install mand-mobile --save
 */

/**
 * vue.config.js 配置项
 */
const vueConfig = {
    /**
     * Rem布局适配
     * postcss配置参数，vue.config.js
     * 依赖插件：postcss-pxtorem、lib-flexible、autoprefixer
     * npm i -S postcss-pxtorem
     * 如果报Error: PostCSS plugin postcss-pxtorem requires PostCSS 8.【npm i postcss-pxtorem@5.1.1】
     * npm i -S amfe-flexible 且需要在入口文件 import 'amfe-flexible'
     * 如果报autoprefix错误，执行npm i -S autoprefixer@8.0.0
     */
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require("autoprefixer") ({
                        overrideBrowserslist: ['Android >= 4.0', 'iOS >= 8'],
                    }),
                    require("postcss-pxtorem")({
                        rootValue: 100,
                        minPixelValue: 2,
                        propWhiteList: []
                    }),
                ]
            }
        }
    }
}

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
     * 依赖插件：npm i babel-plugin-import -D
     */
    plugins: [
        [
            'import',
            {
                "libraryName": "mand-mobile",
                "libraryDirectory": "lib"
            }
        ]
    ]
}

module.exports = {
    vueConfig,
    babelConfig
}