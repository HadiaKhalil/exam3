"use client";

import React from "react";
import { motion } from "framer-motion";

const events = [
  {
    title: "Recruitment Events",
    description: "Explore top recruitment trends and strategies.",
    videoUrl: "https://www.youtube.com/watch?v=i4D6d91NRjU",
    imageUrl: "/images/recruitment.jpg",
  },
  {
    title: "Development Talents",
    description: "Enhancing skills through expert training sessions.",
    videoUrl: "https://www.youtube.com/watch?v=i4D6d91NRjU",
    imageUrl: "/images/development.jpg",
  },
  {
    title: "Executive Search Process",
    description: "Finding the best executive talent for companies.",
    videoUrl: "https://www.youtube.com/embed/XEEcxYzNOfI?autoplay=1&mute=1&loop=1&playlist=XEEcxYzNOfI",
    imageUrl: "/images/executive.jpg",
  },
  {
    title: "Leadership Events",
    description: "Building strong leadership for a better future.",
    videoUrl: "/images/First Steps to Mastering Web Design_ Principles, Tools and Techniques.mp4",
    imageUrl: "/images/leadership.jpg",
  },
];

const EventHighlights = () => {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center text-4xl font-bold text-gray-900 mb-10"
      >
        Energy And Excitement Of Our <br /> Past Events And Engagements
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative group overflow-hidden rounded-xl shadow-lg"
          >
            <img
              src={event.imageUrl}
              alt={event.title}
              className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-6 text-center">
              <h3 className="text-2xl font-semibold">{event.title}</h3>
              <p className="mt-2 text-sm">{event.description}</p>
            </div>

            {/* Play Button with Video Link */}
            <a
              href={event.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex justify-center items-center"
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white text-green-500 rounded-full p-4 shadow-lg transition-all"
              >
                ▶
              </motion.div>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EventHighlights;
