import React, { Component } from "react";
import Cookies from "js-cookie";
const SHA256 = require("crypto-js/sha256");
const encBase64 = require("crypto-js/enc-base64");
const uid2 = require("uid2");

class Authentication extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      username: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    console.log(form);
  };
  render() {
    const token = uid2(16);
    Cookies.set("token", token);

    return (
      <div>
        <div>Authentication</div>
        <form className="register-form" onSubmit={this.handleSubmit}>
          <div>
            <p>Pseudo</p>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <p>Adresse Mail</p>
            <input />
          </div>
          <div>
            <p>Mot de passe</p>
            <input />
            <p>Confirmer mot de passe</p>
            <input />
          </div>
          <button>Submit</button>
        </form>

        <p>{this.state.username}</p>
      </div>
    );
  }
}

export default Authentication;
