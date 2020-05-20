import React from 'react';
import ItemsBought from '../item/ItemsBought';
import SearchBar from '../search/SearchBar';
import './ListContainer.css';
import List from './List';

const ListContainer = props => {
  return (
  <div className="list-container">

       <SearchBar
       getSearchInput={props.getSearchInput}/>

       <ItemsBought
       removeMedication={props.removeMedication}
       total={props.total}
       boughtItems={props.boughtItems} />

       <List
       prices={props.prices}
       addItem={props.addItem}/>

  </div>
);
}


export default ListContainer
