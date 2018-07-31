import React from 'react'
import { Card, Row, Col } from 'antd'
import './index.less'

export default class Home extends React.Component {

    render() {
        // layout
        const homeItemLayout = {
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
            <div className="home-wrap">
                <Row>
                    <Col span='12'>1</Col>
                    <Col span='12'>2</Col>
                </Row>
            </div>
        );
    }
}