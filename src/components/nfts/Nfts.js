import React from "react";
import "./Nfts.css";
import nftImage from "../../images/home images/nft-image.svg";

const Nfts = () => {
  return (
    <section className="nfts-container">
      <div className="flex-container">
        <div className="content">
          <h2>Metabnb NFTs</h2>
          <p>
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our customers
            access to loads of our exclusive services
          </p>
          <button id="nft-button">Learn more</button>
        </div>
        <div className="image">
          <img src={nftImage} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Nfts;
