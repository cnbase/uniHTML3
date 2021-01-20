/**
 * vant vue3版本UI组件
 * npm i vant@next -S
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
                        //独立vant项目，基准37.5
                        rootValue: 37.5,
                        //如果不是独立vant项目，则按下面规则返回基准数
                        //rootValue ({ file }) { return file && file.dirname && file.dirname.indexOf("vant") > -1 ? 37.5 : 75; },
                        propList: ['*'],
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
                libraryName: 'vant',
                libraryDirectory: 'es',
                style: true
            },
            'vant'
        ]
    ]
}

module.exports = {
    vueConfig,
    babelConfig
}