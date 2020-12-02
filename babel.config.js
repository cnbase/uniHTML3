/*
 * 原配置内容
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}
*/

const uniConfig = require('./uni_config/config')

let babelConfig = {};

if (uniConfig.babelMode){
  babelConfig = {
    presets: [
      '@vue/cli-plugin-babel/preset'
    ]
  }
} else {
  /**
   * 按需打包
   */
  babelConfig = require(uniConfig.getBabelConfigPath())
}

module.exports = babelConfig