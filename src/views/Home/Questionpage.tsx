"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const questions = [
  {
    question: "What payment methods do you accept?",
    answer: "We accept credit cards, PayPal, and other secure payment options.",
  },
  {
    question: "How long does shipping take?",
    answer: "Shipping times vary by location, but most orders arrive within 5-7 business days.",
  },
  {
    question: "Can I return a product?",
    answer: "Yes, we offer a 30-day return policy for all unused products in original packaging.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);

    // Scroll smoothly to the opened FAQ
    setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 200);
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-6"
      >
        Frequently Asked Questions
      </motion.h2>

      <div className="space-y-4">
        {questions.map((faq, index) => (
          <motion.div
            key={index}
            ref={containerRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="border-b border-gray-300 pb-4"
          >
            <button
              className="flex justify-between items-center w-full text-left text-lg font-medium focus:outline-none hover:text-blue-600 transition-all duration-300"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
            >
              {faq.question}
              <motion.span
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-xl"
              >
                {openIndex === index ? "−" : "+"}
              </motion.span>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 text-gray-600 overflow-hidden"
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
