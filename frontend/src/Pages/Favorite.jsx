import React from "react";
import { useNavigate } from "react-router-dom";
import products from "../config/Product.json";
import ProductCard from "../components/ProductCard";

const Favorite = ({ favorites, toggleFavorite }) => {
  const navigate = useNavigate();

  const favoriteProducts = products.filter((p) => favorites.has(p.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold mb-6">My Favorites</h2>
      {favoriteProducts.length ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteProducts.map((product) => (
            <div key={product.id} onClick={() => navigate(`/products/${product.id}`)}>
              <ProductCard
                product={product}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">You have no favorite products yet.</p>
      )}
    </div>
  );
};

export default Favorite;
