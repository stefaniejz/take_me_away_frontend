import React, { Component } from 'react';
import CustomMenu from './CustomMenu';
import TextCardList from './TextCardList';
import Intro from './Intro';
import EventTimeline from './EventTimeline';
class HomePage extends Component {

    state={
        drawer_visible:false
    }
    showDrawer = () => {
        this.setState({
          drawer_visible: true,
        });
      };
    
      onDrawerClose = () => {
        this.setState({
          drawer_visible: false,
        });
      };

      handleItinerary=()=>{
        this.setState({
            drawer_visible:true
        })
    }

    render() {
        return (
            <div>
            <CustomMenu handleItinerary={this.handleItinerary}></CustomMenu>
            <Intro introImage="https://res.cloudinary.com/dorsia/image/upload/w_2080/optimized/web_assets/illustrations/homepage/3240.png"
            ></Intro>
             <div>
              <EventTimeline visible={this.state.drawer_visible} onDrawerClose={this.onDrawerClose}/>
            </div>
            <div className="section">
             <TextCardList title="City">
             </TextCardList>
            </div>
          </div>
        );
    }
}

export default HomePage;

