import React from 'react';
import { Home, Grid, BookOpen, FileText, UserPlus } from 'lucide-react';

const Other = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
   
      <div className="py-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Learning Chart</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 hover:bg-orange-400 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{`50+`}</h3>
              <p className="text-gray-600">Cramer Courses</p>
            </div>
            <div className="bg-orange-400 hover:bg-gray-100 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{`1M+`}</h3>
              <p className="text-gray-600">Our Students</p>
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-white shadow-md">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-2 items-center py-5">
            <div className="text-1xl font-bold text-gray-800">{`Chartered Financial Analyst (CFA) Certification`}</div>
            <div className="grid md:grid-cols-5 grid-cols-2">
              <a href="#" className="flex items-center text-gray-700 hover:text-gray-900">
                <Home size={20} className="mr-2 text-orange-800" /> Home
              </a>
              <a href="#" className="flex items-center text-gray-700 hover:text-gray-900">
                <Grid size={20} className="mr-2" /> Category
              </a>
              <a href="#" className="flex items-center text-gray-700 hover:text-gray-900">
                <BookOpen size={20} className="mr-2 text-orange-800" /> Course
              </a>
              <a href="#" className="flex items-center text-gray-700 hover:text-gray-900">
                <FileText size={20} className="mr-2 text-orange-800" /> Blog
              </a>
              <a href="#" className="flex items-center text-gray-700 hover:text-gray-900">
                <UserPlus size={20} className="mr-2 text-orange-800" /> Sign Up
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Other;
