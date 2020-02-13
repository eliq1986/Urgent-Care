import React, { Component } from 'react';
import './App.css';


import SelectLocation from './Components/SelectLocation';
import Header from './Components/Header';
import Price from './pricing/Pricing';
import List from './Components/List';

import CardContainer from './Components/CardContainer';


class App extends Component {

  state = {
    selection: null,
    list: false,
    total: 0
  }


  getOptionSelection = (selectOptionValue) => {
    this.setState({
      selection: selectOptionValue
    });

    if(this.state.selection === "Choose an option") {
       this.hideList();
    }
  }

  addPrice = (priceToAdd) => {
     this.setState({
       total: this.state.total + priceToAdd
     });
  }


  showList = () => this.setState({ list: true});

  hideList = () => this.setState({ list:false });



  render() {
    let mainSection = null;
    let listOfItems = null;

    if(this.state.selection && this.state.selection !== "Choose an option" && !this.state.list) {

     mainSection = (
       <CardContainer showList={this.showList} />
     );

   } else if(this.state.list && this.state.selection !== "Choose an option") {
     const price = Price[this.state.selection.toLowerCase()];
     listOfItems = (
       <div className="list">
            <List price={price} addPrice={this.addPrice}/>
            <h2>Total:${this.state.total}</h2>
       </div>
     );
   }

  return (
    <div className="App">
      <Header />
      <SelectLocation getOptionSelection={this.getOptionSelection} />
      <div className="container">
      {mainSection}
      </div>

      {listOfItems}


    </div>
  );
}
}

export default App;
