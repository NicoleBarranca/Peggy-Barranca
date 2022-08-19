import { Link } from "react-router-dom";
import Hero from "../img/Hero.jpeg";
import Logo from "../img/Logo.png";

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

      {/* QUOTE */}
      <div className="quote">
        “I am always doing what I cannot do yet, in order to learn how to do
        it.”
        <br></br>
        <span>― Vincent Van Gogh</span>
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

        <img src={Logo} alt={"logo"} id="logo" style={{ width: 200 }} />
      </div>
      {/* BLOG PREV */}
      <div className="blogPrev">
        <img src={Logo} alt={"logo"} id="logo" style={{ width: 200 }} />
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
    </div>
  );
}

export default Homepage;
