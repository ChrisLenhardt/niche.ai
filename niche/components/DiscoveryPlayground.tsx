import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Music, Play, Heart, Share2, Sparkles, Wand2, Activity } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const nicheRecommendations = [
  {
    id: 1,
    title: "Celestial Drift",
    artist: "Aether Pulse",
    genre: "Ambient Post-Glitch",
    match: "98%",
    img: "https://images.unsplash.com/photo-1767915346316-fd7a44868818?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG5ldXJhbCUyMG5ldHdvcmslMjBkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhcmt8ZW58MXx8fHwxNzcxNjQ4MzgzfDA"
  },
  {
    id: 2,
    title: "Neon Folklore",
    artist: "Synth Weaver",
    genre: "Cyber-Folk",
    match: "94%",
    img: "https://images.unsplash.com/photo-1646206346896-14367dee001b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpZSUyMG11c2ljaWFuJTIwbmVvbiUyMHN0dWRpbyUyMGFlc3RoZXRpY3xlbnwxfHx8fDE3NzE2NDg3Njh8MA"
  },
  {
    id: 3,
    title: "Kinetics",
    artist: "Modular Ghost",
    genre: "IDM / Braindance",
    match: "91%",
    img: "https://images.unsplash.com/photo-1705152258253-b76a18f38ec1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleHBlcmltZW50YWwlMjBzeW50aCUyMHBsYXllciUyMGRhcmt8ZW58MXx8fHwxNzcxNjQ4NzY4fDA"
  }
];

export function DiscoveryPlayground() {
  const [query, setQuery] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;
    
    setIsAnalyzing(true);
    setShowResults(false);
    
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 2500);
  };

  return (
    <section className="py-32 bg-black border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-400 mb-6"
          >
            <Sparkles className="w-3 h-3 text-purple-400" />
            NeuralSound™ Engine
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Discover your next <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">niche obsession</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Provide a sample track or artist you love. Our neural engine analyzes the acoustic genome to find hidden gems that match your unique frequency.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-20">
          <form onSubmit={handleSearch} className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-focus-within:blur-2xl transition-all duration-500 opacity-50 group-focus-within:opacity-100"></div>
            <div className="relative flex items-center bg-zinc-900 border border-white/10 rounded-2xl p-2 focus-within:border-white/20 transition-all">
              <div className="pl-6 text-zinc-500">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Paste a Spotify link or type an artist name..."
                className="w-full bg-transparent border-none focus:ring-0 text-white px-4 py-4 text-lg placeholder:text-zinc-600 font-light"
              />
              <button 
                type="submit"
                disabled={isAnalyzing}
                className="bg-white text-black font-bold px-8 py-4 rounded-xl hover:bg-zinc-200 transition-all active:scale-95 disabled:opacity-50 flex items-center gap-2"
              >
                {isAnalyzing ? (
                  <>
                    <Activity className="w-4 h-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    Analyze
                    <Wand2 className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        <div className="min-h-[400px]">
          {isAnalyzing && (
            <motion.div 
              key="analyzing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-20"
            >
              <div className="relative w-32 h-32 mb-8">
                 <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-dashed border-purple-500/30 rounded-full"
                 />
                 <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-2 border border-pink-500/20 rounded-full"
                 />
                 <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl shadow-purple-500/20">
                     <Music className="w-6 h-6 text-black animate-pulse" />
                   </div>
                 </div>
              </div>
              <div className="text-center space-y-2">
                <p className="font-mono text-xs uppercase tracking-[0.4em] text-zinc-500">Deconstructing Acoustic Vectors</p>
                <p className="text-zinc-400 font-light">Mapping genre intersections for "{query}"</p>
              </div>
            </motion.div>
          )}

          {showResults && (
            <motion.div 
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {nicheRecommendations.map((track, index) => (
                <motion.div
                  key={track.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-zinc-900/40 border border-white/5 rounded-3xl p-6 hover:bg-zinc-900 transition-all hover:border-white/10"
                >
                  <div className="relative aspect-square rounded-2xl overflow-hidden mb-6">
                    <ImageWithFallback 
                      src={track.img}
                      alt={track.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all"></div>
                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-[10px] font-bold text-purple-400 uppercase tracking-widest">
                      {track.match} Match
                    </div>
                    <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl transform scale-90 group-hover:scale-100 transition-transform">
                        <Play className="w-6 h-6 text-black fill-current translate-x-0.5" />
                      </div>
                    </button>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">{track.title}</h4>
                    <p className="text-zinc-400 text-sm mb-4">{track.artist} • {track.genre}</p>
                    <div className="flex items-center justify-between border-t border-white/5 pt-4">
                      <div className="flex gap-4">
                        <button className="text-zinc-500 hover:text-pink-500 transition-colors">
                          <Heart className="w-4 h-4" />
                        </button>
                        <button className="text-zinc-500 hover:text-white transition-colors">
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>
                      <button className="text-[11px] font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
