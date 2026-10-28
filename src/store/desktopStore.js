import { create } from 'zustand';
import { soundManager } from '../utils/sound';

// Safe localStorage helper
const getStored = (key, fallback) => {
  if (typeof window === 'undefined') return fallback;
  try {
    const val = localStorage.getItem(`ansh_os_${key}`);
    return val ? JSON.parse(val) : fallback;
  } catch (e) {
    return fallback;
  }
};

const setStored = (key, value) => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(`ansh_os_${key}`, JSON.stringify(value));
  } catch (e) {}
};

// Window definitions registry with default sizes and initial offsets
const defaultWindowConfigs = {
  terminal: {
    id: 'terminal',
    title: 'Terminal — ansh@ubuntu-desktop:~',
    icon: 'Terminal',
    defaultSize: { width: 720, height: 480 },
    defaultPosition: { x: 120, y: 70 }
  },
  files: {
    id: 'files',
    title: 'Files — Home / Work',
    icon: 'Folder',
    defaultSize: { width: 840, height: 520 },
    defaultPosition: { x: 160, y: 90 }
  },
  browser: {
    id: 'browser',
    title: 'Achievements & Technical Feed',
    icon: 'Compass',
    defaultSize: { width: 880, height: 560 },
    defaultPosition: { x: 180, y: 80 }
  },
  photos: {
    id: 'photos',
    title: 'Photos & Verified Proofs',
    icon: 'Image',
    defaultSize: { width: 820, height: 520 },
    defaultPosition: { x: 200, y: 100 }
  },
  calendar: {
    id: 'calendar',
    title: 'Calendar — Milestones & Events',
    icon: 'Calendar',
    defaultSize: { width: 740, height: 520 },
    defaultPosition: { x: 220, y: 80 }
  },
  contacts: {
    id: 'contacts',
    title: 'Contact Ansh Pathak',
    icon: 'User',
    defaultSize: { width: 700, height: 520 },
    defaultPosition: { x: 240, y: 90 }
  },
  settings: {
    id: 'settings',
    title: 'System Settings',
    icon: 'Settings',
    defaultSize: { width: 740, height: 490 },
    defaultPosition: { x: 190, y: 110 }
  },
  techstack: {
    id: 'techstack',
    title: 'Technology Stack & Matrix',
    icon: 'Cpu',
    defaultSize: { width: 860, height: 540 },
    defaultPosition: { x: 170, y: 75 }
  },
  archive: {
    id: 'archive',
    title: 'More Systems & Applied Engineering',
    icon: 'Server',
    defaultSize: { width: 840, height: 540 },
    defaultPosition: { x: 210, y: 95 }
  },
  about: {
    id: 'about',
    title: 'About Me — Engineering Narrative',
    icon: 'Info',
    defaultSize: { width: 800, height: 540 },
    defaultPosition: { x: 150, y: 85 }
  },
  resume: {
    id: 'resume',
    title: 'Resume & Verified Credentials',
    icon: 'FileText',
    defaultSize: { width: 840, height: 580 },
    defaultPosition: { x: 160, y: 70 }
  },
  experience: {
    id: 'experience',
    title: 'Work Experience — R.S. Infotech',
    icon: 'Briefcase',
    defaultSize: { width: 840, height: 560 },
    defaultPosition: { x: 170, y: 80 }
  }
};

const initialSound = getStored('sound', true);
soundManager.setMuted(!initialSound);

