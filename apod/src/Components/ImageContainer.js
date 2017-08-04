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

    fetchData(){
        //console.log(this.generateUri());
        return fetch("http://localhost:3048/api/apod")
            .then(response => {
                if (!response.ok)
                {
                    throw Error("Api call failed")
                }
                return response;
            })
            .then((d) => d.json())
            .then((d) => {
                if(d.photos.length > 0){
                    this.setState({
                        photo: d.photos[d.photos.length - 1],
                        camera: d.photos.length ? d.photos[d.photos.length - 1].camera : null,
                        roverCameras: d.photos.length ? d.photos[d.photos.length - 1].rover.cameras : null,
                    });
                    return d.photos;
                }
                else{
                    return this.fetchData();
                }
           })
    }

    componentDidMount(){
        return this.fetchData();
    }
    render(){
        if(this.state.requestFailed) return <p>Api request failed</p>
        if(!this.state.photo) return <p>Loading...</p>
        return(
            <div className="ImageContainer">
                <Apod photo={this.state.photo} onClick={this.fetchData.bind(this)}/>
            </div>
        );
    }
}

export default ImageContainer;