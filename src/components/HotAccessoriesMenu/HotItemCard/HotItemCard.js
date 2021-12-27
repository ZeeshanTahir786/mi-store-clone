import React from "react";
import "../HotItemCard/HotItemCard.css";

const HotItemCard = ({ name, price, image, index }) => {
  return (
    <div className="hotItemCard">
      <img src={image} alt={`${index} product`} />
      <p>{name}</p>
      <span>{price}</span>
    </div>
  );
};

export default HotItemCard;
