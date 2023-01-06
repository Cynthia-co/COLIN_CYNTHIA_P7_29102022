import React from "react";
import { useParams } from "react-router-dom";
import Carroussel from "./Carroussel";
import Collapse from "./Collapse";
import Host from "./Host";
import Tag from "./Tag";
import greyStar from "../img/star.webp";
import redStar from "../img/redstar.webp";

const LocationElement = () => {
  //on récupère les données
  const logements = require("../logements.json");
  //on récupère l'id de l'url et on cherche la fiche du logement correspondant
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);
  console.log(logement);
  //on crée un tableau de 5 pour le nombre d'étoiles total à afficher
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="logement-page" key={id}>
     {/* on affiche le carroussel d'images de l'appartement voulu */}
       <Carroussel  slides={logement.pictures}/> 
      <div className="logement-header">
        <div className="logement-header__left">
          <h2 className="title"> {logement.title}</h2>
          <p className="title__name">{logement.location}</p>
          {/* on affiche le nombre de tag et son contenu en mappant les élèments */}
          <div className="tag-container">
            {logement.tags.map((tag, index) => {
              return <Tag tag={tag} key={index}/>;
            })}
          </div>
        </div>

       {/* on affiche le prénom et de nom de l'hôte */}
        <div className="logement-header__right">
          <Host picture={logement.host.picture} name={logement.host.name} />

          {/* on récupère la note et on affiche ce même nombre en étoile rouge sur un total de 5 étoiles, les autres restent grises */}
          <div>
            {stars.map((star, index) =>
              logement.rating >= star ? (
                <img src={redStar} alt="redstar" key={index} />
              ) : (
                <img src={greyStar} alt="greystar" key={index} />
              )
            )}
          </div>
        </div>
      </div>

      {/* on affiche la description de l'appartement et les équipements grâce à l'élèment collapse et en listant tous les équipements */}
      <div className="logement-collapse">
        <Collapse title="Description" content={logement.description} />
        <Collapse
          title="Equipements"
          content={logement.equipments.map((equipment, index) => (
            <li key={index}> {equipment} </li>
          ))}
        />
      </div>
    </div>
  );
};

export default LocationElement;
