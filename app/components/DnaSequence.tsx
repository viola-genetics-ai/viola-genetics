"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const generateDNA = (length = 20) => {
  const bases = ["A", "T", "C", "G"];
  let sequence = "";
  for (let i = 0; i < length; i++) {
    sequence += bases[Math.floor(Math.random() * 4)];
  }
  return sequence;
};

const basePairs: Record<string, string> = {
  A: "T",
  T: "A",
  C: "G",
  G: "C",
};

export default function DNAVisualizer() {
  const [dna, setDna] = useState<string>("");

  const handleGenerate = () => {
    setDna(generateDNA());
  };

  const handleReset = () => {
    setDna("");
  };

  return (
    <div className="flex flex-col items-center gap-8 p-10 bg-[#FAECD8] min-h-screen">
      <h1 className="text-4xl font-extrabold text-black font-mono tracking-tight">
        DNA Generator Visualizer
      </h1>

      <div className="flex gap-4">
        <Button
          onClick={handleGenerate}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-6 py-3 rounded-xl shadow-lg"
        >
          Generate DNA
        </Button>

        <Button
          onClick={handleReset}
          className="bg-black hover:bg-gray-800 text-white font-bold text-lg px-6 py-3 rounded-xl shadow-lg border-2 border-yellow-400"
        >
          Reset
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mt-6">
        {/* Left Card: DNA Sequence Example */}
        <div className="bg-white border-2 border-black rounded-2xl shadow-xl p-6">
          <h2 className="text-2xl font-bold mb-4 text-black font-mono">
            DNA Sequence Example
          </h2>
          {dna ? (
            <div className="flex flex-col gap-3">
              {dna.split("").map((base, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center gap-6 ${
                    index % 2 === 0 ? "rotate-1" : "-rotate-1"
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03 }}
                >
                  <span className="text-xl font-bold text-black bg-yellow-300 px-4 py-2 rounded-full shadow border-2 border-black font-mono">
                    {base}
                  </span>
                  <div className="w-10 h-[2px] bg-black rotate-45" />
                  <span className="text-xl font-bold text-white bg-black px-4 py-2 rounded-full shadow border-2 border-yellow-400 font-mono">
                    {basePairs[base]}
                  </span>
                </motion.div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 font-mono">
              Click Generate to show sequence
            </p>
          )}
        </div>

        {/* Right Card: DNA Coding Regions */}
        <div className="bg-black border-2 border-yellow-400 rounded-2xl shadow-xl p-6 text-white">
          <h2 className="text-2xl font-bold mb-4 text-yellow-400 font-mono">
            DNA Coding Regions
          </h2>
          {dna ? (
            <div className="space-y-2">
              <p className="text-base">
                <span className="font-bold">Start Codon:</span> ATG
              </p>
              <p className="text-base">
                <span className="font-bold">Stop Codons:</span> TAA, TAG, TGA
              </p>
              <p className="text-base mt-4">
                <span className="font-bold">Detected:</span>{" "}
                {dna.includes("ATG") ? "Start Codon found" : "No start codon"}
              </p>
              <p className="text-base">
                {/(TAA|TAG|TGA)/.test(dna)
                  ? "Stop codon detected"
                  : "No stop codon found"}
              </p>
            </div>
          ) : (
            <p className="text-gray-400 font-mono">
              Coding info appears after generating DNA
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
