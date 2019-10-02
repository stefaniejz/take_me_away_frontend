import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import './App.css';

class Intro extends Component {
    render() {
        return (
            <div className="intro">
                <div className="intro-text">
                    <h1 className="intro-text-title">
                        {this.props.introTitle}
                    </h1>
                    <div className="intro-text-city">
                        {this.props.introText}
                    </div>
                </div>
                <div className="intro-image-container">
                    <img className="intro-image-img" src={this.props.introImage} alt="https://x.kinja-static.com/assets/images/logos/placeholders/default.png"/>
                </div>
                <style>
                    @import url('https://fonts.googleapis.com/css?family=Bitter|Caveat+Brush|Lato:400i|Mansalva|Merriweather|Nunito+Sans|PT+Sans|Pacifico|Roboto+Slab|Source+Sans+Pro&display=swap');
                </style>
            </div>
        );
    }
}

export default withRouter(Intro);