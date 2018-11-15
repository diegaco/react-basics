import React from "react";
import { Route } from "react-router-dom";

// Routes
import Home from "./Home";
import About from "./About";
import NewsList from "./Newslist";

const Routes = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/news" component={NewsList} />
    </div>
  );
};

export default Routes;
