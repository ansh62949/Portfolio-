import { useEffect } from 'react';
import { useDesktopStore } from '../store/desktopStore';

export const useKeyboardShortcuts = () => {
  const toggleSpotlight = useDesktopStore((state) => state.toggleSpotlight);
  const toggleAppSwitcher = useDesktopStore((state) => state.toggleAppSwitcher);
  const closeAllOverlays = useDesktopStore((state) => state.closeAllOverlays);
  const isSpotlightOpen = useDesktopStore((state) => state.isSpotlightOpen);
  const isLaunchpadOpen = useDesktopStore((state) => state.isLaunchpadOpen);
  const isControlCenterOpen = useDesktopStore((state) => state.isControlCenterOpen);
  const isAppSwitcherOpen = useDesktopStore((state) => state.isAppSwitcherOpen);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ctrl+K or Cmd+K: Spotlight Search
      if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault();
        toggleSpotlight();
        return;
      }

      // Alt+S: App Switcher
      if (e.altKey && (e.key === 's' || e.key === 'S')) {
        e.preventDefault();
        toggleAppSwitcher();
        return;
      }

      // Escape: Close overlays
      if (e.key === 'Escape') {
        if (isSpotlightOpen || isLaunchpadOpen || isControlCenterOpen || isAppSwitcherOpen) {
          e.preventDefault();
          closeAllOverlays();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    toggleSpotlight,
    toggleAppSwitcher,
    closeAllOverlays,
    isSpotlightOpen,
    isLaunchpadOpen,
    isControlCenterOpen,
    isAppSwitcherOpen
  ]);
};
