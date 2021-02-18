import React from 'react';
import MapMaker from '../MapMarker/MapMarker'

class MapMakerToggle extends React.Component {
    state = {
      show: false,
    }
  
    toggle = () => this.setState((currentState) => ({show: !currentState.show}));
  
    render() {
      return (
        <span>
           <i className='Button' onClick={this.toggle}>

           </i>
           <i className='fas fa-map-marked-alt' onClick={this.toggle} />
          
          {this.state.show && <MapMaker />}
        </span>
       );
    }
  }
  
  export default MapMakerToggle
  