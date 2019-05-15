import React, { Component } from "react";
import Cookies from "js-cookie";
import axios from "axios";

class LogIn extends Component {
  state = {
    email: "",
    password: "",
    isLogin: false
  };

  handleChange = e => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;

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
          <h3>Welcome on board {this.state.username}</h3>
        </div>
      );
    } else {
      return (
        <div className="container-login">
          <div className="container-smaller">
            <form>
              <h1>Connexion</h1>
              <h4>Adresse Mail</h4>
              <input />
              <h4>Mot de passe</h4>
              <input />
              <button className="connect-button">Se connecter</button>

              <div className="bottom-part">
                <h4>Vous n'avez pas de compte?</h4>
              </div>
              <button className="connect-button-1">Créer un compte</button>
            </form>
          </div>
        </div>
      );
    }
  }
}

export default LogIn;
