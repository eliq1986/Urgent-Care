import React, { Component } from 'react';

// custom components
import CardContainer from './Components/CardContainer';
import SelectLocation from './Components/SelectLocation';
import ListContainer from './Components/ListContainer';
import Header from './Components/Header';
import Price from './Components/Pricing/Pricing';

// css file
import './App.css';


class App extends Component {

  state = {
    selection: null,
    list: false,
    total: 0,
    boughtItems: [],
    medicationPrices: null
  }


// state changed; retrieves option value
  getOptionSelection = selectOptionValue => {
    this.setState({
      selection: selectOptionValue,
      medicationPrices: Price[selectOptionValue.toLowerCase()]
    });

    if(this.state.selection === "Choose an option") {
       this.hideList();
    }
     this.resetPriceTotalAndItems();
  }



// state changer; changes integer and array.
  addItem = itemToAdd => {
    const newBoughtItems = [...this.state.boughtItems];
    newBoughtItems.push(itemToAdd)
     this.setState(prevState => {
      return {
       total: prevState.total + itemToAdd.price,
       boughtItems: newBoughtItems
     }
   }
 );
}


// state changer; shows list component
  showList = title => {
    if(title === "Medications") {
      this.setState({ list: true});
    }
  };


// state changer; hides list
  hideList = () => this.setState({ list:false });


// state changer; resets price total INT & items ARRAY
  resetPriceTotalAndItems = () => {
    this.setState({
        total: 0,
        boughtItems: []
      })};

// getSearchInput
 getSearchInput = a => {
   const filteredArray = Price[this.state.selection.toLowerCase()].filter(eachItem => eachItem.medication.toLowerCase().indexOf(a.toLowerCase()) > -1);
   this.setState({
     medicationPrices: filteredArray });
}

 setMedicationList = (a) => {
   this.setState({medicationList: a })
 }


 // remove medications
 removeMedication = (a) => {
     console.log(this.state.medicationPrices);
   const c = [...this.state.boughtItems]
   const b = c.filter(eachitem => !eachitem.medication.includes(a.medication));
   this.setState((prevState) => {
  return  {
     boughtItems: b,
     total: prevState.total - a.price
   }})

 }


  render() {
    let listOfItems;;
    let cardSection;

    if(this.state.selection && this.state.selection !== "Choose an option" && !this.state.list) {
      cardSection =  <CardContainer showList={this.showList} />;
    }


    else if(this.state.list && this.state.selection !== "Choose an option") {


     listOfItems = (
       <ListContainer
       getSearchInput={this.getSearchInput}
       prices={this.state.medicationPrices}
       addItem={this.addItem}
       boughtItems={this.state.boughtItems}
       total={this.state.total}
       removeMedication={this.removeMedication}
       />

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
