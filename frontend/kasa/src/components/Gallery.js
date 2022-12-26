import React from "react";
import { Link } from "react-router-dom";
import Thumb from "./Thumb";

const Gallery = () => {
  //on récupère tous les logements
  const logements = require("../logements.json");

  return (
    <div className="gallery">
      {/* on mappe chaque logement dans une card qui renverra vers la page de la location */}
      <div className="gallery__thumbs">
        {logements.map((logement) => {
          return (
            <Link to={`./logements/${logement.id}`} className='thumb-card' >
            <Thumb
              key={logement.id}
              image={logement.cover}
              title={logement.title}
              id={logement.id}
              
            />
            </Link>
          );
        })}
        
      </div>
    </div>
  );
};

export default Gallery;
