import React, { Component } from 'react';
import { Layout } from 'antd';
import './App.css';

const { Header, Footer, Sider, Content } = Layout;
class App extends Component {
  render() {
    return (
        <div className="App">
          <Layout>
            <Header>Header</Header>
            <Layout>
              <Content>Content</Content>
              <Sider>Sider</Sider>
            </Layout>
            <Footer>Footer</Footer>
          </Layout>
        </div>)

  }
}

export default App;