import React from 'react';
import Nav from './Nav';
import logo from '../img/logo.webp';


const Header = () => {
    return (
        <div className="header">
            <img className="header__image" src={logo} alt='kasa'/>
            <Nav/>
        </div>
    );
};

export default Header;