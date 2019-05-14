import React, { Component } from "react";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <div className="top-band">
      <div className="container-top">
        <Link to={`/`} className="link">
          <img
            className="logo"
            src="https://cdn.welcometothejungle.co/uploads/website/logo/6709/150220/leboncoin.svg"
            alt="leboncoin-logo"
          />
        </Link>
        <div className="menu-top-nav-left">
          <button className="header-button">
            <i className="far fa-plus-square" />
            <p className="text-button">Déposer une annonce</p>
          </button>
          <i className="fas fa-search">
            <span>
              <input
                className="search-text"
                placeholder="Rechercher un produit"
              />
            </span>
          </i>
        </div>
        <div className="border">
          <div className="menu-top-nav-button">
            <nav>
              <ul className="menu-top-right">
                <Link to={`/authentication`} className="link">
                  <li className="create-account">Créer un compte</li>
                </Link>
                <li>Se connecter</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
