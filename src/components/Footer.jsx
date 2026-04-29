import React from 'react';
import { personalData } from '../data/portfolio';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:row justify-between items-center gap-6">
        <p className="text-white/40 text-sm">
          © {new Date().getFullYear()} {personalData.name}. All rights reserved.
        </p>
        <div className="flex gap-8 text-sm font-medium text-white/40">
          <a href="#!" className="hover:text-primary transition-colors">Resume</a>
          <a href="#!" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#!" className="hover:text-primary transition-colors">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
