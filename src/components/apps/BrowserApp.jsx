import React, { useState } from 'react';
import { readingFeed, certifications, achievements } from '../../data/portfolio';
import {
  Compass,
  ArrowLeft,
  ArrowRight,
  RotateCw,
  ExternalLink,
  Award,
  Tag
} from 'lucide-react';

export const BrowserApp = () => {
  const [activeTab, setActiveTab] = useState('feed'); // 'feed' | 'certifications' | 'milestones'
  const [selectedTag, setSelectedTag] = useState('All');

  const tags = ['All', 'AI & Agents', 'Backend & Systems', 'Certification', 'Hackathons'];

  const filteredFeed = readingFeed.filter((item) =>
    selectedTag === 'All' ? true : item.category === selectedTag
  );

  return (
    <div className="h-full bg-[#12121c] text-white flex flex-col font-sans select-text">
      {/* Browser Chrome Header (Address bar & controls) */}
      <div className="bg-[#181824] border-b border-white/10 px-4 py-2.5 flex items-center gap-3 shrink-0">
        <div className="flex items-center gap-1.5 text-white/50">
          <button className="p-1 rounded hover:bg-white/10 hover:text-white" title="Back">
            <ArrowLeft size={14} />
          </button>
          <button className="p-1 rounded hover:bg-white/10 hover:text-white" title="Forward">
            <ArrowRight size={14} />
          </button>
          <button className="p-1 rounded hover:bg-white/10 hover:text-white" title="Reload">
            <RotateCw size={14} />
          </button>
        </div>

        {/* Address / Search Bar */}
        <div className="flex-1 max-w-xl mx-auto flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-black/40 border border-white/10 text-xs font-mono text-white/70">
          <Compass size={14} className="text-[#E95420]" />
          <span className="text-emerald-400">https://</span>
          <span>ansh.engineering/achievements-and-learning</span>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-1 text-xs">
          <button
            onClick={() => setActiveTab('feed')}
            className={`px-3 py-1 rounded-lg transition-colors font-medium ${
              activeTab === 'feed' ? 'bg-[#E95420] text-white font-bold' : 'hover:bg-white/10 text-white/70'
            }`}
          >
            Technical Feed
          </button>
          <button
            onClick={() => setActiveTab('certifications')}
            className={`px-3 py-1 rounded-lg transition-colors font-medium ${
              activeTab === 'certifications' ? 'bg-[#E95420] text-white font-bold' : 'hover:bg-white/10 text-white/70'
            }`}
          >
            Certificates
          </button>
          <button
            onClick={() => setActiveTab('milestones')}
            className={`px-3 py-1 rounded-lg transition-colors font-medium ${
              activeTab === 'milestones' ? 'bg-[#E95420] text-white font-bold' : 'hover:bg-white/10 text-white/70'
            }`}
          >
            Milestones
          </button>
        </div>
      </div>

      {/* Browser Content Area */}
      <div className="flex-1 p-6 sm:p-8 overflow-y-auto custom-scrollbar space-y-6">
        {/* FEED TAB */}
        {activeTab === 'feed' && (
          <div className="space-y-6 max-w-4xl mx-auto">
            {/* Filter Tags */}
            <div className="flex flex-wrap items-center gap-2 border-b border-white/10 pb-4">
              <span className="text-xs font-mono text-white/40 uppercase tracking-wider flex items-center gap-1 mr-2">
                <Tag size={12} /> Filter:
              </span>
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors ${
                    selectedTag === tag
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold'
                      : 'bg-white/5 hover:bg-white/10 text-white/60'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Reading Feed Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredFeed.map((item) => (
                <article
                  key={item.id}
                  className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#E95420]/40 hover:bg-white/[0.08] transition-all flex flex-col justify-between space-y-4 group"
                >
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-mono text-white/40 mb-2">
                      <span className="text-emerald-400 font-semibold">{item.source}</span>
                      <span>{item.date} • {item.readTime}</span>
                    </div>

                    <h3 className="text-base font-bold text-white group-hover:text-[#E95420] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-white/65 mt-2 leading-relaxed">
                      {item.snippet}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {item.tags.map((t) => (
                        <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-white/60">
                          #{t}
                        </span>
                      ))}
                    </div>

                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-mono text-[#E95420] hover:underline flex items-center gap-1 shrink-0"
                      >
                        Inspect <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* CERTIFICATIONS TAB */}
        {activeTab === 'certifications' && (
          <div className="max-w-4xl mx-auto space-y-4">
            <h3 className="text-lg font-bold text-white font-display">Verified Professional Certifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((c) => (
                <div key={c.id} className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                      <Award size={22} />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                      {c.credential}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-white">{c.title}</h4>
                    <p className="text-xs text-white/50 font-mono mt-0.5">{c.issuer} • {c.date}</p>
                  </div>

                  <div className="flex flex-wrap gap-1 pt-2">
                    {c.skills.map((s) => (
                      <span key={s} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-white/70">
                        {s}
                      </span>
                    ))}
                  </div>

                  {c.link && (
                    <div className="pt-3 border-t border-white/10">
                      <a
                        href={c.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-mono text-emerald-400 hover:underline flex items-center gap-1"
                      >
                        Verify Credential / Certificate Proof &rarr;
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* MILESTONES TAB */}
        {activeTab === 'milestones' && (
          <div className="max-w-4xl mx-auto space-y-4">
            <h3 className="text-lg font-bold text-white font-display">Verified Engineering Milestones</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {achievements.map((a) => (
                <div key={a.id} className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#E95420] font-bold">{a.category}</span>
                    <span className="text-white/40">{a.date}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white">{a.title}</h4>
                  <p className="text-xs text-white/60 leading-relaxed">{a.desc}</p>
                  <span className="inline-block text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded mt-2">
                    ✓ {a.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
