import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div class="nav">
            <NavLink to='/'>Accueil</NavLink>
            <NavLink to='/about'>A propos</NavLink>
        </div>
    );
};

export default Nav;