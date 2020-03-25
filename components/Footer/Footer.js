import React from "react";
import { render } from "react-dom";
import "./Footer.css";

const Footer = (props) => {
  return (
    <div className="footer">
      <div className="footer-content">

        <div className="footer-section about">
          <h1 className="logo-text"><span>OSU</span>Reviews</h1>
          <p>This is the cool website.</p>
        </div>

        <div className="footer-section links">
          <h2>Quick links</h2>
            <br/>
            <ul>
              <a href="#"><li>About</li></a>
              <a href="#"><li>Contact</li></a>
              <a href="#"><li>Terms and Conditions</li></a>
            </ul>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; OSUReviews.com | Design by Aeijan Bajracharya
      </div>
    </div>
  )
};

export default Footer;
