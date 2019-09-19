import React, { Component } from 'react';
import { Layout } from 'antd';
import './App.css';
import Intro from './Intro';
import CustomMenu from './CustomMenu';
import CardList from './CardList';

const { Header, Footer, Sider, Content } = Layout;

class App extends Component {

  render() {
    return (
        <div className="App">
          <CustomMenu></CustomMenu>
          <Intro></Intro>
          <div className="section">
            <CardList title="City"></CardList>
          </div>
          <div className="section">
            <CardList title="Hotel"></CardList>
          </div>
          <div className="section">
            <CardList title="Resturant"></CardList>
          </div>
        </div>)

  }
}

export default App;