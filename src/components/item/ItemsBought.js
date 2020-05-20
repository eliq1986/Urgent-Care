import React from 'react';
import PriceTotal from '../price/PriceTotal';
import ItemBought from './ItemBought';
import './ItemsBought.css';


const ItemsBought = ({ boughtItems, total, removeMedication }) => {
  return (
    <div className="items-bought-container">
        <ol className="items-bought">

        {boughtItems.map(eachItem =>
          <ItemBought
          removeMedication={removeMedication}
           key={eachItem.medication}
           className="medications-bought"
           eachItem={eachItem} />)}

        </ol>

      <PriceTotal total={total} />
    </div>
  )
}



export default ItemsBought;
