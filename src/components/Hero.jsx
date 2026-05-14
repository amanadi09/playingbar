import React from 'react';

const Hero = ({ onCTAClick }) => {
  const gameNames = [
    'VBlink',
    'Ultra Panda',
    'Golden Treasure',
    'E-Game',
    'Orion Stars',
    'Fire Kirin',
    'Panda Master',
    'Blue Dragon',
    'Juwa City',
    'Juwa 2.0',
    'Galaxy World',
    'Game Room',
    'Milky Way',
    'Cash Machine',
    'Game Vault',
    'Riversweeps',
  ];

  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.22),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.22),transparent_32%)]" />
      <div className="relative z-10 container mx-auto px-6 text-center">
        <p className="mb-6 text-sm uppercase tracking-[0.36em] text-cyan-300/80">Premium gaming arena</p>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white">Play. Compete. Dominate.</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">A bold gaming destination with high-impact cards, fast live updates, and a neon cybercore style for serious players.</p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button onClick={onCTAClick} className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-8 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-950 shadow-[0_24px_80px_-32px_rgba(56,189,248,0.45)] transition hover:shadow-[0_24px_100px_-28px_rgba(168,85,247,0.45)]">Create Account</button>
          <a href="#games" className="inline-flex items-center justify-center rounded-full border border-slate-700 px-8 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-200 hover:border-slate-500 hover:text-white transition">Explore Games</a>
        </div>
      </div>
      <div className="mt-16 mx-auto max-w-5xl overflow-hidden rounded-full border border-slate-800 bg-slate-950/80 shadow-2xl shadow-slate-950/60">
        <div className="animate-marquee whitespace-nowrap py-5">
          {gameNames.map((name, index) => (
            <span key={index} className="inline-flex items-center px-8 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300 border-r border-slate-800 last:border-r-0">{name}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;