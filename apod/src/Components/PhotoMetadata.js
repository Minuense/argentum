import React, { Component } from 'react';

class PhotoMetadata extends Component {

    render(){
        const camera = this.props.camera;
        return(
            <div className="PhotoMetadata">
                <p>Camera: {camera.full_name}</p>
            </div>
        );
    }
}
export default PhotoMetadata;