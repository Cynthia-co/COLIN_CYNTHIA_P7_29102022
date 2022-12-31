import React from 'react';
import Banner from '../components/Banner';
import Gallery from '../components/Gallery';
import homebanner from '../img/homebanner.svg';

const Home = () => {
    return (
        <div className="home">
            <Banner  image={homebanner}/>
            <span className="banner__title">Chez vous, partout et ailleurs</span>
            <Gallery />
        </div>
    );
};

export default Home;