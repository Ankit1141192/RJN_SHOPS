import React, { useState } from "react";
import { TrendingUp } from "lucide-react";
import ProductCard from "./ProductCard"; // Import your ProductCard component

const ProductsSection = () => {
  const isDark = false; // set true if you want dark mode
  const [favorites, setFavorites] = useState(new Set());

  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const products = [
    {
      id: 1,
      name: "Sony WH-1000XM5 Wireless Noise Canceling Headphones",
      category: "Electronics",
      price: 379.99,
      rating: 4.8,
      reviews: 2847,
      image:
        "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&h=600&fit=crop",
      badge: "Editor's Choice",
      discount: 15,
    },
    {
      id: 2,
      name: "Apple Watch Series 9 GPS + Cellular 45mm",
      category: "Tech Gadgets",
      price: 529.99,
      rating: 4.9,
      reviews: 1923,
      image:
        "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&h=600&fit=crop",
      badge: "Trending",
      discount: 10,
    },
    {
      id: 3,
      name: "Canon EOS R6 Mark II Mirrorless Camera Body",
      category: "Photography",
      price: 2499.0,
      rating: 4.9,
      reviews: 856,
      image:
        "https://images.unsplash.com/photo-1606980707571-6df2d6e0b4f2?w=600&h=600&fit=crop",
      badge: "Hot Deal",
    },
    {
      id: 4,
      name: "Kindle Paperwhite Signature Edition 32 GB",
      category: "Electronics",
      price: 189.99,
      rating: 4.7,
      reviews: 4521,
      image:
        "https://images.unsplash.com/photo-1592239499787-c0c5b8e7943f?w=600&h=600&fit=crop",
      badge: "Best Seller",
    },
    {
      id: 5,
      name: "Anker PowerCore 26800 Portable Charger",
      category: "Tech Gadgets",
      price: 65.99,
      rating: 4.6,
      reviews: 3214,
      image:
        "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&h=600&fit=crop",
      badge: "Hot Deal",
    },
    {
      id: 6,
      name: "Bose QuietComfort Earbuds II",
      category: "Electronics",
      price: 279.0,
      rating: 4.8,
      reviews: 1654,
      image:
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&h=600&fit=crop",
      badge: "Premium Pick",
    },
  ];

  return (
    <section id="products" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div
            className={`inline-flex items-center space-x-2 ${
              isDark
                ? "bg-orange-900/30"
                : "bg-gradient-to-r from-orange-100 to-red-100"
            } rounded-full px-4 py-2 mb-4`}
          >
            <TrendingUp
              className={`w-4 h-4 ${isDark ? "text-orange-300" : "text-orange-600"}`}
            />
            <span
              className={`text-sm font-medium ${
                isDark ? "text-orange-300" : "text-orange-900"
              }`}
            >
              Hot Right Now
            </span>
          </div>
          <h3 className={`text-4xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-4`}>
            My Top Picks This Week
          </h3>
          <p className={`${isDark ? "text-gray-400" : "text-gray-600"} text-lg`}>
            These are the products I'm loving right now - tested and approved!
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full font-semibold hover:shadow-2xl transition transform hover:scale-105">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
