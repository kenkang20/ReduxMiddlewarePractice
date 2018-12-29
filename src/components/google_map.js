import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

class Map extends Component {
    render() {
        console.log(this.props);
        const GoogleMapExample = withGoogleMap(props => (
            <GoogleMap defaultZoom={12} defaultCenter={{ lat: this.props.lat, lng: this.props.lon }} />
         ));

         return (
            <div>
                <GoogleMapExample
                    containerElement={ <div style={{ height: '100px' }} /> }
                    mapElement={ <div style={{ height: '100%' }} /> }
                />
            </div>
        );
    }
}


 
export default Map;
