import React from "react";

const Stories = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 via-blue-50 to-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-8 font-serif">
          ✨ My Story — A Journey of Learning & Growth ✨
        </h1>

        <div className="bg-white/70 backdrop-blur-md shadow-2xl rounded-2xl p-10 md:p-14">
          <blockquote className="text-2xl md:text-3xl text-gray-800 italic font-serif leading-relaxed mb-8">
            “Every expert was once a beginner — I started this year with curiosity, ambition, and a
            dream to grow.”
          </blockquote>

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6 font-sans">
            This year marks the beginning of my journey in learning and self-development. I’ve been
            focusing on building my skills, understanding technology, and preparing myself to land a
            great job opportunity that aligns with my passion.
          </p>

          <blockquote className="text-2xl text-purple-700 italic font-serif mb-6">
            “Growth doesn’t stop at getting a job — it begins when you start exploring beyond it.”
          </blockquote>

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6 font-sans">
            With that mindset, I decided to explore new opportunities and started my journey in{" "}
            <span className="font-semibold text-blue-700">Affiliate Marketing</span> through{" "}
            <span className="font-semibold text-purple-700">Amazon Associates</span>. It’s helping
            me understand the digital world beyond coding — a step toward independence and
            creativity.
          </p>

          <blockquote className="text-2xl text-blue-700 italic font-serif mb-6">
            “Small steps create big results — and I’m proud of every small win along the way.”
          </blockquote>

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-sans mb-10">
            My goal is to continue learning, exploring, and sharing my experiences — inspiring
            others to believe that growth is a lifelong process. This is just the beginning of my
            story, and I’m excited for what’s next!
          </p>

          <div className="text-gray-600 font-medium text-lg italic">
            — Thanks for reaching out and being a part of my journey 🌿
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
