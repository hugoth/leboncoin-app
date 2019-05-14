import React from "react";
import Home from "./Containers/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Offer from "./Containers/Offer";
import Header from "./Containers/Header";
import Authentication from "./Containers/Authentication";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route
          exact
          path="/authentication/"
          render={props => <Authentication {...props} />}
        />
        <Route exact path="/" render={props => <Home {...props} />} />
        <Route path="/offer/:offerId" render={props => <Offer {...props} />} />
      </div>
    </Router>
  );
}

export default App;

{
  /* <BrowserRouter>
  <div>
    <Route path="/new-offer" exact={false} component={NewOfferPage} />
  </div>

</BrowserRouter>; */
}
