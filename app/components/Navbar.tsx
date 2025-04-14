"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "w-full fixed top-0 left-0 z-50 transition-colors duration-300 border-b border-transparent",
        {
          "bg-black/80 text-white backdrop-blur-md border-gray-800": scrolled,
          "bg-transparent": !scrolled,
        }
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between relative">
        {/* Brand on the left */}
        <Link
          href="/"
          className="text-xl font-bold tracking-wide z-10"
        >
          Viola<span className="text-yellow-500">Research</span>
        </Link>

        {/* Centered Desktop Menu */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-10">
          <Link
            href="/"
            className="hover:text-yellow-500 transition font-medium"
          >
            Home
          </Link>
          <Link
            href="#roadmap"
            className="hover:text-yellow-500 transition font-medium"
          >
            Roadmap
          </Link>
          <Link
            href="#whitepaper"
            className="hover:text-yellow-500 transition font-medium"
          >
            Whitepaper
          </Link>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-white z-10"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/90 border-t border-gray-800 px-4 py-6 space-y-4">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="block hover:text-yellow-500"
          >
            Home
          </Link>
          <Link
            href="#roadmap"
            onClick={() => setOpen(false)}
            className="block hover:text-yellow-500"
          >
            Roadmap
          </Link>
          <Link
            href="#whitepaper"
            onClick={() => setOpen(false)}
            className="block hover:text-yellow-500"
          >
            Whitepaper
          </Link>
        </div>
      )}
    </header>
  );
}
