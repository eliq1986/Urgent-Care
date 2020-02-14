import React from 'react';
import './ListItem.css';

const Item = props => {
  const { medication, price } = props.item;

  return (
    <li>
      <p>{medication.toUpperCase()}</p>
      <p>${price}</p>
      <button className="add-medication" onClick={e  => {
        e.target.disabled = true
        e.target.parentNode.style.backgroundColor = "#50C878";
        props.addItem(props.item);
      }
    }>ADD</button>
    </li>
  );
}

export default Item;
