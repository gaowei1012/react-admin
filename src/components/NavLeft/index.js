/**
 * 
 */
import React from 'react';
import { Menu, Icon } from 'antd';
import MenuConfig from './../../config/meunConfig';

import './index.less';

const SubMenu = Menu.SubMenu;

export default class NavLeft extends React.Component {

    componentWillMount() {
        const menuTreeNode = this.renderMenu(MenuConfig);

        this.setState({
            menuTreeNode
        })
    }

    // 菜单渲染
    renderMenu = (data) => {
        return data.map((item) => {
            if (item.children) {
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                );
            };
            return (
                <Menu.Item title={item.title} key={item.key}>
                    {item.title}
                </Menu.Item>
            );
        })    
    }

    render() {

        return (
            <div style={{height: 'calc(100vh)' }}>
                <div className='logo'>
                    <img src='assets/logo-ant.svg' alt='logo' />
                    <h1>Hello Admin</h1>
                </div>
                <Menu
                    theme='dark'
                >
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        );
    }
}