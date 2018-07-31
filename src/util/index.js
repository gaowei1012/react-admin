
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
    },

    /**
     *  分页pages
     * @param {数据} data 
     * @param {回调函数} callback 
     */
    pagination(data, callback) {
        return {
            onChange: (current) => {
                callback(current)
            },
            current: data.result.page,
            pageSize: data.result.page_size,
            total: data.result.total_count,
            showTotal: () => {
                return `共${data.result.total_count}条`
            },
            showQuickJumper: true
        }
    }
}