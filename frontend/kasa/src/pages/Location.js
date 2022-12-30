import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LocationElement from '../components/LocationElement';
import logements from '../logements.json';
import Error from './Error';

const Location = () => {
    const {id} = useParams();
    const logementId =logements.find((data) => data.id === id);
    if (!logementId) return <Error />;
    
    return (
        <div>
            <Header/>
            <LocationElement />
            <Footer/>
        </div>
    );
};

export default Location;