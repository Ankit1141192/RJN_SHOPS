import React from "react";
import { Package, Heart, Award, TrendingUp } from "lucide-react";

const TrustSection = () => {
  const isDark = false; // Set true for dark mode

  const trustStats = [
    { icon: Package, value: "500+", label: "Products Reviewed", color: "text-blue-500" },
    { icon: Heart, value: "18K+", label: "Happy Customers", color: "text-pink-500" },
    { icon: Award, value: "100%", label: "Verified Reviews", color: "text-purple-500" },
    { icon: TrendingUp, value: "4.9", label: "Average Rating", color: "text-green-500" },
  ];

  return (
    <section className={`py-20 ${isDark ? "bg-gray-900" : "]"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 font-[Poppins]">
          <h3 className={`text-4xl md:text-5xl font-bold mb-4 font-serif ${isDark ? "text-white" : "text-gray-900"}`}>
            Why Trust My
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Recommendations?
            </span>
          </h3>
          <p className={`text-lg md:text-xl ${isDark ? "text-gray-400" : "text-gray-700"} max-w-3xl mx-auto leading-relaxed`}>
            I test every product before recommending it. My goal is to help you find high-quality products that truly make your life easier and enjoyable.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 font-[Poppins]">
          {trustStats.map((stat, idx) => (
            <div
              key={idx}
              className="group bg-white dark:bg-gray-800 rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition transform hover:scale-105"
            >
              <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color} group-hover:animate-bounce`} />
              <h4 className={`text-3xl md:text-4xl font-bold mb-2 font-serif ${isDark ? "text-white" : "text-gray-900"}`}>{stat.value}</h4>
              <p className={`text-sm md:text-base ${isDark ? "text-gray-400" : "text-gray-600"}`}>{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Call-to-action */}
        <div className="mt-16 text-center font-[Poppins]">
          <p className={`text-lg md:text-xl ${isDark ? "text-gray-300" : "text-gray-700"} mb-6`}>
            Ready to shop smarter? Check out my top recommended products and save time!
          </p>
          <a
            href="/products"
            className="inline-block bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 md:px-10 py-4 rounded-full font-semibold text-lg md:text-xl shadow-lg hover:scale-105 transition transform"
          >
            Explore Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
