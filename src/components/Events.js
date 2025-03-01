import React from "react";
import eventImage1 from "../assets/event1.jpg";
import eventImage2 from "../assets/event2.jpg";
import eventImage3 from "../assets/event3.webp";


const events = [
  {
    title: "Tech Innovation Conference 2025",
    date: "April 15, 2025",
    location: "India, Bangalore",
    image: eventImage1
  },
  {
    title: "Digital Marketing Summit",
    date: "May 10, 2025",
    location: "India, Delhi",
    image: eventImage2,
  },
  {
    title: "Startup Networking Expo",
    date: "June 5, 2025",
    location: "India, Mumbai",
    image: eventImage3,
  },
];

const Events = () => {
  return (
    <section className="container mx-auto px-6 py-12 animate-fade-in">
      <h2 className="text-4xl font-bold text-center text-purple-700 mb-6">Upcoming Events & Conferences</h2>
      <p className="text-center text-lg text-gray-600 mb-10">
        Join industry leaders and professionals at top conferences and summits.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-4 transform transition duration-300 hover:scale-105">
            <img src={event.image} alt={event.title} className="w-full h-40 object-cover rounded-t-lg" />
            <div className="p-4">
              <h3 className="text-2xl font-semibold text-gray-800">{event.title}</h3>
              <p className="text-gray-600 mt-2"><strong>Date:</strong> {event.date}</p>
              <p className="text-gray-600"><strong>Location:</strong> {event.location}</p>
              <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                Register Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
