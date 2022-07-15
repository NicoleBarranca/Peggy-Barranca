import React from "react";
import { Link } from "react-router-dom";
// import maggie from "../../img/maggie.png";

function Nav() {
  return (
    <nav id="fixedNav">
      <div className="menuBrand">
        {/* <img src={maggie} alt={"logo"} id="logo" /> */}
        <h1 id="brand">Maggie Magee</h1>
      </div>

      <div className="menuItems">
        <Link to="/about">About</Link>
        {/* <a href="#about">About</a>
        <a href="#gallery">Gallery</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a> */}
      </div>
    </nav>
  );
}

export default Nav;
