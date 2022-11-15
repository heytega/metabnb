import React from "react";
import Hero from "../../components/hero/Hero";
import Nfts from "../../components/nfts/Nfts";
import Showcase from "../../components/showcase/Showcase";

const Home = () => {
  return (
    <section className="home-container">
      <Hero />
      <Showcase />
      <Nfts />
    </section>
  );
};

export default Home;
