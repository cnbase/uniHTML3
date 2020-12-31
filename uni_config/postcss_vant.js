/**
 * rem适配
 * npm install postcss-pxtorem --save-dev
 * 如果报autoprefix错误，执行npm install autoprefixer@8.0.0 --save-dev
 * @type {{}}
 */

module.exports = ({ file }) => {
    let isVant = file && file.dirname && file.dirname.indexOf("vant") > -1;
    let rootValue = isVant ? 37.5 : 75; // 判断条件 请自行调整
    return {
        plugins: {
            autoprefixer: {
                browsers: ['Android >= 4.0', 'iOS >= 8'],
            },
            "postcss-pxtorem": {
                rootValue: rootValue,
                propList: ["*"] 
            }
        }
    }
}