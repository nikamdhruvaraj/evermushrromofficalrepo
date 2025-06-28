import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-2">
                <span className="text-white font-bold text-sm">🍄</span>
              </div>
              <span className="text-xl font-bold">Ever Mushroom</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Fresh, organic oyster mushrooms delivered daily from our farm in Pune to your table. Quality you can trust, nutrition you can taste.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors text-sm">Home</a></li>
              <li><a href="#shop" className="text-gray-400 hover:text-white transition-colors text-sm">Shop</a></li>
              <li><a href="#benefits" className="text-gray-400 hover:text-white transition-colors text-sm">Health Benefits</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Shipping Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Return Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                <div className="text-sm text-gray-400">
                  Ever Mushroom Farm<br />
                  Pune, Maharashtra<br />
                  India 411001
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span className="text-sm text-gray-400">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span className="text-sm text-gray-400">dhruvaraj.foruppo@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 Ever Mushroom. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Founded by Dhruvaraj Nikam</span>
              <span>Pune, Maharashtra</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;