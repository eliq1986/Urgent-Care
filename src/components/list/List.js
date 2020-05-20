import React from 'react';
import ListItem from './ListItem';
import './List.css';

const List = props => {
  return (
     <ul className="item-list">
      {props.prices.map((eachItem, index) =>
        <ListItem addItem={props.addItem}
         key={eachItem.medication}
         item={eachItem}
         index={index} />)}
     </ul>
  );
}



export default List;
