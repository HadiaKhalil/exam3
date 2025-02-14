"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ECommerceHomePage() {
  return (
    <section className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        
        {/* Header Section */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-center text-gray-800 mb-8"
        >
          Featured Products
        </motion.h2>

        {/* Product Showcase */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Smartwatch Pro", img: "/images/1.jpg", price: "$199" },
            { name: "Wireless Earbuds", img: "/images/2.jpg", price: "$99" },
          ].map((product, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-4 rounded-lg shadow-md"
            >
              <Image src={product.img} width={300} height={200} alt={product.name} className="rounded-lg" />
              <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
              <p className="text-green-600 font-bold">{product.price}</p>
              <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded">Add to Cart</button>
            </motion.div>
          ))}

          {/* Right Side - Special Offers */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-lg font-semibold">Special Offers</h3>
            <ul className="mt-4 space-y-2">
              {[
                { offer: "Buy 1 Get 1 Free - Headphones", valid: "Valid till 20th Feb" },
                { offer: "50% Off on Smartwatches", valid: "Limited Time Offer" },
                { offer: "Free Shipping on orders over $50", valid: "All Week" },
              ].map((deal, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <span className="text-green-600 font-semibold">🔥</span>
                  <div>
                    <p className="font-medium">{deal.offer}</p>
                    <p className="text-sm text-gray-500">{deal.valid}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Info Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-10 bg-green-600 text-white p-4 rounded-lg flex justify-between items-center"
        >
          <p>🚚 Free shipping on all orders over $50. Limited time offer!</p>
          <div className="flex space-x-2">
            <button className="bg-white text-green-600 px-3 py-1 rounded">←</button>
            <button className="bg-white text-green-600 px-3 py-1 rounded">→</button>
          </div>
        </motion.div>

        {/* Shop by Category */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }} 
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-center text-gray-800 my-12"
        >
          Shop by Category
        </motion.h2>

        {/* Category Grid */}
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            { category: "Laptops", img: "/images/9.jpg" },
            { category: "Smartphones", img: "/images/7.jpg" },
            { category: "Gaming", img: "/images/8.jpg" },
            { category: "Accessories", img: "/images/10.jpg" },
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <Image src={item.img} alt={item.category} width={150} height={150} className="mx-auto rounded" />
              <h3 className="mt-4 text-lg font-semibold">{item.category}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
