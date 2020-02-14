import React from 'react';
import Item from './ListItem';
import './List.css';

const List = props => {
  return (
     <ul className="item-list">
      {props.prices.map( eachItem => <Item addItem={props.addItem} item={eachItem} />)}
     </ul>
  );
}



export default List;
