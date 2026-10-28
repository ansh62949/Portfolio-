import React from 'react';
import { useDesktopStore } from '../../store/desktopStore';
import { AppWindow } from './AppWindow';

import { TerminalApp } from '../apps/Terminal';
import { FileManagerApp } from '../apps/FileManager';
import { TechStackApp } from '../apps/TechStackApp';
import { BrowserApp } from '../apps/BrowserApp';
import { PhotosApp } from '../apps/PhotosApp';
import { CalendarApp } from '../apps/CalendarApp';
import { ContactsApp } from '../apps/ContactsApp';
import { SettingsApp } from '../apps/SettingsApp';
import { ArchiveApp } from '../apps/ArchiveApp';
import { AboutApp } from '../apps/AboutApp';
import { ResumeApp } from '../apps/ResumeApp';
import { ExperienceApp } from '../apps/ExperienceApp';
import { ProjectWindow } from '../apps/ProjectWindow';

export const WindowManager = () => {
  const windows = useDesktopStore((state) => state.windows);
  const windowList = Object.values(windows);

  const renderAppContent = (win) => {
    // Check dynamic project window
    if (win.id.startsWith('project-') || win.customProps?.projectId) {
      const projId = win.customProps?.projectId || win.id.replace('project-', '');
      return <ProjectWindow projectId={projId} />;
    }

    switch (win.id) {
      case 'terminal':
        return <TerminalApp />;
      case 'files':
        return <FileManagerApp />;
      case 'techstack':
        return <TechStackApp />;
      case 'browser':
        return <BrowserApp />;
      case 'photos':
        return <PhotosApp />;
      case 'calendar':
        return <CalendarApp />;
      case 'contacts':
        return <ContactsApp />;
      case 'settings':
        return <SettingsApp />;
      case 'archive':
        return <ArchiveApp />;
      case 'about':
        return <AboutApp />;
      case 'resume':
        return <ResumeApp />;
      case 'experience':
        return <ExperienceApp />;
      default:
        return (
          <div className="p-8 text-center text-white/50 font-mono text-xs">
            Unknown application identifier: {win.id}
          </div>
        );
    }
  };

  return (
    <div className="absolute inset-0 pointer-events-none">
      {windowList.map((win) => {
        if (!win.isOpen) return null;

        return (
          <div key={win.id} className="pointer-events-auto">
            <AppWindow windowData={win}>
              {renderAppContent(win)}
            </AppWindow>
          </div>
        );
      })}
    </div>
  );
};
