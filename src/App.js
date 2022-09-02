import { Outlet, Link } from "react-router-dom";
// import Homepage from "./components/Homepage";
import { BsInstagram } from "react-icons/bs";

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
          {/* <Link to="/blog">Blog</Link> */}
          <Link to="/contact">Contact</Link>
          <Link to="/">Home</Link>
        </div>
      </nav>
      <Outlet />
      {/* FOOTER */}
      <div className="footer">
        <div>
          <ul className="menuItems">
            <li className="menuTitleItem">Learn More</li>
            <li className="menuItem">
              <Link to="/about">About</Link>
            </li>
            <li className="menuItem">
              <Link to="/gallery">Gallery</Link>
            </li>
            <li className="menuItem">
              {/* <Link to="/blog">Blog</Link> */} <Link to="/">Home</Link>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li className="menuTitleItem">Contact</li>
            <li className="menuItem">Peggy Barranca</li>
            <li className="menuItem">
              <a href="mailto:mbarr83@aol.com">mbarr83@aol.com</a>
            </li>

            <li className="menuItem">
              <a href="tel:+17326870347">(732) 687-0347</a>
            </li>
          </ul>
        </div>

        <div className="footerList">
          <ul>
            <li className="menuTitleItem">Follow Peggy</li>

            <a
              href="https://www.instagram.com/maggie_magee/"
              className="iconStyle"
            >
              <BsInstagram size={40} />
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
