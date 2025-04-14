"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.7,
    },
  }),
};

export default function AboutUs() {
  return (
    <section className="relative w-full py-28 px-6 md:px-12 bg-white overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-yellow-300 opacity-20 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-56 h-56 bg-yellow-400 opacity-10 rounded-full blur-3xl animate-ping" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative inline-block rounded-xl bg-gradient-to-br from-yellow-100/50 to-yellow-300/30 border border-yellow-400/40 shadow-[0_0_50px_#fde047aa] backdrop-blur-md p-3"
        >
          <Image
            src="/images/about-viola.png"
            alt="Viola AI"
            width={500}
            height={500}
            className="w-full h-full object-contain rounded-lg"
            priority
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.25,
              },
            },
          }}
        >
          <motion.p
            variants={fadeIn}
            custom={0}
            className="text-yellow-500 text-3xl font-light"
          >
            ABOUT
          </motion.p>
          <motion.h2
            variants={fadeIn}
            custom={1}
            className="text-4xl md:text-5xl font-semibold text-gray-900"
          >
            Empowering Precision Medicine
          </motion.h2>
          <motion.h1
            variants={fadeIn}
            custom={2}
            className="text-6xl md:text-7xl font-bold text-yellow-500"
          >
            Viola Research
          </motion.h1>

          <motion.p
            variants={fadeIn}
            custom={3}
            className="mt-6 text-gray-700 text-lg leading-relaxed text-justify"
          >
            Diseases like cancer, heart disease, diabetes, and neurodegenerative
            disorders are often rooted in complex genetic and molecular
            mechanisms. Genomic mapping plays a critical role in uncovering
            these causes by identifying mutations, gene variations, and
            disease-driving patterns.
          </motion.p>
          <motion.p
            variants={fadeIn}
            custom={4}
            className="mt-4 text-gray-700 text-lg leading-relaxed text-justify"
          >
            Yet, the scale and complexity of genomic data remain a challenge for
            traditional tools. Viola AI rises to meet this challenge, utilizing
            powerful machine learning and deep learning algorithms to analyze
            massive genomic datasets—enabling accurate diagnosis, personalized
            risk prediction, and the development of precision treatment plans.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
