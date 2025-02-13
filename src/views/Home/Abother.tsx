import React from 'react';
import Image from 'next/image';

const servicesData = [
  {
    title: "Wide Product Selection",
    description: "Explore a diverse range of high-quality products, from electronics to fashion, all in one place.",
    icon: "https://cdn-icons-png.flaticon.com/512/2331/2331970.png",
  },
  {
    title: "Fast & Reliable Shipping",
    description: "Get your orders delivered quickly with our trusted shipping partners and real-time tracking.",
    icon: "https://cdn-icons-png.flaticon.com/512/3500/3500833.png",
  },
  {
    title: "Easy & Secure Payments",
    description: "Shop with confidence using multiple payment options, including credit cards, PayPal, and BNPL.",
    icon: "https://cdn-icons-png.flaticon.com/512/891/891419.png",
  },
  {
    title: "24/7 Customer Support",
    description: "Need help? Our support team is available around the clock to assist with any inquiries.",
    icon: "https://cdn-icons-png.flaticon.com/512/929/929564.png",
  },
  {
    title: "Exclusive Deals & Discounts",
    description: "Enjoy special offers and discounts on your favorite brands with our loyalty program.",
    icon: "https://cdn-icons-png.flaticon.com/512/1256/1256650.png",
  },
  {
    title: "Hassle-Free Returns",
    description: "Not satisfied? Return products easily within 30 days for a full refund or exchange.",
    icon: "https://cdn-icons-png.flaticon.com/512/709/709612.png",
  }
];

export default function Services() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-center text-gray-800">OUR SERVICES</h2>
        <p className="text-center text-gray-600 mt-2">Experience the best in online shopping.</p>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {servicesData.map((service, index) => (
            <div key={index} className="bg-white shadow-md p-6 rounded-lg flex items-start">
              <Image 
                src={service.icon} 
                alt={service.title} 
                width={48} 
                height={48} 
                className="mr-4" 
              />
              <div>
                <h3 className="text-lg font-bold text-gray-800">{service.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{service.description}</p>
                <a href="#" className="text-blue-600 text-sm mt-2 inline-block">Learn More →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


