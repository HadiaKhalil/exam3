

export default function Home() {
    return (
      <div className="bg-gray-50">
        
  
        {/* Hero Section */}
       
  
        {/* Feature Section */}
        <section className=" container mx-auto px-6">
          <h2 className="text-2xl font-bold text-center">AT EUNEXUS, WE HAVE NEVER BELIEVED THERE IS A SILVER BULLET FOR FRAUD.</h2>
          <p className="text-gray-600 text-center mt-4">
            Eunexus has rapidly established itself as a leading provider of fraud detection solutions.
          </p>
  
          <div className="flex flex-col md:flex-row justify-center mt-8 space-y-6 md:space-y-0 md:space-x-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-orange-500 text-white flex items-center justify-center rounded-full">🔍</div>
              <div>
                <h3 className="font-bold text-lg">DETECT</h3>
                <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-orange-500 text-white flex items-center justify-center rounded-full">📚</div>
              <div>
                <h3 className="font-bold text-lg">LEARN</h3>
                <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-orange-500 text-white flex items-center justify-center rounded-full">🛡️</div>
              <div>
                <h3 className="font-bold text-lg">PROTECT</h3>
                <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Services Section */}
        <section className="bg-gray-100 py-24">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold">OUR SERVICES</h2>
            <p className="text-gray-600 mt-4">
              Eunexus' fraud consultants have broad industry experience.
            </p>
  
            <div className="grid md:grid-cols-4 gap-8 mt-8">
              <div className="bg-white p-6 shadow-md rounded-lg">
                <h3 className="font-bold">Professional Services</h3>
                <p className="text-gray-500 mt-2">Expert consulting solutions for fraud prevention.</p>
              </div>
              <div className="bg-white p-6 shadow-md rounded-lg">
                <h3 className="font-bold">Fraud Consulting</h3>
                <p className="text-gray-500 mt-2">Advanced fraud detection methodologies.</p>
              </div>
              <div className="bg-white p-6 shadow-md rounded-lg">
                <h3 className="font-bold">Analytical Services</h3>
                <p className="text-gray-500 mt-2">Data-driven fraud analytics to prevent losses.</p>
              </div>
              <div className="bg-white p-6 shadow-md rounded-lg">
                <h3 className="font-bold">Project Management</h3>
                <p className="text-gray-500 mt-2">Managing fraud prevention strategies effectively.</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Footer */}
    
      </div>
    );
  }