import React from "react";
import "./Footer.css";
import metabnb from "../../images/footer images/footerlogo.svg";
import facebook from "../../images/footer images/facebook.svg";
import instagram from "../../images/footer images/instagram.svg";
import twitter from "../../images/footer images/twitter.svg";

const Footer = () => {
  return (
    <section className="footer-container">
      <div className="grid-container">
        <div className="logo-container">
          <img src={metabnb} alt="metabnb logo" className="main-logo" />
          <div className="social-container">
            <img src={facebook} alt="facebook logo" className="facebook" />
            <img src={instagram} alt="instagram logo" className="instagram" />
            <img src={twitter} alt="twitter logo" className="twitter" />
          </div>
          <p>
            <span>&copy;</span> 2022 Metabnb
          </p>
        </div>
        <div className="list-container">
          <ul>
            <li>
              <h2>Community</h2>
            </li>
            <li>
              <a href="#">NFT</a>
            </li>
            <li>
              <a href="#">Tokens</a>
            </li>
            <li>
              <a href="#">Landlords</a>
            </li>
            <li>
              <a href="#">Discord</a>
            </li>
          </ul>

          <ul>
            <li>
              <h2>Places</h2>
            </li>
            <li>
              <a href="#">Castle</a>
            </li>
            <li>
              <a href="#">Farms</a>
            </li>
            <li>
              <a href="#">Beach</a>
            </li>
            <li>
              <a href="#">Learn more</a>
            </li>
          </ul>
          <ul>
            <li>
              <h2>About us</h2>
            </li>
            <li>
              <a href="#">Road map</a>
            </li>
            <li>
              <a href="#">Creators</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
