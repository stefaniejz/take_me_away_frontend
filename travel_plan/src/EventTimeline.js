import React, { Component } from 'react';
import { Drawer, Timeline, Calendar, Button, Modal, TimePicker, Input } from 'antd'
import moment from 'moment'

const { TextArea } = Input;
class EventTimeline extends Component {
    constructor(props) {
        super(props)
        this.state = {
            events: [],
            notes: [],
            visile:false,
            time:null
        }

        this.nodeContent =  null;
        this.timePickerRef = React.createRef();
        this.getAllEventsForDate(moment());
        this.getAllNotesForDate(moment());

        
    }

    getAllEventsForDate = (selected_date) => {
       fetch(`http://localhost:3000/events?user_id=${localStorage.getItem("currentUserId")}&selected_date=${selected_date}`).then(res=>res.json())
       .then(data=>{
           this.setState({
               events:data
           })
       })
    }


    getAllNotesForDate = (selected_date) => {
      fetch(`http://localhost:3000/notes?user_id=${localStorage.getItem("currentUserId")}&selected_date=${selected_date}`).then(res=>res.json())
      .then(data=>{
        this.setState({
          notes:data
        })
      })
    }


    onCalendarSelect = (value) => {
      console.log("calendar change")
        this.setState({
          time:value.format()
        })
        this.getAllEventsForDate(value.startOf('day').format());
        this.getAllNotesForDate(value.startOf('day').format());
    }
 
    handleAddNotes=()=>{
        this.setState({
            visible: true,
          });
    }
    
    handleOk = e => {
        console.log(this.time);
        fetch("http://localhost:3000/notes", {
          method: "POST", 
          headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            // Authorization: `Bearer ${localStorage.getItem("jwt")}`

          },
          body:JSON.stringify({
            content:this.nodeContent,
            city:this.props.city,
            time:this.state.time,
            user_id:localStorage.getItem("currentUserId")
          })
        })

        this.setState({
          visible: false,
          notes:[...this.state.notes,{city:this.props.city,content:this.nodeContent,user_id:localStorage.getItem("currentUserId"),time:this.state.time}]
        });
        this.timePickerRef.current.state.value=null;
      };
    
    handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
        this.timePickerRef.current.state.value=null;
    };

    handleInputSubmit=()=>{
        console.log("submit",this.props)
    }

    handleUpdateNode =  ({ target: { value } }) => {
        this.nodeContent = value;
    };

    onTimeChange=(value, dateString)=> {
        console.log("timechange")
        this.setState({
          time:value.format()
        })
    }

    getTimelineItem = (entry) => {
      if (entry.activity) {
        return <Timeline.Item > {entry.activity.name}<br></br> {moment(entry.time).format('LT')} </Timeline.Item>
      } else {
        return <Timeline.Item > {entry.content}<br></br> {moment(entry.time).format('LT')} </Timeline.Item>
      }
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
                <Button type="primary" onClick={this.handleAddNotes}>Add Note</Button>
                <br></br>
                <br></br>
                   { this.state.events.concat(this.state.notes).sort((a, b) => moment(a.time).valueOf() - moment(b.time).valueOf()).map((entry,index)=>{
                       return this.getTimelineItem(entry);
                   })} 
                   

                         <Modal
                            title="Add Note to Itinerary"
                            visible={this.state.visible}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                            > 
                              Select Time
                              <br></br>
                              <TimePicker ref={this.timePickerRef} format='HH:mm' size="large" onChange={this.onTimeChange} minuteStep={10} defaultValue={moment()}/>
                              <br></br>
                              <br></br>
                                Note:
                              <TextArea
                                placeholder="Input note here"
                                autosize={{ minRows: 1, maxRows: 3 }}
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