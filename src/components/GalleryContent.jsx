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

  // Open modal
  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  // Previous Image
  const prevSlide = () => {};

  // Next Image
  const nextSlide = () => {};

  return (
    <div className="gallery">
      {/* If modal is opened, show this div */}
      {openModal && (
        <div className="sliderWrap">
          <AiFillCloseCircle className="btnClose" onClick={handleCloseModal} />
          <BsFillArrowLeftCircleFill className="btnPrev" onClick={prevSlide} />
          <BsFillArrowRightCircleFill className="btnNext" onClick={nextSlide} />
          <div className="fullScreenImage">
            <img
              src={galleryImages[slideNumber].photo}
              alt=""
              style={{ height: 500 }}
            />
            <h2>{galleryImages[slideNumber].name}</h2>
            <p> Size:{galleryImages[slideNumber].size}</p>
            <p> Size:{galleryImages[slideNumber].desc}</p>
          </div>
        </div>
      )}
      {!openModal && (
        <>
          {" "}
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
        </>
      )}
    </div>
  );
};

export default GalleryContent;
