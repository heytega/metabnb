import React from "react";
import "./placetobe.css";
import Grid from "../../components/grid-section/Grid";
import Data from "../../placetobeData";
import setting from "../../images/place images/setting-5.svg";
import select from "../../images/place images/select.svg";

const Placetobe = () => {
  return (
    <section className="placetobe-container">
      <div className="submenu-container">
        <ul className="submenu">
          <li>Restaurant</li>
          <li>Cottage</li>
          <li>Castle</li>
          <li>Fantastic city</li>
          <li>Beach</li>
          <li>Carbins</li>
          <li>Off-grid</li>
          <li>Farm</li>
        </ul>
        <div className="filter select-menu">
          <p>Restaurant</p>
          <img src={select} alt="" />
        </div>
        <div className="filter set-filter">
          <p>Location</p>
          <img src={setting} alt="" />
        </div>
      </div>
      <Grid Data={Data} />
    </section>
  );
};

export default Placetobe;
