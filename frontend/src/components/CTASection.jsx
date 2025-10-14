import React from "react";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-5xl font-bold mb-6">
          Ready to Discover Amazing Products?
        </h3>
        <p className="text-xl text-blue-100 mb-8">
          Join thousands who trust my recommendations. Start shopping smarter today!
        </p>
        <button className="bg-white text-purple-600 px-12 py-5 rounded-full font-bold text-lg hover:shadow-2xl transition transform hover:scale-110 inline-flex items-center space-x-3">
          <span>Explore All Products</span>
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default CTASection;
