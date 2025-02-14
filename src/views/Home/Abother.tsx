"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function ModernDesign() {
  // Refs for Scroll Animations
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* Left Side - Images */}
          <div className="relative grid grid-cols-2 gap-4">
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="col-span-2"
            >
              <Image
                src="/images/6.jpg"
                alt="Living Room"
                width={500}
                height={400}
                className="rounded-lg shadow-lg w-full"
              />
            </motion.div>

            {/* Small Image 1 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/images/2.jpg"
                alt="Study Room"
                width={200}
                height={200}
                className="rounded-lg shadow-md w-full"
              />
            </motion.div>

            {/* Small Image 2 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/images/3.jpg"
                alt="Stool"
                width={200}
                height={200}
                className="rounded-lg shadow-md w-full"
              />
            </motion.div>
          </div>

          {/* Right Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-gray-800"
          >
            <h2 className="text-3xl font-bold text-gray-900">
              We Help You Make Modern Interior Design
            </h2>
            <p className="text-gray-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae odio quis dolor tristique malesuada.
            </p>

            {/* Bullet Points */}
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>✅ Elegant and modern styles</li>
              <li>✅ High-quality materials</li>
              <li>✅ Designed for comfort and aesthetics</li>
            </ul>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 bg-orange-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-orange-600"
            >
              Explore
            </motion.button>
          </motion.div>
        </div>

        {/* Product Section */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
          {[
            { name: "Nordic Chair", img: "/images/1.jpg" },
            { name: "Kruso Aero Chair", img: "/images/5.jpg" },
            { name: "Ergonomic Chair", img: "/images/4.jpg" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <Image src={item.img} alt={item.name} width={150} height={150} className="mx-auto" />
              <h3 className="mt-4 text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-600 text-sm">
                Donec facilisis quam ut purus rhoncus bibendum. Donec vitae odio quis.
              </p>
              <a href="#" className="text-orange-500 font-semibold mt-2 inline-block">
                Read More →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
