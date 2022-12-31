import React from 'react';

const Banner = ({image}) => {
    return (
        <div className="banner">
            <img className="banner__img" src={image}  alt='banner'/>
        </div>
    );
};

export default Banner;