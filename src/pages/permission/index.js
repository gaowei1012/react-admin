import React from 'react'
import { Card, Button, Select, Form, Input, Modal } from 'antd'
import axios from './../../axios'
import Utils from './../../util'
import ETable from './../../components/ETable'
const FormItem = Form.Item;
const Option = Select.Option;

export default class PermissionUser extends React.Component {

    state = {}
    // 初始化加载
    componentWillMount() {
        this.requestList();
    }

    // 请求数据 
    requestList = () => {
        axios.ajax({
            url: '/role/list',
            data: {
                params: {}
            }
        }).then((res) => {
            if (res.code == 0) {
                let list = res.result.item_list.map((item , index) => {
                    item.key = index;
                    return item;
                })
                this.setState({
                    list
                })
            }
        })
    }

    // 创建用户角色
    handleCreateUser = () => {
        this.setState({
            isRoleVisible: true
        })
    }
    // 角色创建提交
    handleRoleSubmit =() => {
        let data = this.roleForm.props.form.getFieldsValue(); // 获取到表单的值
        axios.ajax({
            url: '/role/create',
            data: {
                params: {
                    ...data // 传进去当前获取到的用户数据，传到服务器
                }
            }
        }).then((res) => {
            if (res) {
                this.setState({
                    isRoleVisible: false
                });
                this.requestList()
            }
        })
    }

    render() {
        
        const columns = [
            {
                title: '角色ID',
                dataIndex: 'id'
            }, {
                title: '角色名称',
                dataIndex: 'role_name'
            }, {
                title: '创建时间',
                dataIndex: 'create_time',
                render: Utils.formatTime // 格式化当前时间
            }, {
                title: '使用状态',
                dataIndex: 'status',
                render(status) { // 根据服务器传回来status状态判断
                    if ( status == 1) {
                        return '启用'
                    } else {
                        return '停用'
                    }
                }
            }, {
                title: '授权时间',
                dataIndex: 'authorize_time',
                render: Utils.formateDate // 格式化当前时间
            }, {
                title: '授权人',
                dataIndex: 'authorize_user_name'
            }
        ];

        return (
            <div>
                <Card>
                    <Button type='primary' onClick={this.handleCreateUser}>创建角色</Button>
                    <Button type='primary' >设置权限</Button>
                    <Button type='primary' >用户授权</Button>
                </Card>
                <div className='content-warp'>
                    <ETable 
                        updateSeletedItem={Utils.updateSelectedItem.bind(this)} // 把当前的this实力传过去
                        selectedRowKeys={this.selectedRowKeys}
                        dataSource={this.state.list} // 数据源list用于渲染表格
                        columns={columns}
                    />
                </div>
                <Modal 
                    title='创建用户'
                    visible={this.state.isRoleVisible} // 根据传下来的状态去判断
                    onOk={this.handleRoleSubmit}
                >
                    {/* wappeedComponentRef 拿到表單的值 inst */}
                    <RoleForm wrappedComponentRef={(inst) => this.roleForm = inst}></RoleForm>
                </Modal>
            </div>
        );
    }
}



//  角色创建
class RoleForm extends React.Component {

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 5 },
            wrapperCol: { span: 16 }
        };
        const userInfo = this.props.userInfo || {};
        const type = this.props.type;
        return (
            <Form layout="horizontal">
                <FormItem label="姓名" {...formItemLayout}>
                    {
                        userInfo && type == 'detail' ? userInfo.username :
                            getFieldDecorator('user_name', {
                                initialValue: userInfo.username
                            })(
                                <Input type="text" placeholder="请输入姓名" />
                            )
                    }
                </FormItem>
               
                <FormItem label="状态" {...formItemLayout}>
                    {
                        userInfo && type == 'detail' ? this.getState(userInfo.state) :
                            getFieldDecorator('state', {
                                initialValue: userInfo.state
                            })(
                                <Select>
                                    <Option value={1}>启用</Option>
                                    <Option value={0}>停用</Option>
                                </Select>
                            )}
                </FormItem>
            </Form>
        );
    }
}
RoleForm = Form.create({})(RoleForm);


// 设置权限
class PermEditForm extends React.Component {

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 5 },
            wrapperCol: { span: 16 }
        };
        const userInfo = this.props.userInfo || {};
        const type = this.props.type;
        return (
            <Form layout="horizontal">
                <FormItem label="姓名" {...formItemLayout}>
                    {
                        userInfo && type == 'detail' ? userInfo.username :
                            getFieldDecorator('user_name', {
                                initialValue: userInfo.username
                            })(
                                <Input type="text" placeholder="请输入姓名" />
                            )
                    }
                </FormItem>
               
                <FormItem label="状态" {...formItemLayout}>
                    {
                        userInfo && type == 'detail' ? this.getState(userInfo.state) :
                            getFieldDecorator('state', {
                                initialValue: userInfo.state
                            })(
                                <Select>
                                    <Option value={1}>启用</Option>
                                    <Option value={0}>停用</Option>
                                </Select>
                            )}
                </FormItem>
            </Form>
        );
    }
}
PermEditForm = Form.create({})(PermEditForm);