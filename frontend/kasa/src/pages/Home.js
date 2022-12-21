import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';

const Home = () => {
    return (
        <div className="home">
            <Header className="home__header"/>
            <Banner/>
            <Gallery/>
            <Footer/>
        </div>
    );
};

export default Home;