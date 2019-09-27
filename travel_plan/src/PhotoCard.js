import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Card, Button} from 'antd';

const { Meta } = Card;


class PhotoCard extends Component {
//    constructor(props){
//        super(props)
//        this.state={
//            cityName:this.props.event.city
//        }
   
//    }

    handleClick=()=>{
        this.props.onAddEvent(this.props.event.id)
       
    }
     
  

    
    // handleCityName=(name)=>{
    //     switch(name) {
    //         case "newyork":
    //                 this.setState({
    //                     cityName:"New York"
    //                 })
    //                 break;
    //         case "sanfrancisco":
    //                 this.setState({
    //                     cityName:"San Francisco"
    //                 })
    //                 break;
    //         case "losangeles":
    //                 this.setState({
    //                     cityName:"Los Angeles"
    //                 })
    //                 break;
    //         case "seattle":
    //                 this.setState({
    //                     cityName:"Seattle"
    //                 })
    //                 break;
    //         default:

    //                 this.setState({
    //                     cityName:this.state.cityName.charAt(0).toUpperCase()+this.state.cityName.slice(1)
    //                 })
    //                 break;
    //       }
    // }
  


    render() {
        return (
            <div>
                 <Card
                        hoverable={true}
                        style={{ width: 240 }}
                   
                        cover={<img alt="https://x.kinja-static.com/assets/images/logos/placeholders/default.png" src={this.props.event.image} />}
                    >
                        <Meta title={this.props.event.name} />
                        <br></br>
                        <Button size="small" onClick={this.handleClick}>Add Event</Button>
                    </Card>
            </div>
        );
    }
}

export default withRouter(PhotoCard);