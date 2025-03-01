import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CoursesPage from "./pages/CoursesPage";
import EventsPage from "./pages/EventsPage";
import AdmissionsPage from "./pages/AdmissionsPage";
import FundraisingPage from "./pages/FundraisingPage";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/fundraising" element={<FundraisingPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
