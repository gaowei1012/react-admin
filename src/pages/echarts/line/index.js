import React from 'react'
import { Card } from 'antd'
import ecahrts from 'echarts/lib/echarts'
import echartTheme from '../echartTheme'
// 按需加载
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'
import ReactEcharts from 'echarts-for-react'

export default class LineEchart extends React.Component {

    componentWillMount() {
        ecahrts.registerTheme('IOOC', echartTheme)
    }

    getOption = () => {
        let option = {
            title: {
                text: '用户骑行订单'
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                data: [
                    '周一',
                    '周二',
                    '周三',
                    '周四',
                    '周五',
                    '周六',
                    '周日'
                ]
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '订单量',
                    type: 'line',
                    data: [
                        1000,
                        2000,
                        1500,
                        3000,
                        2000,
                        1200,
                        800
                    ]
                }
            ]
        }
        return option;
    }

    getOption2 = () => {
        let option = {
            title: {
                text: '用户骑行订单'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend:{
                data:['OFO订单量','摩拜订单量']
            },
            xAxis: {
                data: [
                    '周一',
                    '周二',
                    '周三',
                    '周四',
                    '周五',
                    '周六',
                    '周日'
                ]
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: 'OFO订单量',
                    type: 'line',
                    stack: '总量',
                    data: [
                        1200,
                        3000,
                        4500,
                        6000,
                        8000,
                        12000,
                        20000
                    ]
                },
                {
                    name: '摩拜订单量',
                    type: 'line',
                    stack: '总量',
                    data: [
                        1000,
                        2000,
                        5500,
                        6000,
                        8000,
                        10000,
                        12000
                    ]
                },
            ]
        }
        return option;
    }

    getOption3 = () => {
        let option = {
            title: {
                text: '用户骑行订单'
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                type:'category',
                boundaryGap: false,
                data: [
                    '周一',
                    '周二',
                    '周三',
                    '周四',
                    '周五',
                    '周六',
                    '周日'
                ]
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '订单量',
                    type: 'line',
                    data: [
                        1000,
                        2000,
                        1500,
                        3000,
                        2000,
                        1200,
                        800
                    ],
                    areaStyle: {}
                }
            ]
        }
        return option;
    }

    // getOption4 = () => {
    //     let option = {
    //         title: {
    //             text: '用户骑行订单'
    //         },
    //         tooltip: {
    //             trigger: 'axis'
    //         },
    //         xAxis: {
    //             data: data.map(function (item) {
    //                 return item[0];
    //             })
    //         },
    //         yAxis: {
    //             splitLine: {
    //                 show: false
    //             }
    //         },
    //         toolbox: {
    //             left: 'center',
    //             feature: {
    //                 dataZoom: {
    //                     yAxisIndex: 'none'
    //                 },
    //                 restore: {},
    //                 saveAsImage: {}
    //             }
    //         },
    //         dataZoom: [{
    //             startValue: '2014-06-01'
    //         }, {
    //             type: 'inside'
    //         }],
    //         visualMap: {
    //             top: 10,
    //             right: 10,
    //             pieces: [{
    //                 gt: 0,
    //                 lte: 50,
    //                 color: '#096'
    //             }, {
    //                 gt: 50,
    //                 lte: 100,
    //                 color: '#ffde33'
    //             }, {
    //                 gt: 100,
    //                 lte: 150,
    //                 color: '#ff9933'
    //             }, {
    //                 gt: 150,
    //                 lte: 200,
    //                 color: '#cc0033'
    //             }, {
    //                 gt: 200,
    //                 lte: 300,
    //                 color: '#660099'
    //             }, {
    //                 gt: 300,
    //                 color: '#7e0023'
    //             }],
    //             outOfRange: {
    //                 color: '#999'
    //             }
    //         },
    //         series: {
    //             name: 'Beijing AQI',
    //             type: 'line',
    //             data: data.map(function (item) {
    //                 return item[1];
    //             }),
    //             markLine: {
    //                 silent: true,
    //                 data: [{
    //                     yAxis: 50
    //                 }, {
    //                     yAxis: 100
    //                 }, {
    //                     yAxis: 150
    //                 }, {
    //                     yAxis: 200
    //                 }, {
    //                     yAxis: 300
    //                 }]
    //             }
    //         }

    //     }
    // }

    render() {
        
        return (

            <div>
                <Card title='折线图标一' >
                    <ReactEcharts
                        option={this.getOption()}
                        theme={"IOOC"}
                        style={{height: 350}}
                    />
                </Card>
                <Card title='折线图标二' style={{ marginTop: 10 }}>
                    <ReactEcharts 
                        option={this.getOption2()}
                        theme={'IOOC'}
                        style={{height: 450}}
                    />
                </Card>
                <Card title='折线图标三' style={{ marginTop: 10 }}>
                    <ReactEcharts 
                        option={this.getOption3()}
                        theme={'IOOC'}
                        style={{height: 450}}
                    />
                </Card>
                {/* <Card title='折线图标四' style={{ marginTop: 10 }}>
                    <ReactEcharts 
                        option={this.getOption4()}
                        theme={'IOOC'}
                        style={{height: 450}}
                    />
                </Card> */}
            </div>
        );
    }
} 