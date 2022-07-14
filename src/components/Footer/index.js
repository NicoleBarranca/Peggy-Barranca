import React from "react";
import IG from "../../img/IG.png";
import FB from "../../img/FB.png";

function Footer() {
  return (
    <div className="footer">
      <div>
        <h2>Learn More</h2>
        <ul className="fMenuItems">
          <li>About</li>
          <li>Gallery</li>
          <li>Blog</li>
        </ul>
      </div>
      <div>
        <h2>Contact</h2>
        <ul className="fMenuItems">
          <li>Maggie Magee</li>
          <li>Email@email.com</li>
          <li>732732732732</li>
        </ul>
      </div>
      <div>
        <h2>Follow Maggie</h2>
        <ul>
          <img src={IG} alt="Instagram Logo" />
          <img src={FB} alt="Facebook Logo" />
        </ul>
      </div>
    </div>
  );
}

export default Footer;
