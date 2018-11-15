import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import About from "../components/About";
import Home from "../components/Home";

// Routes
import App from "../components/App";

const Routes = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
};

export default Routes;
