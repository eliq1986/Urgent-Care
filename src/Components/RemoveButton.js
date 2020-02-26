import React from 'react';

const RemoveButton = props => <button onClick={e => {
  props.removeMedication(props.priceAndMedication);
}
}
>Remove</button>


export default RemoveButton;
