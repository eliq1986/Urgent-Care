import React from 'react';

const RemoveButton = (props) => <button onClick={(e)=> {
  props.removeMedication(props.priceAndMedication)
  console.log(e.target);
}
}
  >Remove</button>


export default RemoveButton;
