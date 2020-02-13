import React, { Component } from 'react';
import './SelectLocation.css';

class SelectLocation extends Component {

onSelectChange = (e) => {
  this.props.getOptionSelection(e.target.value);
}

  render() {
 return (
   <div className="select-location">
   <label htmlFor="location-select">Choose a location:</label>
      <select id="location-select" onChange={this.onSelectChange}>
      <option>Choose an option</option>
       <option>Local</option>
       <option>Cash</option>
       <option>Country</option>
    </select>
    </div>
 );
}
}



export default SelectLocation;
