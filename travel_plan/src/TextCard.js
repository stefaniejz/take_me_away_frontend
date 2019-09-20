import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Card } from 'antd';

const { Meta } = Card;
class TextCard extends Component {
    render() {
        return (
            <div>
                 <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src={this.props.image} />}
                    >
                        <Meta title={this.props.city} description={this.props.description} />
                    </Card>
            </div>
        );
    }
}

export default withRouter(TextCard);