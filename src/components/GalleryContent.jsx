// import { useState } from "react";
import "./gallery.css";

const GalleryContent = ({ galleryImages }) => {
  // const [slideNumber, setSlideNumber] = useState(0);
  // const [openModal, setOpenModal] = useState(false);

  return (
    <div className="gallery">
      <h1>The Gallery</h1>
      <div className="galleryWrap">
        {galleryImages &&
          galleryImages.map((slide, index) => {
            return (
              <div className="single" key={index}>
                <img
                  src={slide.photo}
                  alt=""
                  // style={{ width: 500, height: 500 }}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default GalleryContent;
