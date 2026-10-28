import React, { useState, useEffect } from 'react';
import { useDesktopStore } from '../../store/desktopStore';
import {
  Wifi,
  Volume2,
  VolumeX,
  Search,
  Sliders,
  Terminal,
  User,
  ChevronDown
} from 'lucide-react';

export const TopPanel = () => {
  const [timeStr, setTimeStr] = useState('');
  const [isAppMenuOpen, setIsAppMenuOpen] = useState(false);

  const toggleLaunchpad = useDesktopStore((state) => state.toggleLaunchpad);
  const toggleSpotlight = useDesktopStore((state) => state.toggleSpotlight);
  const toggleControlCenter = useDesktopStore((state) => state.toggleControlCenter);
  const soundEnabled = useDesktopStore((state) => state.soundEnabled);
  const toggleSound = useDesktopStore((state) => state.toggleSound);
  const openWindow = useDesktopStore((state) => state.openWindow);
  const activeWindowId = useDesktopStore((state) => state.activeWindowId);

  // Live Clock (e.g. "Wed Oct 21  1:24 PM")
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      };
      setTimeStr(now.toLocaleDateString('en-US', options).replace(/,/g, ''));
    };

    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 h-8 bg-[#0e0e16]/85 backdrop-blur-md border-b border-white/10 z-50 flex items-center justify-between px-3 text-xs select-none text-white/90 font-sans">
      {/* Left: Activities & Menu & Quick Links */}
      <div className="flex items-center gap-1 sm:gap-2">
        {/* Activities Button (GNOME style) */}
        <button
          onClick={toggleLaunchpad}
          className="px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/15 text-white font-medium transition-colors flex items-center gap-1.5 active:scale-95"
          title="Open Application Launcher"
        >
          <span className="w-2 h-2 rounded-full bg-[#E95420] animate-pulse" />
          <span>Activities</span>
        </button>

        {/* Application Menu */}
        <div className="relative">
          <button
            onClick={() => setIsAppMenuOpen(!isAppMenuOpen)}
            className="hidden sm:flex items-center gap-1 px-2 py-1 rounded-md hover:bg-white/10 font-semibold text-white/90 transition-colors"
          >
            <span>Ansh's Portfolio OS</span>
            <ChevronDown size={12} className="text-white/50" />
          </button>

          {isAppMenuOpen && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setIsAppMenuOpen(false)}
              />
              <div className="absolute top-8 left-0 w-52 bg-[#181824]/95 backdrop-blur-xl border border-white/15 rounded-xl shadow-2xl p-1.5 z-50 animate-fadeIn">
                <div className="px-3 py-2 border-b border-white/10 mb-1">
                  <p className="font-bold text-white text-xs">Ansh Pathak</p>
                  <p className="text-[10px] text-emerald-400 font-mono">Ubuntu Portfolio OS v2.0</p>
                </div>
                <button
                  onClick={() => {
                    openWindow('about');
                    setIsAppMenuOpen(false);
                  }}
                  className="w-full text-left px-3 py-1.5 rounded-lg hover:bg-white/10 text-white/80 hover:text-white text-xs flex items-center gap-2"
                >
                  <User size={13} /> About This System
                </button>
                <button
                  onClick={() => {
                    openWindow('terminal');
                    setIsAppMenuOpen(false);
                  }}
                  className="w-full text-left px-3 py-1.5 rounded-lg hover:bg-white/10 text-white/80 hover:text-white text-xs flex items-center gap-2"
                >
                  <Terminal size={13} /> Open Developer Shell
                </button>
                <button
                  onClick={() => {
                    openWindow('settings');
                    setIsAppMenuOpen(false);
                  }}
                  className="w-full text-left px-3 py-1.5 rounded-lg hover:bg-white/10 text-white/80 hover:text-white text-xs flex items-center gap-2"
                >
                  <Sliders size={13} /> OS Preferences
                </button>
              </div>
            </>
          )}
        </div>

        {/* Quick Top Links (Projects, About, Resume, Contact) */}
        <div className="hidden md:flex items-center gap-1 ml-1 text-white/70">
          <button
            onClick={() => openWindow('files')}
            className={`px-2 py-0.5 rounded hover:bg-white/10 hover:text-white transition-colors ${
              activeWindowId === 'files' ? 'text-white bg-white/10' : ''
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => openWindow('about')}
            className={`px-2 py-0.5 rounded hover:bg-white/10 hover:text-white transition-colors ${
              activeWindowId === 'about' ? 'text-white bg-white/10' : ''
            }`}
          >
            About
          </button>
          <button
            onClick={() => openWindow('resume')}
            className={`px-2 py-0.5 rounded hover:bg-white/10 hover:text-white transition-colors ${
              activeWindowId === 'resume' ? 'text-white bg-white/10' : ''
            }`}
          >
            Resume
          </button>
          <button
            onClick={() => openWindow('contacts')}
            className={`px-2 py-0.5 rounded hover:bg-white/10 hover:text-white transition-colors ${
              activeWindowId === 'contacts' ? 'text-white bg-white/10' : ''
            }`}
          >
            Contact
          </button>
        </div>
      </div>

      {/* Center: Live Date & Clock */}
      <div className="text-center font-medium tracking-wide text-white/90">
        <button
          onClick={() => openWindow('calendar')}
          className="px-2 py-0.5 rounded hover:bg-white/10 transition-colors"
          title="Open Calendar"
        >
          {timeStr || 'Loading...'}
        </button>
      </div>

      {/* Right: Quick System Status Icons & Control Center */}
      <div className="flex items-center gap-1 sm:gap-2">
        {/* Spotlight Search Trigger */}
        <button
          onClick={toggleSpotlight}
          className="p-1.5 rounded hover:bg-white/10 text-white/70 hover:text-white transition-colors flex items-center gap-1"
          title="Search (Ctrl+K)"
        >
          <Search size={14} />
          <span className="hidden lg:inline text-[10px] font-mono opacity-50">Ctrl+K</span>
        </button>

        {/* Sound Toggle */}
        <button
          onClick={toggleSound}
          className="p-1.5 rounded hover:bg-white/10 text-white/70 hover:text-white transition-colors"
          title={soundEnabled ? 'Mute System Sounds' : 'Unmute System Sounds'}
        >
          {soundEnabled ? (
            <Volume2 size={14} className="text-emerald-400" />
          ) : (
            <VolumeX size={14} className="text-white/40" />
          )}
        </button>

        {/* Network Icon */}
        <div className="p-1.5 text-white/70" title="Connected: 1000 Mbps High-Speed Uplink">
          <Wifi size={14} className="text-sky-400" />
        </div>

        {/* Control Center Trigger (GNOME style aggregated status) */}
        <button
          onClick={toggleControlCenter}
          className="px-2 py-1 rounded bg-white/5 hover:bg-white/15 text-white/80 hover:text-white transition-colors flex items-center gap-1.5"
          title="Open System Control Center"
        >
          <Sliders size={13} />
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
        </button>
      </div>
    </header>
  );
};
