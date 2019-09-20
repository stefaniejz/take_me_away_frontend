import React, { Component } from 'react';
import { Modal, Button } from 'antd'

import PhotoCardList from './PhotoCardList';
import TextCard from './TextCard';
import Intro from './Intro';
import CustomMenu from './CustomMenu';


class CityPage extends Component {

    state={
        restaurants: [],
        activities: [],
        hotels: [],
        visible:false
    }

    componentDidMount=() => {
        this.fetchActivities();
    }

    fetchActivities= () => {
        console.log(this.props.city)
        fetch(`http://localhost:3000/activities?city=${this.props.city}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            this.setState({
                restaurants: data.filter(a => a.activity_type === "restaurant"),
                activities: data.filter(a => a.activity_type === "activity"),
                hotels: data.filter(a => a.activity_type === "hotel")
            })
        })
    }

    handleAddEvent=()=>{
        this.setState({
            visible: true,
        });
    }

    render() {
        return (
            <div>
                <CustomMenu></CustomMenu>
                <Intro introImage={this.props.introImage} introTitle={this.props.introTitle}></Intro>
                <div>
                  <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                  >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                  </Modal>
                </div>
                <div className="section">
                  <PhotoCardList title="Restaurant" events={this.state.restaurants}
                  onAddEvent={this.handleAddEvent}
                  >  
                  </PhotoCardList>
                </div>
                <div className="section">
                  <PhotoCardList title="Hotel" events={this.state.hotels}
                  onAddEvent={this.handleAddEvent}
                  >
                  </PhotoCardList>
                </div>
                <div className="section">
                  <PhotoCardList title="Activity" events={this.state.activities}
                  onAddEvent={this.handleAddEvent}
                  >
                  </PhotoCardList>
                </div>
              </div>   
        );
    }
}

export default CityPage;