import { Link } from "react-router-dom";
import Hero from "../img/Hero.jpeg";
import Blog from "../img/Blog.png";
import Gallery from "../img/Gallery.png";

import D from "../img/D.jpg";
import avatar from "../img/avatar.png";

function Homepage() {
  return (
    <div>
      {/* HERO */}
      <div style={{ backgroundImage: `url(${Hero})` }} className="heroImg">
        <div className="heroContent">
          <h1 className="heroTitle">Multimedia realism meats abstract</h1>
          <Link to="/gallery">
            <button className="btnOne">Veiw Gallery</button>
          </Link>
        </div>
      </div>

      {/* ABOUT PREV */}
      <div className="aboutPrev">
        <div>
          {" "}
          <p>
            Maggie Magee is an Artist from New Jersey whose passion has no
            limits. Maggie has taught art is both public and private settings.
          </p>
          <Link to="/about">
            <button className="btn">Learn More</button>
          </Link>
        </div>

        <img src={avatar} alt={"logo"} id="logo" style={{ width: 200 }} />
      </div>
      {/* BLOG PREV */}
      <div className="blogPrev">
        <img src={Blog} alt={"logo"} id="logo" style={{ width: 200 }} />
        <div>
          {" "}
          <p>
            Maggie Magee is an Artist from New Jersey whose passion has no
            limits. Maggie has taught art is both public and private settings.
          </p>
          <Link to="/blog">
            <button className="btn">Visit Blog</button>
          </Link>
        </div>
      </div>
      {/* GALLERY PREV */}
      <div className="aboutPrev">
        <div>
          {" "}
          <p>
            Maggie Magee is an Artist from New Jersey whose passion has no
            limits. Maggie has taught art is both public and private settings.
          </p>
          <Link to="/about">
            <button className="btn">Learn More</button>
          </Link>
        </div>

        <img src={Gallery} alt={"logo"} id="logo" style={{ width: 200 }} />
      </div>
    </div>
  );
}

export default Homepage;
