import { Link } from "react-router-dom";
import Hero from "../img/Hero.jpeg";
// import Blog from "../img/Blog.png";
import Gallery from "../img/Gallery.png";
import avatar from "../img/avatar.png";

function Homepage() {
  return (
    <div>
      {/* HERO */}
      <div style={{ backgroundImage: `url(${Hero})` }} className="heroImg">
        <div className="heroContent">
          <div className="block">
            <h1 className="heroTitle">
              Multimedia combined with wild imagination...
            </h1>
            <Link to="/gallery">
              <button className="btnOne">Veiw Gallery</button>
            </Link>
          </div>
        </div>
      </div>

      {/* ABOUT PREV */}
      <div className="aboutPrev">
        <div>
          <p>
            Peggy is an Artist from New Jersey whose passion has no limits.
            Being a teacher of art in both public and private settings...
          </p>
          <Link to="/about">
            <button className="btnTwo">Learn More</button>
          </Link>
        </div>

        <img src={avatar} alt={"logo"} id="logo" style={{ width: 300 }} />
      </div>
      {/* BLOG PREV */}
      {/* <div className="blogPrev">
        <img src={Blog} alt={"logo"} id="logo" style={{ width: 300 }} />
        <div>
          {" "}
          <p>
            Maggie Magee is an Artist from New Jersey whose passion has no
            limits. Maggie has taught art is both public and private settings.
          </p>
          <Link to="/blog">
            <button className="btnTwo">Visit Blog</button>
          </Link>
        </div>
      </div> */}
      <div className="divider"></div>
      {/* GALLERY PREV */}
      <div className="galleryPrev">
        <img src={Gallery} alt={"logo"} id="logo" style={{ width: 300 }} />
        <div>
          <p>The varying media used my Peggy is vast and ever changing...</p>
          <Link to="/gallery">
            <button className="btnTwo">Visit Gallery</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
