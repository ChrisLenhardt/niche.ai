'use client';
import React from 'react';
import { motion as Motion } from 'motion/react';
import { Brain, Headphones, Mic2, Music2, Share2, Zap, BarChart3, Database } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const features = [
  {
    icon: <Database className="w-5 h-5 text-purple-400" />,
    title: "Deep Catalog Exploration",
    description: "Go beyond popular tracks. Our database surface underground gems and rare recordings from the global music catalog.",
    span: "lg:col-span-2 lg:row-span-2",
    img: "https://images.unsplash.com/photo-1720962158812-d16549f1e5a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwbXVzaWMlMjB3YXZlZm9ybXMlMjBkYXRhfGVufDF8fHx8MTc3MTY0ODM4M3ww"
  },
  {
    icon: <BarChart3 className="w-5 h-5 text-pink-400" />,
    title: "Acoustic Matching",
    description: "NeuralSound™ analyzes timbre, rhythm, and emotion to find tracks that truly sound like your favorites.",
    span: "lg:col-span-1 lg:row-span-1",
    img: "https://images.unsplash.com/photo-1654788741550-0c5945c9891e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMGdsYXNzJTIwY2FyZCUyMGFic3RyYWN0JTIwM2R8ZW58MXx8fHwxNzcxNjQ4MzgzfDA"
  },
  {
    icon: <Zap className="w-5 h-5 text-orange-400" />,
    title: "Curated Rare Finds",
    description: "We focus on low-exposure, high-quality music that other algorithms overlook.",
    span: "lg:col-span-1 lg:row-span-1"
  },
  {
    icon: <Brain className="w-5 h-5 text-blue-400" />,
    title: "Mood Profiling",
    description: "Analyze the emotional trajectory of your samples to build the perfect soundscape for your state of mind.",
    span: "lg:col-span-1 lg:row-span-2",
    img: "https://images.unsplash.com/photo-1632249309348-3b528c450fcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwdGVjaCUyMGxvZ29zJTIwd2hpdGUlMjBvbiUyMGJsYWNrfGVufDF8fHx8MTc3MTY0ODM4M3ww"
  },
  {
    icon: <Share2 className="w-5 h-5 text-green-400" />,
    title: "Smart Exports",
    description: "Export your niche finds directly to your favorite streaming service or share via unified links.",
    span: "lg:col-span-2 lg:row-span-2"
  }
];

export function Features() {
  return (
    <section id="features" className="py-32 bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-24">
          <Motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] font-bold uppercase tracking-[0.4em] text-purple-400 mb-6 block"
          >
            Core Engine
          </Motion.span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
            The Excitement <br /> Of Discovery
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
            While others play only what's popular, we find what's for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-auto gap-6">
          {features.map((feature, index) => (
            <Motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${feature.span} group relative overflow-hidden rounded-[24px] border border-white/10 bg-zinc-950 p-8 flex flex-col justify-between hover:border-white/20 transition-all`}
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 blur-[50px] group-hover:bg-purple-500/10 transition-colors"></div>
              
              <div className="relative z-10">
                <div className="mb-6 p-2 rounded-lg bg-white/5 w-fit border border-white/5">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold tracking-tight mb-4">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  {feature.description}
                </p>
              </div>

              {feature.img ? (
                <div className="relative h-48 mt-4 rounded-xl overflow-hidden border border-white/5">
                  <ImageWithFallback 
                    src={feature.img}
                    alt={feature.title}
                    className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent"></div>
                </div>
              ) : (
                <div className="mt-8 flex gap-2">
                  <div className="h-1 flex-1 bg-white/5 rounded-full overflow-hidden">
                    <Motion.div 
                      initial={{ x: "-100%" }}
                      whileInView={{ x: "0%" }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full w-full bg-gradient-to-r from-purple-500 to-pink-500" 
                    />
                  </div>
                  <div className="h-1 flex-1 bg-white/5 rounded-full"></div>
                  <div className="h-1 flex-1 bg-white/5 rounded-full"></div>
                </div>
              )}
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
