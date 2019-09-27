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
            <Intro introImage="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
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


