import React from "react";
import { Link } from "react-router-dom";
import "../HotAccessoriesMenu/HotAccessoriesMenu.css";

const HotAccessoriesMenu = () => {
  return (
    <div className="hot-accessories-menu">
      <Link className="HotAccessoriesLink" to="/music">
        Music Store
      </Link>
      <Link className="HotAccessoriesLink" to="/smartDevices">
        Smart Devices
      </Link>
      <Link className="HotAccessoriesLink" to="/home">
        Home
      </Link>
      <Link className="HotAccessoriesLink" to="/lifeStyle">
        Lifestyle
      </Link>
      <Link className="HotAccessoriesLink" to="/mobileAccessories">
        Mobile Accessories
      </Link>
    </div>
  );
};

export default HotAccessoriesMenu;
