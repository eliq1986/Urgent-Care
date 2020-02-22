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
    selection: "Choose an option",
    showListOfMedications: false,
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
      this.setState({ showListOfMedications: true});
    }
  };


// state changer; hides list
  hideList = () => this.setState({ showListOfMedications:false });


// state changer; resets price total INT & items ARRAY
  resetPriceTotalAndItems = () => {
    this.setState({
        total: 0,
        boughtItems: []
      })};


// state changer getSearchInput and update array
 getSearchInput = searchInputText => {
   const filteredArray = Price[this.state.selection.toLowerCase()].filter(eachItem => eachItem.medication.toLowerCase().indexOf(searchInputText.toLowerCase()) > -1);
   this.setState({
     medicationPrices: filteredArray });
}


 // remove medications
 removeMedication = medicationToRemove => {
   const copyOfMedicationsBought = [...this.state.boughtItems]
   const medicationsStillBuying = copyOfMedicationsBought.filter(eachitem => !eachitem.medication.includes(medicationToRemove.medication));
   this.setState(prevState => {
  return  {
     boughtItems: medicationsStillBuying,
     total: prevState.total - medicationToRemove.price
   }})

 }


  render() {
    let listOfItems;;
    let cardSection;
    const animateCards = this.state.selection !== "Choose an option" ? "fadeIn" :"fadeOut ";
    const animateMedications = this.state.showListOfMedications ? "fadeIn" : "fadeOut";
    
    if(this.state.selection !== "Choose an option" && !this.state.showListOfMedications) {
      cardSection =  <CardContainer showList={this.showList} />;
    }


    else if(this.state.showListOfMedications && this.state.selection !== "Choose an option") {


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
      <div className={`${animateCards}, container`}>
        {cardSection}
      </div>
      <div className={animateMedications}>
         {listOfItems}
      </div>
    </div>
  );
}
}

export default App;
