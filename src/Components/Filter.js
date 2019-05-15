import React, { Component } from "react";

class Filter extends Component {
  state = {
    search: ""
  };

  handleChange = e => {
    this.setState({
      search: e.target.value
    });
    e.preventDefault();
    this.props.filter(e.target.value);
  };
  render() {
    return (
      <span className="search-text">
        <input
          placeholder="Rechercher un produit"
          type="text"
          value={this.state.search}
          onChange={this.handleChange}
        />
      </span>
    );
  }
}

export default Filter;
