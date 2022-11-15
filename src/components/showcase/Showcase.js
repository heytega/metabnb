import React from "react";
import "./Showcase.css";
import MBToken from "../../images/home images/mbtoken.svg";
import MetaMask from "../../images/home images/metamask.svg";
import Opensea from "../../images/home images/opensea.svg";
import Data from "../../Data";
import Grid from "../grid-section/Grid";

const Showcase = () => {
  return (
    <section className="showcase-container">
      <div className="logo-section">
        <img src={MBToken} alt="MBToken logo" className="mbtoken" />
        <img src={MetaMask} alt="METAMASK logo" className="metamask" />
        <img src={Opensea} alt="OpenSea logo" className="opensea" />
      </div>

      <h2 className="showcase-header">Inspiration for your next adventure</h2>

      <Grid Data={Data} />
    </section>
  );
};

export default Showcase;
