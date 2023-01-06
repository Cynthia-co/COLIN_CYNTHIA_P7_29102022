import React, { useState } from "react";
import backward from "../img/backward.webp";
import forward from "../img/forward.webp";

const Carroussel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const number = slides.length;

  const prevSlide = () => {
    setCurrent(current === 0 ? number - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === number - 1 ? 0 : current + 1);
  };
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="carroussel">
      {slides.map((slide, index) => {
        return (
          <div
          style={{width:"100%"}}
            className={index === current ? slide.current : slide}
            key={index}
          >
            {index === current && (
              <img src={slide} className="carroussel-img" alt="lodging" />
            )}
          </div>
        );
      })}
      <div className="carroussel-number">
        {current + 1}/{slides.length}
      </div>
      { slides.length > 1 &&
      <div className="carroussel-arrow">
       <img
          src={backward}
          className="carroussel-backward"
          onClick={prevSlide}
          alt="backward"
        />
      <img
        src={forward}
        className="carroussel-forward"
        alt="forward"
        onClick={nextSlide}
      />
      </div>}
    </div>
  );
};

export default Carroussel;
