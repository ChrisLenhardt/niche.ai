import React from 'react';
import { Music, Github, Twitter, Linkedin, ArrowRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-zinc-500 border-t border-white/5 pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-16 mb-24">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-white flex items-center justify-center rounded-lg">
                <Music className="w-4 h-4 text-black" />
              </div>
              <span className="text-xl font-bold text-white tracking-tighter italic">
                Niche.ai
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-8 max-w-[200px]">
              Discovering the sounds that define your niche. Powered by high-fidelity neural matching.
            </p>
            <div className="flex space-x-6">
              <Twitter className="w-5 h-5 hover:text-white transition-colors cursor-pointer" />
              <Github className="w-5 h-5 hover:text-white transition-colors cursor-pointer" />
              <Linkedin className="w-5 h-5 hover:text-white transition-colors cursor-pointer" />
            </div>
          </div>
          
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-white mb-10">Discovery</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Neural Engine</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Acoustic Search</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Niche Community</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Rare Finds</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-white mb-10">Company</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-white mb-10">Resources</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Guides</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
            </ul>
          </div>

          <div className="hidden lg:block">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-white mb-10">Status</h4>
            <div className="flex items-center gap-2 text-sm font-medium text-green-500">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
              All Systems Operational
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
          <p>© 2026 Niche.ai Technologies Inc. All rights reserved.</p>
          <div className="flex gap-10 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
