import React from "react";
import { Link } from "react-router-dom";
import Filter from "./Filter";

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
          <i className="fas fa-search" />
          <Filter state={props.state} filter={props.filter} />
        </div>

        <div className="border">
          <div className="menu-top-nav-button">
            <nav>
              {props.user === null ? (
                <ul className="menu-top-right">
                  <Link to={`/signup`} className="link">
                    <li className="create-account">Créer un compte</li>
                  </Link>
                  <Link to={`/login`} className="link">
                    <li>Se connecter</li>{" "}
                  </Link>
                </ul>
              ) : (
                <div>
                  <button onClick={() => props.unsetUser()}>
                    Se déconnecter
                  </button>
                  <Link to={`/profil`} className="link">
                    <i className="fas fa-user" />
                  </Link>
                </div>
              )}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
