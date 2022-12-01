import React from "react";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="container">
        <div className="col-md-12 news-title">
          <h1>Sign Up To our newsletter</h1>
          <h3>To get Exclusive Deals</h3>
        </div>
        <div className="row align-items-center">
          <div className="col-md-12 news-form">
            <form action="#">
              <input type="email" placeholder="Email Address" />
              <br />
              <input type="submit" value="submit" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
