import React, { useState } from "react";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("name");
  const [priceRange, setPriceRange] = useState([0, 3000]);
  const [categoryFilter, setCategoryFilter] = useState("");

  const products = [
    {
      id: 1,
      name: "Sony WH-1000XM5 Wireless Headphones",
      category: "Electronics",
      price: 379.99,
      rating: 4.8,
      reviews: 2847,
      image:
        "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&h=600&fit=crop",
    },
    {
      id: 2,
      name: "Apple Watch Series 9",
      category: "Tech Gadgets",
      price: 529.99,
      rating: 4.9,
      reviews: 1923,
      image:
        "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&h=600&fit=crop",
    },
    {
      id: 3,
      name: "Canon EOS R6 Mark II Camera",
      category: "Photography",
      price: 2499,
      rating: 4.9,
      reviews: 856,
      image:
        "https://images.unsplash.com/photo-1606980707571-6df2d6e0b4f2?w=600&h=600&fit=crop",
    },
    {
      id: 4,
      name: "Kindle Paperwhite 32 GB",
      category: "Electronics",
      price: 189.99,
      rating: 4.7,
      reviews: 4521,
      image:
        "https://images.unsplash.com/photo-1592239499787-c0c5b8e7943f?w=600&h=600&fit=crop",
    },
  ];

  // Filter & sort products
  const filteredProducts = products
    .filter(
      (p) =>
        p.name.toLowerCase().includes(search.toLowerCase()) &&
        p.price >= priceRange[0] &&
        p.price <= priceRange[1] &&
        (categoryFilter ? p.category === categoryFilter : true)
    )
    .sort((a, b) =>
      sort === "price" ? a.price - b.price : a.name.localeCompare(b.name)
    );

  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold mb-6">Products</h2>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <div className="w-full lg:w-1/4 bg-white rounded-xl shadow p-4 space-y-6">
          {/* Search */}
          <div>
            <label className="block text-sm font-semibold mb-1">Search</label>
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Price Range */}
          <div>
            <label className="block text-sm font-semibold mb-1">Price Range</label>
            <div className="flex items-center space-x-2">
              <input
                type="number"
                value={priceRange[0]}
                onChange={(e) =>
                  setPriceRange([Number(e.target.value), priceRange[1]])
                }
                className="w-1/2 border rounded-lg px-2 py-1 focus:outline-none"
              />
              <span>-</span>
              <input
                type="number"
                value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([priceRange[0], Number(e.target.value)])
                }
                className="w-1/2 border rounded-lg px-2 py-1 focus:outline-none"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div>
            <label className="block text-sm font-semibold mb-1">Category</label>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Sort */}
          <div>
            <label className="block text-sm font-semibold mb-1">Sort By</label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="name">Name</option>
              <option value="price">Price</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="w-full lg:w-3/4 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.length ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} favorites={new Set()} toggleFavorite={() => {}} />
            ))
          ) : (
            <p className="text-gray-500 col-span-full">No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
