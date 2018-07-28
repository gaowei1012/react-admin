// 主路由模块
import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../App.js'
import Login from './../pages/login'
import Admin from './../admin'
import Buttons from './../pages/ui/button'
import NoMatch from './../pages/nomatch'

export default class AdminRouter extends React.Component {

    render() {
        return (
            <Router>
                {/* comm */}
                <App>
                    <Route path='/login' component={Login} />
                    <Route path='/admin' render={() =>
                        <Admin>
                            <Route path='/admin/ui/button' component={Buttons} />
                            {/* <Route component={NoMatch} /> */}
                        </Admin>
                    }/>
                </App>
            </Router>
        );
    }
}