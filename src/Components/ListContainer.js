import React from 'react';
import './ListContainer.css';
import List from './List';

const ListContainer = props => {
  return (
  <div className="list-container">
       <List prices={props.prices} addItem={props.addItem}/>
       <div>
           <ol>
           {props.boughtItems.map(eachItem => <li className="medications-bought" key={eachItem.medication}>{eachItem.medication.toUpperCase()} ${eachItem.price}</li>)}
           </ol>
           <h2>Total:${props.total}</h2>
      </div>
  </div>
);
}


export default ListContainer
