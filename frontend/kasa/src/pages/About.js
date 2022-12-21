import React from "react";
import Aboutbody from "../components/Aboutbody";
import Footer from "../components/Footer";
import Header from "../components/Header";
import aboutImg from "../img/bannerimg.svg";

const About = () => {
 
  return (
    <div>
      <Header className="about-header"/>
      <img className="about-picture" src={aboutImg} alt="about" />
      <Aboutbody/>     
      <Footer />
    </div>
  );
};

export default About;