export const useDesktopStore = create((set, get) => ({
  // Windows state
  windows: {},
  activeWindowId: null,
  maxZIndex: 10,

  // Settings
  wallpaper: getStored('wallpaper', 'ubuntu'),
  theme: getStored('theme', 'dark'),
  accentColor: getStored('accentColor', '#E95420'), // Ubuntu Orange
  soundEnabled: initialSound,
  reducedMotion: getStored('reducedMotion', false),

  // Overlays
  isLaunchpadOpen: false,
  isSpotlightOpen: false,
  isControlCenterOpen: false,
  isAppSwitcherOpen: false,

  // Open window action
  openWindow: (id, customConfig = {}) => {
    const { windows, maxZIndex, soundEnabled } = get();
    if (soundEnabled) soundManager.playOpen();

    const existing = windows[id];
    const newZIndex = maxZIndex + 1;

    if (existing) {
      set({
        windows: {
          ...windows,
          [id]: {
            ...existing,
            isOpen: true,
            isMinimized: false,
            zIndex: newZIndex,
            ...customConfig
          }
        },
        activeWindowId: id,
        maxZIndex: newZIndex,
        isLaunchpadOpen: false,
        isSpotlightOpen: false,
        isAppSwitcherOpen: false
      });
      return;
    }

    // Determine config from registry or dynamic project window
    const baseConfig = defaultWindowConfigs[id] || {
      id,
      title: customConfig.title || id,
      icon: customConfig.icon || 'Folder',
      defaultSize: { width: 840, height: 540 },
      defaultPosition: {
        x: 100 + (Object.keys(windows).length % 6) * 25,
        y: 60 + (Object.keys(windows).length % 6) * 25
      }
    };

    const newWindow = {
      id,
      title: customConfig.title || baseConfig.title,
      icon: customConfig.icon || baseConfig.icon,
      isOpen: true,
      isMinimized: false,
      isMaximized: false,
      zIndex: newZIndex,
      position: customConfig.position || baseConfig.defaultPosition,
      size: customConfig.size || baseConfig.defaultSize,
      customProps: customConfig.customProps || {}
    };

    set({
      windows: {
        ...windows,
        [id]: newWindow
      },
      activeWindowId: id,
      maxZIndex: newZIndex,
      isLaunchpadOpen: false,
      isSpotlightOpen: false,
      isAppSwitcherOpen: false
    });
  },

  // Close window
  closeWindow: (id) => {
    const { windows, activeWindowId, soundEnabled } = get();
    if (soundEnabled) soundManager.playClose();
    if (!windows[id]) return;

    const updated = { ...windows };
    delete updated[id];

    // Find next highest z-index window to make active
    const remainingIds = Object.keys(updated).filter((k) => updated[k].isOpen && !updated[k].isMinimized);
    let nextActive = null;
    if (remainingIds.length > 0) {
      remainingIds.sort((a, b) => updated[b].zIndex - updated[a].zIndex);
      nextActive = remainingIds[0];
    }

    set({
      windows: updated,
      activeWindowId: activeWindowId === id ? nextActive : activeWindowId
    });
  },

  // Minimize window
  minimizeWindow: (id) => {
    const { windows, activeWindowId, soundEnabled } = get();
    if (soundEnabled) soundManager.playMinimize();
    if (!windows[id]) return;

    const updated = {
      ...windows,
      [id]: {
        ...windows[id],
        isMinimized: true
      }
    };

    const remainingIds = Object.keys(updated).filter((k) => updated[k].isOpen && !updated[k].isMinimized);
    let nextActive = null;
    if (remainingIds.length > 0) {
      remainingIds.sort((a, b) => updated[b].zIndex - updated[a].zIndex);
      nextActive = remainingIds[0];
    }

    set({
      windows: updated,
      activeWindowId: activeWindowId === id ? nextActive : activeWindowId
    });
  },

  // Maximize / Restore window
  toggleMaximizeWindow: (id) => {
    const { windows, maxZIndex, soundEnabled } = get();
    if (!windows[id]) return;
    const isNowMaximized = !windows[id].isMaximized;
    if (soundEnabled) {
      if (isNowMaximized) soundManager.playMaximize();
      else soundManager.playMinimize();
    }

    const newZIndex = maxZIndex + 1;
    set({
      windows: {
        ...windows,
        [id]: {
          ...windows[id],
          isMaximized: isNowMaximized,
          zIndex: newZIndex
        }
      },
      activeWindowId: id,
      maxZIndex: newZIndex
    });
  },

  // Focus window
  focusWindow: (id) => {
    const { windows, activeWindowId, maxZIndex, soundEnabled } = get();
    if (!windows[id]) return;

    if (activeWindowId === id && !windows[id].isMinimized) return;
    if (soundEnabled) soundManager.playClick();

    const newZIndex = maxZIndex + 1;
    set({
      windows: {
        ...windows,
        [id]: {
          ...windows[id],
          isOpen: true,
          isMinimized: false,
          zIndex: newZIndex
        }
      },
      activeWindowId: id,
      maxZIndex: newZIndex
    });
  },

  // Update window position (dragging)
  updateWindowPosition: (id, position) => {
    const { windows } = get();
    if (!windows[id]) return;

    set({
      windows: {
        ...windows,
        [id]: {
          ...windows[id],
          position
        }
      }
    });
  },

  // Update window size (resizing)
  updateWindowSize: (id, size) => {
    const { windows } = get();
    if (!windows[id]) return;

    set({
      windows: {
        ...windows,
        [id]: {
          ...windows[id],
          size
        }
      }
    });
  },

  // Preferences
  setWallpaper: (wallpaper) => {
    setStored('wallpaper', wallpaper);
    set({ wallpaper });
  },

  setTheme: (theme) => {
    setStored('theme', theme);
    set({ theme });
  },

  setAccentColor: (accentColor) => {
    setStored('accentColor', accentColor);
    set({ accentColor });
  },

  toggleSound: () => {
    const current = get().soundEnabled;
    const next = !current;
    soundManager.setMuted(!next);
    if (next) soundManager.playClick();
    setStored('sound', next);
    set({ soundEnabled: next });
  },

  toggleReducedMotion: () => {
    const next = !get().reducedMotion;
    setStored('reducedMotion', next);
    set({ reducedMotion: next });
  },

  resetPreferences: () => {
    setStored('wallpaper', 'ubuntu');
    setStored('theme', 'dark');
    setStored('accentColor', '#E95420');
    setStored('sound', true);
    setStored('reducedMotion', false);
    soundManager.setMuted(false);
    set({
      wallpaper: 'ubuntu',
      theme: 'dark',
      accentColor: '#E95420',
      soundEnabled: true,
      reducedMotion: false
    });
  },

  // Overlay toggles
  toggleLaunchpad: () => {
    const current = get().isLaunchpadOpen;
    set({
      isLaunchpadOpen: !current,
      isSpotlightOpen: false,
      isControlCenterOpen: false,
      isAppSwitcherOpen: false
    });
  },

  toggleSpotlight: () => {
    const current = get().isSpotlightOpen;
    set({
      isSpotlightOpen: !current,
      isLaunchpadOpen: false,
      isControlCenterOpen: false,
      isAppSwitcherOpen: false
    });
  },

  toggleControlCenter: () => {
    const current = get().isControlCenterOpen;
    set({
      isControlCenterOpen: !current,
      isLaunchpadOpen: false,
      isSpotlightOpen: false,
      isAppSwitcherOpen: false
    });
  },

  toggleAppSwitcher: () => {
    const current = get().isAppSwitcherOpen;
    set({
      isAppSwitcherOpen: !current,
      isLaunchpadOpen: false,
      isSpotlightOpen: false,
      isControlCenterOpen: false
    });
  },

  closeAllOverlays: () => {
    set({
      isLaunchpadOpen: false,
      isSpotlightOpen: false,
      isControlCenterOpen: false,
      isAppSwitcherOpen: false
    });
  }
}));
