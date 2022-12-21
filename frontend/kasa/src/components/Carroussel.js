import React, { useState } from "react";
import backward from "../img/backward.svg";
import forward from "../img/forward.svg";

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
      <img
        src={backward}
        className="carroussel__backward"
        onClick={prevSlide}
        alt="backward"
      />
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? slide.current : slide}
            key={index}
          >
            {index === current && (
              <img
                src={slide}
                className="carroussel__img"
                alt="lodging"
              />
            )}
          </div>
        )
      })}
      
      <img
        src={forward}
        className="carroussel__forward"
        alt="forward"
        onClick={nextSlide}
      />
    </div>
  );
};

export default Carroussel;
