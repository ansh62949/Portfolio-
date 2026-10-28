import React, { useState } from 'react';
import { techCategories } from '../../data/portfolio';
import { Search, Server, Cpu, Database, Cloud, ShieldCheck } from 'lucide-react';

const categoryIconMap = {
  Backend: Server,
  'Distributed Systems': Server,
  AI: Cpu,
  Data: Database,
  Cloud: Cloud,
  Quality: ShieldCheck
};

export const TechStackApp = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = techCategories
    .filter((cat) => activeCategory === 'All' || cat.category === activeCategory)
    .map((cat) => ({
      ...cat,
      items: cat.items.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.note.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }))
    .filter((cat) => cat.items.length > 0);

  return (
    <div className="h-full bg-[#12121c] text-white p-6 sm:p-8 overflow-y-auto custom-scrollbar select-text space-y-6 font-sans">
      {/* Header */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
          Verified Technology Stack Matrix
        </h2>
        <p className="text-xs text-white/50 font-mono mt-1">
          Production capabilities across backend systems, distributed architectures, and AI agent workflows.
        </p>
      </div>

      {/* Search & Category Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between border-b border-white/10 pb-4">
        <div className="relative flex-1 max-w-sm">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search technologies, tools, protocols..."
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#E95420]"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => setActiveCategory('All')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
              activeCategory === 'All'
                ? 'bg-[#E95420] text-white font-bold'
                : 'bg-white/5 text-white/70 hover:bg-white/10'
            }`}
          >
            All
          </button>
          {techCategories.map((c) => (
            <button
              key={c.category}
              onClick={() => setActiveCategory(c.category)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
                activeCategory === c.category
                  ? 'bg-[#E95420] text-white font-bold'
                  : 'bg-white/5 text-white/70 hover:bg-white/10'
              }`}
            >
              {c.category}
            </button>
          ))}
        </div>
      </div>

      {/* Categorized Technologies Grid */}
      <div className="space-y-8">
        {filteredCategories.length === 0 ? (
          <div className="p-8 text-center text-white/40 font-mono text-xs">
            No technologies match your filter criteria.
          </div>
        ) : (
          filteredCategories.map((group) => {
            const Icon = categoryIconMap[group.category] || Server;

            return (
              <div key={group.category} className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#E95420]/15 text-[#E95420] flex items-center justify-center">
                    <Icon size={16} />
                  </div>
                  <h3 className="font-bold text-sm text-white font-display">
                    {group.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all flex items-start gap-3"
                    >
                      <div className="w-10 h-10 rounded-lg bg-black/40 border border-white/10 p-1.5 flex items-center justify-center shrink-0">
                        <img src={item.logo} alt={item.name} className="w-full h-full object-contain" />
                      </div>

                      <div className="overflow-hidden">
                        <div className="flex items-center justify-between gap-1">
                          <span className="font-bold text-xs text-white truncate">{item.name}</span>
                          <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            {item.level}
                          </span>
                        </div>
                        <p className="text-[11px] text-white/50 mt-1 leading-snug line-clamp-2">
                          {item.note}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
