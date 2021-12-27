import React from "react";
// import { Link } from "react-router-dom";

const Offer = ({ index, src, link }) => {
  return (
    <a to={link}>
      <img src={src} alt={`${index} offer`} />
    </a>
  );
};

export default Offer;
