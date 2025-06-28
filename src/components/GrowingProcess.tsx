import React from 'react';
import { Droplets, Sprout, Scissors, Package } from 'lucide-react';

const steps = [
  {
    icon: Droplets,
    title: "Spawn Inoculation",
    description: "Premium oyster mushroom spawn is carefully inoculated into organic straw substrate.",
    image: "https://images.pexels.com/photos/6663554/pexels-photo-6663554.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    icon: Sprout,
    title: "Controlled Growth",
    description: "Maintained in optimal temperature and humidity conditions for 12-14 days.",
    image: "https://images.pexels.com/photos/6663556/pexels-photo-6663556.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    icon: Scissors,
    title: "Fresh Harvest",
    description: "Hand-harvested at peak freshness to ensure maximum nutrition and flavor.",
    image: "https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    icon: Package,
    title: "Quality Packaging",
    description: "Immediately packed and prepared for same-day delivery to preserve freshness.",
    image: "https://images.pexels.com/photos/6663558/pexels-photo-6663558.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
];

const GrowingProcess = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            From Farm to Your Table
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our transparent growing process ensures you get the freshest, highest quality oyster mushrooms every time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector Line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-green-200 transform -translate-y-1/2 z-0">
                  <div className="w-0 h-full bg-green-600 transition-all duration-1000 group-hover:w-full"></div>
                </div>
              )}
              
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative z-10">
                {/* Step Number */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>

                {/* Image */}
                <div className="w-full h-32 mb-4 rounded-lg overflow-hidden">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Icon */}
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors duration-300">
                  <step.icon className="w-6 h-6 text-green-600 group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Assurance */}
        <div className="mt-16 bg-green-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Quality Assurance Promise</h3>
          <p className="text-green-100 mb-6 max-w-3xl mx-auto">
            Every batch is tested for quality, freshness, and nutritional value. We maintain strict organic standards throughout our growing process to deliver the best mushrooms to your family.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-300 rounded-full"></div>
              <span>No Chemicals or Pesticides</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-300 rounded-full"></div>
              <span>Organic Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-300 rounded-full"></div>
              <span>Fresh Daily Harvest</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-300 rounded-full"></div>
              <span>Laboratory Tested</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowingProcess;