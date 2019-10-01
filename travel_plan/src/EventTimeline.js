import React, { Component } from 'react';
import { Drawer, Timeline, Calendar, Button, Modal, TimePicker, Input } from 'antd'
import moment from 'moment'

const { TextArea } = Input;
class EventTimeline extends Component {
    constructor(props) {
        super(props)
        this.state = {
            events: [],
            visile:false
        }

        this.nodeContent =  null;
        this.time = null
        this.getAllEventsForDate(moment());
    }

    getAllEventsForDate = (selected_date) => {
       fetch(`http://localhost:3000/events?user_id=${localStorage.getItem("currentUserId")}&selected_date=${selected_date}`).then(res=>res.json())
       .then(data=>{
           this.setState({
               events:data
           })
       })
    }

    onCalendarSelect = (value) => {
        this.getAllEventsForDate(value.startOf('day').format());
    }
 
    handleAddNotes=()=>{
        this.setState({
            visible: true,
          });
    }
    
    handleOk = e => {
        console.log(this.nodeContent);
        // fetch()

        // content:this.nodeContent,
        // city:this.props.city,
        // time:this.time,
        // user_id:loacal....


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

    handleInputSubmit=()=>{
        console.log("submit",this.props)
    }

    handleUpdateNode =  ({ target: { value } }) => {
        this.nodeContent = value;
    };

    onDateTimeChange=(value, dateString)=> {
        this.time=value.format()
    }

    render() {
        return (
            <Drawer 
                width="450px"
                title="My Itinerary"
                placement="right"
                closable={true}
                visible={this.props.visible}
                onClose={this.props.onDrawerClose}
            >
                <Calendar fullscreen={false} onSelect={this.onCalendarSelect} />
                <Timeline className="timeline" reverse={false} mode="left">
                <Button type="primary" onClick={this.handleAddNotes}>Add Notes</Button>
                <br></br>
                <br></br>
                   {this.state.events.map((event,index)=>{
                       return <Timeline.Item >

                     {event.activity.name}<br></br> {moment(event.time).format('LT')}</Timeline.Item>
                   })
                   }

                         <Modal
                            title="Select Time"
                            visible={this.state.visible}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                            >
                              <TimePicker onChange={this.onTimeChange}/>
                              Note:
                              <TextArea
                                placeholder="put node here"
                                autosize={{ minRows: 3, maxRows: 5 }}
                                ref={this.nodeTextInput}
                                onChange={this.handleUpdateNode}
                              />
                         </Modal>   
                </Timeline>
            </Drawer>
        );
    }
}

export default EventTimeline;