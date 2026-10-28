import React, { useState, useEffect, useRef } from 'react';
import { useDesktopStore } from '../../store/desktopStore';
import { projects, techCategories, achievements, personalData } from '../../data/portfolio';
import {
  Search,
  Folder,
  Terminal,
  Cpu,
  FileText,
  Mail,
  Award,
  ArrowRight,
  Server,
  Briefcase
} from 'lucide-react';
import { GithubIcon } from '../ui/Icons';

export const Spotlight = () => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  const isSpotlightOpen = useDesktopStore((state) => state.isSpotlightOpen);
  const toggleSpotlight = useDesktopStore((state) => state.toggleSpotlight);
  const openWindow = useDesktopStore((state) => state.openWindow);

  useEffect(() => {
    if (isSpotlightOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    } else {
      setQuery('');
    }
  }, [isSpotlightOpen]);

  // Aggregate searchable items
  const allSearchItems = [
    // Applications
    { type: 'App', title: 'Work Experience', subtitle: 'R.S. Infotech — Software Developer Intern', icon: Briefcase, action: () => openWindow('experience') },
    { type: 'App', title: 'Terminal', subtitle: 'Launch developer interactive shell', icon: Terminal, action: () => openWindow('terminal') },
    { type: 'App', title: 'Files / Work', subtitle: 'Explore project folders and code', icon: Folder, action: () => openWindow('files') },
    { type: 'App', title: 'More Systems & Applied', subtitle: 'Browse 6 secondary distributed architectures', icon: Server, action: () => openWindow('archive') },
    { type: 'App', title: 'Technology Matrix', subtitle: 'Browse skills across 6 technical categories', icon: Cpu, action: () => openWindow('techstack') },
    { type: 'App', title: 'Resume & Credentials', subtitle: 'View verified PDF and experience', icon: FileText, action: () => openWindow('resume') },
    { type: 'App', title: 'Achievements & Feeds', subtitle: 'Certifications and hackathon milestones', icon: Award, action: () => openWindow('browser') },
    { type: 'App', title: 'Contact Ansh', subtitle: 'Email, LinkedIn, and messaging', icon: Mail, action: () => openWindow('contacts') },

    // Projects
    ...projects.map((p) => ({
      type: 'Project',
      title: p.title,
      subtitle: `${p.positioning} • ${p.metrics[0]}`,
      icon: Folder,
      action: () => openWindow(`project-${p.id}`, { title: p.title, icon: 'Folder', customProps: { projectId: p.id } })
    })),

    // Skills
    ...techCategories.flatMap((cat) =>
      cat.items.map((skill) => ({
        type: 'Skill',
        title: skill.name,
        subtitle: `${cat.category} • ${skill.note}`,
        icon: Cpu,
        action: () => openWindow('techstack')
      }))
    ),

    // Achievements
    ...achievements.map((ach) => ({
      type: 'Achievement',
      title: ach.title,
      subtitle: `${ach.category} • ${ach.badge}`,
      icon: Award,
      action: () => openWindow('browser')
    })),

    // Contact actions
    {
      type: 'Action',
      title: 'Email Ansh Pathak',
      subtitle: personalData.contact.email,
      icon: Mail,
      action: () => {
        window.location.href = `mailto:${personalData.contact.email}`;
      }
    },
    {
      type: 'Action',
      title: 'GitHub Profile',
      subtitle: personalData.contact.github,
      icon: GithubIcon,
      action: () => {
        window.open(personalData.contact.github, '_blank');
      }
    }
  ];

  const filteredItems = query.trim() === ''
    ? allSearchItems.slice(0, 8)
    : allSearchItems.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.subtitle.toLowerCase().includes(query.toLowerCase()) ||
        item.type.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 10);

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredItems.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % Math.max(1, filteredItems.length));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        filteredItems[selectedIndex].action();
        toggleSpotlight();
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      toggleSpotlight();
    }
  };

  if (!isSpotlightOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-24 sm:pt-32 p-4 select-none"
      onClick={toggleSpotlight}
    >
      <div
        className="w-full max-w-2xl bg-[#14141e]/95 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/10 gap-3 bg-white/5">
          <Search size={20} className="text-[#E95420] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Search apps, projects, skills, achievements, or actions..."
            className="w-full bg-transparent text-white placeholder-white/40 text-base focus:outline-none font-sans"
          />
          <kbd className="hidden sm:inline-block px-2 py-0.5 rounded bg-white/10 text-[10px] font-mono text-white/50 border border-white/15">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2 custom-scrollbar">
          {filteredItems.length === 0 ? (
            <div className="p-8 text-center text-white/40 font-mono text-xs">
              No matching results found for "{query}"
            </div>
          ) : (
            filteredItems.map((item, index) => {
              const Icon = item.icon;
              const isSelected = index === selectedIndex;

              return (
                <div
                  key={`${item.type}-${item.title}-${index}`}
                  onClick={() => {
                    item.action();
                    toggleSpotlight();
                  }}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-colors ${
                    isSelected ? 'bg-white/15 text-white' : 'hover:bg-white/5 text-white/80'
                  }`}
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                      isSelected ? 'bg-[#E95420] text-white' : 'bg-white/10 text-white/70'
                    }`}>
                      <Icon size={18} />
                    </div>
                    <div className="overflow-hidden">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm truncate">{item.title}</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-white/10 text-white/60">
                          {item.type}
                        </span>
                      </div>
                      <p className="text-xs text-white/50 truncate font-sans">{item.subtitle}</p>
                    </div>
                  </div>

                  <ArrowRight size={16} className={`shrink-0 ml-2 transition-transform ${isSelected ? 'translate-x-0.5 text-white' : 'text-white/20'}`} />
                </div>
              );
            })
          )}
        </div>

        {/* Footer Shortcut Hints */}
        <div className="px-4 py-2 border-t border-white/10 bg-black/40 flex items-center justify-between text-[11px] font-mono text-white/50">
          <span><kbd className="text-white/70">↑↓</kbd> to navigate</span>
          <span><kbd className="text-white/70">ENTER</kbd> to select</span>
          <span><kbd className="text-white/70">ESC</kbd> to close</span>
        </div>
      </div>
    </div>
  );
};
