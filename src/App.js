import { Outlet, Link } from "react-router-dom";
import Homepage from "./components/Homepage";
import FB from "../src/img/FB.png";
import IG from "../src/img/IG.png";
import "./App.css";

function App() {
  return (
    <div>
      {/* NAVBAR */}
      <nav>
        <div className="menuBrand">
          <Link to="/" id="brand">
            Maggie Magee
          </Link>
        </div>

        <div className="menuItems">
          <Link to="/about">About</Link>
          {/* <a href="#gallery">Gallery</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a> */}
        </div>
      </nav>
      <Outlet />

      {/* FOOTER */}
      <div className="footer">
        <div>
          <h2 className="fMenuTitle">Learn More</h2>
          <ul className="fMenuItems">
            <li>About</li>

            <li>Gallery</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h2 className="fMenuTitle">Contact</h2>
          <ul className="fMenuItems">
            <li>Maggie Magee</li>
            <li>Email@email.com</li>
            <li>732732732732</li>
          </ul>
        </div>
        <div>
          <h2 className="fMenuTitle">Follow Maggie</h2>
          <ul>
            <img src={IG} alt="Instagram Logo" />
            <img src={FB} alt="Facebook Logo" />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
