import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Layout } from 'antd';
import './App.css';
import Intro from './Intro';
import CustomMenu from './CustomMenu';
import TextCardList from './TextCardList';
import CityPage from './CityPage';


const { Header, Footer, Sider, Content } = Layout;

class App extends Component {


  render() {
    return (
        <div className="App">
          <Router>   
            <Route exact path={'/'} render={(routerProps)=>(
                 <div>
                   <CustomMenu></CustomMenu>
                   <Intro></Intro>
                   <div className="section">
                    <TextCardList title="City">
                    </TextCardList>
                   </div>
                 </div>
                 
            )}/>
            <Route exact path={'/seattle'} render={(routerProps)=>(
              <CityPage city={'seattle'} introTitle='Seattle' introImage='https://res.cloudinary.com/dorsia/image/upload/w_1620/optimized/web_assets/illustrations/seattle.png'></CityPage>     
              )}/>
            <Route exact path={'/newyork'} render={(routerProps)=>(
              <CityPage city={'newyork'}></CityPage>     
              )}/>
          </Router>
        </div>)

  }

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
}

export default App;