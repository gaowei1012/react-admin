import React from 'react'
import { Card, Button, notification } from 'antd'
export default class Notification extends React.Component {

    openNotification = (type) => {
        notification[type]({
            message: '我是通知提醒框',
            description: '我很高兴， 很高兴, 高兴',
            placement: 'topRight'// 弹出位置
        });
    }

    render() {
        return (
            <div>
                <Card title='我是通知提醒框'>
                    <Button type='primary' onClick={() => this.openNotification('success')}>Success</Button>
                    <Button type='primary' onClick={() => this.openNotification('warning')}>Warning</Button>
                    <Button type='primary' onClick={() => this.openNotification('error')}>Error</Button>
                    <Button type='primary' onClick={() => this.openNotification('info')}>Info</Button>
                </Card>
            </div>
        );
    }
}