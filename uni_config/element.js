/**
 * 按需打包 element plus UI组件
 * npm install element-plus --save
 * npm install babel-plugin-component -D
 * @type {{}}
 */
module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset'
    ],
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