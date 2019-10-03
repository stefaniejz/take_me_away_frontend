import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Icon } from 'antd'

class GoogleMap extends Component {
    constructor(props) {
        super(props);
        this.googleMapRef = React.createRef();
        this.eventName = this.props.eventName;
        console.log(props)
    }

    componentDidMount() {
        this.googleMap = this.createGoogleMap()
        this.googlePlace = this.createGooglePlace()

        var request = {
            query: this.eventName + ' ' + this.props.city,
            fields: ['name', 'geometry', 'formatted_address'],
        };
        this.googlePlace.findPlaceFromQuery(request, (results, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                this.createMarker(results[0].geometry.location);
                this.googleMap.setCenter(results[0].geometry.location);
                console.log(results[0])
                this.address = results[0].formatted_address
            }
        });
      }

    createGoogleMap = () =>
    new window.google.maps.Map(this.googleMapRef.current, {
        zoom: 16,
        disableDefaultUI: true,
    })

    createGooglePlace = () =>
    new window.google.maps.places.PlacesService(this.googleMap);


    createMarker = (location) =>
        new window.google.maps.Marker({
            position: { lat: location.lat(), lng: location.lng()},
            map: this.googleMap,
        })

    render() {
        if (localStorage.getItem("selectedEventName") !== null) {
            this.eventName  = localStorage.getItem("selectedEventName")
        }
        var request = {
            query: this.eventName + ' ' + this.props.city,
            fields: ['name', 'geometry', 'formatted_address'],
        };
        if (this.googlePlace) {
            this.googlePlace.findPlaceFromQuery(request, (results, status) => {
                if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                    this.createMarker(results[0].geometry.location);
                    this.googleMap.setCenter(results[0].geometry.location);
                    console.log(results[0])
                }
            });
        }

        return (
            <div>
                <div>
                </div>
                <div
                    id="google-map"
                    ref={this.googleMapRef}
                    style={{ width: '400px', height: '300px' }}
                />
            </div>
        );
    }
}

export default withRouter(GoogleMap);