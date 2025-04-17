"use client";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const features = [
  {
    title: "Genomic Mapping",
    description:
      "Advanced AI algorithms map patient DNA to detect cancer mutations with high accuracy.",
  },
  {
    title: "Personalized Oncology",
    description:
      "Tailored cancer treatment plans based on each individual’s genomic profile.",
  },
  {
    title: "Real-Time Analysis",
    description:
      "Viola AI processes clinical data in real-time for faster diagnostics and recommendations.",
  },
  {
    title: "Secure & Private",
    description:
      "Built on decentralized protocols to ensure patient data remains private and protected.",
  },
];

export default function OurFeatures() {
  return (
    <section className="w-full bg-white text-black py-24 px-6 md:px-12" id="ourFeatures">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent"
        >
          Our Features
        </motion.h2>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="border border-black/10 rounded-xl p-6 text-left bg-white hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4">
                <Sparkles className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-black">
                {feature.title}
              </h3>
              <p className="text-gray-700 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
