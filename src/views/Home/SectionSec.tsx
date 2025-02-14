// import React from 'react';
// import { IoStarSharp } from "react-icons/io5";

// const SectionSec = () => {
//   return (
//     <div 
//       className="bg-[#e2eeea] main font-sans bg-cover bg-center bg-blend-overlay" 
//       style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')" }} 
//     > 
//       <div className='container text-black py-10 font-sans'>
//         <div className='grid lg:grid-cols-2 gap-6 items-center w-full md:text-start text-center py-4'>
//           <div>
//             <div className="sm:text-[11px] text-[9px] flex md:justify-start justify-center gap-5">
//               <p className='tracking-[8px] font-mono lg:text-start text-center'>
//                 {`WELCOME CODEVIBES!`}
//               </p>
//             </div>
//             <h1 className='md:text-5xl text-[20px] font-semibold py-3 md:text-start text-center'>
//               What we do?
//             </h1>
//             <h1 className="animate-typing md:text-[30px] text-[19px] font-semibold md:text-start text-center">
//               <span className="text-orange-600 font-sans">{`Doing things differently`}</span>
//             </h1>
//             <h3 className='sm:text-[14px] text-[11px] lg:w-[450px] sm:py-4 py-4'>
//               {`An e-commerce specialist managing stores on TikTok Shop, Walmart, eBay, and Amazon. 
//               With expertise in online selling, I help businesses grow through effective product listings 
//               and marketing strategies. Let's scale your e-commerce success together!`}
//             </h3>
//             <button className='bg-orange-500 hover:bg-green-600 text-[12px] py-3 px-5 rounded-full transition'>
//               SEE WORK
//             </button>
//             <button className='bg-green-600 hover:bg-orange-500 text-[12px] py-3 px-5 ml-4 rounded-full transition'>
//               LEARN MORE
//             </button>
//           </div>

//           <div>
//             {/** Job Listings */}
//             {[
//               { title: "HR Manager", available: "Available Now", date: "12-04-2023" },
//               { title: "Software Engineer", available: "Available Now", date: "12-04-2023" },
//               { title: "Web Maintenance", available: "Available Now", date: "12-04-2023" },
//             ].map((job, index) => (
//               <div
//                 key={index}
//                 className="grid grid-cols-3 hover:bg-orange-400 bg-white rounded-lg shadow-md hover:shadow-lg py-4 px-4 mt-4"
//               >
//                 <h1 className="md:text-[15px] text-[13px]">
//                   {job.title}
//                   <p className="px-4 md:text-[12px] text-[9px]">{job.available}</p>
//                 </h1>
//                 <h1 className="md:text-[15px] text-[13px]">
//                   Apply by
//                   <p className="md:text-[12px] text-[9px]">{job.date}</p>
//                 </h1>
//                 <div className="flex items-center text-orange-500">
//                   {[...Array(6)].map((_, i) => (
//                     <IoStarSharp key={i} />
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SectionSec;





"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function MiningSection() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
      className=" container flex flex-col md:flex-row items-center gap-12  rounded-lg shadow-xl overflow-hidden"
    >
      {/* Left Image Section */}
      <motion.div 
        initial={{ scale: 0.9 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="md:w-1/2 w-full relative"
      >
        <Image
          src="/images/image.webp"
          alt="Bulldozer at work"
          width={600}
          height={400}
          className="rounded-lg shadow-lg border-4 border-orange-400"
        />
      </motion.div>
      
      {/* Right Text Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 w-full p-8"
      >
        <h5 className="text-orange-400 font-semibold uppercase tracking-wider">
          Why Choose Us
        </h5>
        <h2 className="text-4xl font-extrabold text-gray-900 my-3 leading-snug">
          Powering Progress, <span className="text-orange-500">One Dig at a Time</span>
        </h2>
        <p className="text-gray-900 text-base mb-6">
          Experience the future of mining with precision engineering, sustainable
          practices, and a commitment to excellence.
        </p>

        {/* Stats */}
        <motion.div 
          className="flex gap-10 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.3 }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-center"
          >
            <span className="text-4xl font-bold text-orange-400">250+</span>
            <p className="text-sm text-gray-900">Projects Completed</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-center"
          >
            <span className="text-4xl font-bold text-orange-400">410+</span>
            <p className="text-sm text-gray-900">Happy Customers</p>
          </motion.div>
        </motion.div>

        {/* Progress Bars */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-sm text-gray-900 mb-2 font-medium pt-5 pb-2">
            Work Satisfaction
          </p>
          <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden">
            <motion.div 
              className="bg-orange-400 h-3 w-[90%] rounded-full"
              initial={{ width: "0%" }}
              whileInView={{ width: "90%" }}
              transition={{ duration: 1 }}
            ></motion.div>
          </div>

          <p className="text-sm text-gray-900 mt-4 font-medium pt-5 pb-2">
            Work Progress
          </p>
          <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden">
            <motion.div 
              className="bg-orange-400 h-3 w-[95%] rounded-full"
              initial={{ width: "0%" }}
              whileInView={{ width: "95%" }}
              transition={{ duration: 1 }}
            ></motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
