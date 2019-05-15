import React, { Component } from "react";
import axios from "axios";
import ListProducts from "../Components/Listproducts";

class Home extends Component {
  state = {
    offers: [],
    filteredOffer: [],
    currentPage: 1,
    offerPerPage: 6,
    isloaded: false
  };

  handleChangePage = page => {
    this.setState({
      currentPage: page
    });
  };

  // Filter from Header
  // handleChangefilter = filter => {
  //   let products = this.state.offers;
  //   products = products.filter(product => {
  //     let productName = product.title.toLowerCase();
  //     return productName.indexOf(filter.toLowerCase()) !== -1;
  //   });
  //   this.setState({
  //     offers: products
  //   });
  // };

  render() {
    return (
      <ListProducts state={this.state} onChangePage={this.handleChangePage} />
    );
  }

  async componentDidMount() {
    await axios
      .get("https://leboncoin-api.herokuapp.com/api/offer/with-count")
      .then(response => {
        this.setState({
          offers: response.data.offers,
          count: response.data.count,
          isloaded: true
        });
      });
  }
}

export default Home;
