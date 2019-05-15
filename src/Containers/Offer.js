import React, { Component } from "react";
import axios from "axios";

class Offer extends Component {
  state = {
    offer: {}
  };
  render() {
    return (
      <div>
        <div className="content-offer">
          <div className="card-single-offer">
            <div className="img-single-offer" />
            {/* image à insérer  */}
            <div className="infos-single-offer">
              <p id="title-offer">{this.state.offer.title}</p>
              <p id="price-offer">{this.state.offer.price} €</p>
            </div>
          </div>
          <div className="description-offer">
            <h3>Description</h3>
            <p>{this.state.offer.description}</p>
          </div>
        </div>
      </div>
    );
  }

  async componentDidMount() {
    await axios
      .get(
        `https://leboncoin-api.herokuapp.com/api/offer/${
          this.props.match.params.offerId
        }`
      )
      .then(response => {
        this.setState({
          offer: response.data
        });
      });
  }
}

export default Offer;
