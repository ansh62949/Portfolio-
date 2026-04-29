import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6"
    >
      <div className="glass px-8 py-3 rounded-full flex gap-8 items-center">
        <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
        <a href="#tech" className="text-sm font-medium hover:text-primary transition-colors">Stack</a>
        <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">Projects</a>
        <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
