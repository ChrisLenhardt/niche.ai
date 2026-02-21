import React from 'react';

const logos = [
  "Spotify",
  "Apple Music",
  "Tidal",
  "SoundCloud",
  "Warner Music",
  "Universal",
  "Sony Music"
];

export function Logos() {
  return (
    <div className="py-12 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.4em] text-gray-500 mb-10">
          Powering the Next Generation of Music Data
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 hover:opacity-100 transition-opacity">
          {logos.map((logo) => (
            <span key={logo} className="text-xl font-bold tracking-tight text-white whitespace-nowrap grayscale brightness-200">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
