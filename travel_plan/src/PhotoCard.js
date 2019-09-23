import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Card, Button } from 'antd';

const { Meta } = Card;
class PhotoCard extends Component {
    handleClick=()=>{
        this.props.onAddEvent(this.props.event.id)
    }
    render() {
        return (
            <div>
                 <Card
                        hoverable={true}
                        style={{ width: 240 }}
                        cover={<img alt="example" src={this.props.event.image} />}
                    >
                        <Meta title={this.props.event.name}  />
                        <br></br>
                        <Button size="small" onClick={this.handleClick}>Add Event</Button>
                    </Card>
            </div>
        );
    }
}

export default withRouter(PhotoCard);