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
        <div>
          <div>Authentication</div>
          <form className="register-form" onSubmit={this.handleSubmit}>
            <div>
              <p>Pseudo</p>
              <label htmlFor="email">Email</label>
              <input
                id="username"
                name="username"
                type="text"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label>Adresse Mail</label>
              <input
                id="email"
                name="email"
                type="text"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label>Mot de passe</label>
              <input
                id="password"
                name="password"
                type="text"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <label>Confirmer mot de passe</label>
              <input
                id="password2"
                name="password2"
                type="text"
                value={this.state.password2}
                onChange={this.handleChange}
              />
            </div>
            <button>Submit</button>
          </form>

          <p>{this.state.username}</p>
          <p>{this.state.email}</p>
        </div>
      );
    }
  }
}

export default SignUp;
