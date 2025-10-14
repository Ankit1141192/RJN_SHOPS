import React from "react";
// Optional: remove if you don't have theme support
// import { useTheme } from "../context/ThemeContext";

const CategoriesSection = () => {
  // If you don't have a theme provider, just hardcode dark/light mode:
  // const isDark = false;
  // Otherwise, uncomment the line below if you use a useTheme() hook:
  // const { theme } = useTheme();
  const isDark = false;

  const categories = [
    { name: "Electronics", icon: "⚡", count: "2.4k", color: "from-blue-500 to-cyan-500" },
    { name: "Home & Living", icon: "🏠", count: "1.8k", color: "from-purple-500 to-pink-500" },
    { name: "Fashion", icon: "👔", count: "3.2k", color: "from-orange-500 to-red-500" },
    { name: "Tech Gadgets", icon: "🎮", count: "2.1k", color: "from-green-500 to-emerald-500" },
    { name: "Fitness", icon: "💪", count: "1.5k", color: "from-yellow-500 to-orange-500" },
    { name: "Beauty", icon: "💄", count: "1.9k", color: "from-pink-500 to-rose-500" },
  ];

  return (
    <section className={`py-16 ${isDark ? "bg-gray-900/50" : "bg-white/50"} backdrop-blur`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h3
            className={`text-3xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Browse by Category
          </h3>
          <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
            Explore curated collections of my favorite products
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div
                className={`bg-gradient-to-br ${cat.color} p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-110 duration-300`}
              >
                <div className="text-center">
                  <div className="text-4xl mb-3">{cat.icon}</div>
                  <h4 className="text-white font-semibold mb-1">{cat.name}</h4>
                  <p className="text-white/80 text-sm">{cat.count} items</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
