"use client"; 

import React, { useState } from "react";
import { motion } from "framer-motion";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, you'll receive an email with a tracking link. You can also check your order status in your account dashboard.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept major credit cards, PayPal, Apple Pay, Google Pay, and Klarna for installment payments.",
    },
    {
      question: "What is your return policy?",
      answer:
        "You can return items within 30 days of purchase. Items must be unused and in original packaging. Start a return request through your account.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes! We ship worldwide. Shipping costs and delivery times vary by location and will be shown at checkout.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* FAQ Section */}
      <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-5xl mx-auto p-10 bg-gradient-to-r from-gray-50 to-gray-200 rounded-2xl shadow-2xl"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-gray-900 mb-10"
      >
        Frequently Asked Questions
      </motion.h1>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <button
              className="flex justify-between items-center w-full text-left text-xl font-semibold text-gray-800 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <motion.span
                className="text-xl ml-2"
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                ⌵
              </motion.span>
            </button>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: openIndex === index ? "auto" : 0,
                opacity: openIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden mt-3 text-gray-600"
            >
              {faq.answer}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>

      {/* Contact & Quote Section */}
      <section
      className="relative py-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/WhatsApp Image 2025-02-13 at 12.05.43 PM.jpeg')",
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-stretch gap-8">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-900 text-white p-8 md:p-12 rounded-lg flex-1 shadow-lg"
          >
            <h2 className="text-4xl font-bold mb-4">Let's Start a Project</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Bring your ideas to life with our expert services. Let's build something amazing together.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 hover:bg-green-400 px-6 py-3 rounded-lg text-white font-semibold transition-all"
            >
              GET A FREE QUOTE
            </motion.button>

            <nav className="mt-8 space-y-3">
              {["HOME", "SERVICES", "ABOUT", "CONTACT"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block tracking-widest text-gray-300 hover:text-white font-bold text-sm uppercase transition-all"
                >
                  {item}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Right Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800 text-white p-8 md:p-12 rounded-lg flex-1 shadow-lg"
          >
            <h3 className="text-sm uppercase text-gray-400 tracking-widest font-bold">
              Call Us
            </h3>
            <p className="text-3xl font-bold my-3 text-green-400">(255) 352-6258</p>

            <h3 className="text-lg font-semibold mt-6">Subscribe</h3>
            <form className="mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-600 bg-transparent text-white rounded-lg mb-4 focus:outline-none placeholder-gray-400"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-all"
              >
                SUBSCRIBE
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
};

export default FAQ;
