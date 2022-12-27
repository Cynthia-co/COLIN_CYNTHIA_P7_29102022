import React from 'react';
import { NavLink } from 'react-router-dom';

//le menu navigation qui sera affiché sur chaque page
const Nav = () => {
    return (
        <div className="nav">
            <NavLink to='/'  className='nav__item'>Accueil</NavLink>
            <NavLink to='/about'  className='nav__item' >A propos</NavLink>
        </div>
    );
};

export default Nav;