"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Mail } from "lucide-react";
import Image from "next/image";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic
    console.log({ email, password });
  };

  return (
    <section className="min-h-screen flex flex-col md:flex-row">
      {/* Left Image Section */}
      <div className="relative w-full md:w-1/2 h-64 md:h-auto">
        <Image
          src="/images/viola-2.png" // ganti dengan ilustrasi branding ViolaAI
          alt="Login Illustration"
          fill
          className="object-cover"
          priority
        />
        {/* <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 tracking-wider drop-shadow-lg">
            Viola<span className="text-white">AI</span>
          </h1>
        </div> */}
      </div>

      {/* Right Form Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-12 bg-white">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md bg-black/80 border border-yellow-600 p-8 rounded-2xl shadow-xl backdrop-blur-md"
        >
          <h2 className="text-3xl font-bold text-center text-yellow-400 mb-6">
            VIOLA
          </h2>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="text-sm text-white mb-2 block">Email</label>
              <div className="flex items-center border border-yellow-500 rounded-lg px-3 py-2 bg-transparent focus-within:ring-2 ring-yellow-500 transition">
                <Mail className="text-yellow-400 mr-2" size={18} />
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent w-full text-white placeholder-gray-400 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-white mb-2 block">Password</label>
              <div className="flex items-center border border-yellow-500 rounded-lg px-3 py-2 bg-transparent focus-within:ring-2 ring-yellow-500 transition">
                <Lock className="text-yellow-400 mr-2" size={18} />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-transparent w-full text-white placeholder-gray-400 outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition"
            >
              Login
            </button>

            <button
              type="button"
              onClick={() => console.log("Connect Wallet clicked")}
              className="w-full py-3 bg-black text-yellow-400 border border-yellow-400 font-bold rounded-lg hover:bg-yellow-400 hover:text-black transition flex items-center justify-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 12h20" />
                <path d="M12 2v20" />
                <circle cx="12" cy="12" r="10" />
              </svg>
              Connect Wallet
            </button>
          </form>

          <p className="text-sm text-gray-400 text-center mt-6">
            Don’t have an account?{" "}
            <a href="#" className="text-yellow-400 hover:underline">
              Sign Up
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
