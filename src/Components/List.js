import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Item from './ListItem';
import './List.css';

const List = (props) => {
  return (
     <ul>
      {props.price.map( eachItem => <Item addPrice={props.addPrice} item={eachItem} />)}
     </ul>
  );
}



export default List;
