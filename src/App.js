import React, { Component } from 'react';
import './App.css';


import SelectLocation from './Components/SelectLocation';
import Header from './Components/Header';
import Price from './Components/Pricing/Pricing';
import List from './Components/List';

import CardContainer from './Components/CardContainer';


class App extends Component {

  state = {
    selection: null,
    list: false,
    total: 0,
    boughtItems: []
  }


  getOptionSelection = (selectOptionValue) => {

    this.setState({
      selection: selectOptionValue
    });

    if(this.state.selection === "Choose an option") {
       this.hideList();
    }
     this.resetTotalAndItems();
  }


  addItem = (itemToAdd) => {
    const newBoughtItems = [...this.state.boughtItems];
    newBoughtItems.push(itemToAdd)
     this.setState({
       total: this.state.total + itemToAdd.price,
       boughtItems: newBoughtItems
     });


  }


  showList = (title) => {
    if(title === "Medications") {
      this.setState({ list: true});
    }
  };

  hideList = () => this.setState({ list:false });


  resetTotalAndItems = () => {
    this.setState({
        total: 0,
        boughtItems: []
      })};



  render() {
    let cardSection = null;
    let listOfItems = null;

    if(this.state.selection && this.state.selection !== "Choose an option" && !this.state.list) {
     cardSection = (
       <CardContainer showList={this.showList} />
     );

    }
    else if(this.state.list && this.state.selection !== "Choose an option") {
     const prices = Price[this.state.selection.toLowerCase()];
     listOfItems = (
       <div className="list-container">
            <List prices={prices} addItem={this.addItem}/>
            <div>
                <ol>
                {this.state.boughtItems.map(eachItem => <li>{eachItem.medication.toUpperCase()} {eachItem.price}</li>)}
                </ol>
                <h2>Total:${this.state.total}</h2>
           </div>
       </div>
     );
   }

  return (
    <div className="App">
      <Header />
      <SelectLocation getOptionSelection={this.getOptionSelection} />
      <div className="container">
      {cardSection}
      </div>
      {listOfItems}
    </div>
  );
}
}

export default App;
