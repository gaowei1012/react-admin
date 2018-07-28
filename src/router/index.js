// 主路由模块
import React from 'react';
import { Switch, Route } from 'react-router';
import Login from '../components/login/Login';

export default class Routers extends React.Component {

    render() {
        return (
            <Switch>
                <Route path='/' component={Login}></Route>
            </Switch>
        );
    }
}