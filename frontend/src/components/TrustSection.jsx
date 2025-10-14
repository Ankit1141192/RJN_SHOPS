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
    <section id="about" className={`py-16 ${isDark ? "bg-gray-900" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h3 className={`text-4xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-4`}>
            Why Trust My
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Recommendations?
            </span>
          </h3>
          <p className={`${isDark ? "text-gray-400" : "text-gray-600"} text-lg max-w-3xl mx-auto`}>
            I personally test every product before recommending it. My goal is to help you find quality products that truly make a difference in your daily life.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text & Stats */}
          <div className="space-y-8">
            <p className={`${isDark ? "text-gray-300" : "text-gray-700"} leading-relaxed`}>
              As an Amazon affiliate, I earn from qualifying purchases, but I only recommend products I genuinely believe in. Your trust is more important to me than any commission.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {trustStats.map((stat, idx) => (
                <div
                  key={idx}
                  className={`${
                    isDark ? "bg-gray-800" : "bg-gradient-to-br from-blue-50 to-purple-50"
                  } rounded-2xl p-6 text-center hover:shadow-lg transition`}
                >
                  <stat.icon className={`w-10 h-10 ${stat.color} mx-auto mb-3`} />
                  <div className={`text-3xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-1`}>
                    {stat.value}
                  </div>
                  <div className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-600 rounded-3xl transform -rotate-3"></div>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop"
              alt="About Me"
              className="relative rounded-3xl shadow-2xl transform hover:rotate-0 transition duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
