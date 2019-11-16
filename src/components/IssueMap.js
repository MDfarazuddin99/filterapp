import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
export class IssueMap extends Component {

    render() {
        const style = {height:"50%"}
        return(
        <div> 
        <Map   google={this.props.google} style={style}   zoom={15}
                  initialCenter={this.props.coord}
        >

        <Marker
           position={this.props.coord} />
               <InfoWindow onClose={this.onInfoWindowClose}> 
               </InfoWindow>
       </Map>
   </div>
        )
        
    }
}
export default GoogleApiWrapper({
    apiKey: ("AIzaSyB6OuDkCRrOXaY1x2tbNgFTZM20s5sXBkU")
  })(IssueMap)
