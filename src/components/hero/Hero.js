import React, { useEffect } from "react";
import "./Hero.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Image1 from "../../images/hero images/2.png";
import Image2 from "../../images/hero images/1.png";
import Image3 from "../../images/hero images/4.png";
import Image4 from "../../images/hero images/3.png";

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="hero-grid">
      <div className="content">
        <h1 className="hero-header">
          Rent a <span className="Purple">Place</span> away from{" "}
          <span className="Purple">Home</span> in the{" "}
          <span className="Purple">Metaverse</span>
        </h1>
        <p>
          we provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone
        </p>

        <form>
          <div className="form-control">
            <input
              type="text"
              name="search"
              id="search-input"
              placeholder="Search for location"
            />
            <button id="search-button" type="submit">
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="images">
        <div className="image-grid">
          <img data-aos="fade-down" src={Image1} alt="" className="image-1" />
          <img data-aos="fade-right" src={Image2} alt="" className="image-2" />
          <img data-aos="fade-up" src={Image3} alt="" className="image-3" />
          <img data-aos="fade-right" src={Image4} alt="" className="image-4" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
