import React from 'react';
import { useDesktopStore } from '../../store/desktopStore';
import {
  Folder,
  LayoutGrid,
  Compass,
  Calendar,
  Image,
  User,
  Terminal,
  Settings,
  Server,
  Cpu
} from 'lucide-react';

const dockItems = [
  { id: 'files', label: 'Files / Work', icon: Folder, color: 'text-sky-400' },
  { id: 'launchpad', label: 'Applications', icon: LayoutGrid, isAction: true, color: 'text-orange-400' },
  { id: 'browser', label: 'Browser & Feeds', icon: Compass, color: 'text-amber-400' },
  { id: 'calendar', label: 'Calendar', icon: Calendar, color: 'text-rose-400' },
  { id: 'photos', label: 'Photos & Proofs', icon: Image, color: 'text-emerald-400' },
  { id: 'contacts', label: 'Contacts', icon: User, color: 'text-indigo-400' },
  { id: 'terminal', label: 'Terminal', icon: Terminal, color: 'text-emerald-300' },
  { id: 'techstack', label: 'Tech Matrix', icon: Cpu, color: 'text-cyan-400' },
  { id: 'settings', label: 'Settings', icon: Settings, color: 'text-slate-300' },
  { id: 'archive', label: 'Systems & Applied', icon: Server, color: 'text-sky-400' }
];

export const Dock = () => {
  const windows = useDesktopStore((state) => state.windows);
  const activeWindowId = useDesktopStore((state) => state.activeWindowId);
  const openWindow = useDesktopStore((state) => state.openWindow);
  const toggleLaunchpad = useDesktopStore((state) => state.toggleLaunchpad);

  const handleClick = (item) => {
    if (item.id === 'launchpad') {
      toggleLaunchpad();
      return;
    }

    const currentWindow = windows[item.id];
    if (currentWindow && currentWindow.isOpen && !currentWindow.isMinimized && activeWindowId === item.id) {
      // If already open and active, minimize it
      useDesktopStore.getState().minimizeWindow(item.id);
    } else {
      openWindow(item.id);
    }
  };

  return (
    <>
      {/* Desktop Left Dock (Ubuntu/GNOME Style) */}
      <aside className="fixed left-0 top-8 bottom-0 w-16 bg-[#0a0a10]/80 backdrop-blur-xl border-r border-white/10 z-40 hidden md:flex flex-col items-center justify-between py-3 select-none">
        {/* Main Dock Apps */}
        <div className="flex flex-col items-center gap-2 w-full">
          {dockItems.slice(0, 8).map((item) => {
            const Icon = item.icon;
            const isOpen = windows[item.id]?.isOpen;
            const isActive = activeWindowId === item.id && isOpen && !windows[item.id]?.isMinimized;

            return (
              <div key={item.id} className="relative group flex items-center justify-center w-full">
                {/* Active indicator bar on left edge (Ubuntu signature orange bar) */}
                {isOpen && (
                  <span
                    className={`absolute left-0 w-1 rounded-r-md transition-all ${
                      isActive ? 'h-6 bg-[#E95420]' : 'h-2 bg-white/40'
                    }`}
                  />
                )}

                <button
                  onClick={() => handleClick(item)}
                  aria-label={item.label}
                  className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200 group-hover:scale-110 active:scale-95 ${
                    isActive
                      ? 'bg-white/15 shadow-lg border border-white/20'
                      : 'hover:bg-white/10'
                  }`}
                >
                  <Icon size={22} className={item.color} />
                </button>

                {/* Tooltip on hover */}
                <div className="absolute left-16 px-2.5 py-1 bg-[#1a1a28] text-white text-xs rounded-lg shadow-xl border border-white/15 whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-150 z-50">
                  {item.label}
                  {isOpen && <span className="text-[10px] text-emerald-400 ml-1.5 font-mono">• Running</span>}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Dock Apps: Settings & Archive */}
        <div className="flex flex-col items-center gap-2 w-full border-t border-white/10 pt-2">
          {dockItems.slice(8).map((item) => {
            const Icon = item.icon;
            const isOpen = windows[item.id]?.isOpen;
            const isActive = activeWindowId === item.id && isOpen && !windows[item.id]?.isMinimized;

            return (
              <div key={item.id} className="relative group flex items-center justify-center w-full">
                {isOpen && (
                  <span
                    className={`absolute left-0 w-1 rounded-r-md transition-all ${
                      isActive ? 'h-6 bg-[#E95420]' : 'h-2 bg-white/40'
                    }`}
                  />
                )}

                <button
                  onClick={() => handleClick(item)}
                  aria-label={item.label}
                  className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200 group-hover:scale-110 active:scale-95 ${
                    isActive
                      ? 'bg-white/15 shadow-lg border border-white/20'
                      : 'hover:bg-white/10'
                  }`}
                >
                  <Icon size={20} className={item.color} />
                </button>

                <div className="absolute left-16 px-2.5 py-1 bg-[#1a1a28] text-white text-xs rounded-lg shadow-xl border border-white/15 whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-150 z-50">
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>
      </aside>

      {/* Mobile Bottom Dock (<768px) */}
      <nav className="fixed bottom-0 left-0 right-0 h-16 bg-[#0a0a10]/95 backdrop-blur-xl border-t border-white/10 z-40 flex md:hidden items-center justify-around px-2 select-none overflow-x-auto">
        {dockItems.map((item) => {
          const Icon = item.icon;
          const isOpen = windows[item.id]?.isOpen;
          const isActive = activeWindowId === item.id && isOpen && !windows[item.id]?.isMinimized;

          return (
            <button
              key={item.id}
              onClick={() => handleClick(item)}
              aria-label={item.label}
              className={`relative p-2 rounded-xl flex flex-col items-center justify-center transition-transform active:scale-90 ${
                isActive ? 'bg-white/15' : 'hover:bg-white/5'
              }`}
            >
              <Icon size={20} className={item.color} />
              {isOpen && (
                <span className="absolute bottom-1 w-1 h-1 rounded-full bg-[#E95420]" />
              )}
            </button>
          );
        })}
      </nav>
    </>
  );
};
