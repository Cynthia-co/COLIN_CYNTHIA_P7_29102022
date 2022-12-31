import React from "react";
import Aboutbody from "../components/Aboutbody";
import aboutImg from "../img/bannerimg.svg";
import Banner from "../components/Banner";

const About = () => {
  return (
    <div>
     <Banner  image={aboutImg}/>
      <Aboutbody />
    </div>
  );
};

export default About;
