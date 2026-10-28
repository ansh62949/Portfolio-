import { useState, useEffect } from 'react';
import { useDesktopStore } from '../store/desktopStore';

export const useReducedMotion = () => {
  const storeReducedMotion = useDesktopStore((state) => state.reducedMotion);
  const [systemReducedMotion, setSystemReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setSystemReducedMotion(mediaQuery.matches);

    const handler = (event) => setSystemReducedMotion(event.matches);
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handler);
      return () => mediaQuery.removeEventListener('change', handler);
    } else {
      mediaQuery.addListener(handler);
      return () => mediaQuery.removeListener(handler);
    }
  }, []);

  return storeReducedMotion || systemReducedMotion;
};
