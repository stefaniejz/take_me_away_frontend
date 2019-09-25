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
                        {/* The places everyone wants to be, before everyone wants to be there. <br />All Curated. No BS. Pinky swear. */
                        this.props.introText}
                    </div>
                </div>
                <div className="intro-image-container">
                    <img className="intro-image-img" src={this.props.introImage} alt="https://x.kinja-static.com/assets/images/logos/placeholders/default.png"/>
                </div>
            </div>
        );
    }
}

export default withRouter(Intro);