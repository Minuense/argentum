import React, { Component } from 'react';
import './Apod.css';

class Apod extends Component {
    render(){
        const photo = this.props.photo;

        return(
            <div className="Apod">
                <img
                    src={ photo.img_src }
                    alt="logo">
                </img>
            </div>
        );
    }
}
export default Apod;