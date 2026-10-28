import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useDesktopStore } from '../../store/desktopStore';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { wallpapers } from '../../data/portfolio';
import {
  Moon,
  Sun,
  Volume2,
  VolumeX,
  Sliders,
  Sparkles,
  Wifi,
  RotateCcw,
  Monitor
} from 'lucide-react';

export const ControlCenter = () => {
  const panelRef = useRef(null);
  const isControlCenterOpen = useDesktopStore((state) => state.isControlCenterOpen);
  const toggleControlCenter = useDesktopStore((state) => state.toggleControlCenter);
  const theme = useDesktopStore((state) => state.theme);
  const setTheme = useDesktopStore((state) => state.setTheme);
  const soundEnabled = useDesktopStore((state) => state.soundEnabled);
  const toggleSound = useDesktopStore((state) => state.toggleSound);
  const wallpaper = useDesktopStore((state) => state.wallpaper);
  const setWallpaper = useDesktopStore((state) => state.setWallpaper);
  const reducedMotion = useDesktopStore((state) => state.reducedMotion);
  const toggleReducedMotion = useDesktopStore((state) => state.toggleReducedMotion);
  const resetPreferences = useDesktopStore((state) => state.resetPreferences);
  const openWindow = useDesktopStore((state) => state.openWindow);
  const isMotionReduced = useReducedMotion();

  useEffect(() => {
    if (!panelRef.current) return;
    if (isControlCenterOpen) {
      if (!isMotionReduced) {
        gsap.fromTo(
          panelRef.current,
          { y: -20, opacity: 0, scale: 0.96 },
          { y: 0, opacity: 1, scale: 1, duration: 0.25, ease: 'power2.out' }
        );
      }
    }
  }, [isControlCenterOpen, isMotionReduced]);

  if (!isControlCenterOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/30 backdrop-blur-[2px]"
        onClick={toggleControlCenter}
      />

      {/* Control Center Floating Panel */}
      <div
        ref={panelRef}
        className="fixed top-9 right-3 w-80 sm:w-88 bg-[#14141e]/95 backdrop-blur-2xl border border-white/15 rounded-2xl shadow-2xl p-4 z-50 text-white select-none"
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
          <div className="flex items-center gap-2">
            <Sliders size={16} className="text-[#E95420]" />
            <span className="font-semibold text-sm">System Control Center</span>
          </div>
          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
            Ubuntu 24.04 LTS
          </span>
        </div>

        {/* Quick Toggles 2x2 Grid */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            className={`p-3 rounded-xl border flex items-center gap-3 transition-all ${
              soundEnabled
                ? 'bg-emerald-500/15 border-emerald-500/30 text-white'
                : 'bg-white/5 border-white/10 text-white/50 hover:bg-white/10'
            }`}
          >
            {soundEnabled ? (
              <Volume2 size={20} className="text-emerald-400" />
            ) : (
              <VolumeX size={20} />
            )}
            <div className="text-left">
              <p className="text-xs font-semibold leading-tight">Sound</p>
              <p className="text-[10px] opacity-70">{soundEnabled ? 'Enabled' : 'Muted'}</p>
            </div>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-3 rounded-xl border bg-white/5 border-white/10 hover:bg-white/10 flex items-center gap-3 text-white transition-all"
          >
            {theme === 'dark' ? (
              <Moon size={20} className="text-purple-400" />
            ) : (
              <Sun size={20} className="text-amber-400" />
            )}
            <div className="text-left">
              <p className="text-xs font-semibold leading-tight">Theme</p>
              <p className="text-[10px] opacity-70 capitalize">{theme} Mode</p>
            </div>
          </button>

          {/* Network Status */}
          <div className="p-3 rounded-xl border bg-white/5 border-white/10 flex items-center gap-3 text-white">
            <Wifi size={20} className="text-sky-400" />
            <div className="text-left">
              <p className="text-xs font-semibold leading-tight">Network</p>
              <p className="text-[10px] text-sky-400">Connected</p>
            </div>
          </div>

          {/* Motion Toggle */}
          <button
            onClick={toggleReducedMotion}
            className={`p-3 rounded-xl border flex items-center gap-3 transition-all ${
              reducedMotion
                ? 'bg-[#E95420]/15 border-[#E95420]/30 text-white'
                : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10'
            }`}
          >
            <Sparkles size={20} className={reducedMotion ? 'text-[#E95420]' : 'text-white/40'} />
            <div className="text-left">
              <p className="text-xs font-semibold leading-tight">Motion</p>
              <p className="text-[10px] opacity-70">{reducedMotion ? 'Reduced' : 'Full GSAP'}</p>
            </div>
          </button>
        </div>

        {/* Wallpaper Picker Thumbnails */}
        <div className="mb-4">
          <p className="text-[10px] uppercase font-mono tracking-wider text-white/50 mb-2 flex items-center gap-1.5">
            <Monitor size={12} /> Select Desktop Wallpaper
          </p>
          <div className="grid grid-cols-3 gap-2">
            {wallpapers.map((wp) => (
              <button
                key={wp.id}
                onClick={() => setWallpaper(wp.id)}
                className={`h-14 rounded-lg bg-gradient-to-br ${wp.previewColor} border transition-all relative overflow-hidden group ${
                  wallpaper === wp.id
                    ? 'border-[#E95420] ring-2 ring-[#E95420]/40'
                    : 'border-white/10 hover:border-white/30'
                }`}
              >
                <span className="absolute bottom-1 left-1.5 right-1.5 text-[9px] font-sans font-semibold text-white truncate drop-shadow bg-black/40 px-1 py-0.5 rounded">
                  {wp.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2 border-t border-white/10">
          <button
            onClick={() => {
              openWindow('settings');
              toggleControlCenter();
            }}
            className="flex-1 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
          >
            <Sliders size={13} /> Full Settings
          </button>
          <button
            onClick={resetPreferences}
            className="px-3 py-2 rounded-xl bg-white/5 hover:bg-red-500/20 hover:text-red-300 text-white/60 text-xs font-semibold transition-colors"
            title="Reset to defaults"
          >
            <RotateCcw size={13} />
          </button>
        </div>
      </div>
    </>
  );
};
