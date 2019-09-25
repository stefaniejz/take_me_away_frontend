import React, { Component } from 'react';
import PhotoCardList from './PhotoCardList';
import Intro from './Intro';
import CustomMenu from './CustomMenu';
import EventTimeline from './EventTimeline';


class CityPage extends Component {

    state={
        restaurants: [],
        activities: [],
        hotels: [],
        drawer_visible:false
    }

    componentDidMount=() => {
        this.fetchActivities();
    }

    fetchActivities= () => {
        fetch(`http://localhost:3000/activities?city=${this.props.city}`)
        .then(res=>res.json())
        .then(data=>{
            this.setState({
                restaurants: data.filter(a => a.activity_type === "restaurant"),
                activities: data.filter(a => a.activity_type === "activity"),
                hotels: data.filter(a => a.activity_type === "hotel")
            })
        })
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

      onPanelChange = (value, mode) => {
        console.log(value, mode);
      }
      
      handleItinerary=()=>{
          this.setState({
              drawer_visible:true
          })
      }

    render() {
        return (
            <div>
                <CustomMenu handleItinerary={this.handleItinerary}></CustomMenu>
                <Intro introImage={this.props.introImage} introTitle={this.props.introTitle} introText={this.props.introText}></Intro>
                <div>
                 <EventTimeline visible={this.state.drawer_visible} onDrawerClose={this.onDrawerClose}/>
                </div>
                <div className="section">
                  <PhotoCardList title="Restaurant" events={this.state.restaurants} showDrawer={this.showDrawer}type="restaurant">  
                  </PhotoCardList>
                </div>
                <div className="section">
                  <PhotoCardList title="Hotel" events={this.state.hotels} showDrawer={this.showDrawer}  type="hotel">
                  </PhotoCardList>
                </div>
                <div className="section">
                  <PhotoCardList title="Activity" events={this.state.activities} showDrawer={this.showDrawer} type="activity">
                  </PhotoCardList>
                </div>
              </div>   
        );
    }
}

export default CityPage;