"use client";
import React from "react";
import { motion } from "framer-motion";
import { Brush, ShoppingCart, PenTool, Server, Code, LifeBuoy } from "lucide-react";
import { IoStarSharp } from "react-icons/io5";

const services = [
  { title: "Web Design", icon: <Brush size={40} className="text-orange-500" />, desc: "Your website has got to look good, that’s a given. That’s why we strive for the best where quality and user experience is concerned." },
  { title: "E-commerce", icon: <ShoppingCart size={40} className="text-orange-500" />, desc: "Whether you’re looking to sell to a local, national or international audience, we can help get your products and services noticed." },
  { title: "Graphic Design", icon: <PenTool size={40} className="text-orange-500" />, desc: "From logos, stationery and print design to social media assets. We’ve been there, done it, and got the t-shirt." },
  { title: "Web Maintenance", icon: <Server size={40} className="text-orange-500" />, desc: "Ongoing updates from a team who care and understand your business and website. We’re in this for the long haul." },
  { title: "Web Development", icon: <Code size={40} className="text-orange-500" />, desc: "If content is what fuels the web, then development must be the engine that drives it. Done right, and you shouldn’t even notice it’s there." },
  { title: "Hosting & Support", icon: <LifeBuoy size={40} className="text-orange-500" />, desc: "Website hosting is available on our dedicated server. High performance and reliability are guaranteed, with 24/7 technical support." },
];

export default function ServiceSec() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-6xl mx-auto text-center py-16 px-6"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-gray-900"
      >
        What <span className="text-orange-500">We Do</span>
      </motion.h2>
      <p className="text-gray-600 text-sm mt-2">Discover our range of professional services.</p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gray-900 text-white p-6 rounded-xl shadow-lg border border-gray-800 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
          >
            {/* Icon */}
            <div className="mx-auto mb-4">{service.icon}</div>

            {/* Title */}
            <h3 className="text-2xl font-semibold mb-2 text-orange-500">{service.title}</h3>

            {/* Description */}
            <p className="text-gray-400 text-sm">{service.desc}</p>

            {/* Stars */}
            <div className="flex items-center justify-center py-3 text-orange-500">
              {[...Array(5)].map((_, i) => (
                <IoStarSharp key={i} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Cookies Policy */}
      <div className="py-8 text-sm text-gray-600">
        <p>
          <strong>Cookies policy</strong> - Our website uses cookies to analyze how the site is used and to ensure your experience is consistent between visits.{" "}
          <a href="#" className="text-orange-500 hover:underline">Learn more...</a>
        </p>
      </div>
    </motion.section>
  );
}
