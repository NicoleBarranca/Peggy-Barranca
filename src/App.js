import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import About from "./components/pages/About";
// import Gallery from "./components/pages/Gallery";
// import Blog from "./components/pages/Blog";
// import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>
      {/* <div>
        <Nav />
        <Homepage />
        <Footer />
      </div> */}
      <div>
        <Nav />
        <Homepage />
        <Routes>
          <main>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            {/* <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/gallery">
              <Gallery />
            </Route>
            <Route exact path="/blog">
              <Blog />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route> */}

            <Footer />
          </main>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
