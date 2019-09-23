import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Card } from 'antd';

const { Meta } = Card;
class TextCard extends Component {
    handleClick=()=>{
        return this.props.history.push(`/${this.props.city}`)
    }
    render() {
        return (
            <div>
                 <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src={this.props.image} 
                        onClick={this.handleClick}
                        />}
                    >
                        <Meta title={this.props.city} description={this.props.description} 
                        onClick={this.handleClick}
                        />
                    </Card>
            </div>
        );
    }
}

export default withRouter(TextCard);