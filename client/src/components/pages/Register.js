import React, { useState } from "react";

export default function Register({ name }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [varifyPpassword, setVarifyPassword] = useState("");
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

                  <form className="form-horizontal">
                    <div className="card-body">
                      <div className="form-group row">
                        <label className="col-sm-12 col-form-label">Email</label>
                        <div className="col-sm-12">
                          <input
                            
                            className="form-control"
                            id="inputEmail"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value) }
                            value={email}
                          />
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
                            onChange={(e) => setPassword(e.target.value) }
                            value={password}
                          />
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
                            onChange={(e) => setVarifyPassword(e.target.value) }
                            value={varifyPpassword}
                          />
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
