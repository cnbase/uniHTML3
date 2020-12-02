/**
 * 按需打包 element UI组件
 * npm i @babel/preset-env -D
 * @type {{}}
 */
module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset',
        ["@babel/preset-env", { "modules": false }]
    ],
    "plugins": [
        [
            "component",
            {
                "libraryName": "element-ui",
                "styleLibraryName": "theme-chalk"
            }
        ]
    ]
}