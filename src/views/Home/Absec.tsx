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

      {/* 🌟 Services Section */}
      <section className="bg-gray-100 py-16">
        <h2 className="text-4xl font-bold text-center text-gray-900">{`Our E-commerce Services`}</h2>
        <p className="text-center text-gray-700 mt-2">Providing seamless online shopping experiences</p>
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

      {/* 💡 Why Choose Us? */}
      <section className="text-center py-16 px-6">
        <h2 className="text-4xl font-bold text-gray-900">{`Why Choose Us?`}</h2>
        <p className="max-w-3xl mx-auto mt-4 text-gray-700 text-lg">
       {`   We provide cutting-edge e-commerce solutions to help businesses 
          
          thrive in the digital marketplace. From fast shipping to seamless
           payment processing, we have it all`}.
        </p>
        <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">
          Learn More
        </button>
      </section>

      {/* 🏆 Testimonials Section */}
      <section className="text-center pb-8 px-6">
        <h2 className="text-4xl font-bold">What Our Clients Say</h2>
        <div className="flex flex-wrap justify-center mt-6 gap-6">
          <div className="w-72 p-6 bg-gray-100 shadow-lg rounded-lg">
            <FaQuoteLeft className="text-orange-500 text-3xl" />
            <p className="text-gray-700 mt-2">{`&quot;Our e-commerce store&apos;s revenue doubled thanks to their amazing service!&quot`}</p>
<p className="text-sm text-gray-500 mt-2">{`- Jane Doe, Online Store Owner`}</p>
          </div>
          <div className="w-72 p-6 bg-gray-100 shadow-lg rounded-lg">
            <FaQuoteLeft className="text-orange-500 text-3xl" />
            <p className="text-gray-700 mt-2">{`&quot;Fast delivery and secure payment options made a huge difference!&quot`}</p>


            <p className="text-sm text-gray-500 mt-2">{`- Mark Johnson, E-commerce Entrepreneur`}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Absec;
