import React from 'react'
import { Card, Button, Modal } from 'antd'

export default class Modals extends React.Component {
    
    openModal =() => {
       // to-do 
    }
    
    render() {
        return (
            <div>
                <Card title='我是Modal'>
                    <Button type='pirmary' onClick={this.openModal}></Button>
                </Card>
            </div>
        );
    }
}