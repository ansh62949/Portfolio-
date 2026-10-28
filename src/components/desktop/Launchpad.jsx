import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useDesktopStore } from '../../store/desktopStore';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import {
  Search,
  X,
  Folder,
  Compass,
  Calendar,
  Image,
  User,
  Terminal,
  Settings,
  Cpu,
  FileText,
  Info,
  Server,
  Briefcase
} from 'lucide-react';

const allApps = [
  { id: 'terminal', name: 'Terminal', category: 'Developer', icon: Terminal, color: 'text-emerald-400' },
  { id: 'files', name: 'Files / Work', category: 'System', icon: Folder, color: 'text-sky-400' },
  { id: 'experience', name: 'Work Experience', category: 'Career', icon: Briefcase, color: 'text-amber-400' },
  { id: 'techstack', name: 'Tech Matrix', category: 'Developer', icon: Cpu, color: 'text-cyan-400' },
  { id: 'browser', name: 'Achievements', category: 'Feed', icon: Compass, color: 'text-amber-400' },
  { id: 'photos', name: 'Photos & Proofs', category: 'Media', icon: Image, color: 'text-emerald-400' },
  { id: 'calendar', name: 'Calendar', category: 'Productivity', icon: Calendar, color: 'text-rose-400' },
  { id: 'contacts', name: 'Contacts', category: 'Communication', icon: User, color: 'text-indigo-400' },
  { id: 'resume', name: 'Resume', category: 'Career', icon: FileText, color: 'text-emerald-300' },
  { id: 'about', name: 'About System', category: 'System', icon: Info, color: 'text-purple-400' },
  { id: 'settings', name: 'Settings', category: 'Preferences', icon: Settings, color: 'text-slate-300' },
  { id: 'archive', name: 'Systems & Applied', category: 'Engineering', icon: Server, color: 'text-sky-400' }
];

export const Launchpad = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const gridRef = useRef(null);
  const inputRef = useRef(null);

  const isLaunchpadOpen = useDesktopStore((state) => state.isLaunchpadOpen);
  const toggleLaunchpad = useDesktopStore((state) => state.toggleLaunchpad);
  const openWindow = useDesktopStore((state) => state.openWindow);
  const reducedMotion = useReducedMotion();

  // Focus input and animate grid items with GSAP stagger
  useEffect(() => {
    if (isLaunchpadOpen) {
      if (inputRef.current) inputRef.current.focus();

      if (!reducedMotion && gridRef.current) {
        const items = gridRef.current.querySelectorAll('.app-tile');
        gsap.fromTo(
          items,
          { scale: 0.8, opacity: 0, y: 20 },
          { scale: 1, opacity: 1, y: 0, stagger: 0.03, duration: 0.35, ease: 'back.out(1.5)' }
        );
      }
    } else {
      setSearchTerm('');
    }
  }, [isLaunchpadOpen, reducedMotion]);

  if (!isLaunchpadOpen) return null;

  const filteredApps = allApps.filter((app) =>
    app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 bg-[#0a0a14]/90 backdrop-blur-3xl flex flex-col items-center justify-between p-6 sm:p-12 select-none animate-fadeIn">
      {/* Top Search Bar */}
      <div className="w-full max-w-lg mt-4 sm:mt-8 relative">
        <div className="relative flex items-center">
          <Search size={18} className="absolute left-4 text-white/40" />
          <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Type to search applications..."
            className="w-full py-3.5 pl-11 pr-10 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#E95420] focus:ring-2 focus:ring-[#E95420]/30 transition-all shadow-2xl font-sans"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3.5 text-white/50 hover:text-white"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>

      {/* Grid of Applications with Staggered Entrance */}
      <div
        ref={gridRef}
        className="w-full max-w-4xl my-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 sm:gap-8 justify-items-center"
      >
        {filteredApps.map((app) => {
          const Icon = app.icon;
          return (
            <button
              key={app.id}
              onClick={() => {
                openWindow(app.id);
                toggleLaunchpad();
              }}
              className="app-tile group flex flex-col items-center p-3 rounded-2xl hover:bg-white/10 active:scale-95 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-white/5 border border-white/15 flex items-center justify-center shadow-xl group-hover:scale-105 group-hover:border-white/30 group-hover:bg-white/10 transition-all duration-200 mb-2">
                <Icon size={32} className={`${app.color} drop-shadow-md`} />
              </div>
              <span className="text-xs sm:text-sm font-medium text-white/90 group-hover:text-white text-center truncate max-w-full">
                {app.name}
              </span>
              <span className="text-[10px] text-white/40 font-mono">
                {app.category}
              </span>
            </button>
          );
        })}
      </div>

      {/* Bottom Hint */}
      <div className="mb-4 text-xs font-mono text-white/40 flex items-center gap-3">
        <span>Press <kbd className="px-1.5 py-0.5 bg-white/10 rounded border border-white/15 text-white/70">ESC</kbd> or click below to return to desktop</span>
        <button
          onClick={toggleLaunchpad}
          className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};
