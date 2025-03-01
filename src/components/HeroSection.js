import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-purple-600 text-white text-center py-20 mt-16 animate-fade-in">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-4 animate-fade-in">
          Empower Your Future with Online Learning & Events
        </h1>
        <p className="text-lg mb-6">
          Join top-tier courses, attend exclusive webinars, and register for upcoming events.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-yellow-400 text-blue-900 px-6 py-3 font-bold rounded-lg hover:bg-yellow-500 transition">
            Explore Courses
          </button>
          <button className="border-2 border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-900 transition">
            Upcoming Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
