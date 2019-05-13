import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
  state = {
    offers: [],
    currentPage: 1,
    isloaded: false
  };

  handleClick = () => {
    console.log(this.state.offers[0].title);
  };
  render() {
    return (
      <div className="content">
        <div className="cards">
          <div>
            <img src="" alt="Offer" />
          </div>
          <div>
            <p>Title</p>
            <p>Price</p>
            <button onClick={this.handleClick}>Test</button>
          </div>
        </div>
      </div>
    );
  }

  async componentDidMount() {
    await axios
      .get("https://leboncoin-api.herokuapp.com/api/offer/with-count")
      .then(response => {
        this.setState({
          offers: response.data.offers,
          isloaded: true
        });
      });
  }
}

export default Home;
