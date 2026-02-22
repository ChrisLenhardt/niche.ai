'use client';
import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center pt-24 pb-16 overflow-hidden bg-black text-white">
      {/* Grid background */}
      <div className="absolute inset-0 z-0 opacity-15" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-3/5 text-left"
          >
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-[10px] font-bold tracking-[0.2em] uppercase text-purple-400 mb-10"
            >
              <span className="flex h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse"></span>
              NeuralSound™ Discovery
            </motion.div>

            <h1 className="text-6xl md:text-[84px] font-bold leading-[0.95] tracking-tighter mb-8">
              Find your <br />
              next <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-white to-pink-500 italic">niche</span> <br />
              <span className="text-zinc-500">listening.</span>
            </h1>

            <p className="text-lg text-zinc-400 max-w-xl mb-12 leading-relaxed font-light tracking-wide">
              Discover more artists that can satisfy that particular itch!
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link
                href="/login" 
                className="w-full sm:w-auto px-10 py-4 rounded-xl bg-white text-black font-bold text-base transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-white/5 flex items-center justify-center gap-2"
              >
                Start Discovering
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button className="w-full sm:w-auto px-10 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 font-bold text-base transition-all flex items-center justify-center gap-2">
                <Play className="w-4 h-4 fill-current" />
                See How It Works
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="lg:w-2/5 relative"
          >
            <div className="relative aspect-square">
               <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-pink-600/20 blur-[100px] rounded-full"></div>
               
               <div className="relative h-full w-full rounded-2xl border border-white/10 bg-black/40 backdrop-blur-3xl overflow-hidden p-8 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-1">
                      <div className="h-1 w-20 bg-white/40 rounded-full overflow-hidden">
                        <motion.div 
                          animate={{ x: ["-100%", "100%"] }} 
                          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                          className="h-full w-full bg-white" 
                        />
                      </div>
                      <span className="text-[10px] text-zinc-500 font-bold tracking-widest uppercase">Mapping_Acoustics</span>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 animate-pulse"></div>
                    </div>
                  </div>

                  <div className="flex-1 flex items-center justify-center my-8">
                     <ImageWithFallback 
                        src="https://images.unsplash.com/photo-1562265827-39be4692a434?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG5ldXJhbCUyMG5ldHdvcmslMjBkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhcmt8ZW58MXx8fHwxNzcxNjQ4MzgzfDA"
                        alt="Neural Music Map"
                        className="w-full h-full object-cover rounded-xl opacity-80"
                      />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                      <span className="text-[10px] text-zinc-500 uppercase font-bold block mb-1">Matching_Accuracy</span>
                      <span className="text-xl font-bold font-mono">99.4%</span>
                    </div>
                    <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                      <span className="text-[10px] text-zinc-500 uppercase font-bold block mb-1">Latency_ms</span>
                      <span className="text-xl font-bold font-mono">14.2ms</span>
                    </div>
                  </div>
               </div>
               
               <div className="absolute top-10 -left-10 p-3 bg-black/60 border border-white/10 rounded-lg backdrop-blur shadow-2xl">
                 <span className="text-xs font-mono text-purple-400 tracking-tighter">mood: atmospheric</span>
               </div>
               <div className="absolute bottom-40 -right-8 p-3 bg-black/60 border border-white/10 rounded-lg backdrop-blur shadow-2xl">
                 <span className="text-xs font-mono text-pink-400 tracking-tighter">bpm: 124.5</span>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
