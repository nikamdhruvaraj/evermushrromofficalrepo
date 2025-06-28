import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Pune",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    text: "The freshest mushrooms I've ever bought! They arrived the same day I ordered and lasted a week in the fridge. My kids love them in pasta.",
    verified: true
  },
  {
    name: "Rajesh Kumar",
    location: "Mumbai",
    image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    text: "Ever Mushroom has become our go-to for organic vegetables. The quality is consistently excellent and delivery from Pune is always on time.",
    verified: true
  },
  {
    name: "Anjali Patel",
    location: "Nashik",
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    text: "Being health-conscious, I appreciate the organic certification and the nutritional benefits. These mushrooms have become a staple in our home.",
    verified: true
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust Ever Mushroom for their organic produce needs across Maharashtra.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-green-600 mb-4" />
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>

              {/* Customer Info */}
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="flex items-center">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    {testimonial.verified && (
                      <div className="ml-2 w-4 h-4 bg-green-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 bg-green-50 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600">300+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">4.9</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">800+</div>
              <div className="text-gray-600">Orders Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">99%</div>
              <div className="text-gray-600">On-Time Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;