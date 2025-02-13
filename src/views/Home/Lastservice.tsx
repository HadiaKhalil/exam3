import { FaUsers, FaUserTie, FaEnvelope } from "react-icons/fa";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <div className="text-white p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform">
      <div className="flex justify-center items-center w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-400 mt-2">{description}</p>
    </div>
  );
};

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-bold mb-6">
        Lorem <span className="text-gray-400">QuickMart</span>
      </h1>
      <p className="text-gray-400 mb-10">{`Quality products, unbeatable prices!`}</p>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl">
        <FeatureCard 
          title="JOIN OUR TEAM" 
          description="{`Our friendly support team is always available to assist you with any inquiries`}"
          icon={<FaUsers size={30} />} 
        />
        <FeatureCard 
          title="PLATINUM ADVISOR" 
          description="{`Enjoy quick and hassle-free delivery across the country with real-time tracking.`}" 
          icon={<FaUserTie size={30} />} 
        />
        <FeatureCard 
          title="CONTACT US" 
          description="{`Explore a vast collection of premium-quality products at the best prices.`}" 
          icon={<FaEnvelope size={30} />} 
        />
      </div>

      <footer className="mt-10 text-gray-500 text-sm">
        <nav className="flex space-x-4">
          <a href="#" className="hover:text-white">About Us</a>
          <a href="#" className="hover:text-white">Categories</a>
          <a href="#" className="hover:text-white">Best Sellers</a>
          <a href="#" className="hover:text-white">Contact Us</a>
          <a href="#" className="hover:text-white">Help Center</a>
        </nav>
        <p className="mt-4">© 2025 XYZ-GROUP</p>
      </footer>
    </div>
  );
}
