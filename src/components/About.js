import React from "react";
import aboutImage from "../assets/about.jpg";

const About = () => {
  return (
    <section className="container mx-auto px-6 py-12 text-center animate-fade-in">
      <h2 className="text-4xl font-bold text-blue-700 mb-6">About EduEvent</h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        EduEvent is a platform designed to bridge the gap between learners, educators, and institutions. 
        We provide high-quality courses, organize world-class events, assist in university admissions, 
        and support NGO fundraising for education initiatives.
      </p>
      <img src={aboutImage} 
     alt="About EduEvent" 
     className="mx-auto rounded-lg shadow-lg mt-6 w-full md:w-2/3" />

    </section>
  );
};

export default About;
