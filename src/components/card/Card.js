import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Card.css";

const Card = ({ card, id }) => {
  const [like, setLike] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section data-aos="fade-up" key={id} className="card-container">
      <div className="image-container">
        <img src={card.image} alt="" />
        <button className="heart" onClick={() => setLike(!like)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={like ? "#A02279" : "#D7D7D7"}
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>
      </div>
      <div className="name-container">
        <p className="name">{card.name}</p>
        <p className="price">{card.price}</p>
      </div>
      <div className="avail-container">
        <div className="distance">{card.distance}</div>
        <div className="available">{card.available}</div>
      </div>
      <div className="rating">
        {[...Array(5)].map((star, index) => {
          return (
            <span
              key={index}
              className={index <= card.star ? "star on" : "star off"}
            >
              &#9733;
            </span>
          );
        })}
      </div>
    </section>
  );
};

export default Card;
