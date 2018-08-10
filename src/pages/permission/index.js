import React from 'react'
import { Card, Button, Select, Form, Input, Modal } from 'antd'
import axios from './../../axios'
import Utils from './../../util'
import ETable from './../../components/ETable'
const FormItem = Form.Item;
const Option = Select.Option;

export default class PermissionUser extends React.Component {

    state = {}
    // 创建用户角色
    handleCreateUSer = () => {

    }

    render() {
        return (
            <div>
                <Card>
                    <Button type='primary' onClick={this.handleCreateUSer}>创建角色</Button>
                    <Button type='primary' >设置权限</Button>
                    <Button type='primary' >用户授权</Button>
                </Card>
                <div>
                    <Card></Card>
                </div>
            </div>
        );
    }
}

class UserForm extends React.Component {


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
                                    <Option value={1}>H</Option>
                                    <Option value={2}>E</Option>
                                    <Option value={3}>L</Option>
                                    <Option value={4}>L</Option>
                                    <Option value={5}>O</Option>
                                </Select>
                            )}
                </FormItem>
            </Form>
        );
    }
}
UserForm = Form.create({})(UserForm);