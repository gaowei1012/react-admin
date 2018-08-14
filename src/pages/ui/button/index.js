import React from 'react'
import { Card, Button, Icon } from 'antd'

const ButtonGroup = Button.Group;

export default class Buttons extends React.Component {

    state = {
        loading: false

    }

    handleClick = () => {
        // console.log('button');
    }


    enterLoading = () => {
        this.setState({
            loading: true
        })
    }

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
                <Card title='图形按钮' style={{ marginTop: 10 }}>
                    <Button type="primary" icon="search">搜索</Button>
                    <Button type="primary" icon="download">download</Button>
                </Card>
                <Card title='Loging' style={{ marginTop: 10 }}>
                    <Button type="primary" loading>Loading</Button>
                    <Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>
                        Click me!
                    </Button>
                </Card>
                <Card title='按钮组' style={{ marginTop: 10 }}>
                    <ButtonGroup>
                        <Button type="primary">
                            <Icon type="left" />Go back
                        </Button>
                        <Button type="primary" style={{ marginLeft: '-11px' }}>
                            Go forward<Icon type="right" />
                        </Button>
                    </ButtonGroup>
                </Card>
                <Card title='块状' style={{marginTop: 10}}>
                    <Button type="primary" block>Primary</Button>
                    <Button block>Default</Button>
                    <Button type="dashed" block>Dashed</Button>
                    <Button type="danger" block>danger</Button>
                </Card>
            </div>
        );
    }
}