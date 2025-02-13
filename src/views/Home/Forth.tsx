"use client"; // Add this line at the top

import React, { useState } from 'react';
import { FaChartBar, FaMoneyBillWave, FaLaptop, FaPlane, FaUserTie, FaClipboardList } from 'react-icons/fa';

const Forth = () => {
  return (
    <div className=" mx-auto px-4">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-screen flex items-center justify-center text-white text-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')", // Online image link
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className=  "bg-black container bg-opacity-50 p-10 rounded">
          <h1 className="text-4xl font-bold">Welcome to Our Store</h1>
          <p className="mt-4 text-balance">Partner with our experienced team and develop robust software application, whether you’re a start-up or an established business looking to outshine with innovative ideas! 
          </p>
          <button className="mt-4 bg-orange-500 px-6 py-2 rounded">Shop Now</button>
        </div>
      </section>
      <section className="text-center py-16 bg-white text-black">
       <h2 className="text-3xl font-bold">Know About Us</h2>
       <p className="text-black mt-2">Simply dummy text</p>
       <p className="max-w-3xl mx-auto mt-4 ">
       Radical Web Design is a web design company based in Manchester’s vibrant city centre. We’ve got years of experience in designing, creating, maintaining and refreshing websites, which is why we’ve got a hefty portfolio of happy clients
       </p>
       <button className="mt-6 bg-black text-white px-6 py-2 rounded">Read More</button>
     </section>
    
    </div>
  );
};

export default Forth;