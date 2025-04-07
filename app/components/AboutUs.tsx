"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 bg-black text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
            About Viola AI
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Viola AI is an advanced AI-driven platform focused on genomic
            mapping for cancer treatment. By analyzing patient DNA and tumor
            profiles, Viola AI empowers doctors to create highly personalized
            oncology solutions.
            <br />
            <br />
            Our mission is to revolutionize cancer care using cutting-edge
            artificial intelligence and provide better outcomes for patients
            across the world.
          </p>
        </motion.div>

        {/* Visual Block with Next.js Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative inline-block rounded-xl bg-gradient-to-br from-purple-500/30 to-blue-500/30 border border-purple-400/20 shadow-[0_0_40px_#a855f7aa] backdrop-blur-md p-2"
        >
          <Image
            src="/images/viola.png"
            alt="Viola AI"
            width={500} // Sesuaikan ukuran sebenarnya
            height={500} // Sesuaikan ukuran sebenarnya
            className="w-full h-full object-contain rounded-lg"
            priority // jika ingin dimuat segera untuk LCP
          />
        </motion.div>
      </div>
    </section>
  );
}
