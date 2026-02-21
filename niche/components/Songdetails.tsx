'use client'
import React from 'react';
import { motion } from 'motion/react';
import { 
  Play, 
  Heart, 
  Share2, 
  ArrowLeft, 
  Activity, 
  Terminal,
  Disc,
  ChevronRight
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface SongDetailsProps {
  id: string;
  onNavigate: (page: 'home' | 'discover' | 'support' | 'song', id?: string) => void;
}

// Mock data for the demonstration
const songDatabase = [
  {
    id: "1",
    title: "Celestial Drift",
    artist: "Aether Pulse",
    genre: "Ambient Post-Glitch",
    match: "98%",
    bpm: "84",
    key: "F# Minor",
    duration: "6:42",
    description: "A sprawling soundscape that blends organic textures with digital degradation. 'Celestial Drift' explores the intersection of celestial phenomena and granular synthesis, creating a weightless environment for the listener.",
    technicalInfo: "Encoded with 32-bit floating point precision. Spectral density peaks at 4kHz, maintaining a wide stereo image through mid-side processing and spatial jitter algorithms.",
    img: "https://images.unsplash.com/photo-1767915346316-fd7a44868818?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG5ldXJhbCUyMG5ldHdvcmslMjBkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhcmt8ZW58MXx8fHwxNzcxNjQ4MzgzfDA"
  },
  {
    id: "2",
    title: "Neon Folklore",
    artist: "Synth Weaver",
    genre: "Cyber-Folk",
    match: "94%",
    bpm: "124",
    key: "C Major",
    duration: "4:15",
    description: "Traditional acoustic arrangements re-imagined through a cyberpunk lens. Neon Folklore features processed mandolins and neural-generated vocal harmonies that bridge the gap between human heritage and digital future.",
    technicalInfo: "Utilizes frequency-modulated oscillators synced to real-time city traffic data. High-pass filters automated by light-level sensors during the recording session.",
    img: "https://images.unsplash.com/photo-1646206346896-14367dee001b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpZSUyMG11c2ljaWFuJTIwbmVvbiUyMHN0dWRpbyUyMGFlc3RoZXRpY3xlbnwxfHx8fDE3NzE2NDg3Njh8MA"
  },
  {
    id: "3",
    title: "Kinetics",
    artist: "Modular Ghost",
    genre: "IDM / Braindance",
    match: "91%",
    bpm: "162",
    key: "D Minor",
    duration: "5:28",
    description: "A high-velocity exploration of rhythmic displacement and harmonic instability. Kinetics is designed to challenge the listener's perception of time through micro-tonal shifts and polyrhythmic drum patterns.",
    technicalInfo: "Generated using a custom-built modular rack. Sequencing logic based on Conway's Game of Life. Dynamic range preserved with zero-latency limiting.",
    img: "https://images.unsplash.com/photo-1705152258253-b76a18f38ec1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleHBlcmltZW50YWwlMjBzeW50aCUyMHBsYXllciUyMGRhcmt8ZW58MXx8fHwxNzcxNjQ4NzY4fDA"
  }
];

export function SongDetails({ id, onNavigate }: SongDetailsProps) {
  const song = songDatabase.find(s => s.id === id) || songDatabase[0];
  const recommendations = songDatabase.filter(s => s.id !== id);

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-20">
      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-600/5 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <a
            href='/discover'
            >
            <button 
            className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-12 group cursor-pointer"
            >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-bold uppercase tracking-widest">Back to Discovery</span>
            </button>
        </a>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24 items-start">
          {/* Cover Art Section */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 group shadow-2xl shadow-purple-500/5 max-w-sm mx-auto lg:mx-0"
            >
              <ImageWithFallback 
                src={song.img}
                alt={song.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <button className="absolute bottom-8 right-8 w-20 h-20 bg-white rounded-full flex items-center justify-center text-black shadow-2xl hover:scale-110 transition-transform active:scale-95 cursor-pointer">
                <Play className="w-8 h-8 fill-current translate-x-1" />
              </button>
            </motion.div>

            <div className="mt-8 flex justify-between items-center px-2">
              <div className="flex gap-6">
                <button className="flex items-center gap-2 text-zinc-400 hover:text-pink-500 transition-colors">
                  <Heart className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-widest">Favorite</span>
                </button>
                <button className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                  <Share2 className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-widest">Share</span>
                </button>
              </div>
              <div className="text-[10px] font-bold text-purple-400 uppercase tracking-[0.2em] px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full">
                {song.match} Neural Match
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="lg:col-span-8 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-500 mb-6">
                <Disc className="w-3 h-3 text-purple-400" />
                Track ID: {song.id.padStart(6, '0')}
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">{song.title}</h1>
              <p className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 font-bold mb-8 italic">
                {song.artist}
              </p>
              
              <div className="space-y-12 mb-12">
                <div>
                  <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-zinc-500 mb-4 flex items-center gap-2">
                    <Activity className="w-4 h-4 text-purple-500" />
                    Neural Breakdown
                  </h3>
                  <p className="text-zinc-400 text-lg leading-relaxed font-light">
                    {song.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-zinc-500 mb-4 flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-purple-500" />
                    Infrastructure Specs
                  </h3>
                  <div className="bg-zinc-900/80 border border-white/5 rounded-2xl p-6 font-mono text-sm text-zinc-400 leading-relaxed">
                    {song.technicalInfo}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-2xl">
                  <span className="block text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-1">BPM</span>
                  <span className="text-lg font-mono font-bold text-white">{song.bpm}</span>
                </div>
                <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-2xl">
                  <span className="block text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-1">Key</span>
                  <span className="text-lg font-mono font-bold text-white">{song.key}</span>
                </div>
                <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-2xl">
                  <span className="block text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-1">Length</span>
                  <span className="text-lg font-mono font-bold text-white">{song.duration}</span>
                </div>
                <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-2xl">
                  <span className="block text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-1">Genre</span>
                  <span className="text-sm font-bold text-white whitespace-nowrap overflow-hidden text-ellipsis">{song.genre}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Similar Recommendations */}
        <section className="pt-24 border-t border-white/5">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2">Neural Proximities</h2>
              <p className="text-zinc-500 text-sm font-light">Top recommendations based on the acoustic genome of {song.title}.</p>
            </div>
            <button 
              onClick={() => onNavigate('discover')} 
              className="hidden sm:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors group cursor-pointer"
            >
              Explore All
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recommendations.map((track, index) => (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-zinc-900/40 border border-white/5 rounded-3xl p-6 hover:bg-zinc-900 transition-all hover:border-white/10"
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-6">
                  <ImageWithFallback 
                    src={track.img}
                    alt={track.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all"></div>
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-[10px] font-bold text-purple-400 uppercase tracking-widest">
                    {track.match} Match
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">{track.title}</h4>
                  <p className="text-zinc-500 text-sm mb-6">{track.artist} • {track.genre}</p>
                  <button 
                    onClick={() => onNavigate('song', track.id)}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl border border-white/5 bg-white/5 hover:bg-white text-[11px] font-bold uppercase tracking-widest text-zinc-500 hover:text-black transition-all cursor-pointer"
                  >
                    Load Specifications
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
