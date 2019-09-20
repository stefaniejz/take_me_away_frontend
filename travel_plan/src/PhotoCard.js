import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Card, Button } from 'antd';

const { Meta } = Card;
class PhotoCard extends Component {
    handleClick=(e)=>{
        this.props.onAddEvent()
    }
    render() {
        return (
            <div>
                 <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src={this.props.event.image} />}
                    >
                        <Meta title={this.props.event.name}  />
                        <Button size="small" onClick={this.handleClick}>Add Me!</Button>
                    </Card>
            </div>
        );
    }
}

export default withRouter(PhotoCard);