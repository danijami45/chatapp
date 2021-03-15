import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function Register({ name }) {
  let history = useHistory();
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [varifyPassword, setVarifyPassword] = useState("");

  //errors
  const [errfullname, seterrFullName] = useState("");
  const [erremail, seterrEmail] = useState("");
  const [errpassword, seterrPassword] = useState("");
  const [errvarifyPassword, seterrVarifyPassword] = useState("");
  const [displaymessage, setdisplaymessage] = useState("");

  function resetErrors() {
    seterrFullName("");
    seterrEmail("");
    seterrPassword("");
    seterrVarifyPassword("");
    setdisplaymessage("");
  }

  async function register(e) {
    e.preventDefault();
    try {
      const registerData = {
        fullname,
        email,
        password,
        varifyPassword,
      };

      //reset errors before axios call
      resetErrors();

      var resData = await axios.post(
        "http://localhost:5000/auth/signup",
        registerData
      );

      if (resData.data.displaymessage) {
        // setdisplaymessage(resData.data.displaymessage);
        setdisplaymessage(
          <div className="alert alert-danger alert-dismissible animate__animated animate__flash">
            {resData.data.displaymessage}
          </div>
        );
      }

      if (resData.data.status === "success") {
        console.log(resData.data.status);
        history.push("/");
      }

      if (resData.data.verrors) {
        var verror = resData.data.verrors;

        console.log(verror);

        for (const verr in verror) {
          if (verror[verr].field === "errfullname") {
            seterrFullName(
              <div className="animate__animated animate__flash">
                {verror[verr].message}
              </div>
            );
          }
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
          if (verror[verr].field === "errvarifyPassword") {
            seterrVarifyPassword(
              <div className="animate__animated animate__flash">
                {verror[verr].message}
              </div>
            );
          }
        }
      } else {
      }
    } catch (err) {
      console.error("register error", err);
    }
  } //register
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
                    <h3 className="card-title">Please Register</h3>
                  </div>

                  <form onSubmit={register} className="form-horizontal">
                    <div className="card-body">
                      <div>{displaymessage}</div>
                      <div className="form-group row">
                        <label className="col-sm-12 col-form-label">
                          Full Name
                        </label>
                        <div className="col-sm-12">
                          <input
                            className="form-control"
                            id="inputFullName"
                            placeholder="Full Name"
                            onChange={(e) => setFullName(e.target.value)}
                            value={fullname}
                          />
                        </div>
                        <div className="col-sm-12">
                          <div className="text-danger">{errfullname}</div>
                        </div>
                      </div>

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
                      <div className="form-group row">
                        <label className="col-sm-12 col-form-label">
                          Varify Password
                        </label>
                        <div className="col-sm-12">
                          <input
                            type="password"
                            className="form-control"
                            id="inputVarifyPassword"
                            placeholder="Varify Password"
                            onChange={(e) => setVarifyPassword(e.target.value)}
                            value={varifyPassword}
                          />
                        </div>
                        <div className="col-sm-12">
                          <div className="text-danger">{errvarifyPassword}</div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                      <button
                        type="submit"
                        className="btn btn-info float-right"
                      >
                        Sign up
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
