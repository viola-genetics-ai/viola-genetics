"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 backdrop-blur-sm bg-[#0f0f1f]/70 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="text-white text-xl font-bold tracking-wide">
          Viola<span className="text-purple-500">AI</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10 text-gray-300">
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <Link href="#roadmap" className="hover:text-white transition">
            Roadmap
          </Link>
          <Link href="#whitepaper" className="hover:text-white transition">
            Whitepaper
          </Link>
        </nav>

        {/* Connect Wallet */}
        <div className="hidden md:block">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            Connect Wallet
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#0f0f1f] border-t border-gray-800 px-4 py-6 space-y-4 text-gray-300">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="block hover:text-white"
          >
            Home
          </Link>
          <Link
            href="#roadmap"
            onClick={() => setOpen(false)}
            className="block hover:text-white"
          >
            Roadmap
          </Link>
          <Link
            href="#whitepaper"
            onClick={() => setOpen(false)}
            className="block hover:text-white"
          >
            Whitepaper
          </Link>
          <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white mt-2">
            Connect Wallet
          </Button>
        </div>
      )}
    </header>
  );
}
