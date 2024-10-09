import React from "react";
import ".././Footer/Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="left">
          <p>
            Designed by <span>Kamran Javaid</span>
          </p>
        </div>
        <div className="right">
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>Contact Us</li>
        </div>
      </div>
    </>
  );
};

export default Footer;
