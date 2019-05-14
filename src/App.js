import React from "react";
import Home from "./Containers/Home";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Offer from "./Containers/Offer";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <h2>Header</h2>
        <Route exact path="/" render={props => <Home {...props} />} />
        <Route path="/offer/:offerId" render={props => <Offer {...props} />} />
      </div>
    </Router>
  );
}

export default App;
