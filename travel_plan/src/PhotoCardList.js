import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Card } from 'antd';
import PhotoCard from './PhotoCard';

const { Meta } = Card;
class PhotoCardList extends Component {

    render() {
        return (
            
            <div>
                <div className="card-title">
                    <h1>{this.props.title}</h1>
                </div>
                <div className="card-list">
                   {this.props.events.map((event,index)=>{
                       return <PhotoCard event={event} key={index} onAddEvent={this.props.onAddEvent}/>
                   })}
                </div>
            </div>
        );
    }
}

export default withRouter(PhotoCardList);



