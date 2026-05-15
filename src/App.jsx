import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Games from './components/Games';
import Offers from './components/Offers';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import TawkTo from './components/TawkTo';

function App() {
  const { currentUser, logout } = useAuth();
  const [authModal, setAuthModal] = useState(null);
  const [showProfile, setShowProfile] = useState(false);

  const openLogin = () => setAuthModal('login');
  const openSignup = () => setAuthModal('signup');
  const closeModal = () => setAuthModal(null);
  const openProfile = () => {
    setShowProfile(true);
    closeModal();
  };
  const handleLogout = async () => {
    await logout();
    setShowProfile(false);
    closeModal();
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen relative">
      <TawkTo />
      <Header
        currentUser={currentUser}
        onOpenLogin={openLogin}
        onOpenSignup={openSignup}
        onLogout={handleLogout}
        onOpenProfile={openProfile}
      />
      <Hero onCTAClick={openSignup} />
      <Games />
      <Offers />
      <Footer />

      {authModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 px-4 py-6 popup-backdrop">
          <div className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-slate-950/85 neon-glow popup-panel">
            <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.22),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.2),transparent_30%)]" />
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 rounded-full bg-slate-900/90 px-3 py-2 text-lg text-slate-200 transition hover:bg-slate-800"
            >
              ✕
            </button>

            {authModal === 'login' ? (
              <Login onClose={closeModal} switchToSignup={() => setAuthModal('signup')} />
            ) : (
              <Signup onClose={closeModal} switchToLogin={() => setAuthModal('login')} />
            )}
          </div>
        

      {showProfile && currentUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 px-4 py-6 popup-backdrop">
          <div className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-slate-950/85 neon-glow popup-panel max-h-[90vh] overflow-y-auto">
            <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.22),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.2),transparent_30%)]" />
            <button
              onClick={() => setShowProfile(false)}
              className="absolute right-4 top-4 rounded-full bg-slate-900/90 px-3 py-2 text-lg text-slate-200 transition hover:bg-slate-800"
            >
              ✕
            </button>
            <Profile onClose={() => setShowProfile(false)} />
          </div>
        </div>
      )}</div>
      )}
    </div>
  );
}

export default App;