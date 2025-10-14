import React from "react";
import { Heart, Star, ShoppingCart } from "lucide-react";

const ProductCard = ({ product, favorites, toggleFavorite }) => {
  const isDark = false; // set true if you want dark mode

  return (
    <div
      className={`group ${
        isDark ? "bg-gray-800" : "bg-white"
      } rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden`}
    >
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
        />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-4 left-4">
            <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-xs font-semibold shadow-lg">
              {product.badge}
            </span>
          </div>
        )}

        {/* Discount Tag */}
        {product.discount && (
          <div className="absolute top-4 right-4 bg-red-500 text-white w-14 h-14 rounded-full flex items-center justify-center font-bold shadow-lg">
            -{product.discount}%
          </div>
        )}

        {/* Favorite Button */}
        <button
          onClick={() => toggleFavorite(product.id)}
          className="absolute bottom-4 right-4 bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
        >
          <Heart
            className={`w-6 h-6 ${
              favorites.has(product.id)
                ? "fill-red-500 text-red-500"
                : "text-gray-400"
            }`}
          />
        </button>
      </div>

      {/* Product Details */}
      <div className="p-6">
        <div className="text-sm text-purple-600 font-medium mb-2">
          {product.category}
        </div>
        <h4
          className={`text-lg font-bold ${
            isDark ? "text-white" : "text-gray-900"
          } mb-3 line-clamp-2 group-hover:text-purple-600 transition`}
        >
          {product.name}
        </h4>

        {/* Rating */}
        <div className="flex items-center space-x-2 mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span
            className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
          >
            {product.rating} ({product.reviews})
          </span>
        </div>

        {/* Price + Add to Cart */}
        <div className="flex items-center justify-between">
          <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            ${product.price}
          </div>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full hover:shadow-lg transition transform hover:scale-110">
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
