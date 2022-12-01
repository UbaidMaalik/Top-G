import React from "react";
import AllThree from "../componenets/AllThree";
import Header from "../componenets/Header";
import HeroSection from "../componenets/HeroSection";
import Newsletter from "../componenets/Newsletter";
import Product1 from "../componenets/Product1";
import Product2 from "../componenets/Product2";
import Product3 from "../componenets/Product3";

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <HeroSection />
      <Product1 />
      <Product2 />
      <Product3 />
      <AllThree />
      <Newsletter />
    </div>
  );
};

export default Home;
