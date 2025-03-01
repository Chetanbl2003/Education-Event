import React from "react";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Courses from "../components/Courses";
import Events from "../components/Events";
import Admissions from "../components/Admissions";
import Fundraising from "../components/Fundraising";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <Courses />
      <Events />
      <Admissions />
      <Fundraising />
    </div>
  );
};

export default Home;
