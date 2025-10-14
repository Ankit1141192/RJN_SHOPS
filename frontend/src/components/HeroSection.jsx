import React from "react";
import { Award, ArrowRight, Star } from "lucide-react";

const HeroSection = () => {
  // Set theme manually: true = dark, false = light
  const isDark = false; // change to true for dark mode

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div
              className={`inline-flex items-center space-x-2 ${
                isDark
                  ? "bg-blue-900/30"
                  : "bg-gradient-to-r from-blue-100 to-purple-100"
              } rounded-full px-4 py-2`}
            >
              <Award className="w-4 h-4 text-blue-600" />
              <span
                className={`text-sm font-medium ${
                  isDark ? "text-blue-300" : "text-blue-900"
                }`}
              >
                Trusted Product Curator
              </span>
            </div>

            <h2
              className={`text-5xl md:text-6xl font-bold leading-tight ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Discover My
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Favorite Premium
              </span>
              <span
                className={`block ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Finds
              </span>
            </h2>

            <p
              className={`text-lg ${
                isDark ? "text-gray-300" : "text-gray-600"
              } leading-relaxed`}
            >
              Hi! I'm here to share the best products I've personally tested and
              loved. Every recommendation comes from real experience. Shop with
              confidence!
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition transform hover:scale-105 flex items-center space-x-2">
                <span>Explore Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                className={`${
                  isDark
                    ? "bg-gray-800 text-white border-gray-700"
                    : "bg-white text-gray-900 border-gray-200"
                } px-8 py-4 rounded-full font-semibold border-2 hover:border-purple-600 transition`}
              >
                Trending Items
              </button>
            </div>
          </div>

          {/* Right Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl transform rotate-3"></div>
            <div
              className={`relative ${
                isDark ? "bg-gray-800" : "bg-white"
              } rounded-3xl shadow-2xl p-8 transform hover:rotate-0 transition duration-500`}
            >
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                alt="Product Curator"
                className="w-48 h-48 rounded-2xl object-cover mx-auto mb-4"
              />
              <h3
                className={`text-2xl font-bold ${
                  isDark ? "text-white" : "text-gray-900"
                } text-center`}
              >
                Alex Morrison
              </h3>
              <p className="text-purple-600 font-medium text-center mb-4">
                Product Expert & Reviewer
              </p>
              <div className="flex justify-center items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
                <span
                  className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"} ml-2`}
                >
                  5.0 Rating
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
