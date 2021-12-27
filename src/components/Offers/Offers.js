import React from "react";
import Offer from "./Offer";
import "../Offers/Offers.css";

const Offers = ({ offers }) => {
  return (
    <div className="offersSection">
      {offers.map((offer, index) => (
        <Offer
          key={index + 1}
          index={index}
          src={offer.image}
          links={offer.url}
        />
      ))}
    </div>
  );
};

export default Offers;
