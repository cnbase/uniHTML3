/**
 * 按需打包 vant UI组件
 * npm i vant@next -S
 * npm install babel-plugin-component -D
 * @type {{}}
 */

module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset'
    ],
    "plugins": [
        ['import', {
            libraryName: 'vant',
            libraryDirectory: 'es',
            style: true
        }, 'vant']
    ]
}