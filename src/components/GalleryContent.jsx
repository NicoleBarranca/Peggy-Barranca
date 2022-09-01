import { useState } from "react";
import "./gallery.css";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";

const GalleryContent = ({ galleryImages }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  // Function to open gallery image modal
  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  return (
    <div className="gallery">
      {/* If modal is opened, show this div */}
      {openModal && (
        <div className="sliderWrap">
          <AiFillCloseCircle className="btnClose" />
          <BsFillArrowLeftCircleFill className="btnPrev" />
          <BsFillArrowRightCircleFill className="btnNext" />
          <div className="fullScreenImage">
            <img src={galleryImages[slideNumber].photo} alt="" />
          </div>
        </div>
      )}
      <h1>The Gallery</h1>
      <div className="galleryWrap">
        {galleryImages &&
          galleryImages.map((slide, index) => {
            return (
              <div
                className="single"
                key={index}
                onClick={() => handleOpenModal(index)}
              >
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
