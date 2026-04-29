import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { ArrowDown, FileText, Code } from 'lucide-react';
import { personalData } from '../data/portfolio';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-20 px-6 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block px-4 py-1 glass rounded-full text-primary text-xs font-bold mb-6 tracking-widest uppercase"
          >
            AVAILABLE FOR OPPORTUNITIES
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-display font-extrabold leading-tight mb-4 tracking-tighter">
            FULL-STACK / <br />
            <span className="gradient-text">BACKEND</span> ENGINEER
          </h1>
          
          <div className="text-2xl md:text-3xl font-medium text-white/70 mb-8 h-12">
            <Typewriter
              options={{
                strings: ["Backend Developer", "AI Engineer", "System Designer"],
                autoStart: true,
                loop: true,
                wrapperClassName: "text-white",
              }}
            />
          </div>
          
          <p className="text-lg text-white/50 max-w-xl mb-10 leading-relaxed">
            Building scalable systems & AI-powered applications. {personalData.summary}
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-black font-bold rounded-xl flex items-center gap-2 hover:bg-primary transition-colors"
            >
              <Code size={20} />
              View Projects
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass text-white font-bold rounded-xl flex items-center gap-2 hover:border-primary transition-colors"
            >
              <FileText size={20} />
              Download Resume
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center relative"
        >
          <div className="relative w-80 h-80 md:w-[450px] md:h-[450px]">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl animate-pulse-slow" />
            
            {/* Profile Image Frame */}
            <div className="relative w-full h-full glass rounded-3xl overflow-hidden border-2 border-white/10 group">
              <img 
                src="/profile.jpg" 
                alt="Ansh Pathak" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <h2 className="text-3xl font-display font-bold">{personalData.name}</h2>
                <p className="text-primary font-medium tracking-wider uppercase text-sm">Software Engineer</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20"
      >
        <ArrowDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
