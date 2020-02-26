import React from 'react';
import './RemoveButton.css';

const RemoveButton = props => <button className="remove-button" onClick={e => {
  props.removeMedication(props.priceAndMedication);
}
}
>Remove</button>


export default RemoveButton;
