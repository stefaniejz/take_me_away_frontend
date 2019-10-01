import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;
class CustomMenu extends Component {

    handleClick=(e)=>{
      switch(e.key) {
          case "setting:1":
              this.props.history.push('/newyork')
              break;
          case "setting:2":
              this.props.history.push('/seattle')
              break;
          case "setting:3":
              this.props.history.push('/miami')  
              break; 
          case "setting:4":
              this.props.history.push('/sanfrancisco')
              break;
          case "setting:5":
              this.props.history.push('/losangeles')  
              break;  
          case "mail":
              this.props.history.push('/')       
              break  
          default:
              this.props.history.push('/')       
              break;  
    
    }
}

    handleItinerary=()=>{
      this.props.handleItinerary()
    }

    handleLogin=()=>{
        this.props.history.push('/login')
    }

    handleRegister=()=>{
        this.props.history.push('/register')
    }

    handleSignOut=()=>{
        localStorage.removeItem("jwt")
        localStorage.removeItem("currentUserId")
        localStorage.removeItem("currentUserName")
        this.props.history.push('/login')
    }
    render() {
        return (
            <Menu mode="horizontal" className="menu" style={{display: 'block'}}>
                <Menu.Item key="mail" onClick={this.handleClick} style={{float: 'left'}}>
                <Icon type="mail" />
                 Take me away
                </Menu.Item>
                <SubMenu
                title={
                    <span className="submenu-title-wrapper">
                    <Icon type="eye" />
                      Explore Cities
                    </span>
                }
                style={{float: 'left'}}
                >
                <Menu.ItemGroup >
                    <Menu.Item key="setting:1" onClick={this.handleClick} name={"newyork"}>New York</Menu.Item>
                    <Menu.Item key="setting:2" onClick={this.handleClick} >Seattle</Menu.Item>
                    <Menu.Item key="setting:3" onClick={this.handleClick} >Miami</Menu.Item>
                    <Menu.Item key="setting:4" onClick={this.handleClick} >San Francisco</Menu.Item>
                    <Menu.Item key="setting:5" onClick={this.handleClick} >Los Angeles</Menu.Item>
                 
                </Menu.ItemGroup>
                </SubMenu>
                <Menu.Item key="itinerary-drawer" onClick={this.handleItinerary} style={{float: 'left'}}>
                  <Icon type="camera" />
                  Itinerary
                </Menu.Item>
                    <SubMenu
                        title={
                        <span className="submenu-title-wrapper">
                        <Icon type="menu" />
                        </span>
                        }
                        style={{float: 'right', marginRight: '10px'}}
                    >
                    <Menu.ItemGroup >
                        {localStorage.getItem("jwt")===null? <Menu.Item key="login" onClick={this.handleLogin} >
                            <Icon type="user" />
                                Log in
                            </Menu.Item>:
                            <Menu.Item key="signout" onClick={this.handleSignOut} >
                            <Icon type="user" />
                                Sign out
                        </Menu.Item>
                        }
                        
                        <Menu.Item key="signup"onClick={this.handleRegister}>
                        <Icon type="user" />
                            Sign up 
                        </Menu.Item>
                    </Menu.ItemGroup>   
                    </SubMenu> 
               
                    <Menu.Item id="user" key="user" style={{float: 'right'}}>
                        <Icon type="user" />
                        {`Hi, ${localStorage.getItem("currentUserName")}`}
                    </Menu.Item>
            

             </Menu>
        );
    }
}

export default withRouter(CustomMenu);

