import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profile/:username" component={Profile} />
        <Route path="/404" component={NotFound} />
        <Redirect from="/profile" exact to="/404" />
      </Switch>
    </BrowserRouter>
  );
}
