import React from 'react';
import { Brush, ShoppingCart, PenTool, Server, Code, LifeBuoy } from 'lucide-react';
import { IoStarSharp } from "react-icons/io5";
const ServiceSec = () => {
  return (
    <div className='container py-12 px-4'>
    <div className="bg-gray-50  sm:px-6 ">
      <div className=" mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">What we do.</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Web Design */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Brush size={40} className="text-blue-500 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Web Design</h2>
            <p className="text-gray-600">
              Your website has got to look good, that’s a given. That’s why we strive for the best where quality and user experience is concerned.
            </p>
               <div className='flex items-center py-2 justify-center text-blue-900'>
                          <IoStarSharp />
                          <IoStarSharp />
                          <IoStarSharp />
                          <IoStarSharp />
                          <IoStarSharp />
                          <IoStarSharp />
                        </div>
          </div>

          {/* E-commerce */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <ShoppingCart size={40} className="text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">E-commerce</h2>
            <p className="text-gray-600">
              Whether you’re looking to sell to a local, national or international audience, we can help get your products and services noticed.
            </p>
            <div className='flex items-center py-2 justify-center text-green-900'>
                          <IoStarSharp />
                          <IoStarSharp />
                          <IoStarSharp />
                          <IoStarSharp />
                          <IoStarSharp />
                          <IoStarSharp />
                        </div>
          </div>

          {/* Graphic Design */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <PenTool size={40} className="text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Graphic Design</h2>
            <p className="text-gray-600">
              From logos, stationery and print design to social media assets. We’ve been there, done it to social media and got the t-shirt to social media.
            </p>
            <div className='flex items-center py-2 justify-center text-pink-900'>
                          <IoStarSharp />
                          <IoStarSharp />
                          <IoStarSharp />
                          <IoStarSharp />
                          <IoStarSharp />
                          <IoStarSharp />
                        </div>
          </div>

          {/* Web Maintenance */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Server size={40} className="text-yellow-500 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Web Maintenance</h2>
            <p className="text-gray-600">
              Ongoing updates from a team who care and understand your business and website. We’re in this for the long haul.
            </p>
            <div className='flex items-center py-2 justify-center text-yellow-600'>
                          <IoStarSharp />
                          <IoStarSharp />
                          <IoStarSharp />
                          <IoStarSharp />
                          <IoStarSharp />
                          <IoStarSharp />
                        </div>
          </div>

          {/* Web Development */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Code size={40} className="text-purple-500 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Web Development</h2>
            <p className="text-gray-600">
              If content is what fuels the web, then development must be the engine that drives it. Done right and you shouldn’t even notice it is there.
            </p>
            <div className='flex items-center py-2 justify-center text-purple-900'>
                          <IoStarSharp />
                          <IoStarSharp />
                          <IoStarSharp />
                          <IoStarSharp />
                          <IoStarSharp />
                          <IoStarSharp />
                        </div>
          </div>

          {/* Hosting & Support */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <LifeBuoy size={40} className="text-orange-500 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Hosting & Support</h2>
            <p className="text-gray-600">
              Website hosting is available on our dedicated server with UKFAST. High performance and reliability is guaranteed, with 24/7 technical support.
            </p>
            <div className='flex items-center py-2 justify-center text-orange-600'>
                          <IoStarSharp />
                          <IoStarSharp />
                          <IoStarSharp />
                          <IoStarSharp />
                          <IoStarSharp />
                          <IoStarSharp />
                        </div>
          </div>
        </div>

        {/* Cookies Policy */}
        <div className="py-8 text-sm text-gray-600">
          <p>
            <strong>Cookies policy</strong>  
            Our website uses cookies to analyse how the site is used and to ensure your experience is consistent between visits. <a href="#" className="text-blue-500 hover:underline">Learn more...</a>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ServiceSec;
