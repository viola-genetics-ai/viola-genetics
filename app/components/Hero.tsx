"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden text-white">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/viola.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Centered Content */}
      <div className="relative z-20 text-center px-6 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold tracking-tight leading-tight neon-text"
        >
          Viola AI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 text-lg md:text-xl text-gray-300"
        >
          Revolutionizing cancer treatment with genomic mapping. Discover how
          Viola AI brings personalized oncology to life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-8 flex justify-center gap-4 flex-wrap"
        >
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 shadow-sm shadow-purple-500/50"
          >
            Learn More
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white bg-black hover:bg-white/10 hover:text-purple-400"
          >
            Whitepaper
          </Button>
        </motion.div>
      </div>

      {/* Neon CSS */}
      <style jsx>{`
        .neon-text {
          color: #fff;
          text-shadow: 0 0 5px #b300ff, 0 0 10px #b300ff, 0 0 20px #b300ff,
            0 0 40px #a64dff, 0 0 80px #a64dff;
        }
      `}</style>
    </section>
  );
}
