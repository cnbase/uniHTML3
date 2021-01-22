/**
 * uniHTML通用配置项
 */
const { vueConfig,getPagesJs } = require('./uni_config/config')

/**
 * 自定义配置项
 */
const extraConfig = require('./uni_config/extra').vueConfig

module.exports = {
    ...vueConfig,
    ...extraConfig,
    ...getPagesJs()
}