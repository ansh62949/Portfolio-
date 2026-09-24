import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, ExternalLink, Layers, Terminal, Filter } from 'lucide-react';
import { projects } from '../data/portfolio';
import CaseStudyModal from './CaseStudyModal';

const ProjectSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ["All", "Flagship", "Backend", "AI", "Infrastructure"];

  const filteredProjects = projects.filter((p) => {
    if (selectedCategory === "All") return true;
    if (selectedCategory === "Flagship") return p.flagship;
    return p.category.includes(selectedCategory);
  });

  const flagshipList = filteredProjects.filter((p) => p.flagship);
  const secondaryList = filteredProjects.filter((p) => !p.flagship);

  return (
    <section id="projects" className="py-24 px-6 bg-[#050507] relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 glass rounded-full text-xs font-mono text-emerald-400 uppercase tracking-widest mb-4">
              <Terminal size={14} /> Technical Proof & Artifacts
            </div>
            <h2 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-white">
              Flagship <span className="gradient-text">Engineering Projects</span>
            </h2>
          </div>

          <p className="text-white/60 max-w-md text-sm sm:text-base leading-relaxed font-sans">
            Demonstrated implementations of backend systems, distributed architectures, LangGraph AI agent workflows, and cloud-native infrastructure.
          </p>
        </motion.div>

        {/* Filter Categories */}
        <div className="flex flex-wrap gap-2 mb-14 pb-4 border-b border-white/10 items-center">
          <span className="text-xs font-mono text-white/40 uppercase tracking-wider mr-2 flex items-center gap-1">
            <Filter size={14} /> Filter:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-primary text-black font-bold shadow-lg shadow-primary/20"
                  : "glass text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat === "All" ? "All Projects" : cat}
            </button>
          ))}
        </div>

        {/* FLAGSHIP PROJECTS GRID */}
        {flagshipList.length > 0 && (
          <div className="space-y-12 mb-20">
            {flagshipList.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="glass rounded-3xl p-6 sm:p-10 border border-white/15 bg-white/[0.02] hover:border-primary/40 transition-all group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Details */}
                  <div className="lg:col-span-8 space-y-6">
                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 items-center">
                      <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono font-bold rounded-full uppercase tracking-wider">
                        FLAGSHIP #{index + 1}
                      </span>
                      <span className="px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-mono font-bold rounded-full">
                        {project.architectureBadge}
                      </span>
                    </div>

                    {/* Title & One-Liner */}
                    <div>
                      <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-white group-hover:text-emerald-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-emerald-400 font-mono text-sm mt-1">{project.positioning}</p>
                    </div>

                    <p className="text-white/70 text-base leading-relaxed font-sans">
                      {project.shortDesc}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-mono text-white/80">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Metrics Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10">
                      {project.metrics.map((m, idx) => (
                        <div key={idx} className="bg-white/[0.03] p-3 rounded-xl border border-white/5">
                          <p className="text-emerald-400 font-mono font-bold text-xs">{m}</p>
                          <p className="text-[10px] text-white/40 uppercase tracking-wider mt-0.5">Engineering Signal</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Quick CTA Panel */}
                  <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-4 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-8">
                    <div className="space-y-3">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-white/40">Architecture Summary</h4>
                      <p className="text-xs font-mono text-white/70 bg-black/40 p-4 rounded-xl border border-white/10 leading-relaxed">
                        {project.architecture}
                      </p>
                    </div>

                    <div className="space-y-3 pt-4">
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="w-full py-3.5 bg-primary text-black font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-emerald-400 transition-colors text-sm shadow-md shadow-primary/20"
                      >
                        <Layers size={18} /> View Architecture & Case Study
                      </button>

                      <div className="flex gap-3">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="flex-1 py-3 glass text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:border-white/30 transition-colors text-xs"
                          >
                            <Code size={16} /> GitHub
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="flex-1 py-3 glass text-emerald-400 font-semibold rounded-xl flex items-center justify-center gap-2 hover:border-emerald-500/40 transition-colors text-xs"
                          >
                            <ExternalLink size={16} /> Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* SECONDARY TECHNICAL PROJECTS GRID */}
        {secondaryList.length > 0 && (
          <div className="mt-20">
            <h3 className="text-2xl font-display font-bold text-white mb-8 border-b border-white/10 pb-4">
              More Systems & Applied Engineering Projects
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {secondaryList.map((project) => (
                <div
                  key={project.id}
                  className="glass p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-white/20 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-xl font-display font-bold text-white">{project.title}</h4>
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer" className="text-white/40 hover:text-white transition-colors">
                          <Code size={18} />
                        </a>
                      )}
                    </div>
                    <p className="text-emerald-400 font-mono text-xs mb-3">{project.positioning}</p>
                    <p className="text-white/60 text-sm leading-relaxed mb-4">{project.shortDesc}</p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.map((t) => (
                        <span key={t} className="px-2.5 py-0.5 bg-white/5 rounded-md text-[11px] font-mono text-white/70">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex justify-between items-center text-xs">
                    <span className="font-mono text-white/40">{project.metrics[0]}</span>
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="text-emerald-400 font-semibold hover:underline flex items-center gap-1"
                    >
                      Details &rarr;
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Case Study Modal Trigger */}
      <CaseStudyModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};

export default ProjectSection;
