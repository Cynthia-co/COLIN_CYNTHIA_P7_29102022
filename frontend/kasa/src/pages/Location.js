import React from 'react';
import { useParams } from 'react-router-dom';
import LocationElement from '../components/LocationElement';
import logements from '../logements.json';
import Error from './Error';

const Location = () => {
    //on récupère l'id pour la comparer à notre base de données
    const {id} = useParams();
    const logementId =logements.find((data) => data.id === id);
    //en cas de mauvaise id on affiche la page 404
    if (!logementId) return <Error />;
    //sinon on retourne la fiche logement
    return (
        <div>
            
            <LocationElement />
            
        </div>
    );
};

export default Location;