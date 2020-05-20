import React from 'react';
import RemoveButton from '../button/RemoveButton';
import './ItemBought.css';

const ItemBought = ({eachItem, removeMedication}) => {
  return (
    <li className="medications-bought">

    {eachItem.medication.toUpperCase()} ${eachItem.price}

    <RemoveButton
     priceAndMedication={eachItem}
    removeMedication={removeMedication}  />
    </li>
  );
}

export default ItemBought;
