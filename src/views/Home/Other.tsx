"use client"

import { motion } from "framer-motion";
import { FaLaptopCode, FaBuilding, FaChartBar, FaDatabase, FaBook } from "react-icons/fa";

const categories = [
  { id: 1, name: "Computer Science", courses: 14, icon: <FaLaptopCode className="text-green-500 text-3xl" /> },
  { id: 2, name: "Civil Engineering", courses: 40, icon: <FaBuilding className="text-blue-500 text-3xl" /> },
  { id: 3, name: "Business Analysis", courses: 67, icon: <FaChartBar className="text-yellow-500 text-3xl" /> },
  { id: 4, name: "Data Science Analytics", courses: 28, icon: <FaDatabase className="text-purple-500 text-3xl" /> },
  { id: 5, name: "Learning Management", courses: 72, icon: <FaBook className="text-red-500 text-3xl" /> },
];

export default function PopularCategories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-orange-500 uppercase tracking-widest font-semibold">Popular Category</p>
        <h2 className="text-3xl font-bold mt-2">Popular Category For Learn</h2>
      </div>

      {/* Categories Grid */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-6xl mx-auto mt-8 px-4"
      >
        {categories.map((category, index) => (
          <motion.div 
            key={category.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-all duration-300"
          >
            <div className="mb-4">{category.icon}</div>
            <h3 className="text-lg font-semibold">{category.name}</h3>
            <p className="text-gray-500">{category.courses} Courses</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Browse Button */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mt-8"
      >
        <button className="px-6 py-3 bg-orange-500 text-white font-bold rounded-md shadow-md hover:bg-orange-600 transition-all duration-300">
          Browse All Categories
        </button>
      </motion.div>
    </section>
  );
}










