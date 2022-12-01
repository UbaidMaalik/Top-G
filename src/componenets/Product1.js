import React from "react";
import Button from "./Button";

const Product1 = () => {
  return (
    <section className="product1">
      <div className="container">
        <div className="col-md-12 product-title">
          <h1>OUR PRODUCTS</h1>
          <h3>START YOUR BODY & MIND TRANSFORMATION</h3>
        </div>
        <div className="row align-items-center">
          <div className="col-md-6 feared-left">
            <h4>STRENGTH. PERSPICACITY. INDEFATIGABILITY.</h4>
            <h2>FEARED OPPONENT</h2>
            <p>
              <ul>
                <li>INCREASES TESTOSTERONE LEVELS</li>
                <li>FAST MUSCLE RECOVERY</li>
                <li>MALE SEX DRIVE/LIBIDO ELEVATOR</li>
                <li>INCREASES STAMINA</li>
                <li>PROMOTES PHYSICAL STRENGTH AND ENERGY</li>
              </ul>
              <ul>
                <li>
                  FEARED is a <span>male testosterone booster</span> that
                  provides <span>an exclusive powerful formula</span> to{" "}
                  <span>increase testosterone production, strength</span> and{" "}
                  <span>performance</span>.
                </li>
              </ul>
              <ul>
                <li>
                  FEARED will help build <span>lean muscle</span> and{" "}
                  <span>improve stamina</span> and <span>sex drive</span>! This
                  brand new product contains the{" "}
                  <span>highest quality extracts</span> in a{" "}
                  <span>potent dose of FADOGIA and MACA</span> known{" "}
                  <span>to boost testosterone levels</span> to the point WHERE
                  YOU FEEL 21 again! According to recent studies,{" "}
                  <span>
                    MACA has been shown to support male hormone balance
                  </span>{" "}
                  (including testosterone availability){" "}
                  <span>libido, and performance</span>. A study that evaluated
                  the testosteroneboosting benefits of MACA also found{" "}
                  <span>
                    higher levels of energy Sand physical strength in athletes
                    who used MACA supplements
                  </span>{" "}
                  than in those who did not.FADOGIA AGRESTIS has been{" "}
                  <span>
                    shown to increase blood testosterone levels after 5 days of
                    daily intake! FADOGIA AGRESTIS increases
                  </span>{" "}
                  total and free <span>testosterone levels</span>, and helps{" "}
                  <span>athletes recover</span> from{" "}
                  <span>strenuous workouts</span>.{" "}
                </li>
              </ul>
              <ul>
                <li>
                  <span>FEARED</span> with <span>FADOGIA AGRESTIS</span> extract{" "}
                  <span>
                    helps increase your body’s total and free testosterone!
                  </span>
                </li>
              </ul>
            </p>
            <Button titleName="ADD TO CART" />
          </div>
          <div className="col-md-6 feared-right">
            <div>
              <img className="img-fluid" src="/images/feared.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product1;
