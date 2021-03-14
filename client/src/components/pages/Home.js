import React from "react";

export default function Home({ name }) {
  return (
    <>
      <div className="content-wrapper">
        <div className="content">
          <div className="container">
            {/*  */}
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1>{name}</h1>
              </div>
            </div>
            {/*  */}

            <div className="row">
              <div className="col-md-6">
                <div className="card card-info">
                  <div className="card-header">
                    <h3 className="card-title">Horizontal Form</h3>
                  </div>

                  <form className="form-horizontal">
                    <div className="card-body">
                      <div className="form-group row">
                        <label
                          for="inputEmail3"
                          className="col-sm-2 col-form-label"
                        >
                          Email
                        </label>
                        <div className="col-sm-10">
                          <input
                            type="email"
                            className="form-control"
                            id="inputEmail3"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          for="inputPassword3"
                          className="col-sm-2 col-form-label"
                        >
                          Password
                        </label>
                        <div className="col-sm-10">
                          <input
                            type="password"
                            className="form-control"
                            id="inputPassword3"
                            placeholder="Password"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="offset-sm-2 col-sm-10">
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="exampleCheck2"
                            />
                            <label
                              className="form-check-label"
                              for="exampleCheck2"
                            >
                              Remember me
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                      <button type="submit" className="btn btn-info">
                        Sign in
                      </button>
                      <button
                        type="submit"
                        className="btn btn-default float-right"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
}
