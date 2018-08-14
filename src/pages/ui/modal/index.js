import React from 'react'
import { Card, Button, Modal } from 'antd'

export default class Modals extends React.Component {

    state = {
        visible: false
    }


    openModal = () => {
        this.setState({
            visible: true
        })
    }

    handleOk = () => {
        this.setState({
            visible: false
        })
    }

    handleCancel = () => {
        this.setState({
            visible: false
        })
    }

    openComfiy =() => {
        Modal.confirm({
            title: 'comfimy',
            content: "content",
            onOk () {
                () => {
                    //todo
                }
            }, onCancel() {
                // todo
            }
            
        })
    }

    openInFo = () => {
            Modal.info({
                title: 'info',
                content: 'coent',
                onOk() {

                },
                onCancel() {

                }
            })
    }

    openSuccess =() => {
        Modal.success({
            title: 'success',
            content: 'content',
            onOk() {

            },
            onCancel() {

            }
        })
    }

    openError = () => {
        Modal.error({
            title: 'error',
            content: 'content',
            onOk() {

            },
            onCancel() {

            }
        })
    }

    openWaring = () => {
        Modal.warning({
            title: 'warning',
            content: 'content',
            onOk() {

            },
            onCancel() {

            }
        })
    }

    render() {
        return (
            <div>
                <Card title='普通Modal'>
                    <Button type='pirmary' onClick={this.openModal}>Modal</Button>
                    <Modal
                        title="Basic Modal"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                    >
                        content
                    </Modal>
                </Card>
                <Card title='confirm' style={{marginTop: 10}}>
                    <Button type='pirmary' onClick={this.openComfiy}>Modal</Button>
                </Card>
                <Card title='Info' style={{marginTop: 10}}>
                    <Button type='pirmary' onClick={this.openInFo}>Info</Button>
                    <Button type='pirmary' onClick={this.openSuccess}>Scuess</Button>
                    <Button type='pirmary' onClick={this.openError}>Error</Button>
                    <Button type='pirmary' onClick={this.openWaring}>Warning</Button>
                    
                </Card>
            </div>
        );
    }
}