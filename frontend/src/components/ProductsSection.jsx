import React, { useState } from "react";
import { TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";
import products from "../config/Product.json";

const ProductsSection = () => {
  const isDark = false; 
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

  // Navigate to product details
  const handleProductClick = (id) => {
    navigate(`/products/${id}`);
  };

  // Navigate to All Products page
  const handleViewAll = () => {
    navigate("/products"); // Update this if your All Products route is different
  };

  return (
    <section id="products" className="py-20 bg-gray-50 dark:bg-gray-900 font-[Poppins]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center space-x-2 bg-gradient-to-r from-orange-400 via-orange-300 to-red-400 rounded-full px-4 py-2 mb-4 shadow-md`}
          >
            <TrendingUp className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">
              Hot Right Now
            </span>
          </div>
          <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Top Picks This Week
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            These are the products I'm loving right now — tested and approved!
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => handleProductClick(product.id)}
              className="transition-transform transform hover:-translate-y-2 hover:shadow-2xl rounded-3xl cursor-pointer"
            >
              <ProductCard
                product={product}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <button
            onClick={handleViewAll}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full font-semibold hover:shadow-2xl transition transform hover:scale-105"
          >
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
