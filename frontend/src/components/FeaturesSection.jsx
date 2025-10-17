import React from "react";
import { Shield, Award, Zap, Users } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Honest Reviews",
      description:
        "Every product is personally tested and evaluated without bias or sponsorship.",
    },
    {
      icon: Award,
      title: "Quality First",
      description:
        "We recommend only premium products that offer exceptional value and performance.",
    },
    {
      icon: Zap,
      title: "Best Deals",
      description:
        "Real-time price tracking ensures you get the best value for your money.",
    },
    {
      icon: Users,
      title: "Regular Updates",
      description:
        "Fresh recommendations added weekly based on latest trends and innovations.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 text-white font-[Poppins]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold mb-4">
            Why Shop With Me?
          </h3>
          <p className="text-blue-200 text-lg md:text-xl max-w-2xl mx-auto">
            Your satisfaction is my priority. That's what makes my recommendations special.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 flex flex-col items-center text-center transition transform hover:scale-105 hover:bg-white/20 border border-white/20 shadow-lg"
              >
                <div className="bg-gradient-to-tr from-blue-400 via-purple-500 to-pink-500 w-16 h-16 rounded-3xl flex items-center justify-center mb-5 animate-pulse">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl md:text-2xl font-bold mb-3">
                  {feature.title}
                </h4>
                <p className="text-blue-200 text-sm md:text-base">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
