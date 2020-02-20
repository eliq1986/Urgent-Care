import React, { Component } from 'react';

class SearchBar extends Component {

 state = {
   searchInput: ""
 }

 onInputChange = e => {

 this.setState({searchInput: e.target.value}, () => {
   this.props.getSearchInput(this.state.searchInput);
 });



 }

  render() {
      return (
        <form>
           <input type="text" className="search-bar" onChange={this.onInputChange}  value={this.state.searchInput}  />
        </form>
      );
  }
}


export default SearchBar;
