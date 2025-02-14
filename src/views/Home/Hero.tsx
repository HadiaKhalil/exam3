"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Layout, Code, BarChart2, Briefcase } from "lucide-react";

const Hero = () => {
  return (
   <div className="">
     <div className= "text-black  bg-gradient-to-br from-gray-100 to-white font-sans pt-10">
     <div className="container mx-auto px-6 lg:px-12">
      <div className="grid lg:grid-cols-2 gap-10 items-center w-full text-center md:text-start">
        
        {/* Left Section with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="lg:text-5xl md:text-4xl text-3xl font-extrabold max-w-lg leading-tight">
            Investing in Knowledge and <span className="text-orange-700"> Your Future</span>
          </h1>
          <p className="text-gray-700 md:w-[450px] py-4">
            {`Radical Web Design has years of experience in designing, creating, maintaining, and refreshing websites. That’s why we have a portfolio full of happy clients.`}
          </p>
          <div className="flex flex-wrap gap-6 sm:justify-start justify-center items-center">
            <motion.button 
              className="bg-blue-700 text-white rounded-full text-lg py-3 px-8 shadow-md hover:bg-blue-800 transition"
              whileHover={{ scale: 1.05 }}
            >
              Contact
            </motion.button>
            <div className="grid grid-cols-2 gap-5">
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-3xl font-bold text-orange-500">50+</h3>
                <p className="text-gray-600 text-sm">Cramer Courses</p>
              </motion.div>
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-3xl font-bold text-orange-500">1M+</h3>
                <p className="text-gray-600 text-sm">Our Students</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Right Image Section with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <Image
            src="/images/eddfcsded.png"
            alt="Learning"
            className="rounded-lg shadow-lg"
            width={645}
            height={400}
          />
        </motion.div>
      </div>
    </div>

      {/* Career Courses Section */}
      <div className="container pt-20 pb-10 lg:px-12 text-center">
      {/* Section Heading with Scroll Animation */}
      <motion.h2
        className="text-4xl font-bold text-gray-900 mb-12 tracking-wide"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        Master Your Future with These Courses
      </motion.h2>

      {/* Course Cards with Scroll Animation */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {[
          { icon: Layout, title: "UI/UX Design" },
          { icon: Code, title: "Web Development" },
          { icon: BarChart2, title: "Digital Marketing" },
          { icon: Briefcase, title: "Practical Learning" },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="p-8 rounded-xl bg-white shadow-lg transition-transform transform border border-gray-300"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <item.icon size={50} className="text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action Button with Scroll Animation */}
      <motion.div 
        className="mt-12 flex justify-center" 
        whileHover={{ scale: 1.1 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <button className="flex items-center gap-3 bg-orange-500 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-orange-600 transition">
          Explore More <ArrowRight size={22} />
        </button>
      </motion.div>
    </div>
    </div>
   </div>
  );
};

export default Hero;
