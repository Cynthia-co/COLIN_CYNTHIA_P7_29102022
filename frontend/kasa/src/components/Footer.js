import React from "react";
import logofooter from "../img/logofooter.webp";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__img">
        <img className="footer__img" src={logofooter} alt="footer kasa" />
      </div>
      <div className="footer__txt">
        <p className="footer__txt">© 2020 Kasa. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
