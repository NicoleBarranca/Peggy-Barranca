import React from "react";
import placeholder from "../../img/placeholder.jpg";
import maggie from "../../img/maggie.png";

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
      <div className="quote">
        “I am always doing what I cannot do yet, in order to learn how to do
        it.”
        <br></br>
        <span>― Vincent Van Gogh</span>
      </div>
      <div className="aboutPrev">
        <div>
          {" "}
          <p>
            Maggie Magee is an Artist from New Jersey whose passion has no
            limits. Maggie has taught art is both public and private settings.
          </p>
          <button className="btn">Learn More</button>
        </div>

        <img src={maggie} alt={"logo"} id="logo" style={{ width: 200 }} />
      </div>
    </div>
  );
}

export default Homepage;
