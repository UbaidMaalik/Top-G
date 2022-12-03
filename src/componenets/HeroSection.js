import React from "react";
// import Button from "./Button";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const HeroSection = (props) => {
  const images = [
    {
      original: "/images/All three loop.gif",
      thumbnail: "/images/slider1.png",
    },
    {
      original: "/images/slider2.png",
      thumbnail: "/images/slider2.png",
    },
    {
      original: "/images/unmatched glitched 360.gif",
      thumbnail: "/images/slider3.png",
    },
    {
      original: "/images/slider4.png",
      thumbnail: "/images/slider4.png",
    },
  ];
  return (
    <section className="HeroSection">
      <div className="container-fluid">
        <div className="row">
          <ImageGallery
            items={images}
            showNav={false}
            showFullscreenButton={false}
            useBrowserFullscreen={true}
            showPlayButton={false}
            width="100%"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
