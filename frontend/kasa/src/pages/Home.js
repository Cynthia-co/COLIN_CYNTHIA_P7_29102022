import React from 'react';
import Banner from '../components/Banner';
import Gallery from '../components/Gallery';
import homebanner from '../img/homebanner.svg';

const Home = () => {
    return (
        <div className="home">
            <div className='home-banner'>
            <Banner  image={homebanner}/>
            <span className="banner__title">Chez vous, partout et ailleurs</span>
            </div>
            <Gallery />
        </div>
    );
};

export default Home;