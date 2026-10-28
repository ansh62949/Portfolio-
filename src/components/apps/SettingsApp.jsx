import React from 'react';
import { useDesktopStore } from '../../store/desktopStore';
import { wallpapers } from '../../data/portfolio';
import { soundManager } from '../../utils/sound';
import {
  Monitor,
  Moon,
  Sun,
  Volume2,
  VolumeX,
  Sparkles,
  RotateCcw,
  Palette,
  Check
} from 'lucide-react';

export const SettingsApp = () => {
  const wallpaper = useDesktopStore((state) => state.wallpaper);
  const setWallpaper = useDesktopStore((state) => state.setWallpaper);
  const theme = useDesktopStore((state) => state.theme);
  const setTheme = useDesktopStore((state) => state.setTheme);
  const accentColor = useDesktopStore((state) => state.accentColor);
  const setAccentColor = useDesktopStore((state) => state.setAccentColor);
  const soundEnabled = useDesktopStore((state) => state.soundEnabled);
  const toggleSound = useDesktopStore((state) => state.toggleSound);
  const reducedMotion = useDesktopStore((state) => state.reducedMotion);
  const toggleReducedMotion = useDesktopStore((state) => state.toggleReducedMotion);
  const resetPreferences = useDesktopStore((state) => state.resetPreferences);

  const accentOptions = [
    { name: 'Ubuntu Solar Orange', color: '#E95420' },
    { name: 'Emerald Terminal', color: '#10b981' },
    { name: 'Sky Electric', color: '#0ea5e9' },
    { name: 'Cosmic Violet', color: '#8b5cf6' }
  ];

  const handleTestSound = () => {
    soundManager.playOpen();
  };

  return (
    <div className="h-full bg-[#12121c] text-white p-6 sm:p-8 overflow-y-auto custom-scrollbar select-none font-sans space-y-8">
      {/* Header */}
      <div className="border-b border-white/10 pb-4 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold font-display text-white">System Settings</h2>
          <p className="text-xs text-white/50 font-mono mt-0.5">
            Configure desktop appearance, audio feedback, and motion settings.
          </p>
        </div>

        <button
          onClick={resetPreferences}
          className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-red-500/20 text-white/70 hover:text-red-300 text-xs font-mono flex items-center gap-1.5 transition-colors"
        >
          <RotateCcw size={13} /> Reset All Defaults
        </button>
      </div>

      {/* 1. Wallpaper Selection */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold text-white flex items-center gap-2">
          <Monitor size={16} className="text-[#E95420]" /> Desktop Wallpaper
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {wallpapers.map((wp) => (
            <div
              key={wp.id}
              onClick={() => setWallpaper(wp.id)}
              className={`p-3 rounded-2xl border cursor-pointer transition-all ${
                wallpaper === wp.id
                  ? 'bg-white/10 border-[#E95420] ring-2 ring-[#E95420]/30'
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
            >
              <div className={`h-24 rounded-xl bg-gradient-to-br ${wp.previewColor} mb-2 relative overflow-hidden flex items-center justify-center`}>
                {wallpaper === wp.id && (
                  <div className="w-7 h-7 rounded-full bg-black/60 text-white flex items-center justify-center backdrop-blur-md">
                    <Check size={16} />
                  </div>
                )}
              </div>
              <h4 className="text-xs font-bold text-white">{wp.name}</h4>
              <p className="text-[11px] text-white/50 mt-0.5 leading-snug">{wp.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Theme & Accent Color */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Theme mode */}
        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <Sun size={16} className="text-amber-400" /> Color Mode
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setTheme('dark')}
              className={`p-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-semibold transition-all ${
                theme === 'dark'
                  ? 'bg-[#E95420] text-white border-[#E95420]'
                  : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
              }`}
            >
              <Moon size={16} /> Dark Mode
            </button>
            <button
              onClick={() => setTheme('light')}
              className={`p-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-semibold transition-all ${
                theme === 'light'
                  ? 'bg-[#E95420] text-white border-[#E95420]'
                  : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
              }`}
            >
              <Sun size={16} /> Light Mode
            </button>
          </div>
        </div>

        {/* Accent color */}
        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <Palette size={16} className="text-[#E95420]" /> Accent Color
          </h3>
          <div className="flex flex-wrap gap-2">
            {accentOptions.map((opt) => (
              <button
                key={opt.color}
                onClick={() => setAccentColor(opt.color)}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-medium transition-all ${
                  accentColor === opt.color
                    ? 'bg-white/15 border-white/30 text-white shadow'
                    : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                }`}
              >
                <span className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: opt.color }} />
                <span>{opt.name.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Audio & Motion Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sound Toggle */}
        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3 flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-white flex items-center gap-2 mb-1">
              <Volume2 size={16} className="text-emerald-400" /> Interface Sound Effects
            </h3>
            <p className="text-xs text-white/60 leading-relaxed">
              Synthesized audio cues generated in real-time via Web Audio API for window open, minimize, terminal typing, and hire actions.
            </p>
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              onClick={toggleSound}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors ${
                soundEnabled
                  ? 'bg-emerald-500 text-black font-bold'
                  : 'bg-white/10 text-white/50 hover:bg-white/15'
              }`}
            >
              {soundEnabled ? <Volume2 size={15} /> : <VolumeX size={15} />}
              <span>{soundEnabled ? 'Sounds Active' : 'Muted'}</span>
            </button>

            {soundEnabled && (
              <button
                onClick={handleTestSound}
                className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs text-white/80 transition-colors"
              >
                Test Sound
              </button>
            )}
          </div>
        </div>

        {/* Reduced Motion Toggle */}
        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3 flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-white flex items-center gap-2 mb-1">
              <Sparkles size={16} className="text-[#E95420]" /> Motion & Animations
            </h3>
            <p className="text-xs text-white/60 leading-relaxed">
              When reduced motion is enabled, heavy animations are disabled, prioritizing instant window rendering for accessibility.
            </p>
          </div>

          <div className="pt-2">
            <button
              onClick={toggleReducedMotion}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors ${
                reducedMotion
                  ? 'bg-[#E95420] text-white font-bold'
                  : 'bg-white/10 text-white/70 hover:bg-white/15'
              }`}
            >
              <Sparkles size={15} />
              <span>{reducedMotion ? 'Reduced Motion: ON' : 'Full GSAP Animations: ON'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
