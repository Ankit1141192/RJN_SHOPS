import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./Pages/HomePage";
import Products from "./Pages/Products";
import ContactPage from "./Pages/Contact";
import Stories from "./Pages/Stories";
import Pricing from "./Pages/Pricing";
import ProductDetails from "./Pages/ProductDetails";
import CategoryProducts from "./Pages/CategoryProducts";

const App = () => {
  return (
    <>
      <Navbar /> {/* ✅ Global Navbar */}
      <Routes >
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/pricing" element={<Pricing />} />
         <Route path="/products/:id" element={<ProductDetails/>} />
         <Route path="/products/category/:category" element = {<CategoryProducts/>}/>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
