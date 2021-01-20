/**
 * 生成指定长度的随机字符串
 * 使用方法：
 * import uniString from "@/uni_tools/uni_string"
 * uniString.random();
 * @param len
 * @returns {string}
 */
const random = function (len){
    len = len || 8
    let _char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pos = _char.length
    let str = '';
    for (let i = 0; i < len; i++){
        str += _char.charAt(Math.floor(Math.random()*pos));
    }
    return str;
}

export default {
    random
}