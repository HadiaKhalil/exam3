

// export default function Home() {
//     return (
//       <div className="bg-gray-50">
        
  
//         {/* Hero Section */}
       
  
//         {/* Feature Section */}
//         <section className=" container mx-auto px-6">
//           <h2 className="text-2xl font-bold text-center">{`AT EUNEXUS, WE HAVE NEVER BELIEVED THERE IS A SILVER BULLET FOR FRAUD.`}</h2>
//           <p className="text-gray-600 text-center mt-4">
//            {` Eunexus has rapidly established itself as a leading provider of fraud detection solutions.`}
//           </p>
  
//           <div className="flex flex-col md:flex-row justify-center mt-8 space-y-6 md:space-y-0 md:space-x-8">
//             <div className="flex items-center space-x-4">
//               <div className="w-16 h-16 bg-orange-500 text-white flex items-center justify-center rounded-full"></div>
//               <div>
//                 <h3 className="font-bold text-lg">DETECT</h3>
//                 <p className="text-gray-500">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit`}.</p>
//               </div>
//             </div>
//             <div className="flex items-center space-x-4">
//               <div className="w-16 h-16 bg-orange-500 text-white flex items-center justify-center rounded-full"></div>
//               <div>
//                 <h3 className="font-bold text-lg">LEARN</h3>
//                 <p className="text-gray-500">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}</p>
//               </div>
//             </div>
//             <div className="flex items-center space-x-4">
//               <div className="w-16 h-16 bg-orange-500 text-white flex items-center justify-center rounded-full"></div>
//               <div>
//                 <h3 className="font-bold text-lg">PROTECT</h3>
//                 <p className="text-gray-500">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}</p>
//               </div>
//             </div>
//           </div>
//         </section>
  
//         {/* Services Section */}
//         <section className="bg-gray-100 py-24">
//           <div className="container mx-auto px-6 text-center">
//             <h2 className="text-2xl font-bold">OUR SERVICES</h2>
//             <p className="text-gray-600 mt-4">
//            {`   Eunexus' fraud consultants have broad industry experience.`}
//             </p>
  
//             <div className="grid md:grid-cols-4 gap-8 mt-8">
//               <div className="bg-white p-6 shadow-md rounded-lg">
//                 <h3 className="font-bold">Professional Services</h3>
//                 <p className="text-gray-500 mt-2">{`Expert consulting solutions for fraud prevention.`}</p>
//               </div>
//               <div className="bg-white p-6 shadow-md rounded-lg">
//                 <h3 className="font-bold">Fraud Consulting</h3>
//                 <p className="text-gray-500 mt-2">{`Advanced fraud detection methodologies.`}</p>
//               </div>
//               <div className="bg-white p-6 shadow-md rounded-lg">
//                 <h3 className="font-bold">Analytical Services</h3>
//                 <p className="text-gray-500 mt-2">{`Data-driven fraud analytics to prevent losses.`}</p>
//               </div>
//               <div className="bg-white p-6 shadow-md rounded-lg">
//                 <h3 className="font-bold">Project Management</h3>
//                 <p className="text-gray-500 mt-2">{`Managing fraud prevention strategies effectively.`}</p>
//               </div>
//             </div>
//           </div>
//         </section>
  
//         {/* Footer */}
    
//       </div>
//     );
//   }

"use client";


import { motion } from "framer-motion";
import Image from "next/image";

const students = [
  { id: 1, name: "Student 1", image: "/images/20250212_105310.png" },
  { id: 2, name: "Student 2", image: "/images/image.webp" },
  { id: 3, name: "Student 3", image: "/images/creativity.webp" },
  { id: 4, name: "Student 4", image: "/images/ec7e26e6b867938ed6d9a5330c720814.jpg" },
  { id: 5, name: "Student 5", image: "/images/eddfcsded.png" },
];

export default function SuccessStories() {
  return (
    <section className="bg-gradient-to-r text-black pb-10 px-8">
      {/* Heading Section with Motion */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-black text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          Success Stories From Our Students Worldwide!
        </h2>
        <p className="mt-4 text-black/80">
         {` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim risus nec ante sollicitudin.
`}       
 </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-6 px-6 py-2 bg-white text-orange-500 font-bold rounded-full shadow-lg transition-all duration-300">
          Discover
        </motion.button>
      </motion.div>

      {/* Image Grid with Scroll Animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-6 mt-10"
      >
        {students.map((student, index) => (
          <motion.div
            key={student.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="relative w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src={student.image}
              alt={student.name}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}