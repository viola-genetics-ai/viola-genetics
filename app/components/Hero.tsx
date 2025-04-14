"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  const [showGradient, setShowGradient] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowGradient(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white text-black px-6">
      <div className="relative z-20 flex flex-col md:flex-row items-center justify-between max-w-7xl w-full gap-10">
        {/* Left Content */}
        <div className="text-center md:text-left max-w-xl">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight"
          >
            <span
              className={`inline-block ${
                showGradient ? "viola-text" : ""
              } transition-all duration-500`}
            >
              VIOLA
            </span>{" "}
            <span className="text-gray-900">
              Smarter Medicine
              <br className="hidden md:block" /> through{" "}
              <span className="underline decoration-yellow-400 decoration-4 underline-offset-4">
                Genomic Insight
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-6 text-lg md:text-xl text-gray-700"
          >
            Revolutionizing cancer treatment with genomic mapping. Discover how
            Viola AI brings personalized oncology to life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-8 flex justify-center md:justify-start gap-4 flex-wrap"
          >
            <Button
              size="lg"
              className="bg-yellow-400 text-black hover:bg-yellow-500 transition"
            >
              Learn More
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-black text-black hover:bg-yellow-100 transition"
            >
              Whitepaper
            </Button>
          </motion.div>
        </div>

        {/* Right Image with Pulse and Inset Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="relative w-full md:w-1/2 max-w-md flex items-center justify-center"
        >
          {/* Inset Background */}
          <div className="absolute w-80 h-80 rounded-full bg-white shadow-inner-ring z-0" />

          {/* Green Pulse Effect */}
          <div className="absolute w-72 h-72 rounded-full pulse-ring z-10" />

          {/* Image */}
          <video
            src="/videos/viola-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="relative z-20 w-[600px] h-[600px] rounded-full object-contain ring-4 ring-white"
          />
        </motion.div>
      </div>

      {/* Extra Styles */}
      <style jsx>{`
        .viola-text {
          background: linear-gradient(to right, #facc15, #fef08a, #000000);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
        }

        .shadow-inner-ring {
          box-shadow: inset 0 10px 20px rgba(0, 0, 0, 0.1),
            inset 0 -10px 20px rgba(0, 0, 0, 0.08),
            0 0 30px rgba(50, 205, 50, 0.15); /* subtle green outer glow */
        }
      `}</style>
    </section>
  );
}
