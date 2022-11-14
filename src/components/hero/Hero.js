import React from "react";
import "./Hero.css";
import Image1 from "../../images/hero images/image 3.svg";
import Image2 from "../../images/hero images/image 4.svg";
import Image3 from "../../images/hero images/image 5.svg";
import Image4 from "../../images/hero images/image 6.svg";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-grid">
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
            <img src={Image1} alt="" className="image-1" />
            <img src={Image2} alt="" className="image-2" />
            <img src={Image3} alt="" className="image-3" />
            <img src={Image4} alt="" className="image-4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
