import React from "react";
import starsEmpty from "../assets/icons/emptystar.svg";
import { useParams } from "react-router-dom";
import starFull from "../assets/icons/fullstar.svg";
import Data from "../data/data.json";

const Rating = () => {
  const { id } = useParams();
  const data = Data.find((item) => item.id === id);

  const numberStars = parseInt(data.rating);

  const renderStars = () => {
    let activeStars = [];

    for (let i = 0; i <= 4; i++) {
      if (numberStars > i) {
        activeStars.push(true);
      } else {
        activeStars.push(false);
      }
    }
    return activeStars.map((image, i) => {
      if (image) {
        return (
          <img
            src={starFull}
            alt="note sur 5"
            key={i}
            className="star filled-star"
          />
        );
      } else {
        return (
          <img
            src={starsEmpty}
            alt="pas de note"
            className="star empty-star"
          />
        );
      }
    });
  };
  return (
    <div className="accomodation-stars">
      <div className="star-container">{renderStars()}</div>
    </div>
  );
};
export default Rating;
