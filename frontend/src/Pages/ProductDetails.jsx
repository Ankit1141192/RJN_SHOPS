import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../config/Product.json";
import { ShoppingCart, Heart, Star } from "lucide-react";

const ProductDetails = () => {
  const { id } = useParams(); // Get product ID from URL
  const navigate = useNavigate();

  // Find the product by ID
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <p className="text-center text-red-500 mt-20">Product not found!</p>;
  }

  const discountedPrice = product.discount
    ? (product.price * (100 - product.discount)) / 100
    : product.price;

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-blue-600 hover:underline"
      >
        ← Back to Products
      </button>

      <div className="flex flex-col md:flex-row gap-10 bg-white rounded-xl shadow-lg p-6">
        {/* Product Image */}
        <div className="md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <div className="text-sm text-purple-600 font-medium mb-2">
              {product.category}
            </div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(product.rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
              <span className="ml-2 text-gray-600">{product.rating} ({product.reviews})</span>
            </div>

            {/* Price */}
            <div className="flex items-center mb-6 gap-4">
              {product.discount && (
                <span className="text-gray-400 line-through text-lg">
                  &#8377; {product.price.toFixed(2)}
                </span>
              )}
              <span className="text-2xl font-bold text-blue-600">
                &#8377; {discountedPrice.toFixed(2)}
              </span>
              {product.discount && (
                <span className="text-red-500 font-semibold">{product.discount}% off</span>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-700 mb-6">{product.description}</p>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition">
              <ShoppingCart className="w-5 h-5" /> Buy Now
            </button>
            <button className="flex items-center gap-2 bg-white border border-gray-300 px-6 py-3 rounded-xl hover:shadow transition">
              <Heart className="w-5 h-5 text-red-500" /> Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
