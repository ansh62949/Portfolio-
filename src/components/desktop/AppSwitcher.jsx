import React, { useState, useEffect } from 'react';
import { useDesktopStore } from '../../store/desktopStore';
import { Folder, Terminal, Cpu, FileText, Image, Calendar, User, Settings, Trash2, Compass, Server, Briefcase } from 'lucide-react';

const iconMap = {
  Terminal,
  Folder,
  Compass,
  Image,
  Calendar,
  User,
  Settings,
  Cpu,
  Trash2,
  FileText,
  Server,
  Briefcase
};

export const AppSwitcher = () => {
  const windows = useDesktopStore((state) => state.windows);
  const activeWindowId = useDesktopStore((state) => state.activeWindowId);
  const isAppSwitcherOpen = useDesktopStore((state) => state.isAppSwitcherOpen);
  const toggleAppSwitcher = useDesktopStore((state) => state.toggleAppSwitcher);
  const focusWindow = useDesktopStore((state) => state.focusWindow);

  const runningApps = Object.values(windows).filter((w) => w.isOpen);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (isAppSwitcherOpen) {
      const activeIdx = runningApps.findIndex((w) => w.id === activeWindowId);
      setSelectedIndex(activeIdx >= 0 ? activeIdx : 0);
    }
  }, [isAppSwitcherOpen, activeWindowId, runningApps]);

  // Handle Alt+S cycling or arrow keys while switcher is open
  useEffect(() => {
    if (!isAppSwitcherOpen) return;

    const handleKey = (e) => {
      if (e.key === 'ArrowRight' || (e.altKey && (e.key === 's' || e.key === 'S'))) {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % Math.max(1, runningApps.length));
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + runningApps.length) % Math.max(1, runningApps.length));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (runningApps[selectedIndex]) {
          focusWindow(runningApps[selectedIndex].id);
          toggleAppSwitcher();
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        toggleAppSwitcher();
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isAppSwitcherOpen, runningApps, selectedIndex, focusWindow, toggleAppSwitcher]);

  if (!isAppSwitcherOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-6 select-none"
      onClick={toggleAppSwitcher}
    >
      <div
        className="bg-[#14141e]/95 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 shadow-2xl max-w-xl w-full flex flex-col items-center animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between w-full mb-6 border-b border-white/10 pb-3">
          <span className="text-xs font-mono uppercase tracking-wider text-white/50">Running Application Switcher</span>
          <span className="text-xs font-mono text-emerald-400">Shortcut: Alt+S</span>
        </div>

        {runningApps.length === 0 ? (
          <div className="p-8 text-center text-white/50 font-mono text-xs">
            No applications currently open. Click an icon in the dock to launch one.
          </div>
        ) : (
          <div className="flex flex-wrap gap-4 justify-center items-center my-4">
            {runningApps.map((win, idx) => {
              const Icon = iconMap[win.icon] || Folder;
              const isSelected = idx === selectedIndex;

              return (
                <button
                  key={win.id}
                  onClick={() => {
                    focusWindow(win.id);
                    toggleAppSwitcher();
                  }}
                  className={`w-24 h-24 rounded-2xl flex flex-col items-center justify-center gap-2 p-2 border transition-all ${
                    isSelected
                      ? 'bg-[#E95420]/20 border-[#E95420] ring-2 ring-[#E95420]/40 scale-105 shadow-xl text-white'
                      : 'bg-white/5 border-white/10 hover:bg-white/10 text-white/70'
                  }`}
                >
                  <Icon size={28} className={isSelected ? 'text-[#E95420]' : 'text-white/80'} />
                  <span className="text-xs font-medium truncate max-w-full text-center">
                    {win.title.split('—')[0].trim()}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        <div className="mt-6 text-[11px] font-mono text-white/40 flex items-center gap-4">
          <span><kbd className="text-white/70">←→</kbd> Cycle</span>
          <span><kbd className="text-white/70">ENTER</kbd> Focus</span>
          <span><kbd className="text-white/70">ESC</kbd> Dismiss</span>
        </div>
      </div>
    </div>
  );
};
