import React from 'react'
import { Card, Button } from 'antd'

export default class Buttons extends React.Component {

    render() {
        return (
            <div>
                <Card title='基础表格使用'>
                    <Button type='primary'>Ant But</Button>
                    <Button >Ant But</Button>
                    <Button type='dashed'>Ant But</Button>
                    <Button type='danger'>Ant But</Button>
                    <Button disabled>Ant But</Button>
                </Card> 
                <Card title='图形按钮'>
                    <Button icon=''></Button>
                </Card> 
            </div>
        );
    }
}