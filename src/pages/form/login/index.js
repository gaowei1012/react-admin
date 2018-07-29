import React from 'react'
import { Card, Form, Icon, Input, Button, Checkbox, message } from 'antd'

const FormItem = Form.Item;

class FormLogin extends React.Component {

    handleSubmit = () => {
        let userInfo = this.props.form.getFieldsValue();
        this.props.form.validateFields((err, vlaues) => {
            if (!err) {
                message.success(`${userInfo.userName}登录成功, 密码是${userInfo.password}`)
            }
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Card title='行内表单'>
                    <Form layout="inline">
                        <FormItem>
                            <Input placeholder='请输入用户名' />
                        </FormItem>
                        <FormItem>
                            <Input placeholder='请输入密码' />
                        </FormItem>
                        <FormItem>
                            <Button onSubmit={this.Submit} type='primary'>登录</Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card title='水平登录表单' style={{ marginTop: 10 }}>
                    <Form layout="horizontal" style={{ width: 300 }}>
                        <FormItem>
                            {
                                getFieldDecorator('userName', {
                                    initialValue: '',
                                    rules: [
                                        {
                                            required: true,
                                            message: '必须输入用户名'
                                        },
                                        {
                                            min: 3,
                                            message: '长度不能小于3个字节'
                                        }
                                    ]
                                })(
                                    <Input prefix={<Icon type='user' />} placeholder='请输入用户名' />
                                )
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('password', {
                                    initialValue: '',
                                    rules: [{ required: true }]
                                })(
                                    <Input prefix={<Icon type='lock'/>} type='password' placeholder='请输入密码' />
                                )
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(
                                    <Checkbox>记住密码</Checkbox>
                                )
                            }
                            <a href='#' style={{float: 'right'}}>忘记密码</a>
                        </FormItem>
                        <FormItem>
                            <Button style={{width: '100%'}} onClick={this.handleSubmit} type='primary'>登录</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        );
    }
}

export default Form.create()(FormLogin);