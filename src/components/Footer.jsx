import React from 'react';
import { personalData } from '../data/portfolio';

const GithubIcon = ({ size = 14, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 14, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/10 bg-[#050507]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <p className="text-white/80 font-display font-bold text-base">
            {personalData.name}
          </p>
          <p className="text-xs font-mono text-emerald-400 mt-0.5">
            Backend & AI Engineering Portfolio • {new Date().getFullYear()}
          </p>
        </div>

        <div className="flex items-center gap-6 text-xs font-mono text-white/50">
          <a href={personalData.contact.github} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-1.5">
            <GithubIcon size={14} /> GitHub
          </a>
          <a href={personalData.contact.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-1.5">
            <LinkedinIcon size={14} /> LinkedIn
          </a>
          <a href={personalData.resumes[0].url} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
