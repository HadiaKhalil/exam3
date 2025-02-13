"use client"; // 👈 Add this at the top

import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "{`How can I track my order?`}",
      answer:
        "{`Once your order is shipped, you&apos;ll receive an email with a tracking link. You can also check your order status in your account dashboard`}",
    },
    {
      question: "{`What payment methods do you accept?`}",
      answer:
        "{`We accept major credit cards, PayPal, Apple Pay, Google Pay, and Klarna for installment payments.`}",
    },
    {
      question: "{`What is your return policy?`}",
      answer:
        "{`You can return items within 30 days of purchase. Items must be unused and in original packaging. Start a return request through your account`}",
    },
    {
      question: "{`Do you offer international shipping?`}",
      answer:
        "Yes! {`We ship worldwide. Shipping costs and delivery times vary by location and will be shown at checkout.`}",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <div className="max-w-5xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <div key={index} className="relative pb-6 border-b border-gray-300">
            <button
              className="text-xl font-semibold flex justify-between items-center w-full text-left focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="text-xl ml-2 transition-transform duration-200">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div
  className="bg-white py-10"
  style={{
    backgroundImage: "url('/images/WhatsApp Image 2025-02-13 at 12.05.43 PM.jpeg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  <div className="px-20">
    <div className="flex flex-col md:flex-row items-stretch w-full max-w-6xl mx-auto   bg-opacity-90">
      {/* Left Section */}
      <div className=" text-white p-8 md:w-1/2 justify-center ">
        <h2 className="text-2xl font-bold mb-4">{`Let's Start a Project`}</h2>
        <p className="mb-6 text-gray-300">
       {`   Lorem ipsum dolor sit amet, consectetur adipiscing 
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
        </p>
        <button className="bg-[#636326] hover:bg-green-300 px-5 py-4 text-white text-[11px] rounded">
          GET A FREE QUOTE
        </button>

        <nav className="mt-6 space-y-2">
          <a href="#" className="block tracking-[3px] font-bold text-[11px] text-gray-300 hover:text-white">HOME</a>
          <a href="#" className="block tracking-[3px] font-bold text-[11px] text-gray-300 hover:text-white">SERVICES</a>
          <a href="#" className="block tracking-[3px] font-bold text-[11px] text-gray-300 hover:text-white">ABOUT</a>
          <a href="#" className="block tracking-[3px] font-bold text-[11px] text-gray-300 hover:text-white">CONTACT</a>
        </nav>
      </div>

      {/* Right Section */}
      <div className="bg-[#272323] text-white p-8 md:w-1/2 flex flex-col justify-center ">
        <h3 className="text-sm uppercase text-gray-400 tracking-[3px] font-bold">Call Us</h3>
        <p className="text-2xl font-bold my-3">{`(255) 352-6258`}</p>

        <h3 className="text-lg font-semibold mt-6">Subscribe</h3>
        <form className="mt-3">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border border-gray-600 bg-transparent text-white rounded mb-2 focus:outline-none"
          />
          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded">
            SUBSCRIBE
          </button>
        </form>
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default FAQ;
