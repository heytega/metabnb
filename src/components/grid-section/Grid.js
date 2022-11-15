import React from "react";
import "./Grid.css";
import Card from "../card/Card";

const Grid = ({ Data }) => {
  return (
    <div className="grid-section">
      {Data.map((card, index) => {
        return <Card card={card} id={index} />;
      })}
    </div>
  );
};

export default Grid;
