import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="fMenuItems">
        <h2>Learn More</h2>
        <ul>
          <li>About</li>
          <li>Gallery</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className="fMenuItems">
        <h2>Contact</h2>
        <ul>
          <li>Maggie Magee</li>
          <li>Email@email.com</li>
          <li>732732732732</li>
        </ul>
      </div>
      <div className="fMenuItems">
        <h2>Follow Maggie</h2>
        <ul>
          <img src="" alt="Instagram Logo" />
          <img src="" alt="Facebook Logo" />
        </ul>
      </div>
    </div>
  );
}

export default Footer;
