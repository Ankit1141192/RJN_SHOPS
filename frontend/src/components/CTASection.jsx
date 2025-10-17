import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom"; // import useNavigate

const CTASection = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/products"); // Redirect to All Products page
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 text-white relative overflow-hidden"
    >
      {/* Decorative background circles */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-20 -right-16 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h3 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
          Ready to Discover Amazing Products?
        </h3>
        <p className="text-xl md:text-2xl text-white/90 mb-10">
          Join thousands who trust my carefully curated recommendations. 
          Start shopping smarter and saving time today!
        </p>
        <button
          onClick={handleExploreClick}
          className="bg-white text-purple-600 px-12 py-5 rounded-full font-bold text-lg md:text-xl shadow-lg hover:shadow-2xl transition transform hover:scale-110 inline-flex items-center space-x-4"
        >
          <span>Explore All Products</span>
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default CTASection;
