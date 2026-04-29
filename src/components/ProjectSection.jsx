import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github as GithubIcon, ExternalLink, ArrowUpRight, Code } from 'lucide-react';
import { projects } from '../data/portfolio';

const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 flex justify-between items-end"
        >
          <div>
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-secondary mb-4">Selected Works</h2>
            <h3 className="text-5xl md:text-7xl font-display font-extrabold tracking-tighter">PROJECTS</h3>
          </div>
          <p className="text-white/40 hidden md:block max-w-xs text-right">
            Pushing the boundaries of backend engineering and AI integration.
          </p>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              <div className="flex-1 w-full">
                <Link to={`/project/${project.id}`}>
                  <div className="relative group overflow-hidden rounded-3xl aspect-[16/9] glass cursor-none-trigger">
                    <img
                      src={`https://images.unsplash.com/photo-${index === 0 ? '1551434678-e076c223a692' : index === 1 ? '1518770660439-4636190af475' : '1558494949-ef010cbdcc31'}?auto=format&fit=crop&q=80&w=1200`}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="px-6 py-3 glass rounded-full flex items-center gap-2 font-bold">
                        View Details <ArrowUpRight size={20} />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="flex-1 space-y-6">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white/50">
                      {t}
                    </span>
                  ))}
                </div>
                
                <h4 className="text-4xl md:text-5xl font-display font-bold leading-tight">
                  {project.title}
                </h4>
                
                <p className="text-white/60 text-lg leading-relaxed">
                  {project.shortDesc}
                </p>

                <div className="grid grid-cols-3 gap-4 py-6 border-y border-white/10">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx}>
                      <p className="text-primary font-display font-bold text-lg">{metric.split(' ')[0]}</p>
                      <p className="text-[10px] text-white/40 uppercase tracking-wider">{metric.split(' ').slice(1).join(' ')}</p>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <Link
                    to={`/project/${project.id}`}
                    className="px-6 py-3 bg-white text-black font-bold rounded-xl flex items-center gap-2 hover:bg-primary transition-colors"
                  >
                    Details
                  </Link>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 glass text-white font-bold rounded-xl flex items-center gap-2 hover:border-white transition-colors"
                  >
                    <Code size={20} />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
