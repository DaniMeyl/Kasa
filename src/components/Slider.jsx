import React, { useState } from "react";
import arrowLeft from "../assets/icons/arrowleft.svg";
import arrowRight from "../assets/icons/arrowright.svg";

const Slider = (images) => {
  const [counter, setCounter] = useState(0);
  const pictures = images.images;
  const slideLength = pictures.length;
  let actualPicture;
  actualPicture = pictures[counter];

  const arrowLeftButton = () => {
    setCounter(counter - 1 < 0 ? slideLength - 1 : counter - 1 )
  };

  const arrowRightButton = () => {
    setCounter((counter + 1 === slideLength )? 0 : counter + 1)
  };

  return (
    <div className="slider-container">
      <img
        className="slider-img"
        src={actualPicture}
        alt="chambre d'un hôte"
      />
      {pictures.length > 1 && (
        <div className="sup-container">
          <img
            onClick={arrowLeftButton}
            className="arrow arrow-left"
            src={arrowLeft}
            alt="arrow left"
          />
          <p className="counter">
            {counter + 1}/{slideLength}
          </p>
          <img
            onClick={arrowRightButton}
            className="arrow arrow-right"
            src={arrowRight}
            alt="arrow right"
          />
        </div>
      )}
    </div>
  );
};

export default Slider;
