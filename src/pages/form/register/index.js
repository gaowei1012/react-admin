import React from 'react'
import { Form, Icon, Input, Button, Checkbox, TimePicker, DatePicker, Card, Radio, Select, Switch, InputNumber, Upload, message } from 'antd'
import moment from 'moment';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const TextArea = Input.TextArea;

class FormRegister extends React.Component {

    state = {

    }

    handleSubmit = () => {
        let userInfo = this.props.form.getFieldsValue();
        console.log(JSON.stringify(userInfo));
    }

    getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    beforeUpload = (file) => {
        const isJPG = file.type === 'image/jpeg';
        if (!isJPG) {
            message.error('You can only upload JPG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJPG && isLt2M;
    }

    handleChange = (info) => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            this.getBase64(info.file.originFileObj, imageUrl => this.setState({
                userImg: imageUrl,
                loading: false,
            }));
        }
    }

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
        const offsetLayout = {
            wrapperCol: {
                xs: 24,
                sm: {
                    span: 12,
                    offset: 4
                }
            }
        }
        const rowObject = {
             minRows: 4, maxRows: 6 
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
                                getFieldDecorator('nianling', {
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
                                getFieldDecorator('loading', {
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
                        <FormItem label='是否已婚' {...formItemLayout}>
                            {
                                getFieldDecorator('isMareid', {
                                    valuePropName: 'checked',
                                    initialValue: true
                                })(
                                    <Switch />
                                )
                            }
                        </FormItem>
                        <FormItem label='生日' {...formItemLayout}>
                            {
                                getFieldDecorator('beaster', {
                                    initialValue: moment('2018-12-12')
                                })(
                                    <DatePicker
                                        showTime
                                        format="YYYY-MM-DD"
                                    />
                                )
                            }
                        </FormItem>
                        <FormItem label='联系地址' {...formItemLayout}>
                            {
                                getFieldDecorator('textArea', {
                                    initialValue: moment('2018-12-12')
                                })(
                                    <TextArea
                                        autosize={
                                            rowObject
                                        }
                                    />
                                )
                            }
                        </FormItem>
                        <FormItem label='时间' {...formItemLayout}>
                            {
                                getFieldDecorator('time', {
                                    initialValue: moment('2018-12-12')
                                })(
                                    <TimePicker />
                                )
                            }
                        </FormItem>
                        <FormItem label='头像上传' {...formItemLayout}>
                            {
                                getFieldDecorator('userImg', {
                                    rules: [

                                    ],
                                })(
                                    <Upload
                                        name="avatar"
                                        listType="picture-card"
                                        showUploadList={false}
                                        action="//jsonplaceholder.typicode.com/posts/"
                                        beforeUpload={this.beforeUpload}
                                        onChange={this.handleChange}
                                    >
                                        {this.state.userImg ? <img src={this.state.userImg} alt="" /> : <Icon type='plus' />}
                                    </Upload>
                                )
                            }
                        </FormItem>
                        <FormItem {...offsetLayout}>
                            {
                                getFieldDecorator('checkbox', {
                                    rules: [

                                    ],
                                })(
                                    <Checkbox>我已阅读用户权益</Checkbox>
                                )
                            }
                        </FormItem>
                        <FormItem {...offsetLayout}>
                            {
                                getFieldDecorator('button')(
                                    <Button type='primary' onClick={this.handleSubmit}>注册</Button>
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