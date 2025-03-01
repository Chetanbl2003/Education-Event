import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-blue-700 text-white p-4 fixed w-full top-0 shadow-md z-10 h-16 flex items-center">
      <div className="container mx-auto flex justify-between items-center h-full">
      <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="EduEvent Logo" className="h-14 w-auto" /> 
          <h1 className="text-2xl font-bold">EduEvent</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/courses" className="hover:text-yellow-300">Courses</Link>
          <Link to="/events" className="hover:text-yellow-300">Events</Link>
          <Link to="/admissions" className="hover:text-yellow-300">Admissions</Link>
          <Link to="/fundraising" className="hover:text-yellow-300">Fundraising</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="md:hidden bg-blue-800 p-4">
          <ul className="flex flex-col space-y-4">
            <li><Link to="/" className="hover:text-yellow-300" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/courses" className="hover:text-yellow-300" onClick={() => setMenuOpen(false)}>Courses</Link></li>
            <li><Link to="/events" className="hover:text-yellow-300" onClick={() => setMenuOpen(false)}>Events</Link></li>
            <li><Link to="/admissions" className="hover:text-yellow-300" onClick={() => setMenuOpen(false)}>Admissions</Link></li>
            <li><Link to="/fundraising" className="hover:text-yellow-300" onClick={() => setMenuOpen(false)}>Fundraising</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
