// "use client";


// import { FaSearch, FaGraduationCap, FaShieldAlt, FaBolt, FaChartLine } from "react-icons/fa";

// const features = [
//   {
//     icon: <FaSearch size={24} />,
//     title: "DETECT",
//     description: "Advanced fraud detection using AI and machine learning to identify risks instantly.",
//   },
//   {
//     icon: <FaGraduationCap size={24} />,
//     title: "LEARN",
//     description: "Continuous learning from fraud patterns to enhance security over time.",
//   },
//   {
//     icon: <FaShieldAlt size={24} />,
//     title: "PROTECT",
//     description: "Providing multi-layered protection to secure financial transactions worldwide.",
//   },
//   {
//     icon: <FaBolt size={24} />,
//     title: "RESPOND",
//     description: "Real-time response to threats, ensuring quick mitigation and resolution.",
//   },
//   {
//     icon: <FaChartLine size={24} />,
//     title: "EVOLVE",
//     description: "Adapting to new fraud tactics with cutting-edge analytics and insights.",
//   },
// ];

// export default function Home() {
//   return (
//     <div className="bg-gray-100 min-h-screen flex items-center justify-center py-8 px-6">
//       <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//         {/* Left Side: Text Content */}
//         <div>
//           <h2 className="text-xl text-orange-500 font-bold uppercase">AT EUNEXUS,</h2>
//           <h1 className="text-3xl md:text-4xl font-bold mt-2 leading-tight">
//             WE HAVE NEVER BELIEVED THERE IS A SILVER BULLET FOR FRAUD.
//           </h1>
//           <p className="text-gray-700 mt-4 leading-relaxed">
//             Founded in 2014, Eunexus has rapidly established itself as a leading
//             provider of fraud detection solutions. Our client list includes many of the
//             world’s largest banking and finance organizations.
//           </p>
//           <button className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 transition">
//             Learn More
//           </button>
//         </div>

//         {/* Right Side: Feature List */}
//         <div className="space-y-6">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="flex items-center p-4 bg-white shadow-md rounded-lg transition transform hover:scale-105 hover:shadow-xl"
//             >
//               <div className="text-orange-500">{feature.icon}</div>
//               <div className="ml-4">
//                 <h3 className="text-lg font-semibold">{feature.title}</h3>
//                 <p className="text-gray-600 text-sm">{feature.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client"
import { motion } from "framer-motion";

const pricingPlans = [
  {
    title: "Basic Plan",
    price: "299/M",
    features: [
      "Integer tincidunt. Sed magna",
      "Purus, fermentum eu",
      "Tincidunt eu, varius ut",
      "Vitae. Vestibulum rutrum",
      "Omi nec elementum vehicula",
    ],
    buttonColor: "bg-orange-400",
    textColor: "text-gray-900",
  },
  {
    title: "Business Plan",
    price: "399/M",
    features: [
      "Integer tincidunt. Sed magna",
      "Purus, fermentum eu",
      "Tincidunt eu, varius ut",
      "Vitae. Vestibulum rutrum",
      "Omi nec elementum vehicula",
    ],
    buttonColor: "bg-gray-900",
    textColor: "text-white",
    isHighlighted: true,
  },
  {
    title: "Enterprise Plan",
    price: "399/M",
    features: [
      "Integer tincidunt. Sed magna",
      "Purus, fermentum eu",
      "Tincidunt eu, varius ut",
      "Vitae. Vestibulum rutrum",
      "Omi nec elementum vehicula",
    ],
    buttonColor: "bg-orange-400",
    textColor: "text-gray-900",
  },
];

export default function Pricing() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-900"
        >
          Choose Your Plan
        </motion.h2>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`p-8 rounded-lg shadow-lg ${
                plan.isHighlighted
                  ? "bg-white scale-105 border-2 border-orange-300"
                  : "bg-white"
              }`}
            >
              <h3 className="text-xl font-semibold">{plan.title}</h3>
              <p className="text-3xl font-bold mt-2">{plan.price}</p>
              <ul className="mt-4 space-y-2 text-gray-600">
                {plan.features.map((feature, i) => (
                  <li key={i}>&#10003; {feature}</li>
                ))}
              </ul>
              <button
                className={`${plan.buttonColor} text-white mt-6 py-2 px-4 rounded-full w-full hover:opacity-90 transition-all`}
              >
                Book Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}