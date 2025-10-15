import React from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react"; // Example icon, replace/add as needed

const CategoriesSection = () => {
  const isDark = false;

  const categories = [
    { name: "Electronics", icon: "⚡", count: "2.4k", color: "from-blue-500 to-cyan-500", link: "/products/electronics" },
    { name: "Home & Living", icon: "🏠", count: "1.8k", color: "from-purple-500 to-pink-500", link: "/products/home-living" },
    { name: "Fashion", icon: "👔", count: "3.2k", color: "from-orange-500 to-red-500", link: "/products/fashion" },
    { name: "Tech Gadgets", icon: "🎮", count: "2.1k", color: "from-green-500 to-emerald-500", link: "/products/tech-gadgets" },
    { name: "Fitness", icon: "💪", count: "1.5k", color: "from-yellow-500 to-orange-500", link: "/products/fitness" },
    { name: "Beauty", icon: "💄", count: "1.9k", color: "from-pink-500 to-rose-500", link: "/products/beauty" },
  ];

  return (
    <section className={`py-16 ${isDark ? "bg-gray-900/50" : "bg-white/50"} backdrop-blur`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h3 className={`text-3xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
            Browse by Category
          </h3>
          <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
            Explore curated collections of my favorite products
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat, idx) => (
            <Link
              key={idx}
              to={cat.link}
              className="group cursor-pointer transition-transform transform hover:scale-105"
            >
              <div
                className={`bg-gradient-to-br ${cat.color} p-6 rounded-2xl shadow-lg hover:shadow-2xl flex flex-col items-center justify-center`}
              >
                <div className="text-4xl mb-3">{cat.icon}</div>
                <h4 className="text-white font-semibold mb-1">{cat.name}</h4>
                <p className="text-white/80 text-sm flex items-center gap-1">
                  {cat.count} items <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
