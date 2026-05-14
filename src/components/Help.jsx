import React from 'react';

const Help = () => {
  return (
    <section id="help" className="py-20 bg-slate-900 text-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.36em] text-cyan-400/80">Join the crew</p>
            <h2 className="mt-3 text-4xl font-bold text-white">Help us build the ultimate gaming hub</h2>
            <p className="mt-6 max-w-xl text-slate-400 text-lg">Share feedback, invite friends, or join our community to shape the next wave of exclusive releases.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#" className="inline-flex items-center rounded-full border border-slate-700 bg-slate-950/90 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300">Share Feedback</a>
              <a href="#" className="inline-flex items-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">Join Community</a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="rounded-[1.5rem] border border-slate-800 bg-slate-950/90 p-6 shadow-lg shadow-slate-950/20">
              <h3 className="text-xl font-semibold text-white">Live chat support</h3>
              <p className="mt-3 text-slate-400">Players can get support instantly with Tawk.to.</p>
            </div>
            <div className="rounded-[1.5rem] border border-slate-800 bg-slate-950/90 p-6 shadow-lg shadow-slate-950/20">
              <h3 className="text-xl font-semibold text-white">Community rewards</h3>
              <p className="mt-3 text-slate-400">Help us grow and earn exclusive in-game bonuses.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Help;