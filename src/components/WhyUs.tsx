import React from 'react';
import { Leaf, Truck, Heart, Shield } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: "100% Organic",
    description: "Grown without chemicals, pesticides, or artificial additives for pure, natural taste."
  },
  {
    icon: Truck,
    title: "Farm Fresh Daily",
    description: "Harvested and delivered the same day to ensure maximum freshness and nutrition."
  },
  {
    icon: Heart,
    title: "Nutrient Rich",
    description: "Packed with protein, vitamins, and minerals to boost your health naturally."
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Every batch is tested and certified to meet the highest quality standards."
  }
];

const WhyUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose Ever Mushroom?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're committed to delivering the freshest, most nutritious oyster mushrooms straight from our organic farm to your kitchen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-green-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;