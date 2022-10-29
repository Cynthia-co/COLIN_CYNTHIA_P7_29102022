import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Error = () => {
    return (
        <div>
            <Header/>
            <p class="code-error">404</p>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/">Retourner sur la page d’accueil</Link>
        </div>
    );
};

export default Error;