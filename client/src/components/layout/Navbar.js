import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import LogoutBtn from "./LogoutBtn";

export default function Navbar() {
  const { loggedin } = useContext(AuthContext);

  return (
    <>
      <nav className="main-header navbar navbar-expand-md navbar-light navbar-white">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img
              src="theme/dist/img/AdminLTELogo.png"
              alt="AdminLTE Logo"
              className="brand-image img-circle elevation-3"
              // style="opacity: 0.8"
            />
            <span className="brand-text font-weight-light">MyChat</span>
          </a>

          <button
            className="navbar-toggler order-1"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">test</span>
          </button>

          <div className="collapse navbar-collapse order-3" id="navbarCollapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              {loggedin === true && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/user">
                      User
                    </Link>
                  </li>
                  <li className="nav-item">
                    <LogoutBtn className="nav-link"/>
                  </li>
                </>
              )}

              {loggedin === false && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
            
          </div>
        </div>
      </nav>
    </>
  );
}
