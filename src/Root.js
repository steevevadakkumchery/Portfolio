import React from "react";
import logo from "./logo.svg";
import "./Root.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Portfolio from "./Portfolio";
import BlogPosts from "./BlogPosts";
import Contact from "./Contact";

function Root() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/blog-posts" component={BlogPosts} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default Root;
