import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home name={`Home`} />
        </Route>
        <Route path="/register">
          <Register name={`Register`} />
        </Route>
        <Route path="/login">
          <Login name={`Login`} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
