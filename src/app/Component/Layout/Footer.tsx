import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa"; // Import social media icons
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Payment & Shipping */}
        <div className="flex flex-wrap justify-between border-b border-gray-700  pb-6">
          <div>
            <h3 className="text-sm font-semibold uppercase">Sichere Bezahlmöglichkeiten</h3>
            <div className="grid md:grid-cols-5 gap-3 mt-2">
              {["Visa", "PayPal", "Sofort", "Vorkasse", "Apple Pay"].map((payment) => (
                <div key={payment} className="bg-gray-200 hover:bg-orange-400 py-2 px-6 rounded-lg">
                  <p className="text-gray-600">{payment}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase">CO² Neutraler Versand</h3>
            <div className="mt-2">
              <Image 
                src="/images/202109-gogreen-plus.jpg" 
                alt="DHL GoGreen" 
                width={80} 
                height={40} 
                className="rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 sm:gap-16 gap-6 mt-6 ">
          <div>
            <h3 className="md:text-sm text-[12px]  font-semibold uppercase mb-3">Hilfe & Informationen</h3>
            <ul className="sm:space-y-2 md:text-[17px] text-[10px]">
              {["FAQ", "Lieferung und Versand", "Rückgabe und Umtausch", "Widerruf", "Datenschutz"].map((link) => (
                <li key={link}><Link href="#" className="hover:text-white">{link}</Link></li>
              ))}
            </ul>
          </div>
          <div>
          <h2 className="md:text-xl  font-bold">Contact Us</h2>
          <ul className="mt-3 space-y-3 md:text-[17px] text-[10px]">
            <li className="flex items-center sm:space-x-2">
              <MapPin size={16} className="text-orange-500" />
              <span className="text-gray-400">123 Web St, Tech City, TX 75001</span>
            </li>
            <li className="flex items-center sm:space-x-2">
              <Phone size={16} className="text-orange-500" />
              <span className="text-gray-400">+1 (234) 567-8900</span>
            </li>
            <li className="flex items-center sm:space-x-2">
              <Mail size={16} className="text-orange-500" />
              <span className="text-gray-400">info@yourwebsite.com</span>
            </li>
          </ul>

          {/* Social Media Icons */}
          <div className="flex sm:space-x-4 mt-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
              <a key={index} href="#" className="text-gray-400 hover:text-white transition">
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
        <div>
              <h3 className="sm:text-sm  text-[11px] font-semibold uppercase mb-3">Social Media</h3>
              <div className="flex sm:gap-4 ">
                <Link href="#" className="hover:text-white"><FaFacebookF className="sm:h-6 w-6" /></Link>
                <Link href="#" className="hover:text-white"><FaInstagram className="sm:h-6 w-6" /></Link>
                <Link href="#" className="hover:text-white"><FaYoutube className="sm:h-6 w-6" /></Link>
                <Link href="#" className="hover:text-white"><FaPinterest className="sm:h-6 w-6" /></Link>
              </div>
            </div>
             </div>
        <div className="grid lg:grid-cols-3 grid-cols-2 sm:gap-16 gap-6 pt-10">
       <div>
          <h2 className="md:text-xl    font-bold">About Us</h2>
          <p className="text-gray-400 mt-3 md:w-[200px] md:text-[17px] text-[10px]">
            We provide innovative solutions in web design, development, and digital marketing to help businesses thrive online.
          </p>
        </div>
        
     
        <div>
            <h3 className="md:text-xl  text-[14px] font-semibold uppercase mb-3 ">Bereiche</h3>
            <ul className="sm:space-y-2 md:text-[17px] text-[10px]">
              {["Home", "Produkte", "Story", "Journal"].map((link) => (
                <li key={link}><Link href="#" className="hover:text-white">{link}</Link></li>
              ))}
            </ul>
          </div>
            <div className="">
              <h3 className="text-sm font-semibold uppercase text-orange-600 mb-3 ">Sign Up</h3>
              <p className="text-sm mb-3">Trag dich in unseren Newsletter ein, um über neue Produkte informiert zu werden.</p>
              <div className="flex  hover:bg-orange-500">
                <input type="email" placeholder="E-Mail Adresse" className="p-2 flex-grow rounded-l bg-gray-800 text-white" />
                <button className="bg-gray-100 hover:bg-orange-500 px-4 py-2 rounded-r text-black">Senden</button>
              </div>
          
          </div>
        </div>
   
       
       

        {/* Copyright */}
        <div className=" text-xs text-gray-500 mt-16">
           <div className="mt-10 text-center text-gray-500 text-sm">
     
      </div> © 2025 by Company Name. All rights reserved rag dich in unseren Newsletter ein, um über neue Produkte rag dich in unseren Newsletter ein, um über neue Produkte.
        </div>
      </div>
    </footer>
  );
}










