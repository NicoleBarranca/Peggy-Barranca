import React from "react";
import placeholder from "../../img/placeholder.jpg";

function Homepage() {
  return (
    <div>
      <div id="parent">
        <div id="hero">
          <img className="heroImage" src={placeholder} alt={"abstract art"} />
        </div>

        <h1 className="heroTitle">Multimedia realism meats abstract</h1>
        <button className="btn">Veiw Gallery</button>
      </div>
      <div>
        <h2>
          “Normality is a paved road: It’s comfortable to walk,﻿ but no flowers
          grow on it.” ― Vincent van Gogh
        </h2>
      </div>
    </div>
  );
}

export default Homepage;
