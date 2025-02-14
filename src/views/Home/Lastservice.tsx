"use client"; // Required for Next.js with hooks

import React from "react";
import { FaUsers, FaUserTie, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactElement;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-white p-6  rounded-lg shadow-lg text-center bg-gradient-to-r"
    >
      <div className="flex justify-center items-center  w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-400 mt-2">{description}</p>
    </motion.div>
  );
};

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center justify-center  px-6">
      {/* Header Section */}
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-6"
      >
        Lorem <span className="text-gray-400">QuickMart</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }} 
        className="text-gray-400 mb-10"
      >
       {` Quality products, unbeatable prices!`}
      </motion.p>

      {/* Feature Cards Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }} 
        className="grid md:grid-cols-3 gap-8 max-w-4xl"
      >
        <FeatureCard 
          title="JOIN OUR TEAM" 
          description="Our friendly support team is always available to assist you with any inquiries."
          icon={<FaUsers size={30} />} 
        />
        <FeatureCard 
          title="PLATINUM ADVISOR" 
          description="Enjoy quick and hassle-free delivery across the country with real-time tracking." 
          icon={<FaUserTie size={30} />} 
        />
        <FeatureCard 
          title="CONTACT US" 
          description="Explore a vast collection of premiumquality products at the best prices." 
          icon={<FaEnvelope size={30} />} 
        />
      </motion.div>

      {/* Footer Section */}
      <motion.footer 
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-10 text-gray-500 text-sm"
      >
        <nav className="flex space-x-4">
          {["About Us", "Categories", "Best Sellers", "Contact Us", "Help Center"].map((link, index) => (
            <motion.a 
              key={index} 
              href="#" 
              whileHover={{ textDecoration: "underline", color: "#ffffff" }}
              transition={{ duration: 0.2 }}
              className="hover:text-white"
            >
              {link}
            </motion.a>
          ))}
        </nav>
        <p className="mt-4">{`© 2025 XYZ-GROUP`}</p>
      </motion.footer>
    </div>
  );
}
