import React from "react";
import Paginate from "./Paginate";
import { Link } from "react-router-dom";

const ListProducts = props => {
  const { offers, offerPerPage, currentPage } = props.state;
  const indexofLastOffer = currentPage * offerPerPage;
  const indexofFirstOffer = indexofLastOffer - offerPerPage;
  const currentOffers = offers.slice(indexofFirstOffer, indexofLastOffer);

  return (
    <div className="content">
      <div className="content-offer">
        {currentOffers.map(elem => {
          return (
            <Link to={`/offer/${elem._id}`} className="link" key={elem._id}>
              <div className="cards">
                <div className="img-offer">{/* Image à insérer */}</div>
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
        <Paginate state={props.state} onClick={props.onChangePage} />
      </div>
    </div>
  );
};

export default ListProducts;
