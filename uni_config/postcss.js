/**
 * rem适配
 * npm install postcss-pxtorem --save-dev
 * 如果报autoprefix错误，执行npm install autoprefixer@8.0.0 --save-dev
 * @type {{}}
 */

module.exports = {
    plugins: {
        autoprefixer: {
            browsers: ['Android >= 4.0', 'iOS >= 8'],
        },
        'postcss-pxtorem': {
            rootValue: 37.5,
            propList: ['*'],
        },
    },
};