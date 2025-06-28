import React, { useState } from 'react';
import { ShoppingCart, Star, Badge } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Fresh Oyster Mushrooms - 250g",
    price: 120,
    originalPrice: 150,
    image: "https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "Popular",
    rating: 4.8,
    reviews: 124,
    inStock: 15
  },
  {
    id: 2,
    name: "Fresh Oyster Mushrooms - 500g",
    price: 220,
    originalPrice: 280,
    image: "https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "Best Value",
    rating: 4.9,
    reviews: 89,
    inStock: 8
  },
  {
    id: 3,
    name: "Fresh Oyster Mushrooms - 1kg",
    price: 400,
    originalPrice: 520,
    image: "https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "Family Pack",
    rating: 4.7,
    reviews: 67,
    inStock: 12
  }
];

const Shop = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <section id="shop" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Fresh Mushrooms Available Now
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our premium selection of organic oyster mushrooms, harvested fresh daily.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.badge}
                  </span>
                </div>
                {/* Stock indicator */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-medium text-gray-700">
                  Only {product.inStock} left!
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                
                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">({product.reviews} reviews)</span>
                </div>

                {/* Price */}
                <div className="flex items-center mb-4">
                  <span className="text-2xl font-bold text-green-600">₹{product.price}</span>
                  <span className="text-lg text-gray-400 line-through ml-2">₹{product.originalPrice}</span>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded-lg text-sm font-medium ml-2">
                    Save ₹{product.originalPrice - product.price}
                  </span>
                </div>

                {/* Add to Cart Button */}
                <button 
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                    hoveredProduct === product.id 
                      ? 'bg-green-600 text-white shadow-lg' 
                      : 'bg-green-100 text-green-700 hover:bg-green-200'
                  }`}
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Special Offer Banner */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-2">First Time Customer?</h3>
          <p className="text-green-100 mb-4">Get ₹50 off your first order with code FRESH50</p>
          <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Claim Discount
          </button>
        </div>
      </div>
    </section>
  );
};

export default Shop;