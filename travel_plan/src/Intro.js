import React, { Component } from 'react';

class Intro extends Component {
    render() {
        return (
            <div className="intro">
                <div className="intro-text">
                    <h1 className="intro-text-title">
                        For the untourists.<br />Travel liberated.
                    </h1>
                    <div className="intro-text-paragraph">
                        The places everyone wants to be, before everyone wants to be there. <br />All Curated. No BS. Pinky swear.
                    </div>
                </div>
                <div className="intro-image-container">
                    <img className="intro-image-img" src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80" />
                </div>
            </div>
        );
    }
}

export default Intro;