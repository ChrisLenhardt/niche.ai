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
                  <svg className="bg-white rounded-full w-9 h-9" fill="#000000" width="800px" height="800px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1">
                    <path d="M8.49,12.68v4.61c0,.34,.23,.61,.53,.71v5.48c0,.13-.14,3.21,1.88,5.34,1.22,1.28,2.93,1.94,5.09,1.94s3.88-.65,5.09-1.94c2.02-2.13,1.89-5.21,1.88-5.3v-5.52c.3-.1,.53-.37,.53-.71v-4.61c1.71-.69,2.92-2.36,2.92-4.32,0-2.57-2.09-4.67-4.67-4.67-.49,0-.98,.08-1.46,.23-1.09-1.67-2.93-2.68-4.94-2.68s-3.68,.91-4.79,2.46c-2.74-.22-5.01,1.96-5.01,4.65,0,1.96,1.21,3.63,2.92,4.32Zm11.51,15.11c-.92,.97-2.27,1.46-4,1.46s-3.07-.49-4-1.46c-1.58-1.66-1.48-4.21-1.48-4.28v-5.48h10.96v5.51s.1,2.58-1.48,4.24Zm2.01-14.77v3.51H9.99v-3.51h12.02ZM10.23,5.19c.21,0,.4,.02,.59,.05,.3,.05,.61-.09,.77-.35,.81-1.34,2.22-2.15,3.78-2.15,1.68,0,3.19,.94,3.95,2.45,.09,.18,.25,.31,.43,.38,.19,.06,.39,.05,.57-.04,.45-.23,.95-.35,1.44-.35,1.75,0,3.17,1.42,3.17,3.17s-1.42,3.17-3.17,3.17H10.23c-1.75,0-3.17-1.42-3.17-3.17s1.42-3.17,3.17-3.17Z"/>
                    <path d="M14.26,5.25c1.5,.28,2.59,1.59,2.59,3.11,0,.41,.34,.75,.75,.75s.75-.34,.75-.75c0-2.24-1.6-4.17-3.81-4.59-.4-.07-.8,.19-.88,.6-.08,.41,.19,.8,.6,.88Z"/>
                    <circle cx="13.32" cy="20.07" r="1.25"/><circle cx="18.68" cy="20.07" r="1.25"/>
                    <path d="M17.56,24.5h-3.12c-.41,0-.75,.34-.75,.75s.34,.75,.75,.75h3.12c.41,0,.75-.34,.75-.75s-.34-.75-.75-.75Z"/>
                  </svg>
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