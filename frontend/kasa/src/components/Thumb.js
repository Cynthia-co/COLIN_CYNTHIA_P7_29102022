import React from 'react';

//chaque card de la page d'accueil récupère les paramètres id, une photo et le titre de la location
const Thumb = ({id, image, title}) => {   
    return (
        <div  className="thumb" key={id}>
            <img className="thumb__img" src={image} alt="location"/>
            <div className="thumb__title">{title}</div>
        </div>
    );
};

export default Thumb;