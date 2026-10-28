import React, { useRef, useEffect } from 'react';
import { useDesktopStore } from '../../store/desktopStore';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import gsap from 'gsap';
import {
  Minus,
  Square,
  Copy,
  X,
  Terminal,
  Folder,
  Compass,
  Image,
  Calendar,
  User,
  Settings,
  Cpu,
  Trash2,
  Info,
  FileText,
  Server,
  Briefcase
} from 'lucide-react';

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
  Info,
  FileText,
  Server,
  Briefcase
};

export const AppWindow = ({ windowData, children }) => {
  const { id, title, icon, isMinimized, isMaximized, zIndex, position, size } = windowData;
  const windowRef = useRef(null);
  const titleBarRef = useRef(null);

  const activeWindowId = useDesktopStore((state) => state.activeWindowId);
  const focusWindow = useDesktopStore((state) => state.focusWindow);
  const closeWindow = useDesktopStore((state) => state.closeWindow);
  const minimizeWindow = useDesktopStore((state) => state.minimizeWindow);
  const toggleMaximizeWindow = useDesktopStore((state) => state.toggleMaximizeWindow);
  const updateWindowPosition = useDesktopStore((state) => state.updateWindowPosition);
  const reducedMotion = useReducedMotion();

  const isActive = activeWindowId === id;
  const IconComp = iconMap[icon] || Folder;

  // Dragging refs
  const dragStartPos = useRef({ x: 0, y: 0 });
  const windowStartPos = useRef({ x: 0, y: 0 });

  // GSAP entrance animation
  useEffect(() => {
    if (reducedMotion || !windowRef.current) return;
    gsap.fromTo(
      windowRef.current,
      { scale: 0.94, opacity: 0, y: 15 },
      { scale: 1, opacity: 1, y: 0, duration: 0.28, ease: 'power2.out' }
    );
  }, [reducedMotion]);

  // Handle Dragging
  const handleMouseDown = (e) => {
    // Only drag with left click and when not maximized and on desktop
    if (e.button !== 0 || isMaximized || window.innerWidth < 768) return;
    // Don't drag if clicking buttons inside title bar
    if (e.target.closest('button')) return;

    focusWindow(id);
    dragStartPos.current = { x: e.clientX, y: e.clientY };
    windowStartPos.current = { x: position.x, y: position.y };

    const handleMouseMove = (moveEvent) => {
      const dx = moveEvent.clientX - dragStartPos.current.x;
      const dy = moveEvent.clientY - dragStartPos.current.y;

      let newX = windowStartPos.current.x + dx;
      let newY = windowStartPos.current.y + dy;

      // Bounds checking (prevent window header from getting stuck outside)
      const topPanelHeight = 32;
      const dockWidth = 64;

      newX = Math.max(dockWidth, Math.min(newX, window.innerWidth - 120));
      newY = Math.max(topPanelHeight, Math.min(newY, window.innerHeight - 80));

      updateWindowPosition(id, { x: newX, y: newY });
    };

    const handleMouseUp = () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  if (isMinimized) return null;

  // Mobile layout (<768px): Full-screen sheet
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const windowStyle = isMobile
    ? {
        position: 'fixed',
        top: 32,
        left: 0,
        right: 0,
        bottom: 64, // Above mobile dock
        width: '100%',
        height: 'calc(100vh - 96px)',
        zIndex
      }
    : isMaximized
    ? {
        position: 'fixed',
        top: 32, // Below top panel
        left: 64, // Beside dock
        width: 'calc(100vw - 64px)',
        height: 'calc(100vh - 32px)',
        zIndex
      }
    : {
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${size.width}px`,
        height: `${size.height}px`,
        maxWidth: 'calc(100vw - 80px)',
        maxHeight: 'calc(100vh - 50px)',
        zIndex
      };

  return (
    <div
      ref={windowRef}
      style={windowStyle}
      onClick={() => focusWindow(id)}
      className={`flex flex-col bg-[#14141e]/95 backdrop-blur-2xl border transition-shadow duration-200 select-none ${
        isMaximized || isMobile ? 'rounded-none' : 'rounded-2xl'
      } ${
        isActive
          ? 'border-white/20 shadow-2xl shadow-black/80 ring-1 ring-white/10'
          : 'border-white/10 opacity-95 shadow-xl shadow-black/60'
      }`}
    >
      {/* Title Bar - Linux Ubuntu/GNOME Style */}
      <div
        ref={titleBarRef}
        onMouseDown={handleMouseDown}
        onDoubleClick={() => !isMobile && toggleMaximizeWindow(id)}
        className={`h-10 px-3.5 flex items-center justify-between border-b shrink-0 cursor-default ${
          isActive
            ? 'bg-[#1e1e2d] border-white/10 text-white'
            : 'bg-[#181824] border-white/5 text-white/60'
        } ${isMaximized || isMobile ? '' : 'rounded-t-2xl'}`}
      >
        {/* Left: App Icon & Title */}
        <div className="flex items-center gap-2.5 overflow-hidden">
          <div className="w-5 h-5 rounded-md bg-white/10 flex items-center justify-center text-white/80 shrink-0">
            <IconComp size={13} />
          </div>
          <span className="text-xs font-medium font-sans truncate tracking-wide">
            {title}
          </span>
        </div>

        {/* Right: Linux Window Controls (Minimize, Maximize, Close) */}
        <div className="flex items-center gap-1.5 shrink-0 ml-2">
          {/* Minimize button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              minimizeWindow(id);
            }}
            title="Minimize"
            className="w-6 h-6 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-white/70 hover:text-white transition-colors"
          >
            <Minus size={12} />
          </button>

          {/* Maximize / Restore button */}
          {!isMobile && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleMaximizeWindow(id);
              }}
              title={isMaximized ? 'Restore' : 'Maximize'}
              className="w-6 h-6 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-white/70 hover:text-white transition-colors"
            >
              {isMaximized ? <Copy size={11} /> : <Square size={11} />}
            </button>
          )}

          {/* Close button - Ubuntu signature warm red/orange hover */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeWindow(id);
            }}
            title="Close"
            className="w-6 h-6 rounded-full bg-white/5 hover:bg-red-500/80 flex items-center justify-center text-white/70 hover:text-white transition-colors"
          >
            <X size={12} />
          </button>
        </div>
      </div>

      {/* Window Body */}
      <div className="flex-1 overflow-auto text-white font-sans text-sm p-0 custom-scrollbar select-text">
        {children}
      </div>
    </div>
  );
};
