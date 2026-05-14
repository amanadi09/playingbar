import React from 'react';

const Offers = () => {
  return (
    <section id="offers" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.36em] text-cyan-400/80">Limited-time boosts</p>
          <h2 className="mt-3 text-4xl font-bold text-white">Intense offers for high-volume players</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-[2rem] border border-slate-800 bg-slate-950/95 p-8 shadow-2xl shadow-slate-950/40">
            <h3 className="text-3xl font-semibold mb-4 text-white">100% Bonus for New Players</h3>
            <p className="text-slate-400 mb-6">Unlock premium gameplay at half price. New titles drop weekly for our active players.</p>
            <button className="inline-flex items-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-950 transition hover:bg-cyan-400">Claim Offer</button>
          </div>
          <div className="rounded-[2rem] border border-slate-800 bg-slate-950/95 p-8 shadow-2xl shadow-slate-950/40">
            <h3 className="text-3xl font-semibold mb-4 text-white">Free weekend freeplays</h3>
            <p className="text-slate-400 mb-6">Dive into the hottest games for free over the weekend. Perfect for new players and returning champions.</p>
            <button className="inline-flex items-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-950 transition hover:bg-cyan-400">Get Access</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;