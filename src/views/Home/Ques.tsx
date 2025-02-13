"use client"; 

import { useState } from "react";

const Ques = [
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

export default function ServiseHero() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {Ques.map((faq, index) => ( 
          <div key={index} className="border-b border-gray-300 pb-4">
            <button
              className="flex justify-between items-center w-full text-left text-lg font-medium focus:outline-none hover:text-blue-600 transition-colors"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
            >
              {faq.question}
              <span className="text-xl">{openIndex === index ? "{`−`}" : "{`+`}"}</span>
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
