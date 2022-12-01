import React from "react";
import Button from "./Button";

const AllThree = () => {
  return (
    <section className="try">
      <div className="container-fluid">
        <div className="col-md-12 try-title">
          <h1>TRY THEM ALL AND SAVE 20%</h1>
          <h3>
            <span className="top">TOP G</span> Bundle :{" "}
            <span className="all">All 3</span> Supple
            <span className="ments">ments</span>
          </h3>
        </div>
        <div className="row align-items-center">
          <div className="col-md-12 try-image">
            <div>
              <img className="img-fluid" src="/images/ALLTHREEnbg.png" alt="" />
            </div>
            <Button titleName="ADD TO CART" className="TryBtn" />
            <div>
              <img
                className="img-fluid"
                src="/images/products-top2.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllThree;
