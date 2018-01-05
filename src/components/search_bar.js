import React, { Component } from 'react';//{Component} is syntactical sugar. Equivalent to doing
                                         //const Component = React.Component
class SearchBar extends Component {//define a class named SearchBar and give it access to all the functionality from the React.Component class
    super(props);

    this.state = { term: '' };
  }
  render() {//displays stuff to DOM
    return (
      <div className = "search-bar">
        <input//an html tag specifying an input field where the user can enter data
          value = {this.state.term}
          onChange = {event => this.onInputChange(event.target.value)} />//adds an event handler to input element that watches for the change event
                                                                          //calls the onInputChange function
      </div>                                                             //the this keyword refers to the current instance  pf the class when inside function scope
    );
  }

  onInputChange(term) {//event handler that listens for when the input element inside the search bar has its text changed
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}
export default SearchBar;//exports only the SearchBar function of this module
