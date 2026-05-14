import React, { useState } from 'react';
import { useAuth } from '../AuthContext';

const Signup = ({ onClose, switchToLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const { signup } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password, displayName, phoneNumber);
      localStorage.setItem('phoneNumber', phoneNumber);
      onClose();
    } catch (error) {
      console.error('Signup error:', error);
      setError('Failed to create account: ' + error.message);
    }
  };

  return (
    <div className="p-8 sm:p-10">
      <div className="mb-6 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Create your profile</p>
        <h2 className="mt-4 text-3xl font-bold text-white">Sign up for access</h2>
        <p className="mt-3 text-sm text-slate-400">Join now and let our agents recognize you instantly in chat.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {error && <p className="rounded-3xl border border-rose-500/20 bg-rose-500/10 p-3 text-sm text-rose-200">{error}</p>}
        <div className="rounded-[1.75rem] border border-slate-800 bg-slate-900/80 p-4 shadow-[0_0_45px_rgba(168,85,247,0.12)]">
          <div className="mb-4">
            <label className="mb-2 block text-sm font-medium text-slate-300">Name</label>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="w-full rounded-3xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="mb-2 block text-sm font-medium text-slate-300">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-3xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="mb-2 block text-sm font-medium text-slate-300">Phone Number</label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full rounded-3xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400"
              required
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-3xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400"
              required
            />
          </div>
        </div>
        <button type="submit" className="w-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-950 shadow-[0_18px_70px_-34px_rgba(56,189,248,0.85)] transition hover:scale-[1.01] hover:shadow-[0_22px_90px_-34px_rgba(168,85,247,0.65)]">
          Sign Up
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-slate-400">
        Already have an account?{' '}
        <button type="button" onClick={switchToLogin} className="font-semibold text-cyan-300 hover:text-cyan-200">
          Login
        </button>
      </p>
    </div>
  );
};

export default Signup;