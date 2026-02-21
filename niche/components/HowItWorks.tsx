'use client';
import React from 'react';
import { motion as Motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Code2, Cpu, Database, Network } from 'lucide-react';

const steps = [
  {
    number: "01",
    icon: <Database className="w-5 h-5" />,
    title: "Provide Your Sound",
    description: "Connect your streaming profile or paste a link to any track that resonates with you. Our engine starts by listening."
  },
  {
    number: "02",
    icon: <Cpu className="w-5 h-5" />,
    title: "Deconstruct the Genome",
    description: "NeuralSound™ extracts 4,096 distinct acoustic vectors from your sample—analyzing timbre, harmonics, and rhythmic complexity."
  },
  {
    number: "03",
    icon: <Network className="w-5 h-5" />,
    title: "Uncover the Niche",
    description: "We scan the deep web and underground catalogs to find matches that share the same acoustic DNA but are outside your current bubble."
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 bg-zinc-950 text-white relative overflow-hidden">
      {/* Decorative vertical lines */}
      <div className="absolute inset-0 z-0 flex justify-between pointer-events-none opacity-5">
        <div className="w-[1px] h-full bg-white"></div>
        <div className="w-[1px] h-full bg-white ml-[10%]"></div>
        <div className="w-[1px] h-full bg-white ml-[20%]"></div>
        <div className="w-[1px] h-full bg-white ml-[30%]"></div>
        <div className="w-[1px] h-full bg-white"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-24 mb-32">
          <div className="lg:w-1/2 sticky top-32">
             <Motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[10px] font-bold uppercase tracking-[0.4em] text-purple-400 mb-6 block"
            >
              The Process
            </Motion.span>
            <h2 className="text-4xl md:text-6xl font-bold mb-10 leading-tight tracking-tight">How we find your <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 italic">Sonic Signature</span></h2>
            
            <div className="space-y-16">
              {steps.map((step, index) => (
                <Motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex gap-10"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-lg border border-white/10 bg-black flex items-center justify-center font-bold text-lg mb-4">
                      {step.number}
                    </div>
                    {index < steps.length - 1 && <div className="flex-1 w-[1px] bg-gradient-to-b from-white/20 to-transparent"></div>}
                  </div>
                  <div className="pb-10">
                    <div className="flex items-center gap-3 mb-4 text-purple-400">
                      {step.icon}
                      <h3 className="text-2xl font-bold tracking-tight text-white">{step.title}</h3>
                    </div>
                    <p className="text-gray-400 leading-relaxed text-lg max-w-md">{step.description}</p>
                  </div>
                </Motion.div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative space-y-12">
            <Motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] rounded-[40px] overflow-hidden border border-white/10 shadow-3xl group"
            >
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1741745978060-9add161ba2c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwaGVhZHBob25lcyUyMG11c2ljJTIwY29uY2VydCUyMGRqJTIwdmlueWwlMjBtdXNpYyUyMHByb2R1Y2VyJTIwc3R1ZGlvfGVufDF8fHx8MTc3MTY0NzgyOHww"
                alt="AI Sound Processing"
                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              
              {/* Floating UI Elements */}
              <div className="absolute top-10 right-10 p-6 bg-black/60 backdrop-blur-3xl border border-white/10 rounded-3xl w-64 shadow-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Live_Processing</span>
                </div>
                <div className="space-y-3">
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <Motion.div animate={{ width: ["10%", "90%"] }} transition={{ duration: 4, repeat: Infinity }} className="h-full bg-purple-500" />
                  </div>
                  <div className="h-2 w-3/4 bg-white/5 rounded-full overflow-hidden">
                    <Motion.div animate={{ width: ["30%", "60%"] }} transition={{ duration: 3, repeat: Infinity, delay: 1 }} className="h-full bg-pink-500" />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-10 left-10 p-8">
                <h4 className="text-3xl font-bold tracking-tight mb-2">Enterprise Ready</h4>
                <p className="text-zinc-400 max-w-xs">Built to handle the throughput of the world's largest streaming services.</p>
              </div>
            </Motion.div>

            {/* Code Block Mockup */}
            <Motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-black border border-white/10 rounded-3xl p-10 font-mono text-sm leading-loose text-zinc-400 shadow-2xl"
            >
              <div className="flex gap-2 mb-8">
                <div className="w-2 h-2 rounded-full bg-red-500/40"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500/40"></div>
                <div className="w-2 h-2 rounded-full bg-green-500/40"></div>
              </div>
              <p><span className="text-purple-400">import</span> niche <span className="text-purple-400">from</span> <span className="text-green-400">'@niche/sdk'</span>;</p>
              <p><span className="text-zinc-600">// Initialize the engine</span></p>
              <p><span className="text-purple-400">const</span> engine = <span className="text-purple-400">await</span> niche.<span className="text-blue-400">init</span>({'{'}</p>
              <p className="pl-6">apiKey: <span className="text-green-400">'••••••••••••'</span>,</p>
              <p className="pl-6">region: <span className="text-green-400">'us-east-1'</span></p>
              <p>{'}'});</p>
              <p><span className="text-zinc-600">// Get acoustic matches</span></p>
              <p><span className="text-purple-400">const</span> result = <span className="text-purple-400">await</span> engine.<span className="text-blue-400">match</span>(trackId);</p>
              <p><span className="text-blue-400">console</span>.<span className="text-blue-400">log</span>(result.accuracy); <span className="text-zinc-600">// 0.998</span></p>
            </Motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
