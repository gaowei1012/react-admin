import React from 'react'
import { Card, Form, Select, Button, Table, DatePicker, Modal, message } from 'antd'
import axios from './../../axios'
import Utils from './../../util'
import BaseForm from './../../components/BaseForm'

export default class Order extends React.Component {

    state = {
        order_id: '',
        orderConfirmVisble: false
    }
    params = {
        page: 1
    }

    formList = [
        {
            type: 'SELECT',
            label: '城市',
            field: 'city',
            placeholder: '全部',
            initialValue: '1',
            width: 80,
            list: [{id: '0', name: '全部'}, {id: '1', name: '上海'}, {id: '2', name: '西安'}, {id: '3', name: '天津'}]
        },{
            type: 'Seach_Time'
        },{
            type: 'SELECT',
            label: '订单状态',
            field: 'order_start',
            placeholder: '全部',
            initialValue: '1',
            width: 80,
            list: [{id: '0', name: '全部'}, {id: '1', name: '进行中'}, {id: '2', name: '已完成'}]
        }
    ];

    componentWillMount() {
        this.requestList();
    }

    handleFilter = (params) => {
        this.params = params;
        this.requestList(); 
    }

    // 获取表单数据
    requestList = () => {
        let that = this;
        axios.ajax({
            url: '/order/list',
            data: {
                params: {
                    page: this.params.page
                }
            }
        }).then((res) => {
            let list = res.result.item_list.map((item, index) => {
                item.key = index;
                return item;
            })
            this.setState({
                list: list,
                pagination: Utils.pagination(res, (current) => {
                    that.params.page = current;
                    that.requestList();
                })
            })
        })
    }
    // 选择行列
    onRowClick = (record, index) => {
        let selectKey = [index];
        // console.log(record + '-' + index)
        this.setState({
            selectedRowKeys: selectKey,
            selectedItem: record 
        })
    }
    
    // 打开订单信息
    openOrderDetail = () => {
        console.log('info')
        let item = this.state.selectedItem;
        console.log(item)
        if (!item) {
            Modal.info({
                title: '信息',
                content: '请选择一条信息'
            });
            return;
        }
        window.open(`/#/common/order/detail/${item.id}`,'_blank')
    }

    // 取消订单
    handleOrderConfirm = () => {
        let item = this.state.selectedItem;
        axios.ajax({
            url: '/order/finish_order',
            data: {
                params: {
                    order_id: item.id
                }
            }
        }).then((res) => {
            if(res.code == 0) {
                message.success('订单取消成功')
                this.setState({
                    orderConfirmVisble: false
                })
                this.requestList();
            }
        })
    }

    render() {
        const columns = [
            {
                title:'订单编号',
                dataIndex:'order_sn'
            }, {
                title: '车辆信息',
                dataIndex: 'bike_sn'
            }, {
                title: '用户名',
                dataIndex:'user_name'
            },
            {
                title: '手机号',
                dataIndex: 'mobile'
            }, {
                title: '里程',
                dataIndex: 'distance'
            }, {
                title: '行程时长',
                dataIndex: 'total_time'
            }, {
                title: '状态',
                dataIndex: 'status'
            }, {
                title: '开始时间',
                dataIndex: 'start_time'
            }, {
                title: '结束时间',
                dataIndex: 'end_time'
            }, {
                title: '订单金额',
                dataIndex: 'total_fee'
            }, {
                title: '实付金额',
                dataIndex: 'user_pay'
            }
        ];
        const selectedRowKeys = this.state.selectedRowKeys;
        console.log(selectedRowKeys)
        const rowSelection = {
            type: 'radio',
            selectedRowKeys
        }
        return (
            <div>
                <Card>
                    <BaseForm formList={this.formList} filterSubmit={this.handleFilter} />
                </Card>
                <Card style={{marginTop: 10}}>
                    <Button type='primary' onClick={this.openOrderDetail}>订单状态</Button>
                    <Button type='primary' onClick={this.handleOrderRemove}>结束订单</Button>
                </Card>
                <div style={{marginTop: '-1px', background: '#ffffff'}}>
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.list}
                        pagination={this.state.pagination}
                        rowSelection={rowSelection}
                        onRow={(record, index) => {
                            return {
                                onClick: () => {
                                    this.onRowClick(record, index);
                                }
                            }
                        }}
                    />
                </div>
            </div>
        );
    }
}
