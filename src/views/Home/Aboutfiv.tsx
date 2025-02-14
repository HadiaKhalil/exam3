"use client"

import { motion } from "framer-motion";
import { FaUsers, FaCogs, FaBrain, FaLightbulb } from "react-icons/fa";

const learnItems = [
  { icon: <FaUsers size={40} />, text: "How to prospect clients and get noticed in the market." },
  { icon: <FaCogs size={40} />, text: "Work methods and techniques to improve efficiency." },
  { icon: <FaBrain size={40} />, text: "Step-by-step strategies to become a sought-after professional." },
  { icon: <FaLightbulb size={40} />, text: "How to gain freedom in your career as a designer." },
];

const audienceItems = [
  { number: "01", text: "Beginners who want to start their careers correctly." },
  { number: "02", text: "Designers looking to improve and grow their results." },
  { number: "03", text: "Professionals who want to stand out and be recognized in the market." },
];

export default function LearningSection() {
  return (
    <section className="bg-gray-900 text-white py-16 ">
      <div className="max-w-6xl mx-auto px-6">
        {/* Learning Section */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center"
        >
          What You Will Learn
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8"
        >
          {learnItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-lg text-center shadow-lg"
            >
              <div className="text-blue-400 mx-auto mb-3">{item.icon}</div>
              <p className="text-gray-300">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center mt-8"
        >
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full font-bold transition-all">
            I Want to Join
          </button>
        </motion.div>

        {/* Who Should Join */}
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-center mt-16"
        >
          This Event is for You If:
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
        >
          {audienceItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-lg text-center shadow-lg"
            >
              <h4 className="text-blue-400 text-3xl font-bold">{item.number}</h4>
              <p className="text-gray-300 mt-2">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}