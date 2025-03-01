import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-6 text-center mt-12">
      <div className="container mx-auto">
        <p className="text-lg">&copy; {new Date().getFullYear()} EduEvent. All Rights Reserved.</p>
        
      </div>
    </footer>
  );
};

export default Footer;
