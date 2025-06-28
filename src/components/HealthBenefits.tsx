import React from 'react';
import { Heart, Shield, Zap, Brain, Dumbbell, Sparkles } from 'lucide-react';

const benefits = [
  {
    icon: Heart,
    title: "Heart Health",
    description: "Low in sodium and cholesterol, supports cardiovascular wellness."
  },
  {
    icon: Shield,
    title: "Immunity Boost",
    description: "Rich in antioxidants and beta-glucans to strengthen immune system."
  },
  {
    icon: Zap,
    title: "Energy & Vitality",
    description: "High in B-vitamins for natural energy and metabolism support."
  },
  {
    icon: Brain,
    title: "Brain Function",
    description: "Contains compounds that support cognitive health and memory."
  },
  {
    icon: Dumbbell,
    title: "Muscle Building",
    description: "Complete protein source with all essential amino acids."
  },
  {
    icon: Sparkles,
    title: "Weight Management",
    description: "Low calorie, high fiber superfood for healthy weight maintenance."
  }
];

const HealthBenefits = () => {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Unlock Nature's
                <span className="text-green-600 block">Health Benefits</span>
              </h2>
              <p className="text-lg text-gray-600">
                Oyster mushrooms are nutritional powerhouses packed with essential vitamins, minerals, and antioxidants that support your overall well-being.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-green-50 transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-600 transition-colors duration-300">
                    <benefit.icon className="w-6 h-6 text-green-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-green-50 rounded-2xl p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Nutritional Facts (per 100g)</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-600">33</div>
                  <div className="text-sm text-gray-600">Calories</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">3.3g</div>
                  <div className="text-sm text-gray-600">Protein</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">2.3g</div>
                  <div className="text-sm text-gray-600">Fiber</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">0mg</div>
                  <div className="text-sm text-gray-600">Cholesterol</div>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Nutritious oyster mushrooms"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent"></div>
            </div>
            
            {/* Floating nutrition badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-xl max-w-xs">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">100%</div>
                <div className="text-sm text-gray-600 font-medium">Natural & Organic Superfood</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthBenefits;