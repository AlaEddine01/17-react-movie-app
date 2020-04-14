import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
  state = {
    newTab: [],
    input: "",
  };
  search = (props) => {
    this.setState({
      newTab: [...this.state.newTab, this.props.cmp],
    });
    this.newTab.filter(
      (element) => element.name.toUpperCase() === this.input.value.toUpperCase()
    );
  };
  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };
  render() {
    return (
      <div className="searchcontainer">
        <div className="Search">
        <input
          type="text"
          placeholder="Search.."
          name="search"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <input
          type="button"
          name="search-button"
          value="search"
          onClick={() => this.search()}
        />
        {this.newTab}  
        </div>
        
      </div>
    );
  }
}

export default Search;
