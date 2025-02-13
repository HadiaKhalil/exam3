"use client";


import { FaSearch, FaGraduationCap, FaShieldAlt, FaBolt, FaChartLine } from "react-icons/fa";

const features = [
  {
    icon: <FaSearch size={24} />,
    title: "DETECT",
    description: "Advanced fraud detection using AI and machine learning to identify risks instantly.",
  },
  {
    icon: <FaGraduationCap size={24} />,
    title: "LEARN",
    description: "Continuous learning from fraud patterns to enhance security over time.",
  },
  {
    icon: <FaShieldAlt size={24} />,
    title: "PROTECT",
    description: "Providing multi-layered protection to secure financial transactions worldwide.",
  },
  {
    icon: <FaBolt size={24} />,
    title: "RESPOND",
    description: "Real-time response to threats, ensuring quick mitigation and resolution.",
  },
  {
    icon: <FaChartLine size={24} />,
    title: "EVOLVE",
    description: "Adapting to new fraud tactics with cutting-edge analytics and insights.",
  },
];

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-8 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text Content */}
        <div>
          <h2 className="text-xl text-orange-500 font-bold uppercase">AT EUNEXUS,</h2>
          <h1 className="text-3xl md:text-4xl font-bold mt-2 leading-tight">
            WE HAVE NEVER BELIEVED THERE IS A SILVER BULLET FOR FRAUD.
          </h1>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Founded in 2014, Eunexus has rapidly established itself as a leading
            provider of fraud detection solutions. Our client list includes many of the
            world’s largest banking and finance organizations.
          </p>
          <button className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 transition">
            Learn More
          </button>
        </div>

        {/* Right Side: Feature List */}
        <div className="space-y-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center p-4 bg-white shadow-md rounded-lg transition transform hover:scale-105 hover:shadow-xl"
            >
              <div className="text-orange-500">{feature.icon}</div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
