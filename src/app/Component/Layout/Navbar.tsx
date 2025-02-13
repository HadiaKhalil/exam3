"use client";

import { ShoppingCart, Menu } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { IoCall } from "react-icons/io5";
// import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[#e2eeea]"> 
    <div className="container  text-black">
      <div className="flex justify-between items-center w-full py-4 relative">
        {/* Mobile Menu Icon */}
        <div className="flex md:hidden">
          <Menu
            className="cursor-pointer hover:text-[#D87D4A] transition-colors duration-300"
            onClick={toggleMenu}
          />
        </div>

        {/* Logo */}
        <h1 className="text-[24px]   font-mono font-extrabold cursor-pointer hover:text-[#D87D4A] transition-colors duration-300">
          <Link href="/">Code<span className="text-[#f58020] font-mono">viBes</span></Link>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden items-center md:flex space-x-6 lg:space-x-8 lg:text-[15px] text-[11px] font-semibold uppercase">
          <li className="text-[#f58020] cursor-pointer  transition-colors duration-300">
            <Link href="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:text-[#D87D4A] transition-colors duration-300">
            <Link href="/About">About Us</Link>
          </li>
          <li className="cursor-pointer hover:text-[#D87D4A] transition-colors duration-300">
            <Link href="/Service">Service</Link>
          </li>
          <li className="cursor-pointer hover:text-[#D87D4A] transition-colors duration-300">
            <Link href="/Contact">Contact Us</Link>
          </li>
          <div className="flex btn">
          <h1 className="py-1"><IoCall />  </h1>
          <button className=" flex"><i className="icon-call">  +92 333 0666167</i></button>
          </div>
         
        </ul>

        {/* Shopping Cart Icon */}
        <ShoppingCart className="cursor-pointer hover:text-[#D87D4A] transition-colors duration-300" />
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#191919] text-white py-4 px-6">
          <ul className="text-[15px] font-semibold uppercase space-y-4">
            <li className="cursor-pointer hover:text-[#D87D4A] transition-colors duration-300">
              <Link href="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li className="cursor-pointer hover:text-[#D87D4A] transition-colors duration-300">
              <Link href="/About" onClick={toggleMenu}>About</Link>
            </li>
            <li className="cursor-pointer hover:text-[#D87D4A] transition-colors duration-300">
              <Link href="/Service" onClick={toggleMenu}>Service</Link>
            </li>
            <li className="cursor-pointer hover:text-[#D87D4A] transition-colors duration-300">
              <Link href="/Contact" onClick={toggleMenu}>Contact</Link>
            </li>
            
          </ul>
        </div>
      )}
    </div>
    </div>
  );
};

export default Navbar;



