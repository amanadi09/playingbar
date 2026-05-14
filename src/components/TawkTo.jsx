import { useEffect } from 'react';
import { useAuth } from '../AuthContext';

const TawkTo = () => {
  const { currentUser } = useAuth();

  useEffect(() => {
    if (!currentUser) return;

    const setVisitorAttributes = () => {
      if (window?.Tawk_API?.setAttributes) {
        const phoneNumber = localStorage.getItem('phoneNumber') || '';
        window.Tawk_API.setAttributes({
          name: currentUser.displayName || currentUser.email || 'Guest',
          email: currentUser.email || '',
          phone: phoneNumber,
        });
        return true;
      }
      return false;
    };

    if (setVisitorAttributes()) {
      return;
    }

    const intervalId = window.setInterval(() => {
      if (setVisitorAttributes()) {
        window.clearInterval(intervalId);
      }
    }, 500);

    return () => window.clearInterval(intervalId);
  }, [currentUser]);

  return null;
};

export default TawkTo;