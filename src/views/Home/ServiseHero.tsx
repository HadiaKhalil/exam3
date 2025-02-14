"use client";
import { motion } from "framer-motion";

export default function LatestNews() {
  const news = [
    {
      date: "24",
      month: "Feb",
      title: "Lyndon Group is a professional",
      author: "Admin",
      category: "Business",
      description:
        "Lyndon Group is a professional services firm specializing in accounting, finance, IT, governance.",
    },
    {
      date: "04",
      month: "Feb",
      title: "Lyndon Group is a professional",
      author: "Admin",
      category: "Business",
      description:
        "Lyndon Group is a professional services firm specializing in accounting, finance, IT, governance.",
    },
  ];

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
        Latest <span className="text-orange-500">News</span>
      </motion.h2>
      <p className="text-gray-600 text-sm mt-2">Stay updated with our latest insights.</p>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {news.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex items-start bg-gray-900 text-white p-6 rounded-xl shadow-md border border-gray-800 hover:shadow-lg transition duration-300"
          >
            {/* Date Box */}
            <div className="bg-orange-500 text-white text-center w-16 h-16 flex flex-col items-center justify-center rounded-lg shadow-md">
              <span className="text-xl font-bold">{item.date}</span>
              <span className="text-sm uppercase">{item.month}</span>
            </div>

            {/* News Content */}
            <div className="ml-5 text-left flex-1">
              <h3 className="text-lg font-semibold hover:text-orange-400 transition">
                {item.title}
              </h3>
              <p className="text-sm text-gray-300">
                by {item.author} | In: <span className="text-orange-400">{item.category}</span>
              </p>
              <p className="text-sm text-gray-400 mt-3">{item.description}</p>
              <a
                href="#"
                className="text-orange-400 text-sm font-semibold mt-3 block hover:underline transition"
              >
                Read More →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
