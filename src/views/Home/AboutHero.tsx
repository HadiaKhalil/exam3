
import React from 'react'

import { ArrowRight, Layout, Code, BarChart2, Briefcase } from 'lucide-react';
const AboutHero = () => {
  return (
    <div 
    className="text-white bg-gray-700 font-sans bg-cover bg-center bg-blend-overlay" 
    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c')" }}
  > 
    <div className='container py-10'>
      <div className='flex justify-center gap-6 items-center w-full md:text-start text-center'>
        <div className='items-center'>
          <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold max-lg:text-[25px]">
            Investing in Knowledge and Your Future
          </h1>
          <h3 className='sm:text-[11px] text-base text-center py-4'>
            {`Radical Web Design has years of experience in designing, creating, maintaining, and refreshing websites, which is why we have a strong portfolio of happy clients.`}
          </h3>
          <div className='flex flex-wrap gap-10 justify-center items-center'>
            <button className='bg-blue-700 flex text-white rounded-3xl text-[15px] py-5 px-20'>
              Contact  
              <ArrowRight size={20} className="ml-2" />
            </button>
            <div className="grid grid-cols-2 gap-5">
              <div className="bg-gray-100 hover:bg-orange-500 p-5 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-800">50+</h3>
                <p className="text-gray-600">Cramer Courses</p>
              </div>
              <div className="bg-gray-100 hover:bg-orange-500 p-5 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-800">1M+</h3>
                <p className="text-gray-600">Our Students</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="pb-10 pt-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">
          Browse Top Essential Career Courses
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {[
            { title: "UI/UX Design", icon: <Layout size={40} className="text-blue-500 mx-auto mb-4" />, bg: "bg-pink-200" },
            { title: "Web Development", icon: <Code size={40} className="text-green-600 mx-auto mb-4" />, bg: "bg-purple-200" },
            { title: "Digital Marketing", icon: <BarChart2 size={40} className="text-yellow-600 mx-auto mb-4" />, bg: "bg-sky-200" },
            { title: "Practical Learning", icon: <Briefcase size={40} className="text-red-600 mx-auto mb-4" />, bg: "bg-yellow-200" },
          ].map((course, index) => (
            <div key={index} className={`${course.bg} p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300`}>
              {course.icon}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h3>
            </div>
          ))}

          <div>
            <button className="md:mt-8 md:ml-16 ml-36 flex justify-center items-center bg-purple-500 text-white font-semibold py-6 px-6 rounded-full hover:bg-blue-700 transition-colors">
              <ArrowRight size={20} />
            </button>
            <h1 className='font-bold'>SEE MORE</h1>
          </div>
        </div>
      </div>
    </div>
 
  </div>
  )
}

export default AboutHero