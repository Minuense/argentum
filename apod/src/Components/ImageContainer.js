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

        var today = new Date();
        var dd = today.getDate() - 30;
        var mm = today.getMonth()+1; //January is 0!

        var yyyy = today.getFullYear();
        /*if(dd<10){
            dd='0'+dd;
        }
        if(mm<10){
            mm='0'+mm;
        }*/
        var today = yyyy + '-' + mm + '-' + dd;

        let uri = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?';
        //uri += 'earth_date=' + today;
        uri += 'sol=' + 1100;
        uri += '&camera=' + cameras[Math.floor(Math.random() * cameras.length)];
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