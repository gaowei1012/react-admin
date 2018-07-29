import React from 'react'
import { Form, Icon, Input, Button, Checkbox, Card, Radio, Select, Switch, InputNumber } from 'antd'

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;

class FormRegister extends React.Component {

    render() {

        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: 24,
                sm: 4
            },
            wrapperCol: {
                xs: 24,
                sm: 12
            }
        }
        return (
            <div>
                <Card title='注册表单'>
                    <Form>
                        <FormItem label='用户名' {...formItemLayout}>
                            {
                                getFieldDecorator('userNmae', {
                                    rules: [
                                        {
                                            required: true, message: 'Please input your username',
                                        }
                                    ],
                                })(
                                    <Input type='text' placeholder='请输入用户名' />
                                )
                            }
                        </FormItem>
                        <FormItem label='密码' {...formItemLayout}>
                            {
                                getFieldDecorator('password', {
                                    rules: [
                                        {
                                            required: true, message: 'Please input your password',
                                        }
                                    ],
                                })(
                                    <Input type='password' placeholder='请输入用户名' />
                                )
                            }
                        </FormItem>
                        <FormItem label='性别' {...formItemLayout}>
                            {
                                getFieldDecorator('sex', {
                                    initialValue: '1',
                                    rules: [

                                    ],
                                })(
                                    <RadioGroup>
                                        <Radio value='1'>女</Radio>
                                        <Radio value='2'>男</Radio>
                                    </RadioGroup>
                                )
                            }
                        </FormItem>
                        <FormItem label='年龄' {...formItemLayout}>
                            {
                                getFieldDecorator('sex', {
                                    initialValue: '18',
                                    rules: [

                                    ],
                                })(
                                    <InputNumber />
                                )
                            }
                        </FormItem>
                        <FormItem label='当前状态' {...formItemLayout}>
                            {
                                getFieldDecorator('sex', {
                                    initialValue: '2',
                                    rules: [

                                    ],
                                })(
                                    <Select>
                                        <Option value='1'>哈哈</Option>
                                        <Option value='2'>啊啊哈</Option>
                                        <Option value='3'>是的哈</Option>
                                        <Option value='4'>都是哈</Option>
                                        <Option value='5'>哈都是哈</Option>
                                        <Option value='6'>哈哈第三方得到</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label='爱好' {...formItemLayout}>
                            {
                                getFieldDecorator('sex', {
                                    initialValue: ['2', '4'],
                                    rules: [

                                    ],
                                })(
                                    <Select
                                        mode="multiple"
                                    >
                                        <Option value='1'>哈哈</Option>
                                        <Option value='2'>啊啊哈</Option>
                                        <Option value='3'>是的哈</Option>
                                        <Option value='4'>都是哈</Option>
                                        <Option value='5'>哈都是哈</Option>
                                        <Option value='6'>哈哈第三方得到</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                    </Form>
                </Card>
            </div>
        );
    }
}

export default Form.create()(FormRegister);