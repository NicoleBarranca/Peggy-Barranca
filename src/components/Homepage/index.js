import React from "react";
import placeholder from "../../img/placeholder.jpg";

function Homepage() {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${placeholder})` }}
        className="heroImg"
      >
        <div className="heroContent">
          <h1 className="heroTitle">Multimedia realism meats abstract</h1>
          <button className="btn">Veiw Gallery</button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
