import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Homepage from "./components/Homepage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="about" element={<About />} />
        {/* Gallery will encompase routes with ids */}
        <Route path="gallery" element={<Gallery />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route index element={<Homepage />} />
        <Route
          path="*"
          element={
            <main>
              <p>Something Went WRONG!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);
