import { Outlet, Link } from "react-router-dom";
// import Homepage from "./components/Homepage";

import IG from "../src/img/IG.png";
import Logo from "../src/img/Logo.png";
import "./App.css";

function App() {
  return (
    <div>
      {/* NAVBAR */}
      <nav>
        <Link to="/" className="brandGroup">
          <img src={Logo} className="logo" alt="Logo" />{" "}
          <h1 id="brand">Peggy Barranca</h1>
        </Link>

        <div className="menuItems">
          <Link to="/about">About</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/">Home</Link>
        </div>
      </nav>
      <Outlet />

      {/* FOOTER */}
      <div className="footer">
        <div className="footerList">
          <ul className="menuItems">
            <li>
              <span>Learn More</span>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>

        <div className="footerList">
          <ul>
            <li>
              <span>Contact</span>
            </li>
            <li>Peggy Barranca</li>
            <li>Mbarr83@aol.com</li>
            <li>(732) 687 0347</li>
          </ul>
        </div>

        <div className="footerList">
          <ul>
            <li>
              <span>Follow Peggy</span>
            </li>
            <li>
              {" "}
              <img src={IG} alt="Instagram Logo" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
