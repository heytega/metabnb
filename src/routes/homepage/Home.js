import React from "react";
import Hero from "../../components/hero/Hero";
import Showcase from "../../components/showcase/Showcase";

const Home = () => {
  return (
    <section className="home-container">
      <Hero />
      <Showcase />
    </section>
  );
};

export default Home;
