import React from "react";
import Home from "./Containers/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Offer from "./Containers/Offer";
import Header from "./Containers/Header";
import SignUp from "./Containers/SignUp";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route
          exact
          path="/authentication/"
          render={props => <SignUp {...props} />}
        />
        <Route exact path="/" render={props => <Home {...props} />} />
        <Route path="/offer/:offerId" render={props => <Offer {...props} />} />
      </div>
    </Router>
  );
}

export default App;
