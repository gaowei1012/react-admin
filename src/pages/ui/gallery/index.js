import React from 'react'
import { Row, Col, Card, Modal } from 'antd'

export default class Gallery extends React.Component {

    state = {
        visible: false
    }

    openGallery =(imgSrc) => {
        this.setState({
            visible: true,
            currentImg: '/gallery/' + imgSrc
        })
    }

    render() {
        const imgs = [
            ['1.png', '2.png', '3.png', '4.png', '5.png'],
            ['6.png', '7.png', '8.png', '9.png', '10.png'],
            ['11.png', '12.png', '13.png', '14.png', '15.png'],
            ['16.png', '17.png', '18.png', '19.png', '20.png'],
            ['21.png', '22.png', '23.png', '24.png', '25.png']
        ];

        const imgsList = imgs.map((list) => list.map((item) =>
            <Card
                cover={<img src={'/gallery' + item} alt=''/>}
                style={{marginBottom: 10}}
                onClick={() => this.openGallery(item)}
            >
                <Card.Meta
                    title='标题'
                    description='描述'
                />
            </Card>
        ))

        return (
            <div>
                <Row gutter={10}>
                    <Col md={5}>
                        {imgsList[0]}
                    </Col>
                    <Col md={5}>
                        {imgsList[1]}
                    </Col>
                    <Col md={5}>
                        {imgsList[2]}
                    </Col>
                    <Col md={5}>
                        {imgsList[3]}
                    </Col>
                    <Col md={4}>
                        {imgsList[4]}
                    </Col>
                </Row>
                <Modal
                    width={300}
                    height={500}
                    title='图片画廊'
                    visible={this.state.visible}
                    onCancel={() => {
                        this.setState({
                            visible: false
                        })
                    }}
                    footer={null}
                >
                    {<img src={this.state.currentImg} alt='img' style={{width: '100%'}} />}
                </Modal>
            </div>
        );
    }
}