/**
 * [index]模板页面
 */
const path = 'src/uni_html/default/index';
const pages = {
    index:{
        entry:path+'/index/index.js',
        filename:'index.html', //相对于outputDir
        title:'欢迎使用uniHTML前端框架',
        chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
}

module.exports = pages;