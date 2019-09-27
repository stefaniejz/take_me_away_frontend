import React, { Component } from 'react';
import { Drawer, Timeline, Calendar } from 'antd'
import moment from 'moment'


class EventTimeline extends Component {
    constructor(props) {
        super(props)
        this.state = {
            events: []
        }

        this.getAllEventsForDate(moment());
    }

    getAllEventsForDate = (selected_date) => {
       fetch(`http://localhost:3000/events?user_id=1&selected_date=${selected_date}`).then(res=>res.json())
       .then(data=>{
           this.setState({
               events:data
           })
       })
    }

    onCalendarSelect = (value) => {
        this.getAllEventsForDate(value.startOf('day').format());
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
                   {this.state.events.map((event,index)=>{
                       return <Timeline.Item >

                     {event.activity.name}<br></br> {moment(event.time).format('LT')}</Timeline.Item>
                   })
                   }
                </Timeline>
            </Drawer>
        );
    }
}

export default EventTimeline;