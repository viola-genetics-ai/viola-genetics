"use client";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const features = [
  {
    title: "Genomic Mapping",
    description:
      "Advanced AI algorithms map patient DNA to detect cancer mutations with high accuracy.",
    icon: <Sparkles className="w-8 h-8 text-purple-400" />,
  },
  {
    title: "Personalized Oncology",
    description:
      "Tailored cancer treatment plans based on each individual’s genomic profile.",
    icon: <Sparkles className="w-8 h-8 text-blue-400" />,
  },
  {
    title: "Real-Time Analysis",
    description:
      "Viola AI processes clinical data in real-time for faster diagnostics and recommendations.",
    icon: <Sparkles className="w-8 h-8 text-pink-400" />,
  },
  {
    title: "Secure & Private",
    description:
      "Built on decentralized protocols to ensure patient data remains private and protected.",
    icon: <Sparkles className="w-8 h-8 text-cyan-400" />,
  },
];

export default function OurFeatures() {
  return (
    <section className="w-full bg-black text-white py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
        >
          Our Features
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-xl p-6 text-left shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] transition duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-purple-300">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
