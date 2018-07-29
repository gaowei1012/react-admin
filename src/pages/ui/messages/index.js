import React from 'react'
import { Card, Button, message } from 'antd'

export default class Messages extends React.Component {

    openMessage = (type) => {
        message[type]('我是全局提示框');
    }
    
    render() {
        return (
            <div>
                <Card title='全局提示框message'>
                    <Button type='primary' onClick={() => this.openMessage('success')}>success</Button>
                    <Button type='primary' onClick={() => this.openMessage('info')}>info</Button>
                    <Button type='primary' onClick={() => this.openMessage('warning')}>warning</Button>
                    <Button type='primary' onClick={() => this.openMessage('error')}>error</Button>
                    <Button type='primary' onClick={() => this.openMessage('loading')}>loading</Button>
                </Card>
            </div>
        );
    }
}