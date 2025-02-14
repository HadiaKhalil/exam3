"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaShoppingCart, FaTruck, FaDollarSign, FaUsers } from "react-icons/fa";

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
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative h-[500px] flex items-center justify-center overflow-hidden"
      >
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
            Empowering Your E-commerce Success!
          </h1>
          <p className="text-white mt-4 text-lg">
            Grow your online store with our expert solutions, ensuring seamless
            shopping experiences, secure payments, and fast delivery.
          </p>
          <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-700 transition shadow-lg">
            Get Started
          </button>
        </div>
      </motion.section>

      {/* 🛍️ Services Section with Scroll Animation */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-12 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex flex-col items-center"
          >
            {service.icon}
            <h3 className="mt-3 text-lg font-semibold text-gray-900">{service.title}</h3>
          </motion.div>
        ))}
      </motion.section>
    </div>
  );
};

export default Absec;
