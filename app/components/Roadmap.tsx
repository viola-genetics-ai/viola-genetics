"use client";

import { motion } from "framer-motion";

const roadmapItems = [
  {
    quarter: "Q1 2025",
    title: "Foundation Phase",
    description:
      "Kickstart ViolaAI R&D. Form the core team and define the MVP architecture.",
  },
  {
    quarter: "Q2 2025",
    title: "MVP Launch",
    description:
      "Release the first MVP of ViolaAI, deploy initial smart contracts, and publish whitepaper.",
  },
  {
    quarter: "Q3 2025",
    title: "Community Growth",
    description:
      "Start marketing campaign, build partnerships, and conduct private token sale.",
  },
  {
    quarter: "Q4 2025",
    title: "Beta & Token Sale",
    description:
      "Launch public token sale, beta platform, and expand our global presence.",
  },
  {
    quarter: "Q1 2026",
    title: "Mainnet Launch",
    description:
      "Deploy on mainnet with governance, user incentives, and global AI infrastructure.",
  },
];

export default function Roadmap() {
  return (
    <section
      id="roadmap"
      className="bg-[#FAECD8] py-24 px-4 md:px-12 text-white relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto" id="roadmap">
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-16">
          Roadmap
        </h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute top-0 left-1/2 w-1 h-full bg-yellow-500/30 -translate-x-1/2 z-0" />

          <div className="space-y-20">
            {roadmapItems.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center md:items-start gap-6 ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Dot */}
                  <div
                    className={`absolute hidden md:flex top-1.5 w-6 h-6 bg-yellow-400 rounded-full border-4 border-black shadow-yellow-500 shadow-lg z-10 ${
                      isLeft ? "-left-3" : "-right-3"
                    }`}
                  />

                  {/* Content */}
                  <div
                    className={`bg-black/80 backdrop-blur-md rounded-2xl border border-yellow-600 p-6 w-full md:w-1/2 z-10 shadow-md hover:scale-[1.02] transition-transform duration-300 ${
                      isLeft ? "md:ml-12" : "md:mr-12"
                    }`}
                  >
                    <h3 className="text-yellow-400 text-sm font-semibold mb-1 uppercase tracking-wide">
                      {item.quarter}
                    </h3>
                    <h4 className="text-white text-xl font-bold">
                      {item.title}
                    </h4>
                    <p className="text-gray-300 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
