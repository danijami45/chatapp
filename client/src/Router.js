import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import User from "./components/pages/User";
import AuthContext from "./context/AuthContext";

export default function Router() {
  const { loggedin } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home name={`Home`} />
        </Route>
        {loggedin === true && (
          <>
            <Route path="/user">
              <User name={`User`} />
            </Route>
          </>
        )}
        {loggedin === false && (
          <>
            <Route path="/register">
              <Register name={`Register`} />
            </Route>
            <Route path="/login">
              <Login name={`Login`} />
            </Route>
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
}
