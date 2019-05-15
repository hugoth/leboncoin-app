import React from "react";
import Header from "./Components/Header";
import Home from "./Containers/Home";
import Offer from "./Containers/Offer";
import SignUp from "./Containers/SignUp";
import Login from "./Containers/LogIn";
import Profil from "./Containers/Profil";
import Cookies from "js-cookie";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    // On met un constructor pour exécuter du code à la reinitialisation
    // lire les cookies
    const token = Cookies.get("token");
    const id = Cookies.get("id");
    const username = Cookies.get("username");

    const userfromcookie = {
      token,
      id,
      username
    };

    this.state = {
      user: token === undefined ? null : userfromcookie
    };
  }

  unsetUser = () => {
    Cookies.remove("token");
    Cookies.remove("id");
    Cookies.remove("username");
    this.setState({ user: null });
  };

  setUser = user => {
    // on sauvegarde les infos de l'user dans des cookies
    Cookies.set("token", user.token);
    Cookies.set("id", user.id);
    Cookies.set("username", user.username);
    this.setState({ user: user });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Header user={this.state.user} unsetUser={this.unsetUser} />
          <Route
            exact
            path="/"
            render={props => <Home {...props} AppState={this.state} />}
          />

          <Route
            path="/profil"
            render={() => {
              if (this.state.user === null) {
                return <Redirect to="/" />;
              }
              return <Profil user={this.state.user} />;
            }}
          />

          <Route
            exact
            path="/signup"
            render={() => {
              return <SignUp setUser={this.setUser} />;
            }}
          />
          <Route
            exact
            path="/login"
            render={() => {
              return <Login setUser={this.setUser} user={this.state.user} />;
            }}
          />

          <Route
            path="/offer/:offerId"
            render={props => <Offer {...props} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
