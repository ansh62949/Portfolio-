import React, { useState, useMemo } from 'react';
import { useDesktopStore } from '../../store/desktopStore';
import { projects, personalData } from '../../data/portfolio';
import {
  Folder,
  Briefcase,
  User,
  FileText,
  ChevronRight,
  ExternalLink,
  Code,
  HardDrive,
  Home,
  Search,
  Sparkles,
  Server,
  ArrowRight
} from 'lucide-react';

export const FileManagerApp = () => {
  const [currentSection, setCurrentSection] = useState('work');
  const [projectFilter, setProjectFilter] = useState('all'); // 'all', 'flagship', 'systems'
  const [searchQuery, setSearchQuery] = useState('');
  const openWindow = useDesktopStore((state) => state.openWindow);

  const sidebarItems = [
    { id: 'work', label: 'Work / Projects', icon: Briefcase, count: projects.length },
    { id: 'systems', label: 'More Systems & Applied', icon: Server, count: 6 },
    { id: 'about', label: 'About Me', icon: User },
    { id: 'resume', label: 'Resume', icon: FileText }
  ];

  // Secondary systems projects (6 preserved architectures)
  const systemsProjects = useMemo(() => projects.filter((p) => !p.flagship), []);

  // Filtered projects for the Work section
  const filteredProjects = useMemo(() => {
    let list = projects;
    if (projectFilter === 'flagship') {
      list = list.filter((p) => p.flagship);
    } else if (projectFilter === 'systems') {
      list = list.filter((p) => !p.flagship);
    }

    if (!searchQuery.trim()) return list;

    const query = searchQuery.toLowerCase();
    return list.filter((p) =>
      p.title.toLowerCase().includes(query) ||
      p.positioning.toLowerCase().includes(query) ||
      p.shortDesc.toLowerCase().includes(query) ||
      p.tech.some((t) => t.toLowerCase().includes(query)) ||
      p.metrics.some((m) => m.toLowerCase().includes(query))
    );
  }, [projectFilter, searchQuery]);

  return (
    <div className="h-full flex flex-col md:flex-row bg-[#11111a] text-white select-none">
      {/* Left Sidebar */}
      <div className="w-full md:w-64 bg-[#161622] border-b md:border-b-0 md:border-r border-white/10 p-3 flex flex-col justify-between shrink-0">
        <div className="space-y-1">
          <div className="flex items-center gap-2 px-3 py-2 text-[11px] font-mono uppercase tracking-wider text-white/40">
            <Home size={14} /> Places
          </div>

          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isSelected = currentSection === item.id;

            return (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentSection(item.id);
                  if (item.id === 'work') setProjectFilter('all');
                }}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium transition-colors ${
                  isSelected
                    ? 'bg-[#E95420] text-white font-semibold shadow-md'
                    : 'hover:bg-white/5 text-white/70 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon size={16} />
                  <span>{item.label}</span>
                </div>
                {item.count && (
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md ${
                    isSelected ? 'bg-black/30 text-white' : 'bg-white/10 text-white/60'
                  }`}>
                    {item.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Disk Info Footer */}
        <div className="p-3 border-t border-white/10 mt-4 text-[10px] font-mono text-white/40 space-y-1 hidden md:block">
          <div className="flex items-center gap-1.5 text-white/60">
            <HardDrive size={13} /> ansh-storage (ext4)
          </div>
          <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
            <div className="bg-[#E95420] h-full w-2/3" />
          </div>
          <p>64.2 GB of 100 GB available</p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-5 md:p-6 overflow-y-auto custom-scrollbar flex flex-col">
        {/* Top Header & Breadcrumb */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4 mb-5">
          <div className="flex items-center gap-1.5 text-xs font-mono text-white/40">
            <span>Home</span>
            <ChevronRight size={12} />
            <span>Ansh</span>
            <ChevronRight size={12} />
            <span className="text-white capitalize">
              {currentSection === 'systems' ? 'More Systems & Applied' : currentSection}
            </span>
          </div>

          {(currentSection === 'work' || currentSection === 'systems') && (
            <div className="relative w-full sm:w-64">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
              <input
                type="text"
                placeholder="Filter by tech or name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#E95420]"
              />
            </div>
          )}
        </div>

        {/* WORK SECTION */}
        {currentSection === 'work' && (
          <div className="space-y-6">
            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 bg-white/5 p-1 rounded-xl border border-white/10 text-xs">
                <button
                  onClick={() => setProjectFilter('all')}
                  className={`px-3 py-1.5 rounded-lg transition-colors font-medium ${
                    projectFilter === 'all'
                      ? 'bg-[#E95420] text-white shadow'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  All Projects ({projects.length})
                </button>
                <button
                  onClick={() => setProjectFilter('flagship')}
                  className={`px-3 py-1.5 rounded-lg transition-colors font-medium flex items-center gap-1.5 ${
                    projectFilter === 'flagship'
                      ? 'bg-[#E95420] text-white shadow'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  <Sparkles size={12} /> Flagship (4)
                </button>
                <button
                  onClick={() => setProjectFilter('systems')}
                  className={`px-3 py-1.5 rounded-lg transition-colors font-medium flex items-center gap-1.5 ${
                    projectFilter === 'systems'
                      ? 'bg-[#E95420] text-white shadow'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  <Server size={12} /> Systems & Applied (6)
                </button>
              </div>

              <span className="text-[11px] font-mono text-white/40">
                Showing {filteredProjects.length} of {projects.length} verified projects
              </span>
            </div>

            {/* Project Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {filteredProjects.map((p) => (
                <div
                  key={p.id}
                  className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#E95420]/40 hover:bg-white/[0.07] transition-all flex flex-col justify-between space-y-4 group"
                >
                  <div>
                    {/* Header Row */}
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border transition-transform group-hover:scale-105 ${
                          p.flagship
                            ? 'bg-[#E95420]/15 border-[#E95420]/30 text-[#E95420]'
                            : 'bg-sky-500/15 border-sky-500/30 text-sky-400'
                        }`}>
                          {p.flagship ? <Folder size={20} /> : <Server size={20} />}
                        </div>
                        <div>
                          <h4 className="font-bold text-sm text-white group-hover:text-[#E95420] transition-colors">
                            {p.title}
                          </h4>
                          <p className="text-[11px] text-emerald-400 font-mono line-clamp-1">
                            {p.positioning}
                          </p>
                        </div>
                      </div>

                      <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded uppercase shrink-0 border ${
                        p.flagship
                          ? 'bg-[#E95420]/15 text-[#E95420] border-[#E95420]/30'
                          : 'bg-sky-500/10 text-sky-300 border-sky-500/20'
                      }`}>
                        {p.flagship ? 'Flagship' : 'Systems'}
                      </span>
                    </div>

                    <p className="text-xs text-white/70 leading-relaxed line-clamp-2 mt-2">
                      {p.shortDesc}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {p.tech.map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-white/70">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer Row: Metrics & Actions */}
                  <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs">
                    <span className="text-[11px] font-mono text-emerald-400 font-medium">
                      {p.metrics[0]}
                    </span>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => openWindow(`project-${p.id}`, { title: p.title, icon: 'Folder', customProps: { projectId: p.id } })}
                        className="px-3 py-1 rounded-lg bg-[#E95420]/20 text-[#E95420] hover:bg-[#E95420] hover:text-white border border-[#E95420]/30 text-xs font-semibold font-mono flex items-center gap-1 transition-colors"
                      >
                        Details <ArrowRight size={12} />
                      </button>

                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noreferrer"
                          className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/20 text-white font-mono flex items-center gap-1 transition-colors text-xs"
                          title="View GitHub Repository"
                        >
                          <Code size={12} /> Source
                        </a>
                      )}

                      {p.demo && (
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 font-mono flex items-center gap-1 transition-colors text-xs"
                          title="Launch Live Demo"
                        >
                          <ExternalLink size={12} /> Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="p-12 text-center text-white/40 font-mono text-xs">
                No projects matched your search criteria.
              </div>
            )}
          </div>
        )}

        {/* MORE SYSTEMS & APPLIED ENGINEERING PROJECTS SECTION */}
        {currentSection === 'systems' && (
          <div className="space-y-5">
            <div>
              <div className="flex items-center gap-2">
                <Server size={18} className="text-[#E95420]" />
                <h3 className="text-base font-bold text-white">More Systems & Applied Engineering Projects</h3>
              </div>
              <p className="text-xs text-white/50 mt-1">
                Distributed code execution engines, high-concurrency event microservices, AI geospatial intelligence, acoustic models, and network socket programming.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {systemsProjects.map((p) => (
                <div
                  key={p.id}
                  className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/25 transition-all flex flex-col justify-between space-y-4 group"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-sky-500/15 border border-sky-500/30 text-sky-400 flex items-center justify-center shrink-0">
                          <Server size={20} />
                        </div>
                        <div>
                          <h4 className="font-bold text-sm text-white group-hover:text-sky-300 transition-colors">
                            {p.title}
                          </h4>
                          <p className="text-[11px] text-emerald-400 font-mono">
                            {p.positioning}
                          </p>
                        </div>
                      </div>

                      <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded uppercase shrink-0 border bg-sky-500/10 text-sky-300 border-sky-500/20">
                        Systems
                      </span>
                    </div>

                    <p className="text-xs text-white/70 leading-relaxed line-clamp-2 mt-2">
                      {p.shortDesc}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {p.tech.map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-white/70">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs">
                    <span className="font-mono text-emerald-400 text-[11px] font-medium">
                      {p.metrics[0]}
                    </span>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => openWindow(`project-${p.id}`, { title: p.title, icon: 'Folder', customProps: { projectId: p.id } })}
                        className="px-3 py-1 rounded-lg bg-[#E95420]/20 text-[#E95420] hover:bg-[#E95420] hover:text-white border border-[#E95420]/30 text-xs font-semibold font-mono flex items-center gap-1 transition-colors"
                      >
                        Details <ArrowRight size={12} />
                      </button>

                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noreferrer"
                          className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-white font-mono flex items-center gap-1 transition-colors text-xs"
                        >
                          <Code size={12} /> Source
                        </a>
                      )}

                      {p.demo && (
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 font-mono flex items-center gap-1 transition-colors text-xs"
                        >
                          <ExternalLink size={12} /> Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ABOUT ME SECTION */}
        {currentSection === 'about' && (
          <div className="space-y-6 max-w-xl">
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
              <img src="/profile.jpg" alt="Ansh Pathak" className="w-16 h-16 rounded-xl object-cover border border-white/20" />
              <div>
                <h3 className="font-bold text-base text-white">{personalData.name}</h3>
                <p className="text-xs text-emerald-400 font-mono">{personalData.role}</p>
                <p className="text-xs text-white/60 mt-1">{personalData.education.institution}</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3 text-xs leading-relaxed text-white/80">
              <p>"{personalData.summary}"</p>
              <button
                onClick={() => openWindow('about')}
                className="px-4 py-2 rounded-xl bg-[#E95420] text-white font-semibold hover:bg-orange-600 transition-colors"
              >
                Launch Full About Me App
              </button>
            </div>
          </div>
        )}

        {/* RESUME SECTION */}
        {currentSection === 'resume' && (
          <div className="space-y-4 max-w-lg">
            <h3 className="text-sm font-bold text-white">Verified Resume Document</h3>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText className="text-emerald-400" size={20} />
                <div>
                  <span className="text-xs font-semibold block">{personalData.resumes[0].name}</span>
                  <span className="text-[10px] text-white/50 font-mono">Computer Science (AI) Undergraduate</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => openWindow('resume')}
                  className="px-3 py-1 rounded bg-white/10 hover:bg-white/20 text-xs font-mono"
                >
                  Preview
                </button>
                <a
                  href={personalData.resumes[0].url}
                  download="Ansh_Pathak_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1 rounded bg-[#E95420] text-white hover:bg-orange-600 text-xs font-mono flex items-center gap-1"
                >
                  <ExternalLink size={12} /> Download
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
