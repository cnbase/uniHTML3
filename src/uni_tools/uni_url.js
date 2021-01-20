/**
 * URL 处理函数
 * 使用方法：
 * import uniUrl from "@/uni_tools/uni_url"
 * uniUrl.getParams(); uniUrl.get(param);
 */

/**
 * 获取当前URLSearchParams对象
 * @returns {URLSearchParams}
 */
const getParams = function (){
    let url = window.location.search; //获取url中"?"符后的字串,包含"?"
    let searchParams;
    if (url.indexOf("?") === 0) {
        searchParams = new URLSearchParams(url.substring(1, url.length));
    } else {
        searchParams = new URLSearchParams();
    }
    return searchParams;
}

/**
 * 获取一个URL查询参数
 * @param param
 * @returns {string}
 */
const get = function(param) {
    return getParams().get(param);
}

export default {
    getParams,
    get
}