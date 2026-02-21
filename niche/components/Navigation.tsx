"use client";

import React from "react";
import Link from "next/link";
import { Music, Menu, X, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-3xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <Link href="/landingpage" className="flex items-center gap-3 group cursor-pointer">
            <div className="w-9 h-9 bg-white flex items-center justify-center rounded-lg group-hover:bg-purple-500 transition-colors">
              <Music className="w-5 h-5 text-black group-hover:text-white transition-colors" />
            </div>
            <span className="text-xl font-bold tracking-tighter text-white">
              Niche.ai
            </span>
          </Link>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-12">
              <div className="flex items-center gap-2">
                  <Link
                    href="/discover"
                    className="text-[13px] font-bold uppercase tracking-[0.15em] text-gray-400 hover:text-white transition-colors"
                  >
                    Discover
                  </Link>
                <span className="px-1.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-[9px] font-bold text-purple-400">
                  V2
                </span>
              </div>

              <a
                href="/#features"
                className="text-[13px] font-bold uppercase tracking-[0.15em] text-gray-400 hover:text-white transition-colors"
              >
                Platform
              </a>

              <a
                href="/#how-it-works"
                className="text-[13px] font-bold uppercase tracking-[0.15em] text-gray-400 hover:text-white transition-colors"
              >
                Resources
              </a>

              <button className="bg-white text-black px-6 py-2.5 rounded-lg text-sm font-bold tracking-tight hover:bg-gray-200 transition-all flex items-center gap-2">
                Sign In
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black border-b border-white/5 px-4 pt-4 pb-10 space-y-6"
        >
          <Link
            href="/discover"
            className="block text-[13px] font-bold uppercase tracking-[0.15em] text-gray-400 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Discover
          </Link>

          <a
            href="/#features"
            className="block text-[13px] font-bold uppercase tracking-[0.15em] text-gray-400 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Platform
          </a>

          <a
            href="/#how-it-works"
            className="block text-[13px] font-bold uppercase tracking-[0.15em] text-gray-400 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Resources
          </a>

          <button className="w-full bg-white text-black px-6 py-3 rounded-lg text-sm font-bold tracking-tight hover:bg-gray-200 transition-all">
            Sign In
          </button>
        </motion.div>
      )}
    </nav>
  );
}