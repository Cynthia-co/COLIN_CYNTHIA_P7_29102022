import React from 'react';
import Nav from './Nav';
import logo from '../img/logo.svg';


const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt='kasa'/>
            <Nav/>
        </div>
    );
};

export default Header;