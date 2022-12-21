import React from 'react';
import homebanner from '../img/homebanner.svg';

const Banner = () => {
    return (
        <div className="banner">
            <img className="banner__img" src={homebanner}  alt='banner'/>
            <span className="banner__title">Chez vous, partout et ailleurs</span>
        </div>
    );
};

export default Banner;