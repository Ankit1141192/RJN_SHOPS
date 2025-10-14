import React from "react";
import { Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white">Premium Picks</h4>
            </div>
            <p className="text-sm text-gray-400">
              Curated product recommendations you can trust.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-semibold text-white mb-4">Quick Links</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-white transition">
                  About Me
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition">
                  All Products
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:text-white transition">
                  Categories
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h5 className="font-semibold text-white mb-4">Support</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Disclosure
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h5 className="font-semibold text-white mb-4">Stay Updated</h5>
            <p className="text-sm text-gray-400 mb-4">
              Get the latest product recommendations.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-l-full bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-purple-600"
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 rounded-r-full font-semibold hover:shadow-lg transition">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>
            © 2025 Premium Picks. All rights reserved. <br />
            As an Amazon Associate, I earn from qualifying purchases.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
