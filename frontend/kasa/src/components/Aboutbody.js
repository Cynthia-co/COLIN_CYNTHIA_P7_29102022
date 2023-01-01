import React from 'react';
import Collapse from './Collapse';

const Aboutbody = () => {
  //on récupère la data de la page à propos
    const aboutText = require("../aboutTxt.json");
    return (
      //on affiche tous les élèments dans des collapses
        <div>
             {aboutText.map((about, index) => {
          return (
            <div className="about" key={index}>
              <Collapse title={about.title} content={about.content} className="about__collapse" />
            </div>
          );
        })}
        ;
        </div>
    );
};

export default Aboutbody;