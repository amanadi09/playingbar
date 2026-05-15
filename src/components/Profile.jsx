import React, { useState } from 'react';
import { useAuth } from '../AuthContext';

const Profile = ({ onClose }) => {
  const { currentUser, changePassword } = useAuth();
  const [showPasswordChange, setShowPasswordChange] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordSuccess, setPasswordSuccess] = useState('');
  const phoneNumber = localStorage.getItem('phoneNumber') || 'Not provided';

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setPasswordError('');
    setPasswordSuccess('');

    if (newPassword.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      return;
    }

    if (newPassword !== confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }

    try {
      await changePassword(newPassword);
      setPasswordSuccess('Password updated successfully!');
      setTimeout(() => {
        setShowPasswordChange(false);
        setNewPassword('');
        setConfirmPassword('');
        setPasswordSuccess('');
      }, 2000);
    } catch (error) {
      console.error('Password change error:', error);
      setPasswordError('Error: ' + error.message);
    }
  };

  return (
    <div className="p-8 sm:p-10">
      {!showPasswordChange ? (
        <>
          <div className="mb-8 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Account Details</p>
            <h2 className="mt-4 text-3xl font-bold text-white">Your Profile</h2>
          </div>

          <div className="space-y-4">
            {/* User Name */}
            <div className="rounded-[1.75rem] border border-slate-800 bg-slate-900/80 p-6 shadow-[0_0_45px_rgba(56,189,248,0.12)]">
              <p className="text-sm font-medium text-slate-400">Full Name</p>
              <p className="mt-2 text-lg font-semibold text-white">{currentUser?.displayName || 'Not provided'}</p>
            </div>

            {/* Email */}
            <div className="rounded-[1.75rem] border border-slate-800 bg-slate-900/80 p-6 shadow-[0_0_45px_rgba(56,189,248,0.12)]">
              <p className="text-sm font-medium text-slate-400">Email Address</p>
              <p className="mt-2 text-lg font-semibold text-white break-all">{currentUser?.email}</p>
            </div>

            {/* Phone Number */}
            <div className="rounded-[1.75rem] border border-slate-800 bg-slate-900/80 p-6 shadow-[0_0_45px_rgba(56,189,248,0.12)]">
              <p className="text-sm font-medium text-slate-400">Phone Number</p>
              <p className="mt-2 text-lg font-semibold text-white">{phoneNumber}</p>
            </div>
          </div>

          <button
            onClick={() => setShowPasswordChange(true)}
            className="mt-8 w-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-950 shadow-[0_18px_70px_-34px_rgba(56,189,248,0.85)] transition hover:scale-[1.01] hover:shadow-[0_22px_90px_-34px_rgba(168,85,247,0.65)]"
          >
            Update Password
          </button>
        </>
      ) : (
        <>
          <div className="mb-8 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Security</p>
            <h2 className="mt-4 text-3xl font-bold text-white">Change Password</h2>
            <p className="mt-3 text-sm text-slate-400">Enter a new password for your account.</p>
          </div>

          <form onSubmit={handlePasswordChange} className="space-y-5">
            {passwordError && (
              <p className="rounded-3xl border border-rose-500/20 bg-rose-500/10 p-3 text-sm text-rose-200">
                {passwordError}
              </p>
            )}
            {passwordSuccess && (
              <p className="rounded-3xl border border-green-500/20 bg-green-500/10 p-3 text-sm text-green-200">
                {passwordSuccess}
              </p>
            )}
            <div className="rounded-[1.75rem] border border-slate-800 bg-slate-900/80 p-4 shadow-[0_0_45px_rgba(56,189,248,0.12)]">
              <div className="mb-4">
                <label className="mb-2 block text-sm font-medium text-slate-300">New Password</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full rounded-3xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400"
                  required
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">Confirm Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full rounded-3xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-950 shadow-[0_18px_70px_-34px_rgba(56,189,248,0.85)] transition hover:scale-[1.01] hover:shadow-[0_22px_90px_-34px_rgba(168,85,247,0.65)]"
            >
              Update Password
            </button>
          </form>

          <button
            type="button"
            onClick={() => {
              setShowPasswordChange(false);
              setNewPassword('');
              setConfirmPassword('');
              setPasswordError('');
              setPasswordSuccess('');
            }}
            className="mt-6 w-full rounded-full border border-slate-700 bg-slate-900/80 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-300 transition hover:bg-slate-800"
          >
            Back to Profile
          </button>
        </>
      )}
    </div>
  );
};

export default Profile;
