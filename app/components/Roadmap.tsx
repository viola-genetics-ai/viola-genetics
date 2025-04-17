"use client";

import { motion } from "framer-motion";

const roadmapItems = [
  {
    quarter: "April 2025",
    title: "Preparation & Finalization",
    description:
      "Final UI/UX tests, internal risk engine benchmark (93% accuracy), token generation (Solana, 1B supply), launch mechanics and vesting contracts setup, social and docs infrastructure ready, soft marketing rollout, and security audits.",
  },
  {
    quarter: "May - June 2025",
    title: "Activation",
    description:
      "Launch of 5 Viola AI tools (chat, advisor, scan, news, dev). Platform accessible without login for 3 months.",
  },
  {
    quarter: "July - August 2025",
    title: "Community Engagement",
    description:
      "Live updates based on feedback, usage analytics collection, live learning for AI engine and AMA sessions.",
  },
  {
    quarter: "Sept - Dec 2025",
    title: "Viola AI V1.1 & Telegram Bot Beta",
    description:
      "Add contract deployment features, release Telegram Bot, test whitelist/premium system, unlock premium tools via staking, and early access to project scoring system.",
  },
  {
    quarter: "Jan - Mar 2026",
    title: "ViolaLaunch Alpha & Revenue Infra",
    description:
      "Alpha of ViolaLaunch (launchpad), $Viola payment gateway, optional Stripe checkout, partner tools integration, developer API (gated), and multichain EVM test phase.",
  },
];

export default function Roadmap() {
  return (
    <section
      id="roadmap"
      className="bg-white py-24 px-4 md:px-12 text-white relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
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
