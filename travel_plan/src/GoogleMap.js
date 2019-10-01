import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Icon } from 'antd'

class GoogleMap extends Component {
    constructor(props) {
        super(props);
        this.googleMapRef = React.createRef();
        this.state = {}
    }

    componentDitMount() {
        this.googleMap = this.createGoogleMap()
        this.googlePlace = this.createGooglePlace()

        let request = {
            query: this.props.eventName + ' ' + this.props.city,
            fields: ['name', 'geometry', 'formatted_address']
        };

        this.googlePlace.findPlaceFromQuery(request, (results, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
              this.createMarker(results[0].geometry.location);
              this.googleMap.setCenter(results[0].geometry.location);
              this.setState({
                  address: results[0].formatted_address
              })
          }
        })

    

    }

    createGoogleMap =()=>{
        new window.google.maps.Map(this.googleMapsRef.current, {
            zoom:16,
            disableDefaultUI: true,
        })
    }
   
    createGooglePlace = () =>{
        new window.google.maps.places.PlacesService(this.google.Map)
    }
    createMarker = () => {
        new window.google.maps.Marker({
            position: { lat: location.lat(), lng: location.lng()},
            map: this.googleMap
        })
    }
    render() {
        return (
            <div>
               <div>
                   <Icon type="environment" /> 
                   {this.state.address}
               </div>
               <div
                  id="google-map"
                  ref={this.googleMapRef}
                  style = {{ width: '400px', height: '300px'}}
                />
            </div>
        );
    }
}

export default withRouter(GoogleMap);

