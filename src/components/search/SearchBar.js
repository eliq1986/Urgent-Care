import React, { Component } from 'react';

class SearchBar extends Component {

 state = {
   searchInput: ""
 }

// state changer; updates search field input
 onInputChange = e => {
   this.setState({searchInput: e.target.value}, () => {
   this.props.getSearchInput(this.state.searchInput);
 });



 }

  render() {
      return (
        <form>
           <input type="text" className="search-bar" onChange={this.onInputChange}  value={this.state.searchInput} placeholder="Search for medications" />
        </form>
      );
  }
}


export default SearchBar;
