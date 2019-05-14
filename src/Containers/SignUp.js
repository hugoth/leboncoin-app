import React, { Component } from "react";
import Cookies from "js-cookie";
import axios from "axios";

class SignUp extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    password2: "",
    isLogin: false
  };

  handleChange = e => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    console.log(e.target.name, e.target.value);
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    if (this.state.password !== this.state.password2) {
      console.log("please enter the same password");
    } else {
      axios
        .post("https://leboncoin-api.herokuapp.com/api/user/sign_up", {
          email: this.state.email,
          username: this.state.username,
          password: this.state.password
        })
        .then(response => {
          if (response.data && response.data.token) {
            this.setState({ isLogin: true });
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
    e.preventDefault();
  };

  render() {
    if (this.state.isLogin) {
      return (
        <div>
          <h2>You have been successfuly registered</h2>
          <h3>Welcome on board {this.state.username}</h3>
        </div>
      );
    } else {
      return (
        <div className="container-authentification">
          <div className="authentification-left-top">
            <h2>Pourquoi créer un compte ?</h2>
            <div classNAme="left-logo-text">
              <div className="text-logo">
                <div className="paragraphe-1">
                  <i className="far fa-clock" />
                  <div className="text-rigt-of-logo">
                    <h4>Gagnez du temps</h4>
                    <p>
                      Publiez vos annonces rapidement, avec vos informations
                      pré-remplies chaque fois que vous souhaitez déposer une
                      nouvelle annonce.
                    </p>
                  </div>
                </div>
                <div>
                  {" "}
                  <div className="paragraphe-1">
                    <i className="fas fa-bell" />
                    <div className="text-rigt-of-logo">
                      <h4>Soyez les premiers informés</h4>
                      <p>
                        créez des alertes Immo ou Emploi et ne manquez pas
                        jamais l'annonce qui vous intéresse.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="paragraphe-1">
                  <i className="far fa-eye" />
                  <div className="text-rigt-of-logo-eye">
                    <h4>Visibilité</h4>
                    <p>
                      Suivez les statistiques de vos annonces(nombre de fois où
                      votre annonce a été vue, nombre de contacts recus).
                    </p>
                  </div>
                </div>

                <div />
              </div>
            </div>
          </div>
          <div className="authentification-right">
            <h2>Créez un compte</h2>
            <form className="register-form" onSubmit={this.handleSubmit}>
              <div>
                <h4>Pseudo</h4>
                <input
                  id="username"
                  name="username"
                  type="text"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <h4>Adresse Mail</h4>
                <input
                  id="email"
                  name="email"
                  type="text"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <div className="password">
                  <div>
                    <h4>Mot de passe</h4>
                    <input
                      id="password"
                      name="password"
                      type="text"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div>
                    <h4>Confirmer mot de passe</h4>

                    <input
                      id="password2"
                      name="password2"
                      type="text"
                      value={this.state.password2}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="checkbox">
                  <input type="checkbox" />
                  <p>
                    Je souhaite recevoir des offres des partenaires du site
                    leboncoin succeptibles de m'intéresser
                  </p>
                </div>
                <div className="checkbox">
                  <input type="checkbox" />
                  <p>J'accepte les Conditions Générales de Vente </p>
                </div>
                <button>Créer mon Compte Personnel</button>
              </div>
            </form>
          </div>
        </div>
      );
    }
  }
}

export default SignUp;

{
  /* <div>
        <div className="container-authentification">
         
                
          <div className="authentification-right">
            <h2>Créez un compte</h2>
            <form className="register-form" onSubmit={this.handleSubmit}>
              <div>
                <h4>Pseudo</h4>
                <input
                  type="text"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <h4>Adresse Mail</h4>
                <input />
              </div>
              <div>
                <div className="password">
                  <div>
                    <h4>Mot de passe</h4>
                    <input />
                  </div>
                  <div>
                    <h4>Confirmer le mot de passe</h4>
                    <input />
                  </div>
                </div>
              </div>

              <div className="checkbox">
                <input type="checkbox" />
                <p>
                  Je souhaite recevoir des offres des partenaires du site
                  leboncoin succeptibles de m'intéresser
                </p>
              </div>
              <div className="checkbox">
                <input type="checkbox" />
                <p>"J'accepte les"</p>
                <p>Conditions Générales de Vente</p>
              </div>
              <button>Créer mon Compte Personnel</button>
            </form>
          </div>

          <p>{this.state.username}</p>
        </div>
      </div>
    );
  } */
}
