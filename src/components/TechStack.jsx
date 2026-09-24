import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Server, Cpu, Database, Cloud, ShieldCheck, Code2 } from 'lucide-react';
import { techCategories } from '../data/portfolio';

const iconMap = {
  "Backend Engineering": Server,
  "Distributed Systems": Server,
  "AI Engineering": Cpu,
  "Data & Storage": Database,
  "Cloud, Infrastructure & DevOps": Cloud,
  "Observability & Testing": ShieldCheck,
  "Languages": Code2
};

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCategories = activeCategory === "All" 
    ? techCategories 
    : techCategories.filter(c => c.category === activeCategory);

  return (
    <section id="tech" className="py-24 px-6 bg-[#08080c] relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 glass rounded-full text-xs font-mono text-emerald-400 uppercase tracking-widest mb-4">
            <Terminal size={14} /> Technology Matrix
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Categorized <span className="gradient-text">Skills & Capabilities</span>
          </h2>
        </motion.div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-2 mb-12 pb-4 border-b border-white/10">
          <button
            onClick={() => setActiveCategory("All")}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
              activeCategory === "All"
                ? "bg-primary text-black font-bold shadow-lg shadow-primary/20"
                : "glass text-white/70 hover:text-white"
            }`}
          >
            All Categories
          </button>
          {techCategories.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(cat.category)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                activeCategory === cat.category
                  ? "bg-primary text-black font-bold shadow-lg shadow-primary/20"
                  : "glass text-white/70 hover:text-white"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="space-y-12">
          {filteredCategories.map((group) => {
            const IconComp = iconMap[group.category] || Server;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    <IconComp size={20} />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white tracking-tight">
                    {group.category}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="glass p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-primary/40 hover:bg-white/[0.04] transition-all flex items-start gap-4"
                    >
                      <div className="w-10 h-10 shrink-0 p-1.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                        <img src={item.logo} alt={item.name} className="w-full h-full object-contain" />
                      </div>

                      <div className="space-y-1 overflow-hidden">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="font-bold text-white text-sm truncate">{item.name}</h4>
                          <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-md uppercase border ${
                            item.level === 'Advanced' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-sky-500/10 text-sky-400 border-sky-500/20'
                          }`}>
                            {item.level}
                          </span>
                        </div>
                        <p className="text-xs text-white/50 leading-snug">{item.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
