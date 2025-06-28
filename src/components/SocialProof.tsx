import React, { useState, useEffect } from 'react';
import { User, ShoppingBag } from 'lucide-react';

const notifications = [
  "Priya from Pune just ordered 500g mushrooms",
  "Rajesh from Mumbai bought the family pack",
  "Anjali from Nashik ordered fresh mushrooms",
  "Kiran from Aurangabad just placed an order",
  "Suman from Kolhapur bought 250g pack",
  "Amit from Nagpur ordered organic mushrooms"
];

const SocialProof = () => {
  const [currentNotification, setCurrentNotification] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentNotification((prev) => (prev + 1) % notifications.length);
        setIsVisible(true);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-sm">
      <div 
        className={`bg-white border border-gray-200 rounded-lg shadow-lg p-4 transform transition-all duration-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
        }`}
      >
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-green-600" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-gray-800 font-medium">
              {notifications[currentNotification]}
            </p>
            <p className="text-xs text-gray-500 flex items-center mt-1">
              <ShoppingBag className="w-3 h-3 mr-1" />
              2 minutes ago
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;