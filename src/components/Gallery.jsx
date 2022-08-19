import React from "react";
import A from "../img/A.jpeg";
import B from "../img/B.jpg";
import C from "../img/C.jpg";
import D from "../img/D.jpg";
import E from "../img/E.jpg";
import F from "../img/F.jpg";
import G from "../img/G.jpg";
import H from "../img/H.jpg";
import I from "../img/I.jpg";
function Gallery() {
  return (
    <div className="gallery">
      <h1>The Gallery</h1>
      <div>
        <img
          src={A}
          alt={"logo"}
          id="logo"
          style={{ width: 200, height: 200 }}
        />
        <img
          src={B}
          alt={"logo"}
          id="logo"
          style={{ width: 200, height: 200 }}
        />
        <img
          src={C}
          alt={"logo"}
          id="logo"
          style={{ width: 200, height: 200 }}
        />
        <img
          src={D}
          alt={"logo"}
          id="logo"
          style={{ width: 200, height: 200 }}
        />
        <img
          src={E}
          alt={"logo"}
          id="logo"
          style={{ width: 200, height: 200 }}
        />
        <img
          src={F}
          alt={"logo"}
          id="logo"
          style={{ width: 200, height: 200 }}
        />
        <img
          src={G}
          alt={"logo"}
          id="logo"
          style={{ width: 200, height: 200 }}
        />
        <img
          src={H}
          alt={"logo"}
          id="logo"
          style={{ width: 200, height: 200 }}
        />
        <img
          src={I}
          alt={"logo"}
          id="logo"
          style={{ width: 200, height: 200 }}
        />
      </div>
    </div>
  );
}

export default Gallery;
