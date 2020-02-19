import React from 'react';
import './ItemsBought.css';


const ItemsBought = (props) => {
  return (
    <div className="items-bought-container">
        <ol className="items-bought">
        {props.boughtItems.map(eachItem => <li className="medications-bought" key={eachItem.medication}>{eachItem.medication.toUpperCase()} ${eachItem.price}</li>)}
        </ol>
        <h2 className="items-total">Total:${props.total}</h2>
    </div>
  )
}



export default ItemsBought;
