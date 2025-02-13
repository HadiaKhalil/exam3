import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const ServiceHero = () => {
  return (
    <section className="bg-[#8a5a44] py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Side - Contact Info */}
          <div>
            <h2 className="text-4xl font-bold text-white">Contact Us</h2>
            <div className="mt-6 text-white">
              <p className="text-lg font-semibold">CALL US</p>
              <p className="text-lg">(255) 352-6258</p>
              <p className="text-lg font-semibold mt-4">ADDRESS</p>
              <p className="text-lg">1234 Divi St. #1000 San Francisco, CA 94220.</p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-green-900 p-8 rounded-md shadow-lg">
            <h3 className="text-2xl font-semibold text-white">Send a Message</h3>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-3">
              <a href="#" className="text-white text-2xl hover:text-yellow-500 transition">
                <FaFacebookF />
              </a>
              <a href="#" className="text-white text-2xl hover:text-yellow-500 transition">
                <FaTwitter />
              </a>
              <a href="#" className="text-white text-2xl hover:text-yellow-500 transition">
                <FaInstagram />
              </a>
              <a href="#" className="text-white text-2xl hover:text-yellow-500 transition">
                <FaLinkedinIn />
              </a>
            </div>

            {/* Form */}
            <form className="mt-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 bg-transparent border border-gray-400 text-white rounded-md focus:outline-none focus:border-yellow-500 mb-4"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 bg-transparent border border-gray-400 text-white rounded-md focus:outline-none focus:border-yellow-500 mb-4"
              />
              <textarea
                placeholder="Message" 
                // rows="4"
                className="w-full p-3 bg-transparent border border-gray-400 text-white rounded-md focus:outline-none focus:border-yellow-500 mb-4"
              ></textarea>
              <button className="bg-yellow-500 text-black px-6 py-2 font-bold rounded-md hover:bg-yellow-600 transition">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default ServiceHero;