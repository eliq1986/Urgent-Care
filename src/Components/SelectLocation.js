import React from 'react';
import './SelectLocation.css';

const SelectLocation = ({ getOptionSelection }) => {

   return (
     <div className="select-location">
     <label htmlFor="location-select">Choose a location:</label>
        <select id="location-select" onChange={e => getOptionSelection(e.target.value)}>
        <option>Choose an option</option>
         <option>Local</option>
         <option>Cash</option>
         <option>Country</option>
      </select>
      </div>
   );
}




export default SelectLocation;
