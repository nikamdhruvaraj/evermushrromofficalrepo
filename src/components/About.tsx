import React from 'react';
import { Users, Award, Leaf, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Story: From Farm
                <span className="text-green-600 block">to Your Family</span>
              </h2>
              <p className="text-lg text-gray-600">
                Ever Mushroom was founded by Dhruvaraj Nikam, along with co-founders Devendra Choudary and Utkarsh Yadav, with a shared vision to bring fresh, organic produce directly from our farm in Pune to your table.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-gray-600">
                What started as a passionate pursuit of sustainable farming has grown into a trusted brand serving families across Maharashtra and beyond. We believe that everyone deserves access to fresh, nutritious food grown with care and respect for the environment.
              </p>
              
              <p className="text-gray-600">
                Our team of dedicated farmers and food enthusiasts work tirelessly to ensure every mushroom meets our high standards for quality, freshness, and nutrition. We're not just growing mushrooms – we're cultivating healthier communities, one family at a time.
              </p>
            </div>

            {/* Founders */}
            <div className="bg-green-50 rounded-2xl p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Meet Our Founders</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">DN</span>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900">Dhruvaraj Nikam</h5>
                    <p className="text-sm text-gray-600">Founder & CEO</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">DC</span>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900">Devendra Choudary</h5>
                    <p className="text-sm text-gray-600">Co-founder</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">UY</span>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900">Utkarsh Yadav</h5>
                    <p className="text-sm text-gray-600">Co-founder</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Organic First</h4>
                  <p className="text-sm text-gray-600">100% chemical-free farming</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Family Values</h4>
                  <p className="text-sm text-gray-600">Caring for your health</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Quality Promise</h4>
                  <p className="text-sm text-gray-600">Never compromise on standards</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Community Focus</h4>
                  <p className="text-sm text-gray-600">Supporting local farmers</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Ever Mushroom team at our Pune farm"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              
              {/* Overlay text */}
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Ever Mushroom Team</h3>
                <p className="text-white/90">Passionate about organic farming in Pune since 2020</p>
              </div>
            </div>
            
            {/* Achievement badges */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">4+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 bg-green-50 rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            To make fresh, organic, and nutritious oyster mushrooms accessible to every family in Maharashtra and beyond, while supporting sustainable farming practices that protect our environment for future generations. We believe that healthy food should be affordable, accessible, and grown with love.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;