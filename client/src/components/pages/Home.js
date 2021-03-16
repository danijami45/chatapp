import React from "react";

export default function Home({ name }) {
  return (
    <>
      <div className="content-wrapper">
        <div className="content">
          <div className="container">
            {/*  */}
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>{name}</h1>
              </div>
            </div>
            {/*  */}

            <div className="row">
              <div className="col-md-6"></div>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
}
