/**
 * Copy 2018/7/28 & 执念
 * 
 */


export default {
    /**
     * 时间戳转换
     * @param {传入的当前时间戳} time 
     */
    formateDate(time) {
        if (!time) return '';
        let date = new Date(time);
        return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    }
}