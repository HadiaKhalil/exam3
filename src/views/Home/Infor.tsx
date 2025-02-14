"use client";  // Next.js App Router میں ensure کرو کہ یہ client-side پر ہے


import React from 'react';
import { motion } from "framer-motion";


import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Infor: React.FC = () => { 
  return (
    <>
      {/* Contact Section with Motion */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-[#272525] main font-sans bg-cover bg-center bg-blend-overlay"
        style={{ backgroundImage: "url('/images/online-6817350_1280.jpg')" }}
      >
        <div className="container grid grid-cols-1 md:grid-cols-2 pt-10 pb-44">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="sm:text-4xl font-bold text-white mt-4">Contact Us</h2>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-white"
          >
            <p className="tracking-[8px] font-mono text-[11px]">CALL US</p>
            <p className="text-lg font-semibold">(255) 352-6258</p>

            <p className="tracking-[8px] font-mono text-[11px] mt-8">ADDRESS</p>
            <p className="text-lg font-semibold">1234 Divi St. #1000 San Francisco, CA 94220.</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Form Section */}
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="container -mt-40">
        <div className="mx-auto lg:px-20 py-5">
          <div className="bg-gray-900 py-10 px-10 p-8 rounded-md shadow-lg">
            <div className="grid md:grid-cols-2">
              <div>
                <h3 className="text-2xl font-semibold text-white">Send a Message</h3>
                <div className="flex space-x-2 mt-8">
  {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
    <motion.div key={index} whileHover={{ scale: 1.2 }} className="inline-block">
      <a href="#" className="text-white text-2xl hover:text-yellow-500 transition flex">
        <Icon />
      </a>
    </motion.div>
  ))}
</div>
              </div>

              <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
                <form className="mt-6">
                  <input type="text" placeholder="Name" className="w-full p-3 bg-transparent border border-gray-400 text-white rounded-md focus:outline-none focus:border-yellow-500 mb-4" />
                  <input type="email" placeholder="Email Address" className="w-full p-3 bg-transparent border border-gray-400 text-white rounded-md focus:outline-none focus:border-yellow-500 mb-4" />
                  <textarea placeholder="Message" className="w-full p-3 bg-transparent border border-gray-400 text-white rounded-md focus:outline-none focus:border-yellow-500 mb-4"></textarea>
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-yellow-500 text-black px-6 py-2 font-bold rounded-md hover:bg-yellow-600 transition">
                    SUBMIT
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Expertise Section */}
      <motion.section initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center px-8 py-12 bg-gray-50 rounded-lg shadow-md">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-extrabold text-gray-900">Discover Our Expertise</h2>
          <p className="mt-5 text-lg text-gray-700 leading-relaxed">
            At <span className="font-semibold text-green-600">Lyndon Group</span>, we empower businesses with expert solutions in finance, IT, governance, and risk management. Our goal is to drive your success with strategic insights and innovative approaches.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-green-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-700 transition-all">
              Learn More
            </motion.button>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-orange-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-orange-600 transition-all">
              Get Started
            </motion.button>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Infor;
