import React, { useState } from "react";
import open from "../img/open.webp";
import close from "../img/close.svg";

const Collapse = ({ title, content }) => {
  //on déclare les 2 états ouverts ou non de la collapse
  const [isOpen, setIsOpen] = useState(false);
  //si la collapse est ouverte on affiche le contenu et la flèche correspondante sinon juste le titre 
  return isOpen ? (
    <div className="collapse" onClick={() => setIsOpen(false)}>
      <div className="collapse__header">
        <div className="collapse__title">{title}</div>
        <img src={open} className="collapse__arrow" alt="arrow-down" />
      </div>
      <div className="collapse__content">{content}</div>
    </div>
  ) : (
    <div className="collapse" onClick={() => setIsOpen(true)}>
      <div className="collapse__header">
        <div className="collapse__title">{title}</div>
        <img src={close} className="collapse__arrow" alt="arrow-up" />
      </div>
    </div>
  );
};

export default Collapse;
