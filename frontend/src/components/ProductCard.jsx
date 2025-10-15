import React from "react";
import { Heart, Star, ShoppingCart } from "lucide-react";

const ProductCard = ({ product, favorites, toggleFavorite }) => {
  const isDark = false;

  const discountedPrice = product.discount
    ? (product.price * (100 - product.discount)) / 100
    : product.price;

  const isFavorited = favorites.has(product.id);

  return (
    <div
      className={`group ${isDark ? "bg-gray-800" : "bg-white"} rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden cursor-pointer`}
    >
      {/* Image */}
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

        {/* Discount */}
        {product.discount && (
          <div className="absolute top-4 right-4 bg-red-500 text-white w-14 h-14 rounded-full flex items-center justify-center font-bold shadow-lg text-sm">
            -{product.discount}%
          </div>
        )}

        {/* Favorite Heart */}
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent click from navigating
            toggleFavorite(product.id);
          }}
          className={`absolute bottom-4 right-4 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 ${
            isFavorited ? "animate-ping" : ""
          }`}
        >
          <Heart
            className={`w-6 h-6 transition-transform duration-300 ${
              isFavorited ? "fill-red-500 text-red-500 scale-125" : "text-gray-400"
            }`}
          />
        </button>
      </div>

      {/* Details */}
      <div className="p-6">
        <div className="text-sm text-purple-600 font-medium mb-2">{product.category}</div>
        <h4 className={`text-lg font-bold ${isDark ? "text-white" : "text-gray-900"} mb-3 line-clamp-2 group-hover:text-purple-600 transition`}>
          {product.name}
        </h4>

        {/* Rating */}
        <div className="flex items-center space-x-2 mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
              />
            ))}
          </div>
          <span className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            {product.rating} ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            {product.discount && (
              <span className="text-gray-400 line-through text-sm">
                &#8377; {product.price.toFixed(2)}
              </span>
            )}
            <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              &#8377; {discountedPrice.toFixed(2)}
            </span>
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
