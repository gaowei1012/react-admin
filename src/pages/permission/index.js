import React from 'react'
import { Card, Button, Select, Form, Input, Modal, Tree } from 'antd'
import axios from './../../axios'
import Utils from './../../util'
import ETable from './../../components/ETable'
import menuConfig from './../../config/meunConfig'
const FormItem = Form.Item;
const Option = Select.Option;
const TreeNode = Tree.TreeNode;

export default class PermissionUser extends React.Component {

    state = {
        isPermVisible: false,
        isRoleVisible: false,
    }
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
                let list = res.result.item_list.map((item, index) => {
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
    handleRoleSubmit = () => {
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

    // 设置权限
    handlePermission = () => {
        if (!this.state.selectedItem) { // 是否有选中当前节点(复选中)
            Modal.info({
                title: '信息',
                content: '请选择一条信息'
            })
            return;
        }
        this.setState({
            isPermVisible: true,
            datailInfo: this.state.selectedItem, // 选中节点的信息
        });
        let menuList = this.state.selectedItem.menus;
        this.setState({
            menuInfo: menuList // 当前选中的节点
        })
    }
    handlePermEditSubmit = () => {
        let data = this.roleForm.props.form.getFieldsValue(); // 获取到表单的值
        data.role_id = this.state.selectedItem.id;
        data.menus = this.state.menuInfo;
        axios.ajax({
            url: '/permission.edit',
            data: {
                params: {
                    ...data
                }
            }
        }).then((res) => {
            if (res) {
                this.setState({
                    isPermVisible: false
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
                    if (status == 1) {
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
                    <Button type='primary' onClick={this.handlePermission}>设置权限</Button>
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
                <Modal
                    title='设置权限'
                    visible={this.state.isPermVisible} // 根据传下来的状态去判断
                    onOk={this.handlePermEditSubmit}
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
// 创建用户
RoleForm = Form.create({})(RoleForm);

// 设置权限
class PermEditForm extends React.Component {

    state = {}

    // 设置选中节点
    onCheck = (checkedKeys) => {
        this.props.patchMenuInfo(checkedKeys)
    }

    renderTreeNodes = (data, key='') => {
        return data.map((item) => {
            let parentKey = key + item.key;
            if (item.children) {
                return <TreeNode title={item.title} key={parentKey} dataRef={item} className='op-role-tree'>
                            {this.renderTreeNodes(item.children, parentKey)}
                    </TreeNode>
            } else if (item.btnList) {
                return <TreeNode title={item.title} key={parentKey} dataRef={item} className='op-role-tree'>
                    {this.renderTreeBtnNodes(item, parentKey)}
                </TreeNode>
            }

            return <TreeNode {...item} />
        });
    }

    renderTreeBtnNodes = (menu, parentKey = '') => {
        const btnTreeNode = [];
        menu.btnList.map((item) => {
            btnTreeNode.push(<TreeNode title={item.title} key={parentKey+'-btn-'+item.key} className="op-role-tree"/>)
        })
        return btnTreeNode;
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 5 },
            wrapperCol: { span: 18 }
        };
        const detail_info = this.props.detail_info
        const menuInfo = this.props.menuInfo;
        return (
            <Form layout="horizontal">
                <FormItem label="角色名称" {...formItemLayout}>
                    <Input type="text" placeholder="请输入姓名" />
                </FormItem>

                <FormItem label="状态" {...formItemLayout}>
                    {
                        getFieldDecorator('state', {
                            initialValue: '1'
                        })(
                            <Select
                                style={{width: 80}}
                                placeholder='启用'
                            >
                                <Option value={1}>启用</Option>
                                <Option value={0}>停用</Option>
                            </Select>
                        )}
                </FormItem>
                <Tree
                    checkable
                    defaultExpandAll
                    onCheck={(checkedKeys)=>this.onCheck(checkedKeys)}
                    checkedKeys={menuInfo ||[]}
                >
                    <TreeNode title="平台权限" key="platform_all">
                        {this.renderTreeNodes(menuConfig)}
                    </TreeNode>
                </Tree>
            </Form>
        );
    }
}
PermEditForm = Form.create({})(PermEditForm);