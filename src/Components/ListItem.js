import React from 'react';
import './ListItem.css';

const Item = props => {
  const { medication, price } = props.item;
  return (
    <li>
      <p>{medication}</p>
      <p>${price}</p>
      <button onClick={()=> props.addPrice(price)}>Add</button>
    </li>
  );
}

export default Item;
