import React from "react";
import { Link } from "react-router-dom";
import { Award, ArrowRight, Star } from "lucide-react";

const HeroSection = () => {
  const isDark = false;

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gridBackground.png')] bg-no-repeat bg-cover bg-center text-sm pb-32"
    >
      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8 py-20 grid md:grid-cols-1 gap-12 items-center">
        {/* Left */}
        <div className="space-y-6 text-center md:text-left">
          {/* Trusted Badge */}
          <div
            className={`inline-flex items-center space-x-2 ${
              isDark
                ? "bg-blue-900/30"
                : "bg-gradient-to-r from-blue-100 to-purple-100"
            } rounded-full px-4 py-2 mx-auto md:mx-0`}
          >
            <Award className="w-5 h-5 text-blue-600" />
            <span
              className={`text-sm font-medium ${
                isDark ? "text-blue-300" : "text-blue-900"
              }`}
            >
              Trusted Product Recommendations
            </span>
          </div>

          {/* Heading */}
          <h2
            className={`text-5xl md:text-6xl font-bold leading-tight ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Find the Best Amazon Products &
            <span className="block bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Save Time & Shop Smarter
            </span>
          </h2>

          {/* Subheading */}
          <p
            className={`text-lg ${
              isDark ? "text-gray-300" : "text-gray-600"
            } leading-relaxed max-w-xl mx-auto md:mx-0`}
          >
            I curate top-rated products from Amazon so you don’t have to spend hours searching.  
            Discover the best choices, compare features, and make informed shopping decisions.
          </p>

          {/* Call-to-action buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <Link
              to="/products"
              className="bg-green-500 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-semibold transition transform hover:scale-105 flex items-center space-x-2"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              to="/stories"
              className="flex items-center gap-2 border border-green-400 hover:bg-green-100 rounded-full px-8 py-4 font-semibold text-green-600 transition"
            >
              <span>How I Choose</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Ratings/Trust Section */}
          <div className="flex justify-center md:justify-start items-center space-x-4 mt-6">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 fill-yellow-400 text-yellow-400"
              />
            ))}
            <span className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              5.0 Rating by Shoppers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
