import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
          Get in Touch
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Have questions, feedback, or need help with your order?  
          We’d love to hear from you. Our support team is here 24/7.
        </p>
      </div>

      {/* Contact Info Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
          <Mail className="w-10 h-10 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Email Us</h3>
          <p className="text-gray-600">support@shopkart.com</p>
          <p className="text-gray-600">info@shopkart.com</p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
          <Phone className="w-10 h-10 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Call Us</h3>
          <p className="text-gray-600">+91 98765 43210</p>
          <p className="text-gray-600">Mon - Sat, 9AM - 8PM</p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
          <MapPin className="w-10 h-10 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
          <p className="text-gray-600">123, Tech Park Avenue,</p>
          <p className="text-gray-600">Bengaluru, India</p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Send Us a Message
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-gray-700 font-medium mb-2">Subject</label>
            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            ></textarea>
          </div>

          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl hover:shadow-lg transition"
            >
              <Send className="w-5 h-5" /> Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Map Section */}
      <div className="max-w-6xl mx-auto mt-16">
        <iframe
          title="ShopKart Location"
          className="w-full h-80 rounded-2xl shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.422076783334!2d77.59456281480156!3d12.97159899085702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670e5f73bcb%3A0xa67cde084e8d8b8!2sBangalore%2C%20India!5e0!3m2!1sen!2sin!4v1677392142444!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
