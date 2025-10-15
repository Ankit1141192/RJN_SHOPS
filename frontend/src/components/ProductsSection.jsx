import React, { useState } from "react";
import { TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";
import products from "../config/Product.json";

const ProductsSection = () => {
  const isDark = false; // Set true for dark mode
  const [favorites, setFavorites] = useState(new Set());
  const navigate = useNavigate();

  // Toggle favorite product
  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  // Handle clicking a product card
  const handleProductClick = (id) => {
    navigate(`/products/${id}`);
  };

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
            <span className={`text-sm font-medium ${isDark ? "text-orange-300" : "text-orange-900"}`}>
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
            <div key={product.id} onClick={() => handleProductClick(product.id)}>
              <ProductCard
                product={product}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            </div>
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
