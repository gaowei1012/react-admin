import React, { Component } from 'react'
import Login from './pages/login'
import { Route, Router} from 'react-router-dom'

export default class App extends Component {

    /**
     * 登录权限认证
     * 1.当路由跳转过来时候、判断传过来的用户名和密码是否是和我们从后端接口拿到的数据是否一致，
     * 2.判断
     * 3.判断之后做跳转动作
     * 4.完成登录逻辑
     * 
     */

    componentWillMount () {
        // 路由跳转
        // window.onhashchange = () => {
        //     if (window.location.hash !== '/login') {
        //         if (localStorage.getItem('token') === null) {
        //             window.location.href = '#/login' // 跳转到登陆页
        //         }
        //     }
        // }
    }


    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }

};