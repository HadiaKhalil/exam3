"use client";

import React from "react";
import { FaShoppingCart, FaTruck, FaDollarSign, FaUsers, FaQuoteLeft } from "react-icons/fa";

const Absec = () => {
  const services = [
    { title: "Product Listing", icon: <FaShoppingCart className="text-orange-500 text-6xl" /> },
    { title: "Fast Delivery", icon: <FaTruck className="text-orange-500 text-6xl" /> },
    { title: "Secure Payments", icon: <FaDollarSign className="text-orange-500 text-6xl" /> },
    { title: "Customer Support", icon: <FaUsers className="text-orange-500 text-6xl" /> },
  ];

  return (
    <div className="mx-auto">
      {/* 🎥 Video Section */}
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

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-2xl px-8">
          <h1 className="text-4xl font-extrabold text-white drop-shadow-md">
          {`  Empowering Your E-commerce Success!`}
          </h1>
          <p className="text-white mt-4 text-lg">
          {`  Grow your online store with our expert solutions, ensuring seamless
             shopping experiences, secure payments, and fast delivery.`}
          </p>
          <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-700 transition shadow-lg">
            Get Started
          </button>
        </div>
      </section>

     
    </div>
  );
};

export default Absec;
