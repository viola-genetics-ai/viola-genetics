"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"; // Pastikan path ini sesuai struktur project-mu
import { Check, Copy } from "lucide-react";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const contractAddress = "-"; // Ganti dengan CA aslimu

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset ikon setelah 2 detik
  };

  const [showGradient, setShowGradient] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowGradient(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#FAECD8] text-black px-6">
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
              VIOLA RESEARCH
            </span>{" "}
            <span className="text-gray-900">
              Smarter Medicine
              <br className="hidden md:block" /> through{" "}
              <span className="underline decoration-yellow-400 decoration-4 underline-offset-4">
                Genomic Insight.
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-6 text-lg md:text-xl text-gray-700"
          >
            Viola Research is a revolutionary AI-powered platform that
            integrates genomic mapping and advanced machine learning to provide
            personalized treatment strategies for complex diseases.
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
              <a href="#dna">Get Started</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleCopy}
              className="border-black text-black hover:bg-yellow-100 transition flex items-center gap-2"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-green-500" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  CA: {contractAddress.slice(0, 6)}...
                  {contractAddress.slice(-4)}
                </>
              )}
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
          <div className="absolute w-80 h-80 rounded-full shadow-inner-ring z-0" />

          {/* Image */}
          <video
            src="/videos/0417.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="relative z-0 w-[500px] h-[500px] rounded-full object-contain scale-[1.5] mt-34"
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
