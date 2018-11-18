import React from "react";
import { Route, Switch } from "react-router-dom";

// Routes
import Home from "./Home";
import About from "./About";
import NewsList from "./Newslist";
import FourOfour from "./FourOfour/index";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/news" component={NewsList} />
        <Route component={FourOfour} />
      </Switch>
    </div>
  );
};

export default Routes;
