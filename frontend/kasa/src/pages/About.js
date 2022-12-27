import React from "react";
import Aboutbody from "../components/Aboutbody";
import Footer from "../components/Footer";
import Header from "../components/Header";
import aboutImg from "../img/bannerimg.svg";

const About = () => {
  return (
    <div>
      <Header className="about-header" />
      <div className="banner">
        <img className="banner__img" src={aboutImg} alt="about" />
      </div>
      <Aboutbody />
      <Footer />
    </div>
  );
};

export default About;
