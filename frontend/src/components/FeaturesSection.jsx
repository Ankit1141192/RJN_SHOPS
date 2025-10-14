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
    <section className="py-16 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold mb-4">Why Shop With Me?</h3>
          <p className="text-blue-200 text-lg">
            Your satisfaction is my priority. That's what makes my recommendations special.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition transform hover:scale-105 border border-white/20"
              >
                <div className="bg-gradient-to-br from-blue-400 to-purple-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                <p className="text-blue-200">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
