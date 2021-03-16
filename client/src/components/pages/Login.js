import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import AuthContext from "../../context/AuthContext";

export default function Login({ name }) {
  const { getLoggedin } = useContext(AuthContext);
  let history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //errors
  const [erremail, seterrEmail] = useState("");
  const [errpassword, seterrPassword] = useState("");
  const [displaymessage, setdisplaymessage] = useState("");

  function resetErrors() {
    seterrEmail("");
    seterrPassword("");
    setdisplaymessage("");
  }

  async function login(e) {
    e.preventDefault();
    try {
      const registerData = {
        email,
        password,
      };

      //reset errors before axios call
      resetErrors();

      var resData = await axios.post(
        "http://localhost:5000/auth/login",
        registerData
      );

      if (resData.data.status === "success") {
        getLoggedin();
        history.push("/user");
      }

      if (resData.data.displaymessage) {
        setdisplaymessage(
          <div className="alert alert-danger alert-dismissible animate__animated animate__flash">
            {resData.data.displaymessage}
          </div>
        );
      }

      if (resData.data.verrors) {
        var verror = resData.data.verrors;

        for (const verr in verror) {
          if (verror[verr].field === "erremail") {
            seterrEmail(
              <div className="animate__animated animate__flash">
                {verror[verr].message}
              </div>
            );
          }
          if (verror[verr].field === "errpassword") {
            seterrPassword(
              <div className="animate__animated animate__flash">
                {verror[verr].message}
              </div>
            );
          }
        }
      } else {
      }
    } catch (err) {
      console.error("login error", err);
    }
  } //login
  return (
    <>
      <div className="content-wrapper">
        <div className="content">
          <div className="container">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>{name}</h1>
              </div>
            </div>

            <div className="row justify-content-md-center">
              <div className="col-md-6">
                <div className="card card-default">
                  <div className="card-header bg-light color-palette">
                    <h3 className="card-title">Please Login</h3>
                  </div>

                  <form onSubmit={login} className="form-horizontal">
                    <div className="card-body">
                      <div>{displaymessage}</div>
                      <div className="form-group row">
                        <label className="col-sm-12 col-form-label">
                          Email
                        </label>
                        <div className="col-sm-12">
                          <input
                            className="form-control"
                            id="inputEmail"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                          />
                        </div>
                        <div className="col-sm-12">
                          <div className="text-danger">{erremail}</div>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-12 col-form-label">
                          Password
                        </label>
                        <div className="col-sm-12">
                          <input
                            type="password"
                            className="form-control"
                            id="inputPassword"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                          />
                        </div>
                        <div className="col-sm-12">
                          <div className="text-danger">{errpassword}</div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                      <button
                        type="submit"
                        className="btn btn-info float-right"
                      >
                        login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
