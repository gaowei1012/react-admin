import React, { Component } from 'react'
import Login from './pages/login'
import { Route, Router} from 'react-router-dom'

export default class App extends Component {

    componentWillMount () {
        // 路由跳转
        window.onhashchange = () => {
            if (window.location.hash !== '/login') {
                if (localStorage.getItem('token') === null) {
                    window.location.href = '#/login' // 跳转到登陆页
                }
            }
        }
    }


    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }

};