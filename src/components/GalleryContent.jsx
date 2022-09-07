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
  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(galleryImages.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  // Next Image
  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  return (
    <div className="gallery">
      {/* If modal is opened, show this div */}
      {openModal && (
        <div className="sliderWrap">
          <AiFillCloseCircle
            className="btnClose"
            onClick={handleCloseModal}
            // style={{ color: "RGBA(0, 0, 0, 0.76)" }}
            // size={30}
          />
          <BsFillArrowLeftCircleFill
            className="btnPrev"
            onClick={prevSlide}
            // style={{ color: "RGBA(0, 0, 0, 0.76)" }}
            // size={30}
          />
          <BsFillArrowRightCircleFill
            className="btnNext"
            onClick={nextSlide}
            // style={{ color: "RGBA(0, 0, 0, 0.76)" }}
            // size={30}
          />

          <div className="fullScreenImage">
            <img
              src={galleryImages[slideNumber].photo}
              alt=""
              style={{ height: 600 }}
            />
            <div className="imageDetails">
              {" "}
              <h2>{galleryImages[slideNumber].name}</h2>
              <p> Size: {galleryImages[slideNumber].size}</p>
              <p> Mediums Used: {galleryImages[slideNumber].desc}</p>
            </div>
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
