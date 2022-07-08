import React from "react";
import maggie from "../../img/maggie.png";

function Nav() {
  return (
    <nav>
      <h1>MaggieMaggee</h1>
      <img src={maggie} alt={"logo"} />
      <ul>
        <li>About</li>
        <li>Gallery</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Nav;
