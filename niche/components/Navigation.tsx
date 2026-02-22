"use client";

import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";
import { Music, Menu, X, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);

  const pathname = usePathname();

  const hideSignIn = ['/landingpage'];
  const isSignInShown = hideSignIn.includes(pathname);

  const hideProfilePic = ['/landingpage', '/login',"/"];
  const isProfilePicShown = hideProfilePic.includes(pathname);

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
              {isSignInShown && (
                <a
                  href="/login"  
                >
                  <button className="bg-white text-black px-6 py-2.5 rounded-lg text-sm font-bold tracking-tight hover:bg-gray-200 transition-all flex items-center gap-2">
                    Sign In
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </a>
              )}
              {!isProfilePicShown &&(
                <div>
                  <a
                    href="/dashboard"
                  >
                    <button>
                      <svg className="bg-white rounded-full w-9 h-9" fill="#000000" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                      <path d="M85.333 512C85.333 276.358 276.358 85.333 512 85.333c235.639 0 426.667 191.025 426.667 426.667 0 235.639-191.027 
                      426.667-426.667 426.667C276.358 938.667 85.333 747.64 85.333 512zM512 128c-212.077 0-384 171.923-384 384 0 142.135 77.222 
                      266.231 192 332.629V628.62c0-77.474 45.885-144.23 111.962-174.575-38.129-25.737-63.201-69.344-63.201-118.808 0-79.108 64.131-143.238 
                      143.24-143.238s143.236 64.13 143.236 143.238c0 49.463-25.071 93.071-63.202 118.808 66.078 30.345 111.966 97.101 111.966
                      174.575v216.009c114.778-66.398 192-190.494 192-332.629 0-212.077-171.921-384-384-384zm149.333 737.882V628.621c0-82.475-66.859-149.333-149.333-149.333s-149.333
                        66.859-149.333 149.333v237.261C408.572 885.278 459.034 896 512 896s103.428-10.722 149.333-30.118zM512 234.667c-55.543 0-100.573 45.027-100.573 100.571S456.457
                        435.81 512 435.81c55.543 0 100.57-45.028 100.57-100.572S567.544 234.667 512 234.667z"/>
                      </svg>
                    </button>
                  </a>
                </div>
              )}
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