import React from "react";
import Button from "./Button";

const Product2 = () => {
  return (
    <section className="product2">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 unmatched-left">
            <div>
              <img className="img-fluid" src="/images/unmatched.png" alt="" />
            </div>
          </div>
          <div className="col-md-6 unmatched-right">
            <h4>STRENGTH. PERSPICACITY. INDEFATIGABILITY.</h4>
            <h2>UNMATCHED PERSPICACITY</h2>
            <p>
              <ul>
                <li>State-of-the-Art “Smart Nutrient” Ingredient Profile</li>
                <li>
                  Promotes Enhanced Cognitive Function, Memory, and Learning
                </li>
                <li>
                  The “New Kid on the Block” of Nutraceutical Brain Science for
                  Cognitive Function
                </li>
              </ul>
              <ul>
                <li>
                  <span>UNMATCHED</span> is specifically designed to{" "}
                  <span>help your attention</span> to detail as well as
                  retaining and <span>recalling information faster</span>. At
                  the heart of this truly unique formula is{" "}
                  <span>
                    AshwaPure™, a highly concentrated Ashwagandha extract
                  </span>
                  , researchers suggest that it helps{" "}
                  <span>support memory and mental clarity</span>.
                </li>
              </ul>
              <ul>
                <li>
                  Neurons in the brain are chemically communicating cells. The
                  human brain is made up of tens of billions of neurons, each of
                  which is connected to thousands of other neurons. Thus, the
                  brain has a highly specialised network of trillions of
                  connections (synapses). When these neural pathways malfunction
                  or become inhibited, affective (behavioural) symptoms occur.
                  When compounds, including psychoactive nutraceuticals, have
                  the potential to alter neurological function, these
                  behavioural symptoms may be relieved, aggravated, or produced.
                  Depleted levels of chemical messengers in the brain
                  (neurotransmitters) negatively impact various aspects of
                  attention, such as impulsivity, hyperactivity, and lack of
                  arousal. Excessive excitement and stress can have profound
                  effects on cognitive functions, especially memory and mood.
                </li>
                <li>
                  While some degree of cognitive decline is inevitable in older
                  adults,{" "}
                  <span>
                    steps can be taken to prevent or at least minimise the loss
                    of cognitive function
                  </span>
                  . These steps include maintaining a{" "}
                  <span>
                    healthy and active lifestyle, good nutrition, and
                    pharmaceutical supplements to promote and support brain
                    health
                  </span>
                  . This field of nutritional supplements is challenging and
                  rapidly evolving. While there are many compounds that have
                  been scientifically supported for this purpose, it is likely
                  that many more are being developed that show great promise in
                  the field of cognitive support.
                </li>
              </ul>
            </p>
            <Button titleName="ADD TO CART" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product2;
