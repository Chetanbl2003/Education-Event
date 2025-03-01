import React from "react";

const Admissions = () => {
  return (
    <section className="container mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-center text-green-700 mb-6">University Admissions</h2>
      <p className="text-center text-lg text-gray-600 mb-10">
        Apply for top universities and colleges with our easy admission process.
      </p>

      <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl mx-auto animate-fade-in">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Apply Now</h3>
        <form className="grid gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="text"
            placeholder="Course of Interest"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <textarea
            placeholder="Why do you want to join?"
            rows="4"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          ></textarea>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
            Submit Application
          </button>
        </form>
      </div>
    </section>
  );
};

export default Admissions;
