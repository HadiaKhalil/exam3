import Image from "next/image";
// import Link from 'next/link';

import { ArrowRight } from "lucide-react";
import { Layout, Code, BarChart2, Briefcase } from 'lucide-react';



const Hero = () => {
  return (
    <div className=" text-black bg-white 00 font-sans"> 
      <div className='container '>
        <div className='grid lg:grid-cols-2 gap-6 items-center  w-full md:text-start  text-center '>
        <div className="">
            <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold max-w-[440px] max-lg:text-[25px]">
            Investing in Knowledge and <span className="text-orange-700"> Your Future</span>
            </h1>
            <h3 className='sm:text-[11px] text-base md:w-[450px] py-4'>
              {`Radical Web Design is   We’ve got years of experience in designing, creating, maintaining and refreshing websites, which is why we’ve got a hefty portfolio of happy clients
              Development`}
            </h3>
            <div className='flex flex-wrap gap-8 sm:justify-start justify-center items-center'>
              <div>
            <button   className='bg-blue-700 text-white  rounded-3xl text-[15px] py-4 px-10 '>
              contact
            </button>
            </div>
            <div className="grid grid-cols-2 gap-5">
            <div className="bg-gray-100 p-5 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-800 ">50+</h3>
              <p className="text-gray-600">Cramer Courses</p>
            </div>
            <div className="bg-gray-100 p-5 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-800 ">1M+</h3>
              <p className="text-gray-600">Our Students</p>
            </div>
          </div>
            </div>
            
          
          </div>
          <div className=''>
            <Image
              src="/images/eddfcsded.png"
              alt="XX99 MARK II HEADPHONES"
              className="object-cover rounded-lg w-full"
              width={645}
              height={400}
            />
          </div>
        </div>
      </div>
      <div className=" pb-10 pt-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 md:text-start md:w-[300px]">
          Browse Top Essential Career Courses
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* UI/UX Design */}
          <div className="bg-pink-400 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <Layout size={40} className="text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">UI/UX <br></br>Design</h3>
            
          </div>

          {/* Web Development */}
          <div className="bg-purple-400 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <Code size={40} className="text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Web Development</h3>
          
          </div>

          {/* Digital Marketing */}
          <div className="bg-sky-300 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <BarChart2 size={40} className="text-yellow-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Digital Marketing</h3>
          
          </div>

          {/* Practical Learning */}
          <div className="bg-yellow-300 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <Briefcase size={40} className="text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Practical Learning</h3>
          </div>
          <div>
          <button className="mt-8    justify-center items-center gap-2 bg-purple-500 text-white font-semibold py-6 px-6 rounded-full hover:bg-blue-700 transition-colors ">
 
  <ArrowRight size={20} />
 
</button>
<h1 className='text-black font-bold py-3'>SEE MORE</h1>
          </div>
        
        </div>
    

      </div>
    </div>
    </div>
  );
};

export default Hero;