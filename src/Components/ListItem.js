import React from 'react';
import './ListItem.css';

const ListItem = props => {

  const { medication, price } = props.item;

  let r = React.createRef();
  return (
    <li className="format-item" >
     <div>
          <p>{medication.toUpperCase()}</p>
          <p>${price}</p>
      </div>
      <button className="add-medication" onClick={e  => {
        e.target.disabled = true
        e.target.parentNode.style.backgroundColor = "#50C878";
        props.addItem(props.item, r);
      }
    } ref={r}>ADD</button>
    </li>
  );
}

export default ListItem;
