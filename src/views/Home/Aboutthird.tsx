"use client"

import { motion } from "framer-motion";
import { Brush, Palette, Camera, LayoutGrid } from "lucide-react";

const skills = [
  { name: "Photoshop", percentage: 80 },
  { name: "Illustrator", percentage: 95 },
  { name: "XD", percentage: 75 },
];

const skillCards = [
  { title: "{`UI/UX Design`}", icon: <LayoutGrid size={40} /> },
  { title: "Graphic Design", icon: <Palette size={40} /> },
  { title: "Motion Design", icon: <Brush size={40} /> },
  { title: "Photo Retouch", icon: <Camera size={40} /> },
];

export default function DesignSkills() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side - Skills */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900">What My Design Skills Include</h2>
          <p className="text-gray-600 mt-3">
            {`These are the areas where I focus the most in my design workflow.`}
          </p>

          {/* Progress Bars */}
          <div className="mt-6 space-y-4">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between text-sm font-medium text-gray-700">
                  <span>{skill.name}</span>
                  <span>{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-300 h-2 rounded-md mt-1">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="h-2 bg-orange-500 rounded-md"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Side - Skill Cards */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6"
        >
          {skillCards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center space-y-2 text-center hover:shadow-lg"
            >
              <div className="text-gray-900">{card.icon}</div>
              <h3 className="text-gray-900 font-semibold">{card.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
