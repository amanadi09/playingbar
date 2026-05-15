import React, { useState } from 'react';
import { useAuth } from '../AuthContext';

const Login = ({ onClose, switchToSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotMessage, setForgotMessage] = useState('');
  const { login, sendPasswordReset } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      onClose();
    } catch (error) {
      console.error('Login error:', error);
      setError('Failed to log in: ' + error.message);
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordReset(forgotEmail);
      setForgotMessage('Password reset email sent! Check your inbox.');
      setTimeout(() => {
        setShowForgotPassword(false);
        setForgotEmail('');
        setForgotMessage('');
      }, 3000);
    } catch (error) {
      console.error('Password reset error:', error);
      setForgotMessage('Error: ' + error.message);
    }
  };

  return (
    <div className="p-8 sm:p-10">
      {!showForgotPassword ? (
        <>
          <div className="mb-6 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Welcome back</p>
            <h2 className="mt-4 text-3xl font-bold text-white">Login to your account</h2>
            <p className="mt-3 text-sm text-slate-400">Get connected with your gaming community in seconds.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {error && <p className="rounded-3xl border border-rose-500/20 bg-rose-500/10 p-3 text-sm text-rose-200">{error}</p>}
            <div className="rounded-[1.75rem] border border-slate-800 bg-slate-900/80 p-4 shadow-[0_0_45px_rgba(56,189,248,0.12)]">
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
              Login
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-slate-400">
            <button type="button" onClick={() => setShowForgotPassword(true)} className="font-semibold text-cyan-300 hover:text-cyan-200">
              Forgot password?
            </button>
          </p>

          <p className="mt-6 text-center text-sm text-slate-400">
            New here?{' '}
            <button type="button" onClick={switchToSignup} className="font-semibold text-cyan-300 hover:text-cyan-200">
              Create an account
            </button>
          </p>
        </>
      ) : (
        <>
          <div className="mb-6 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Reset Password</p>
            <h2 className="mt-4 text-3xl font-bold text-white">Recover your account</h2>
            <p className="mt-3 text-sm text-slate-400">Enter your email and we'll send you a password reset link.</p>
          </div>

          <form onSubmit={handleForgotPassword} className="space-y-5">
            {forgotMessage && (
              <p className={`rounded-3xl border p-3 text-sm ${
                forgotMessage.includes('sent')
                  ? 'border-green-500/20 bg-green-500/10 text-green-200'
                  : 'border-rose-500/20 bg-rose-500/10 text-rose-200'
              }`}>
                {forgotMessage}
              </p>
            )}
            <div className="rounded-[1.75rem] border border-slate-800 bg-slate-900/80 p-4 shadow-[0_0_45px_rgba(56,189,248,0.12)]">
              <label className="mb-2 block text-sm font-medium text-slate-300">Email</label>
              <input
                type="email"
                value={forgotEmail}
                onChange={(e) => setForgotEmail(e.target.value)}
                className="w-full rounded-3xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400"
                required
              />
            </div>
            <button type="submit" className="w-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-950 shadow-[0_18px_70px_-34px_rgba(56,189,248,0.85)] transition hover:scale-[1.01] hover:shadow-[0_22px_90px_-34px_rgba(168,85,247,0.65)]">
              Send Reset Link
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-400">
            <button type="button" onClick={() => setShowForgotPassword(false)} className="font-semibold text-cyan-300 hover:text-cyan-200">
              Back to login
            </button>
          </p>
        </>
      )}
    </div>
  );
};

export default Login;