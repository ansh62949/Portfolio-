import { Folder, FileCode, Terminal, Settings, User, FileText, Server, Archive, Briefcase } from 'lucide-react';

const iconMap = {
  folder: Folder,
  code: FileCode,
  terminal: Terminal,
  settings: Settings,
  user: User,
  file: FileText,
  server: Server,
  archive: Archive,
  briefcase: Briefcase
};

export const DesktopIcon = ({ title, subtitle, iconType = 'folder', onClick, badge }) => {
  const Icon = iconMap[iconType] || Folder;

  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick && onClick();
        }
      }}
      className="group flex flex-col items-center justify-center p-2.5 rounded-xl hover:bg-white/10 active:bg-white/20 transition-all duration-150 cursor-pointer select-none text-center w-28 sm:w-32 focus:outline-none focus:ring-1 focus:ring-white/30"
    >
      <div className="relative mb-1.5 transition-transform duration-200 group-hover:scale-105">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-black/60 to-white/10 border border-white/15 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:border-white/30 transition-all">
          <Icon size={26} className="text-[#E95420] group-hover:text-amber-400 transition-colors drop-shadow" />
        </div>
        {badge && (
          <span className="absolute -top-1.5 -right-2 px-1.5 py-0.5 rounded-full bg-[#E95420] text-white text-[9px] font-mono font-bold shadow-md">
            {typeof badge === 'string' ? badge : 'AI'}
          </span>
        )}
      </div>

      <span className="text-xs font-medium text-white drop-shadow-md text-center leading-tight line-clamp-2 px-1 py-0.5 rounded group-hover:bg-black/40">
        {title}
      </span>

      {subtitle && (
        <span className="text-[10px] text-white/60 font-mono mt-0.5 line-clamp-1">
          {subtitle}
        </span>
      )}
    </div>
  );
};
