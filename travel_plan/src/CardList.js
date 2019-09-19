import React, { Component } from 'react';
import { Card } from 'antd';

const { Meta } = Card;
class CardList extends Component {
    render() {
        return (
            <div>
                <div className="card-title">
                    <h1>{this.props.title}</h1>
                </div>
                <div className="card-list">
                    <Card
                        hoverable
                        cover={<img alt="example" src="https://res.cloudinary.com/dorsia/image/upload/w_900/optimized/web_assets/illustrations/copenhagen" />}
                    >
                        <Meta title="Seattle" description="seattle" />
                    </Card>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src="https://res.cloudinary.com/dorsia/image/upload/w_900/optimized/web_assets/illustrations/copenhagen" />}
                    >
                        <Meta title="Seattle" description="seattle" />
                    </Card>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src="https://res.cloudinary.com/dorsia/image/upload/w_900/optimized/web_assets/illustrations/copenhagen" />}
                    >
                        <Meta title="Seattle" description="seattle" />
                    </Card>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src="https://res.cloudinary.com/dorsia/image/upload/w_900/optimized/web_assets/illustrations/copenhagen" />}
                    >
                        <Meta title="Seattle" description="seattle" />
                    </Card>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src="https://res.cloudinary.com/dorsia/image/upload/w_900/optimized/web_assets/illustrations/copenhagen" />}
                    >
                        <Meta title="Seattle" description="seattle" />
                    </Card>
                </div>
            </div>
        );
    }
}

export default CardList;