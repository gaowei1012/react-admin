// 主路由模块
import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../App.js'
import Login from './../pages/login'
import Admin from './../admin'
import Home from './../pages/home'
import Buttons from './../pages/ui/button'
import NoMatch from './../pages/nomatch'
import Loading from './../pages/ui/loading'
import Modal from './../pages/ui/modal'
import Tabs from './../pages/ui/tabs'
import Notification from './../pages/ui/notification'
import Message from './../pages/ui/messages'
import Gallery from './../pages/ui/gallery'
import FormLogin from './../pages/form/login'
import FormRegiser from './../pages/form/register'
import BasicTable from './../pages/table/basicTable'
import City from './../pages/city'
import Common from '../common'
import User from './../pages/user'
import Order from '../pages/order'

export default class AdminRouter extends React.Component {

    render() {
        return (
            <Router>
                {/* comm */}
                <App>
                    <Route path='/login' component={Login} />
                    <Route path='/admin' render={() =>
                        <Admin>
                            <Switch>
                                <Route path='/amdin/home' component={Home} />
                                <Route path='/admin/ui/button' component={Buttons} />
                                <Route path='/admin/ui/loading' component={Loading} />
                                <Route path='/admin/ui/modal' component={Modal} />
                                <Route path='/admin/ui/tabs' component={Tabs} />
                                <Route path='/admin/ui/notification' component={Notification} />
                                <Route path='/admin/ui/message' component={Message} />
                                <Route path='/admin/ui/gallery' component={Gallery} />
                                <Route path='/admin/form/login' component={FormLogin} />
                                <Route path='/admin/form/regiser' component={FormRegiser} />
                                <Route path='/admin/table/basic' component={BasicTable} />
                                <Route path='/admin/city' component={City} />
                                <Route path='/admin/order' component={Order} />
                                <Route path='/admin/user' component={User} />
                                <Route component={NoMatch} />
                            </Switch>
                        </Admin>
                    } />
                    <Route path='/common' render={() =>
                        <Common >
                            <Route path='/order/detail/:orderId' component={Order}/>
                            <Route component={NoMatch} />
                        </Common>
                    } />
                </App>
            </Router>
        );
    }
}