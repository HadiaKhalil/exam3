"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="  container w-full text-white flex flex-col items-center pb-20  ">
   


 
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl w-full">
       
      
      </div>

      {/* Google Maps Location */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full max-w-5xl mt-10"
      >
        <h3 className="text-2xl font-semibold text-orange-500 text-center mb-4">Our Location</h3>
        <div className="overflow-hidden rounded-lg shadow-lg">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.0090870503!2d-74.00601516791805!3d40.712728052782196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDBcwqAxMycyNS4xIlAgLTc0wrAwMSczNS44Ilc!5e0!3m2!1sen!2sus!4v1612897982951"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            className="border-0"
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
}
