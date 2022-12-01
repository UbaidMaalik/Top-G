import React from "react";
import Button from "./Button";

const Product3 = () => {
  return (
    <section className="product3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 sheer-left">
            <h4>STRENGTH. PERSPICACITY. INDEFATIGABILITY.</h4>
            <h2>
              SHEER <span className="sheer-title">INDEFATIGABILITY</span>
            </h2>
            <p>
              <ul>
                <li>
                  Scientists and biochemists have been working to develop the
                  perfect multivitamin for the general public and sportsmen
                  since the introduction of <span>multivitamins</span> in 1943.{" "}
                  <span>TOP G</span> highlights what we believe to be a crucial
                  component of every person's life,{" "}
                  <span>regardless of lifestyle</span>, we examine and detail
                  what to take and what ideal dosage is the <span>safest</span>{" "}
                  and most <span>effective</span>.
                </li>
              </ul>
              <ul>
                <li>
                  <span>SHEER</span> is the most recent addition to the TOP G
                  line up of products for muscle recovery, weight loss support,
                  and overall health. Every active person requires the{" "}
                  <span>right quantity of daily vitamins</span> and recovery
                  elements, and this{" "}
                  <span>
                    high concentration, high performance multivitamin and
                    multi-mineral provides both
                  </span>
                </li>
              </ul>
              <ul>
                <li>
                  <span>SHEER</span> is the <span>catalyst</span> that{" "}
                  <span>allows your body to focus on recovery</span> after a{" "}
                  <span>long</span> and <span>arduous workout</span>. It also
                  functions as an anti-oxidant, allowing our bodies to fully
                  recover immediately preceding and for days following long and
                  gruelling cardio and anaerobic training.
                </li>
              </ul>
            </p>
            <Button titleName="ADD TO CART" />
          </div>
          <div className="col-md-6 sheer-right">
            <div>
              <img className="img-fluid" src="/images/sheer.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product3;
