import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import HomePage from "./Pages/HomePage";
import GetStarted from "./Pages/GetStarted";
import Products from "./Pages/Products";
import About from "./Pages/About";
import ContactPage from "./Pages/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/get-started" element={<GetStarted />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
