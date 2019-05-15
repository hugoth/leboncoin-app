import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class LogIn extends Component {
  state = {
    email: "",
    password: "",
    error: null,
    isLogin: false
  };

  handleChange = e => {
    e.preventDefault();
    //annule le comportement par défaut de la reconduction de page
    const name = e.target.name;
    const value = e.target.value;
    console.log(e.target.value);
    this.setState({
      [name]: value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    await axios
      .post("https://leboncoin-api.herokuapp.com/api/user/log_in", {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        this.setState({ isLogin: true });
        console.log(response.data);
        this.props.setUser({
          id: response.data._id,
          token: response.data.token,
          username: response.data.account.username
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    if (this.state.isLogin && this.props.user.username) {
      return (
        <div>
          <h3>Hello vous etes connecté {this.props.user.username}</h3>
        </div>
      );
    } else {
      return (
        <div className="container-login">
          <div className="container-smaller">
            <form onSubmit={this.handleSubmit}>
              <h1>Connexion</h1>
              <h4>Adresse Mail</h4>
              <input
                id="email"
                name="email"
                type="text"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <h4>Mot de passe</h4>
              <input
                id="password"
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <button className="connect-button" type="submit">
                Se connecter
              </button>

              <div className="bottom-part">
                <h4>Vous n'avez pas de compte?</h4>
              </div>
              <Link to={`/signup`} className="link">
                <button className="connect-button-1">Créer un compte</button>
              </Link>
            </form>
          </div>
          <button onClick={() => console.log(this.state)}>Test state</button>
        </div>
      );
    }
  }
}

export default LogIn;
