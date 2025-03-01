import React from "react";
import fundraising1 from "../assets/fundraising1.webp";
import fundraising2 from "../assets/fundraising2.png";
import fundraising3 from "../assets/fundraising3.jpg";

const fundraisingCampaigns = [
  {
    title: "Education for Underprivileged Children",
    goal: "₹500,000",
    raised: "₹350,000",
    image: fundraising1,
  },
  {
    title: "Support Women Empowerment Programs",
    goal: "₹300,000",
    raised: "₹180,000",
    image: fundraising2,
  },
  {
    title: "Disaster Relief Fund",
    goal: "₹1,000,000",
    raised: "₹700,000",
    image: fundraising3,
  },
];

const Fundraising = () => {
  return (
    <section className="container mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-center text-red-700 mb-6">NGO & Charity Fundraising</h2>
      <p className="text-center text-lg text-gray-600 mb-10">
        Support various causes and help make a difference in people's lives.
      </p>

      <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
        {fundraisingCampaigns.map((campaign, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-4 transform transition duration-300 hover:scale-105 h-full flex flex-col">
            {/* ✅ Set fixed height for uniform images */}
            <img src={campaign.image} alt={campaign.title} className="w-full h-56 object-cover rounded-t-lg" />
            
            {/* ✅ Make content fill remaining space */}
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold text-gray-800">{campaign.title}</h3>
              <p className="text-gray-600 mt-2"><strong>Goal:</strong> {campaign.goal}</p>
              <p className="text-gray-600"><strong>Raised:</strong> {campaign.raised}</p>
              
              {/* ✅ Push button to the bottom for consistency */}
              <div className="mt-auto">
                <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition w-full">
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Fundraising;
