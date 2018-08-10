/**
 *  Copy 2018/7/27 & 执念
 */

import React from 'react';
import { Row, Col } from 'antd';
import Util from '../../util/index';
import axios from '../../axios/index';
import moment from 'moment';

import './index.less';

export default class Header extends React.Component {

    state = {
        username: '',
        sysTime: '',
        dayPictureUrl: '',
        weather: ''
    }

    componentDidMount() {
        const time = moment('2018-8-12').format('YYYY:HH:DD');
        console.log(time);
    }

    componentWillMount() {
        this.setState({
            username: '执念'
        });
        // 定时器模拟计时器
        setInterval(() => {
            let sysTime = Util.formateDate(new Date().getTime());
            // 渲染UI
            this.setState({
                sysTime
            });
        }, 1000);

        // 调用自定义方法
        this.getWeatherData();
    };

    getWeatherData() {
        let city = '上海'; // 城市
        axios.jsonp({
            url: 'http://api.map.baidu.com/telematics/v3/weather?location='+ encodeURIComponent(city) +'&output=json&ak=CGTXytKWYfgL55ID0ZSlce67F4gWsXi9'
        }).then((res) =>{
            if (res.status === 'success') {
                let data = res.results[0].weather_data[0];
                // 更新UI
                this.setState({
                    dayPictureUrl: data.dayPictureUrl,
                    weather: data.weather
                })
            }
            
        });
    }
    
    render() {
        return (
            <div className='header'>
                <Row className='header-top'>
                    <Col span='24'>
                        <span>欢迎, {this.state.username}</span>
                        <a href='javascript:;'>退出</a>
                    </Col>
                </Row>
                <Row className='breadcrumd'>
                    <Col span='4' className='breadcrumd-title'>
                        <span>首页</span>
                    </Col>
                    <Col span='20' className='weather'>
                        <span className='data'>{ this.state.sysTime }</span>
                        <img className='weather-img' src={this.state.dayPictureUrl} alt=''/>
                        <span className='weather-detail'>
                            <span>{this.state.weather}</span>
                        </span>
                    </Col>
                </Row>
            </div>
        );
    }
}