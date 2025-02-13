"use client";

import React from "react";

import { FaChartLine, FaMoneyBillWave, FaLaptopCode, FaPlane, FaQuoteLeft } from "react-icons/fa";
import { FaHandsHoldingCircle } from "react-icons/fa6";
import { FaCreativeCommonsBy, FaCreativeCommonsNcEu } from "react-icons/fa";

const Absec = () => {
  const services = [
    { title: "Accounting", icon: <FaChartLine className="text-orange-500 text-6xl" /> },
    { title: "Financial Management", icon: <FaMoneyBillWave className="text-orange-500 text-6xl" /> },
    { title: "IT Leadership", icon: <FaLaptopCode className="text-orange-500 text-6xl" /> },
    { title: "Travel & Expense Management", icon: <FaPlane className="text-orange-500 text-6xl" /> },
  ];

  return (
    <div className="mx-auto">
  
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
      
        <div className="absolute top-0 left-0 w-full h-full">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/XEEcxYzNOfI?autoplay=1&mute=1&loop=1&playlist=XEEcxYzNOfI"
            title="E-commerce Business Video"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </div>

     
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

    
        <div className="relative z-10 text-center max-w-2xl px-8">
          <h1 className="text-4xl font-extrabold text-white drop-shadow-md">
           {` If content fuels the web, development is the engine that drives it.`}
          </h1>
          <p className="text-white mt-4 text-lg">
         {`   <span className="font-bold text-orange-400">ISK Contabilidade</span> Radical Web Design is a web design
            company based in Manchester. We’ve got years of experience in designing, creating, maintaining, and
            refreshing websites, which is why we’ve built a portfolio of happy clients.`}
          </p>
          <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition shadow-lg">
            See More
          </button>
        </div>
      </section>

   
      <section className="bg-gray-100 py-16">
        <h2 className="text-4xl font-bold text-center text-gray-900">Our Servicess</h2>
        <p className="text-center text-gray-700 mt-2">Providing top-tier web solutions</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mt-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-white text-center rounded-lg shadow-lg hover:shadow-xl transition">
              {service.icon}
              <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
              <p className="text-gray-700 mt-2">We ensure excellence in {service.title}.</p>
            </div>
          ))}
        </div>
      </section>

  
      <section className="bg-gray-900 text-white py-16">
        <h2 className="text-4xl font-bold text-center">Why Choose Us?</h2>
        <div className="container mx-auto px-6 lg:px-20 grid md:grid-cols-3 gap-6 mt-8">
          {infoData.map((item, index) => (
            <div key={index} className="bg-orange-500 text-white p-6 rounded-lg text-center shadow-md hover:shadow-lg transition">
              <div className="text-5xl flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-bold mt-4">{item.title}</h3>
              <p className="mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Absec;

const infoData = [
  {
    title: "E-commerce",
    description: "Sell locally, nationally, or globally. We help get your products noticed.",
    icon: <FaHandsHoldingCircle className="text-white text-5xl" />,
  },
  {
    title: "Web Maintenance",
    description: "Ongoing updates with a dedicated team who understands your business.",
    icon: <FaCreativeCommonsBy className="text-white text-5xl" />,
  },
  {
    title: "Hosting & Support",
    description: "High-performance hosting with 24/7 technical support.",
    icon: <FaCreativeCommonsNcEu className="text-white text-5xl" />,
  },
];
