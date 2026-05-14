import React from 'react';

const Hero = ({ onCTAClick }) => {
  const games = [
    { title: 'VBlink', img: '/games/vblink.png' },
    { title: 'Ultra Panda', img: '/games/ultrapanda.png' },
    { title: 'Golden Treasure', img: '/games/goldentreasure.png' },
    { title: 'E-Game', img: '/games/egame.png' },
    { title: 'Orion Stars', img: '/games/orionstars.jpeg' },
    { title: 'Fire Kirin', img: '/games/firekirin.jpeg' },
    { title: 'Panda Master', img: '/games/pandamaster.jpeg' },
    { title: 'Blue Dragon', img: '/games/bluedragon.jpeg' },
    { title: 'Juwa City', img: '/games/juwacity.png' },
    { title: 'Juwa 2.0', img: '/games/juwa-2.0.png' },
    { title: 'Galaxy World', img: '/games/galaxy-world.png' },
    { title: 'Game Room', img: '/games/gameroom.png' },
    { title: 'Milky Way', img: '/games/milky-way.png' },
    { title: 'Cash Machine', img: '/games/cash-machine.png' },
    { title: 'Game Vault', img: '/games/game-vault.png' },
    { title: 'Riversweeps', img: '/games/riversweeps.png' },
  ];

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.22),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.22),transparent_32%)]" />
      <div className="relative z-10 container mx-auto px-6 text-center">
        <p className="mb-8 text-xs md:text-sm uppercase tracking-[0.36em] text-cyan-300/80">Explore our platform</p>
        
        {/* Featured Moving Game Card Banner */}
        <div className="mx-auto mb-12 max-w-full overflow-hidden rounded-2xl md:rounded-[2rem] border border-cyan-400/20 bg-slate-950/80 shadow-[0_0_60px_rgba(56,189,248,0.2)] neon-glow py-6">
          <div className="animate-marquee whitespace-nowrap flex gap-6 px-8">
            {games.map((game, index) => (
              <div key={index} className="flex-shrink-0 relative group rounded-xl overflow-hidden w-48 md:w-56 h-40 md:h-48 border border-slate-700/50 shadow-lg hover:border-cyan-400/50 transition-all duration-300">
                <img
                  src={game.img}
                  alt={game.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                  <p className="font-bold text-sm md:text-base text-white truncate">{game.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white">Your favorite games in one place</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm md:text-base text-slate-300">Fast live updates, high-impact gameplay, and a neon cybercore experience.</p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button onClick={onCTAClick} className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-8 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-950 shadow-[0_24px_80px_-32px_rgba(56,189,248,0.45)] transition hover:shadow-[0_24px_100px_-28px_rgba(168,85,247,0.45)]">Create Account</button>
          <a href="#games" className="inline-flex items-center justify-center rounded-full border border-slate-700 px-8 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-200 hover:border-slate-500 hover:text-white transition">Explore Games</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;