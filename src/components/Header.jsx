import React from 'react';

const Header = ({ currentUser, onOpenLogin, onOpenSignup, onLogout }) => {
  return (
    <header className="bg-slate-950/95 border-b border-slate-800 sticky top-0 z-50 backdrop-blur-xl shadow-[0_24px_120px_-70px_rgba(0,0,0,0.8)]">
      <nav className="container mx-auto flex flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <div className="rounded-3xl border border-cyan-400/20 bg-slate-900/80 px-5 py-3 text-xl font-black tracking-[0.28em] text-white shadow-[0_0_30px_rgba(34,211,238,0.15)]">PLAYING BAR</div>
          <span className="inline-flex rounded-full border border-violet-500/15 bg-violet-500/10 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-violet-200">Est.2023</span>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-slate-300">
          <a href="#games" className="rounded-full px-4 py-2 text-sm font-medium transition hover:bg-slate-800/90 hover:text-white">Games</a>
          <a href="#offers" className="rounded-full px-4 py-2 text-sm font-medium transition hover:bg-slate-800/90 hover:text-white">Offers</a>
          {currentUser ? (
            <>
              <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-200">{currentUser.displayName || currentUser.email}</span>
              <button onClick={onLogout} className="rounded-full bg-rose-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-rose-400">Logout</button>
            </>
          ) : (
            <>
              <button onClick={onOpenLogin} className="rounded-full border border-cyan-500 bg-slate-900 px-5 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-500/10">Login</button>
              <button onClick={onOpenSignup} className="rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:from-cyan-300 hover:via-blue-300 hover:to-violet-400">Sign Up</button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;