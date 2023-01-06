import React from "react";
import Aboutbody from "../components/Aboutbody";
import aboutImg from "../img/bannerimg.webp";
import Banner from "../components/Banner";

const About = () => {
  return (
    <div>
     <Banner  image={aboutImg} className="about-picture"/>
      <Aboutbody />
    </div>
  );
};

export default About;
