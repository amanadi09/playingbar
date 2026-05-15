import { useEffect } from 'react';
import { useAuth } from '../AuthContext';

const TawkTo = () => {
  const { currentUser } = useAuth();

  useEffect(() => {
    const phoneNumber = localStorage.getItem('phoneNumber') || '';

    const setVisitorAttributes = () => {
      if (window?.Tawk_API?.setAttributes) {
        window.Tawk_API.setAttributes({
          name: currentUser?.displayName || currentUser?.email || 'Guest',
          email: currentUser?.email || '',
          phone: phoneNumber,
          game: window.__pendingTawkGame || '',
        });
        return true;
      }
      return false;
    };

    const openGameChat = (gameTitle) => {
      window.__pendingTawkGame = gameTitle;
      if (window?.Tawk_API?.maximize) {
        window.Tawk_API.maximize();
      }
      if (window?.Tawk_API?.setAttributes) {
        window.Tawk_API.setAttributes({
          name: currentUser?.displayName || currentUser?.email || 'Guest',
          email: currentUser?.email || '',
          phone: phoneNumber,
          game: gameTitle,
        });
      }
    };

    window.openTawkGameChat = openGameChat;

    if (setVisitorAttributes()) {
      return;
    }

    const intervalId = window.setInterval(() => {
      if (setVisitorAttributes()) {
        if (window.__pendingTawkGame) {
          openGameChat(window.__pendingTawkGame);
        }
        window.clearInterval(intervalId);
      }
    }, 500);

    return () => window.clearInterval(intervalId);
  }, [currentUser]);

  return null;
};

export default TawkTo;