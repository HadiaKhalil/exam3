"use client";

import React from "react";
import { motion } from "framer-motion";

const Forth = () => {
  return (
    <div className="mx-auto px-4">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-screen flex items-center justify-center text-white text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-black bg-opacity-50 p-10 rounded shadow-lg"
        >
          <h1 className="text-5xl font-extrabold">Welcome to Our Store</h1>
          <p className="mt-4 text-lg max-w-xl mx-auto">
            Partner with our experienced team and develop robust software
            applications, whether you’re a start-up or an established business
            looking to outshine with innovative ideas!
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 bg-orange-500 px-6 py-2 rounded-lg shadow-md text-lg font-semibold"
          >
            Shop Now
          </motion.button>
        </motion.div>
      </section>

      {/* About Section */}

    </div>
  );
};

export default Forth;
