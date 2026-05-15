import React, { useRef } from 'react';

const Games = () => {
  const carouselRef = useRef(null);
  const games = [
    { title: 'VBlink', tag: 'Slots', desc: 'Battle through cybernetic strongholds.', img: '/games/vblink.png' },
    { title: 'Ultra Panda', tag: 'Fishing', desc: 'Slide through neon streets at extreme speed.', img: '/games/ultrapanda.png' },
    { title: 'Golden Treasure', tag: 'Fishing', desc: 'Command fleets in a cosmic warfare zone.', img: '/games/goldentreasure.png' },
    { title: 'E-Game', tag: 'New Age', desc: 'Fast-action fights in a crimson-lit arena.', img: '/games/egame.png' },
    { title: 'Orion Stars', tag: 'Slot', desc: 'Dash through voids and collect rare power shards.', img: '/games/orionstars.jpeg' },
    { title: 'Fire Kirin', tag: 'Fighter', desc: 'Face off in brutal cyberpunk duels.', img: '/games/firekirin.jpeg' },
    { title: 'Panda Master', tag: 'Action', desc: 'Smash through titans on the frontline.', img: '/games/pandamaster.jpeg' },
    { title: 'Blue Dragon', tag: 'Adventure', desc: 'Lead the raid and rise from the ashes.', img: '/games/bluedragon.jpeg' },
    { title: 'Juwa City', tag: 'Stealth', desc: 'Infiltrate unseen with elite spy systems.', img: '/games/juwacity.png' },
    { title: 'Juwa 2.0', tag: 'Battle', desc: 'Chaos matches inside a twisting vortex.', img: '/games/juwa-2.0.png' },
    { title: 'Galaxy World', tag: 'Survival', desc: 'Survive waves while echoes hunt you down.', img: '/games/galaxy-world.png' },
    { title: 'Game Room', tag: 'Adventure', desc: 'Slice through horizons with precision blades.', img: '/games/gameroom.png' },
    { title: 'Milky Way', tag: 'Shooter', desc: 'Shoot under lunar skies in high-impact missions.', img: '/games/milky-way.png' },
    { title: 'Cash Machine', tag: 'Puzzle', desc: 'Solve next-level puzzles in a neon nexus.', img: '/games/cash-machine.png' },
    { title: 'Game Vault', tag: 'Slots', desc: 'Unlock secrets in a vault of endless games.', img: '/games/game-vault.png' },
    { title: 'Riversweeps', tag: 'Strategy', desc: 'Control the flow in a river of endless battles.', img: '/games/riversweeps.png' },
  ];

  const openTawkGameChat = (gameTitle) => {
    if (typeof window === 'undefined') return;

    window.__pendingTawkGame = gameTitle;

    if (window.openTawkGameChat) {
      window.openTawkGameChat(gameTitle);
    } else if (window?.Tawk_API?.maximize) {
      window.Tawk_API.maximize();
    }
  };

  return (
    <section id="games" className="py-16 md:py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <p className="text-xs md:text-sm uppercase tracking-[0.36em] text-cyan-400/80">Featured collection</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">Epic Game Experiences</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm md:text-base text-slate-400">High-energy games designed for serious players and fast competition.</p>
        </div>

        {/* Mobile: 2 Column Vertical Grid */}
        <div className="grid md:hidden grid-cols-2 gap-4">
          {games.map((game, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/90 shadow-2xl shadow-slate-950/40 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <img src={game.img} alt={game.title} className="h-32 w-full object-cover" />
              <div className="p-3 relative">
                <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2 py-0.5 text-xs uppercase tracking-[0.2em] text-cyan-300">{game.tag}</span>
                <h3 className="mt-2 text-sm font-semibold text-white truncate">{game.title}</h3>
                <p className="mt-1 text-xs text-slate-400 line-clamp-1">{game.desc}</p>
                <button onClick={() => openTawkGameChat(game.title)} type="button" className="mt-3 w-full rounded-full bg-cyan-500 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-slate-950 transition hover:bg-cyan-400">Play Now</button>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <div key={index} className="group relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/90 shadow-2xl shadow-slate-950/40 transition-transform duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <img src={game.img} alt={game.title} className="h-56 w-full object-cover" />
              <div className="p-6 relative">
                <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.28em] text-cyan-300">{game.tag}</span>
                <h3 className="mt-4 text-2xl font-semibold text-white">{game.title}</h3>
                <p className="mt-3 text-slate-400">{game.desc}</p>
                <button onClick={() => openTawkGameChat(game.title)} type="button" className="mt-6 inline-flex items-center rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-slate-950 transition hover:bg-cyan-400">Play Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Games;