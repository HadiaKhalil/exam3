// export default function AboutUs() {
//     return (
//       <div className="w-full max-w-5xl mx-auto text-center py-12">
//         <h2 className="text-3xl font-semibold">
//           Know <span className="text-gray-500">About Us</span>
//         </h2>
//         <p className="text-sm text-gray-400">Simply <span className="text-yellow-500">dummy text</span></p>
  
//         <p className="mt-4 text-gray-600 px-6 md:px-20">
//           Lyndon Group is a professional services firm specializing in accounting, finance, IT, governance, 
//           risk compliance, and travel and expense management projects. Founded in 2001, Lyndon Group only 
//           employs highly experienced professionals, has a low overhead model, and passes the value onto clients. 
//           We serve both public and private companies in a wide range of industries.
//         </p>
  
//         <button className="mt-6 px-6 py-2 border border-gray-600 text-gray-700 rounded hover:bg-gray-700 hover:text-white transition">
//           Read More →
//         </button>
//       </div>
//     );
//   }









import { FaShoppingCart, FaBox, FaShippingFast, FaHeadset, FaCreditCard, FaChartLine } from "react-icons/fa";

export default function Services() {
  const services = [
    { title: "ONLINE STORE SETUP", icon: <FaShoppingCart />, bg: "bg-yellow-400" },
    { title: "PRODUCT MANAGEMENT", icon: <FaBox />, bg: "bg-gray-800" },
    { title: "FAST SHIPPING", icon: <FaShippingFast />, bg: "bg-gray-800" },
    { title: "CUSTOMER SUPPORT", icon: <FaHeadset />, bg: "bg-gray-800" },
    { title: "PAYMENT SOLUTIONS", icon: <FaCreditCard />, bg: "bg-gray-800" },
    { title: "MARKETING & ANALYTICS", icon: <FaChartLine />, bg: "bg-gray-800" },
  ];

  return (
    <div
      className="relative bg-cover bg-center text-white py-16 min-h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center py-12">
        <h2 className="text-3xl font-semibold">E-Commerce Services</h2>
        <p className="text-sm text-gray-300">Boost your online store with our expert solutions</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mt-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-6 ${service.bg} bg-opacity-80 text-white flex flex-col items-center justify-center rounded-lg`}
            >
              <span className="text-4xl">{service.icon}</span>
              <h3 className="text-lg font-bold mt-3">{service.title}</h3>
              <p className="text-sm text-gray-300 mt-2">
                Professional solutions to optimize your online business.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



