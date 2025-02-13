import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';



const Infor = () => {
  return (
    <>
   
      <div
        className="bg-[#272525] main font-sans bg-cover bg-center bg-blend-overlay"
        style={{ backgroundImage: "url('/images/online-6817350_1280.jpg')" }}
      >
        <div className="px-44 grid grid-cols-2 pt-10 pb-44">
          <div>
            <h2 className="text-4xl font-bold text-white mt-4">Contact Us</h2>
          </div>
          <div className="text-white">
            <p className="tracking-[8px] font-mono text-[11px]">CALL US</p>
            <p className="text-lg font-semibold">{`(255) 352-6258`}</p>

            <p className="tracking-[8px] font-mono text-[11px] mt-8">ADDRESS</p>
            <p className="text-lg font-semibold">
           {`   1234 Divi St. #1000 San Francisco,`}
            </p>
            <p className="text-lg font-semibold">{`CA 94220.`}</p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="px-24 -mt-40">
        <div className="mx-auto lg:px-20 py-5">
          <div className="bg-gray-900 py-10 px-10 p-8 rounded-md shadow-lg">
            <div className="grid grid-cols-2">
              <div>
                <h3 className="text-2xl font-semibold text-white w-[94px]">Send a Message</h3>

                {/* Social Media Icons */}
                <div className="flex space-x-2 mt-8">
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
              </div>

              <div>
             
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
                    className="w-full p-3 bg-transparent border border-gray-400 text-white rounded-md focus:outline-none focus:border-yellow-500 mb-4"
                  ></textarea>
                  <button className="bg-yellow-500 text-black px-6 py-2 font-bold rounded-md hover:bg-yellow-600 transition">
                    SUBMIT
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="text-center px-6 py-10">
        <h2 className="text-4xl font-bold text-gray-900">Know About Us</h2>
        <p className="max-w-3xl mx-auto mt-4 text-gray-700 text-lg">
        {`  Lyndon Group specializes in finance, IT, governance, and risk management
           to help businesses succeed.`}
        </p>
        <button className="mt-6 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">
          Read More
        </button>
      </section>

    </>
  );
};

export default Infor;
