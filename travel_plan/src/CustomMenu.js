import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;
class CustomMenu extends Component {
    render() {
        return (
            <Menu mode="horizontal" className="menu">
                <Menu.Item key="mail">
                <Icon type="mail" />
                 Travel Plan
                </Menu.Item>
                <SubMenu
                title={
                    <span className="submenu-title-wrapper">
                    <Icon type="eye" />
                      Explore Cities
                    </span>
                }
                >
                <Menu.ItemGroup >
                    <Menu.Item key="setting:1">New York</Menu.Item>
                    <Menu.Item key="setting:2">Seattle</Menu.Item>
                    <Menu.Item key="setting:3">San Francisco</Menu.Item>
                    <Menu.Item key="setting:4">Los Angeles</Menu.Item>
                </Menu.ItemGroup>
                </SubMenu>
                <Menu.Item key="alipay">
                    Gallery
                </Menu.Item>
            </Menu>
        );
    }
}

export default withRouter(CustomMenu);