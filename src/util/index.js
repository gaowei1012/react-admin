
/**
 * Copy 2018/7/28 & 执念
 * 
 */
import React from 'react'
import { Select } from 'antd'
const Option = Select.Option;

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
     * Option
     * @param {* 传入数据} data 
     */
    getOptionList(data) {
        if (!data) {
            return [];
        }
        let options = [];
        data.map((item) => {
            options.push(<Option value={item.id} key={item.id}>{item.name}</Option>);
        });
        return options;
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
    },

    updateSelectedItem(selectedRowKeys, selectedRows, selectedIds) {
        if (selectedIds) {
            this.setState({
                selectedRowKeys,
                selectedIds: selectedIds,
                selectedItem: selectedRows
            })
        } else {
            this.setState({
                selectedRowKeys,
                selectedItem: selectedRows
            })
        }
    }
}