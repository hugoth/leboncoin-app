import React, { Component } from "react";
import axios from "axios";
import Paginate from "../Components/Paginate";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {
    count: 0,
    offers: [],
    currentPage: 1,
    offerPerPage: 6,
    isloaded: false
  };

  handleClickOnCard = elem => {
    console.log(elem._id);
  };

  handleChangePage = page => {
    console.log(page);
    this.setState({
      currentPage: page
    });
  };

  render() {
    const { offers, offerPerPage, currentPage } = this.state;
    const indexofLastOffer = currentPage * offerPerPage;
    const indexofFirstOffer = indexofLastOffer - offerPerPage;
    const currentOffers = offers.slice(indexofFirstOffer, indexofLastOffer);

    return (
      <div className="content">
        <div className="content-offer">
          {currentOffers.map(elem => {
            return (
              <Link
                to={`/offer/${elem._id}`}
                className="link"
                Style={{
                  fontWeight: "bold",
                  color: "red"
                }}
              >
                <div
                  className="cards"
                  onClick={() => this.handleClickOnCard(elem)}
                  key={elem.id}
                >
                  <div className="img-offer">
                    {/* <img src="" alt="Offer" /> */}
                  </div>
                  <div className="info-offer">
                    <p id="infos">
                      {elem.title} {elem.description}
                    </p>
                    <p id="price">{elem.price} €</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="paginate">
          <Paginate state={this.state} onClick={this.handleChangePage} />
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
          count: response.data.count,
          isloaded: true
        });
      });
  }
}

export default Home;
