import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Code, Database, Cpu, Layers } from 'lucide-react';
import { projects } from '../data/portfolio';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) return <div className="min-h-screen flex items-center justify-center">Project not found</div>;

  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-primary transition-colors mb-12">
          <ArrowLeft size={20} /> Back to Portfolio
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24"
        >
          <div>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tighter mb-8 leading-tight">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-3 mb-8">
              {project.tech.map((t) => (
                <span key={t} className="px-4 py-2 glass rounded-xl text-sm font-bold text-primary border border-primary/20">
                  {t}
                </span>
              ))}
            </div>
            <p className="text-xl text-white/60 leading-relaxed mb-10">
              {project.description}
            </p>
            <div className="flex gap-4">
              <a href={project.github} className="px-8 py-4 bg-white text-black font-bold rounded-2xl flex items-center gap-2 hover:bg-primary transition-colors">
                <Code size={24} /> View GitHub Source
              </a>
            </div>
          </div>
          <div className="glass rounded-[40px] p-2 overflow-hidden border-white/5">
            <img 
              src={`https://images.unsplash.com/photo-${project.photoId || '1558494949-ef010cbdcc31'}?auto=format&fit=crop&q=80&w=1200`} 
              alt={project.title} 
              className="w-full rounded-[36px]" 
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="glass p-10 rounded-3xl">
            <Layers className="text-primary mb-6" size={32} />
            <h3 className="text-2xl font-bold mb-4">Architecture</h3>
            <p className="text-white/50">{project.architecture}</p>
          </div>
          <div className="glass p-10 rounded-3xl">
            <Cpu className="text-secondary mb-6" size={32} />
            <h3 className="text-2xl font-bold mb-4">Features</h3>
            <ul className="space-y-3">
              {project.features.map((f, i) => (
                <li key={i} className="text-white/50 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass p-10 rounded-3xl">
            <Database className="text-primary mb-6" size={32} />
            <h3 className="text-2xl font-bold mb-4">Impact</h3>
            <div className="space-y-6">
              {project.metrics.map((m, i) => (
                <div key={i} className="flex justify-between items-end border-b border-white/10 pb-4">
                  <span className="text-white/40 uppercase tracking-widest text-xs font-bold">{m.split(' ').slice(1).join(' ')}</span>
                  <span className="text-2xl font-display font-bold text-white">{m.split(' ')[0]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
