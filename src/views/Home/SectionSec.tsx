import React from 'react';
import { IoStarSharp } from "react-icons/io5";

const SectionSec = () => {
  return (
    <div 
      className="bg-[#e2eeea] main font-sans bg-cover bg-center bg-blend-overlay" 
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')" }} 
    > 
      <div className='container text-black py-10 font-sans'>
        <div className='grid lg:grid-cols-2 gap-6 items-center w-full md:text-start text-center py-4'>
          <div>
            <div className="sm:text-[11px] text-[9px] flex md:justify-start justify-center gap-5">
              <p className='tracking-[8px] font-mono lg:text-start text-center'>
                {`WELCOME CODEVIBES!`}
              </p>
            </div>
            <h1 className='md:text-5xl text-[20px] font-semibold py-3 md:text-start text-center'>
              What we do?
            </h1>
            <h1 className="animate-typing md:text-[30px] text-[19px] font-semibold md:text-start text-center">
              <span className="text-orange-600 font-sans">{`Doing things differently`}</span>
            </h1>
            <h3 className='sm:text-[14px] text-[11px] lg:w-[450px] sm:py-4 py-4'>
              {`An e-commerce specialist managing stores on TikTok Shop, Walmart, eBay, and Amazon. 
              With expertise in online selling, I help businesses grow through effective product listings 
              and marketing strategies. Let's scale your e-commerce success together!`}
            </h3>
            <button className='bg-orange-500 hover:bg-green-600 text-[12px] py-3 px-5 rounded-full transition'>
              SEE WORK
            </button>
            <button className='bg-green-600 hover:bg-orange-500 text-[12px] py-3 px-5 ml-4 rounded-full transition'>
              LEARN MORE
            </button>
          </div>

          <div>
            {/** Job Listings */}
            {[
              { title: "HR Manager", available: "Available Now", date: "12-04-2023" },
              { title: "Software Engineer", available: "Available Now", date: "12-04-2023" },
              { title: "Web Maintenance", available: "Available Now", date: "12-04-2023" },
            ].map((job, index) => (
              <div
                key={index}
                className="grid grid-cols-3 hover:bg-orange-400 bg-white rounded-lg shadow-md hover:shadow-lg py-4 px-4 mt-4"
              >
                <h1 className="md:text-[15px] text-[13px]">
                  {job.title}
                  <p className="px-4 md:text-[12px] text-[9px]">{job.available}</p>
                </h1>
                <h1 className="md:text-[15px] text-[13px]">
                  Apply by
                  <p className="md:text-[12px] text-[9px]">{job.date}</p>
                </h1>
                <div className="flex items-center text-orange-500">
                  {[...Array(6)].map((_, i) => (
                    <IoStarSharp key={i} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSec;
