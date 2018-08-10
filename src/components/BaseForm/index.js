import React from 'react'
import { Input, Radio, Form, Button, Checkbox, Select, DatePicker } from 'antd'
import Utils from '../../util'
const FormItem = Form.Item;

class FilterForm extends React.Component {
    /**
     * 查询
     */
    handleSubmit = () => {
        let fieldsValue = this.props.from.getFieldsVlaue();
        console.log(fieldsValue);
    }

    /**
     * 重置
     */
    reset = () => {
        this.props.form.resetFields();
    }

    /*
     * 对常用表格进行封装操作
     */
    initFormList = () => {
        const { getFieldDecorator } = this.props.form;
        const formList = this.props.formList;
        const formItemList = [];
        if (formList && formList.length > 0) {
            formList.forEach((item) => {
                let label = item.label;
                let field = item.field;
                let initialValue = item.initialValue || '';
                let width = item.width;
                let placeholder = item.placeholder;

                if (item.type == 'Seach_Time') {
                    const begin_time = <FormItem label="订单时间" key={field}>
                        {
                            getFieldDecorator('begin_time')(
                                <DatePicker showTime={true} format="YYYY-MM-DD HH:mm:ss" placeholder={placeholder} />
                            )
                        }
                    </FormItem>
                    formItemList.push(begin_time)
                    // colon 去除label标签后的冒号
                    const end_time = <FormItem label="~" colon={false} key={field}>
                        {
                            getFieldDecorator('end_time')(
                                <DatePicker showTime={true} format="YYYY-MM-DD HH:mm:ss" placeholder={placeholder} />
                            )
                        }
                    </FormItem>
                    formItemList.push(end_time)
                } else if (item.type == 'INPUT') {
                    const INPUT = <FormItem label={label} key={field}>
                        {
                            getFieldDecorator([field], {
                                initialValue: initialValue
                            })(
                                <Input type='text' placeholder={placeholder} key={field} />
                            )
                        }

                    </FormItem>
                    formItemList.push(INPUT);
                } else if (item.type == 'SELECT') {
                    const SELECT = <FormItem label={label} key={field}>
                        {
                            getFieldDecorator([field], {
                                initialValue: initialValue
                            })(
                                <Select
                                    style={{width: width}}
                                    placeholder={placeholder}
                                >
                                    {Utils.getOptionList(item.list)}
                                </Select>
                            )
                        }
                    </FormItem>
                    formItemList.push(SELECT);
                } else if (item.type == 'CHECKBOX') {
                    const CHECKBOX = <FormItem label={label} key={field}>
                        {
                            getFieldDecorator([field], {
                                valuePropName: 'checked',
                                initialValue: initialValue
                            })(
                                <Checkbox>
                                    {label}
                                </Checkbox>
                            )
                        }
                    </FormItem>
                    formItemList.push(CHECKBOX);
                }
            });
        }
        return formItemList;
    }

    render() {
        return (
            <Form layout='inline'>
                {this.initFormList()}
                <FormItem>
                    <Button type='primary' onClick={this.handleSubmit} style={{margin: '0 20px'}}>查询</Button>
                    <Button onClick={this.reset}>重置</Button>
                </FormItem>
            </Form>
        );
    }
}

export default Form.create({})(FilterForm);