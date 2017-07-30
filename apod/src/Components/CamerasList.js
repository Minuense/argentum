import React, { Component } from 'react';

class CamerasList extends Component {

    render(){
        const cameras = this.props.cameras;
        return(
            <div className="CamerasList">
                <li>{cameras[1].name}</li>
            </div>
        );
    }
}
export default CamerasList;