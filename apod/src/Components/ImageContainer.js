import React, { Component } from 'react';
import Apod from './Apod.js';
import PhotoMetadata from './PhotoMetadata.js';

class ImageContainer extends Component {

    constructor(props){
        super();
        this.state = {
            requestFailed: false,
        };
    }

    generateUri(){
        const cameras = [
            'fhaz',
            'chemcam',
            'mahli',
            'mardi',
            'rhaz',
        ];

        let uri = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=';
        uri += cameras[Math.floor(Math.random() * cameras.length)];
        uri += '&api_key=7phZCTQahUxf6mozRCC3nN7AxeZXZNtWOyQv3TT5';
        return uri;
    }

    fetchData(){
        //console.log(this.generateUri());
        return fetch(this.generateUri())
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
                    camera: d.photos.length ? d.photos[d.photos.length - 1].camera : null,
                    roverCameras: d.photos.length ? d.photos[d.photos.length - 1].rover.cameras : null,
                });
                return d.photos;
            }), () => {
            this.setState({
                requestFailed: true
            })
        };
    }

    componentDidMount(){
        return this.fetchData();
    }


    render(){
        if(this.state.requestFailed) return <p>Api request failed</p>
        if(!this.state.photo) return <p>Loading...</p>
        return(
            <div className="ImageContainer">
                <Apod photo={this.state.photo} onClick={ () => this.fetchData()}/>
                <PhotoMetadata camera={this.state.camera}/>
            </div>
        );
    }
}

export default ImageContainer;