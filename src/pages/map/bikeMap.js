import React from 'react'
import { Card, Form } from 'antd'
import BaseFrom from './../../components/BaseForm'
import axios from './../../axios/index'

export default class BikeMap extends React.Component {

    state = {}
    map = '';

    params = {
        page: 1
    }

    componentWillMount() {
        this.requestList();
    }

    formList = [
        {
            type: '城市'
        }, {
            type: '时间查询'
        }, {
            type: 'SELECT',
            label: '订单状态',
            field: 'order_status',
            placeholder: '全部',
            initialValue: '0',
            list: [{ id: '0', name: '全部' }, { id: '1', name: '进行中' }, { id: '3', name: '行程结束' }]
        }
    ]

    requestList() {
        axios.ajax({
            url: '/map/bike_list',
            data: {
                params: this.params
            }
        }).then((res) => {
            if (res.code == 0) {
                this.setState({
                    total_count: res.result.total_count
                })
                this.renderMap(res);
            }
        })
    }


    handleFilterSubmit = (filterParams) => {
        this.params = filterParams;
        this.requestList();
    }

    renderMap = (res) => {
        let list = res.result.route_list;
        this.map = new window.BMap.Map("container");
        let gps1 = list[0].split(',');
        let startPoint = new window.BMap.Point(gps1[0], gps1[1]);
        let gps2 = list[list.length-1].split(',');
        let endPoint = new window.BMap.Point(gps2[0], gps2[1]);
        // 地图控件
        // let top_left_navigation = new window.BMap.NavigationControl()
        // this.map.addControl(new window.BMap.MapTypeControl({
        //     mapTypes:[
        //         BMAP_NORMAL_MAP,
        //         BMAP_HYBRID_MAP
        //     ]}));
        this.map.enableScrollWheelZoom(true);     	
        this.map.centerAndZoom(endPoint, 11);

        // 起始坐标点
        let startPointIcon = new window.BMap.Icon('/assets/start_point.png', new window.BMap.Size(36, 42), {
          imageSize: new window.BMap.Size(36, 42),
          anchor: new window.BMap.Size(18, 42)  
        });

        let bikeMarkerStart = new window.BMap.Marker(startPoint, {icon: startPointIcon})
        this.map.addOverlay(bikeMarkerStart);
        
        // 终点坐标点
        let endPointIcon = new window.BMap.Icon('/assets/end_point.png', new window.BMap.Size(36, 42), {
            imageSize: new window.BMap.Size(36, 42),
            anchor: new window.BMap.Size(18, 42)  
          });
  
          let bikeMarkerEnd = new window.BMap.Marker(endPoint, {icon: endPointIcon})
          this.map.addOverlay(bikeMarkerEnd);

        let routeList = [];
        list.map((item) => {
            let p = item.split(',');
            let point = new window.BMap.Point(p[0], p[1]);
            routeList.push(point)
        });

        // 行驶路线
        let polyLine = new window.BMap.Polyline(routeList, {
            strokeColor: "#ef4136",
            strokeWeight: 2,
            strokeOpacity: 0.8
        });
        this.map.addOverlay(polyLine);

        // 绘制服务区
        let serviceList = res.result.service_list;
        let servicePointList = [];
        serviceList.map((item) => {
            let point = new window.BMap.Point(item.lon, item.lat);
            servicePointList.push(point);
        });

        // 画线
        let polyServiceLine = new window.BMap.Polyline(servicePointList, {
            strokeColor: "#ef4136",
            strokeWeight: 3,
            strokeOpacity: 1
        })
        this.map.addOverlay(polyServiceLine);

        // 添加地图中的自行车
        let bikeList = res.result.bike_list;
        let bikeIcon =  new window.BMap.Icon('/assets/bike.jpg', new window.BMap.Size(36, 42), {
            imageSize: new window.BMap.Size(36, 42),
            anchor: new window.BMap.Size(18, 42)  
        });
        bikeList.map((item) => {
            let p = item.split(",");
            let point = new window.BMap.Point(p[0], p[1]);
            var bikeMarker = new window.BMap.Marker(point, { icon: bikeIcon });
            this.map.addOverlay(bikeMarker);
        });

        // 添加地图控件
        //this.addMapControl();
    }

    render() {
        return (
            <div>
                <Card>
                    <BaseFrom formList={this.formList} filterSubmit={this.handleFilterSubmit} />
                </Card>
                <Card style={{ marginTop: 10 }} >
                    <div>共{this.state.total_count}辆车</div>
                    <div id="container" style={{ height: 500 }}></div>
                </Card>
            </div>
        )
    }

}