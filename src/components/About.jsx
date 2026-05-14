import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-950">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm uppercase tracking-[0.36em] text-cyan-400/80">About the arena</p>
        <h2 className="mt-3 text-4xl font-bold text-white">Playing Bar is built for serious gamers</h2>
        <p className="mx-auto mt-6 max-w-2xl text-slate-400 text-lg">We bring together cutting-edge titles, fast-paced events, and a premium interface that keeps thousands of players coming back every day.</p>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="rounded-[1.5rem] border border-slate-800 bg-slate-900/90 p-8 shadow-lg shadow-slate-950/20">
            <h3 className="text-xl font-semibold text-white">High Performance</h3>
            <p className="mt-3 text-slate-400">Optimized static delivery and lightweight UI for flawless performance.</p>
          </div>
          <div className="rounded-[1.5rem] border border-slate-800 bg-slate-900/90 p-8 shadow-lg shadow-slate-950/20">
            <h3 className="text-xl font-semibold text-white">Premium Curation</h3>
            <p className="mt-3 text-slate-400">Only the best games with bold visuals and immersive design.</p>
          </div>
          <div className="rounded-[1.5rem] border border-slate-800 bg-slate-900/90 p-8 shadow-lg shadow-slate-950/20">
            <h3 className="text-xl font-semibold text-white">Live Support</h3>
            <p className="mt-3 text-slate-400">Tawk.to chat built in, so players get instant help 24/7.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;