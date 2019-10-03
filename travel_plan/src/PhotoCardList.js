import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Modal, DatePicker } from 'antd';
import PhotoCard from './PhotoCard';
import GoogleMap from './GoogleMap';


const { RangePicker} = DatePicker;
class PhotoCardList extends Component {
    
    constructor(props) {
        super(props)
        // this.selectedStartTime = null;
        // this.selectEndTime = null;
        
        this.state={
            modal_visible:false
        }
    }

    sendCreateEventsRequest = () => {
       fetch("http://localhost:3000/events", {
           method: "POST",
           headers:{
             'Accept': 'application/json',
             'Content-Type': 'application/json'
           },
           body:JSON.stringify({
               start_time:this.state.start_time,
               end_time:this.state.end_time,
               activity_id:this.state.target_activity_id,
               user_id:localStorage.getItem("currentUserId")
           })
       })
    }

    handleOk = e => {
        this.sendCreateEventsRequest();
        this.setState({
            modal_visible: false,
        });
        this.props.showDrawer()
    };
    
    handleCancel = e => {
        this.setState({
            modal_visible: false,
        });
    };

    handleAddEvent=(activity_id, activity_name)=>{
        this.setState({
            target_activity_id: activity_id,
            modal_visible: true
        });
        localStorage.setItem('selectedEventName', activity_name)
    }

    onRangeChange=(dateRange, endDate)=>{
        this.setState({
            start_time : dateRange[0].startOf('day').format(),
            end_time : dateRange[1].startOf('day').format()
        });
    }

    onDateTimeChange=(value, dateString)=>{
        this.setState({
            start_time : value.format(),
            end_time : value.format(),
        });
    }

    render() {
        let datePicker;
        if (this.props.type === "hotel") {
            datePicker = <RangePicker size='default' onChange={this.onRangeChange}/>
        } else {
            datePicker = <DatePicker 
            placeholder="Select Time"
            onChange={this.onDateTimeChange} 
            showTime={{ format: 'HH:mm'}} 
            format="YYYY-MM-DD HH:mm" 
            onOk={this.onOk}

            />
        }

        return (
            <div>
                <div className="card-title">
                    <h1>{this.props.title}</h1>
                </div>
                <div>
                  <Modal
                    title="Add to Itinerary"
                    visible={this.state.modal_visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                  >
                    {datePicker}
                    <GoogleMap eventName={this.state.target_activity_name} city={this.props.city} ref={this.googleMapRef}/>
                  </Modal>
                </div>
                <div className="card-list">
                   {this.props.events.map((event,index)=>{
                       return <PhotoCard event={event} key={index} onAddEvent={this.handleAddEvent}/>
                   })}
                </div>
            </div>
        );
    }
}

export default withRouter(PhotoCardList);



