import React from 'react';
import { useDesktopStore } from '../../store/desktopStore';
import { useKeyboardShortcuts } from '../../hooks/useKeyboardShortcuts';
import { desktopFolders } from '../../data/portfolio';

import { TopPanel } from './TopPanel';
import { Dock } from './Dock';
import { DesktopHero } from './DesktopHero';
import { DesktopIcon } from './DesktopIcon';
import { WindowManager } from './WindowManager';
import { Launchpad } from './Launchpad';
import { Spotlight } from './Spotlight';
import { ControlCenter } from './ControlCenter';
import { AppSwitcher } from './AppSwitcher';

export const Desktop = () => {
  // Initialize global keyboard shortcuts (Ctrl+K, Alt+S, ESC)
  useKeyboardShortcuts();

  const wallpaper = useDesktopStore((state) => state.wallpaper);
  const openWindow = useDesktopStore((state) => state.openWindow);

  // Dynamic wallpaper styles
  const getWallpaperBackground = () => {
    switch (wallpaper) {
      case 'obsidian':
        return 'bg-gradient-to-b from-[#0a0a0f] via-[#101018] to-[#07070b]';
      case 'cosmic':
        return 'bg-gradient-to-br from-[#0c1020] via-[#211138] to-[#0a0718]';
      case 'ubuntu':
      default:
        return 'bg-gradient-to-br from-[#20051e] via-[#380e2f] to-[#120311]';
    }
  };

  return (
    <div className={`relative min-h-screen w-full overflow-hidden ${getWallpaperBackground()} text-white select-none transition-colors duration-500`}>
      {/* Subtle Ambient Glowing Mesh Background */}
      {wallpaper === 'ubuntu' && (
        <>
          <div className="absolute top-1/4 -right-20 w-[550px] h-[550px] bg-[#E95420]/20 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-[600px] h-[600px] bg-[#77216F]/35 rounded-full blur-[160px] pointer-events-none" />
          <div className="absolute top-10 left-1/3 w-[450px] h-[450px] bg-purple-900/25 rounded-full blur-[140px] pointer-events-none" />
        </>
      )}

      {wallpaper === 'obsidian' && (
        <>
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-[550px] h-[550px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />
        </>
      )}

      {wallpaper === 'cosmic' && (
        <>
          <div className="absolute top-10 right-1/4 w-[600px] h-[600px] bg-violet-600/20 rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute bottom-1/4 left-10 w-[550px] h-[550px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
        </>
      )}

      {/* Top System Panel */}
      <TopPanel />

      {/* Left Application Dock */}
      <Dock />

      {/* Main Desktop Canvas Area */}
      <main className="relative pt-12 pb-20 md:pb-8 md:pl-20 px-4 sm:px-8 min-h-screen flex flex-col justify-between overflow-x-hidden">
        {/* Centered Hero Section */}
        <DesktopHero />

        {/* Desktop Project Folders & Shortcuts Container */}
        <div className="relative z-10 max-w-5xl mx-auto w-full mb-8">
          <div className="text-center sm:text-left mb-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-white/50 pl-2">
              Desktop Project Folders & Shortcuts
            </h3>
          </div>

          <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6">
            {/* Work Experience Desktop Folder Shortcut (Placed BEFORE Project Folders) */}
            <DesktopIcon
              title="Work Experience"
              subtitle="R.S. Infotech"
              iconType="briefcase"
              badge="EXP"
              onClick={() => openWindow('experience')}
            />

            {/* 4 Flagship Project Folders */}
            {desktopFolders.map((folder) => (
              <DesktopIcon
                key={folder.id}
                title={folder.name}
                subtitle={folder.badge}
                iconType="folder"
                badge={true}
                onClick={() =>
                  openWindow(`project-${folder.projectId}`, {
                    title: folder.name,
                    icon: 'Folder',
                    customProps: { projectId: folder.projectId }
                  })
                }
              />
            ))}

            {/* All Projects Explorer & Preserved Systems */}
            <DesktopIcon
              title="All Projects (10)"
              subtitle="Files Explorer"
              iconType="folder"
              onClick={() => openWindow('files')}
            />

            <DesktopIcon
              title="Systems & Applied"
              subtitle="6 Projects"
              iconType="server"
              onClick={() => openWindow('archive')}
            />

            {/* Quick Desktop Utilities */}
            <DesktopIcon
              title="Interactive Terminal"
              subtitle="zsh 5.9"
              iconType="terminal"
              onClick={() => openWindow('terminal')}
            />

            <DesktopIcon
              title="Technology Matrix"
              subtitle="6 Categories"
              iconType="code"
              onClick={() => openWindow('techstack')}
            />

            <DesktopIcon
              title="Master Resume"
              subtitle="PDF Preview"
              iconType="file"
              onClick={() => openWindow('resume')}
            />

            <DesktopIcon
              title="System Settings"
              subtitle="Preferences"
              iconType="settings"
              onClick={() => openWindow('settings')}
            />
          </div>
        </div>

        {/* Desktop Watermark Footer */}
        <div className="relative z-10 text-center text-[11px] font-mono text-white/40 select-none pb-2">
          Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/70">Ctrl+K</kbd> for Search or <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/70">Alt+S</kbd> to Switch Apps
        </div>
      </main>

      {/* Floating Application Windows Layer */}
      <WindowManager />

      {/* Overlays */}
      <Launchpad />
      <Spotlight />
      <ControlCenter />
      <AppSwitcher />
    </div>
  );
};
