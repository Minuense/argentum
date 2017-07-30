import React, { Component } from 'react';
import Apod from './Apod.js';
import CamerasList from './CamerasList.js';

class ImageContainer extends Component {

    constructor(props){
        super();
        this.state = {
            requestFailed: false,
            uri: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=7phZCTQahUxf6mozRCC3nN7AxeZXZNtWOyQv3TT5',
        };
    }
    componentDidMount(){
        return fetch(this.state.uri)
            .then(response => {
                if (!response.ok)
                {
                    throw Error("Api call failed")
                }
                return response;
            })
            .then((d) => d.json())
            .then((d) => {
                this.setState({
                    photo: d.photos[d.photos.length - 1],
                    cameras: d.photos[d.photos.length - 1].rover.cameras,
                });
                return d.photos;
            }), () => {
            this.setState({
                requestFailed: true
            })
        };
    }


    render(){
        if(this.state.requestFailed) return <p>Api request failed</p>
        if(!this.state.photo) return <p>Loading...</p>
        return(
            <div className="ImageContainer">
                <Apod photo={this.state.photo}/>
                <CamerasList cameras={this.state.cameras}/>
            </div>
        );
    }
}

export default ImageContainer;