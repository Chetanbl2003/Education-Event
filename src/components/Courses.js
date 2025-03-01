import React from "react";
import courseImage1 from "../assets/course1.jpg";
import courseImage2 from "../assets/course2.jpg";
import courseImage3 from "../assets/course3.jpeg";
import courseImage4 from "../assets/course4.svg";
import courseImage5 from "../assets/course5.jpg";
import courseImage6 from "../assets/course6.webp";

const courses = [
  {
    title: "Web Development Bootcamp", image: courseImage1,
    description: "Learn HTML, CSS, JavaScript, and React to build modern websites."
  },
  {
    title: "Digital Marketing Masterclass", image: courseImage2,
    description: "Master SEO, PPC, and social media marketing to grow businesses."
  },
  {
    title: "Graphic Design Fundamentals", image: courseImage3,
    description: "Explore Photoshop, Illustrator, and UI/UX design techniques."
  },
  {
    title: "Internet of Things (IoT) for beginners", image: courseImage4,
    description: "Learn IoT architecture, embedded systems, and cloud integration for smart devices and automation solutions."
  },
  {
    title: "VLSI Design & Semiconductor Fundamentals", image: courseImage5 ,
    description: "Explore IC fabrication, digital logic design, and FPGA programming for the semiconductor industry."
  },
  {
    title: "Structural Analysis & Civil Engineering", image: courseImage6,
    description: "Understand load calculations, stress analysis, and material mechanics for advanced structural design."
  }
];

const Courses = () => {
  return (
    <section className="container mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-center text-blue-700 mb-6">Our Online Courses</h2>
      <p className="text-center text-lg text-gray-600 mb-10">
        Explore top courses taught by industry experts and boost your skills.
      </p>
      <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
        {courses.map((course, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-4 transform transition duration-300 hover:scale-105">
            <img src={course.image} alt={course.title} className="w-full h-40 object-cover rounded-t-lg" />
            <div className="p-4">
              <h3 className="text-2xl font-semibold text-gray-800">{course.title}</h3>
              <p className="text-gray-600 mt-2">{course.description}</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
