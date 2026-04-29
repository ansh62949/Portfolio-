import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { techStack } from '../data/portfolio';

const TechStack = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1200);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % techStack.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + techStack.length) % techStack.length);
  };

  const getVisibleItems = () => {
    const items = [];
    for (let i = -1; i <= 1; i++) {
      let index = (currentIndex + i + techStack.length) % techStack.length;
      items.push({ ...techStack[index], offset: i, originalIndex: index });
    }
    return items;
  };

  return (
    <section id="tech" className="py-32 px-6 bg-[#0a0a0f] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none z-10" />
      
      <div className="max-w-7xl mx-auto relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <h3 className="text-4xl md:text-6xl font-display font-extrabold text-[#38bdf8] mb-4">My Tech Stack</h3>
        </motion.div>

        <div className="relative h-[450px] flex items-center justify-center">
          <AnimatePresence mode="popLayout">
            {getVisibleItems().map((item) => (
              <motion.div
                key={item.originalIndex}
                layout
                initial={{ 
                  opacity: 0, 
                  x: item.offset * 300, 
                  scale: item.offset === 0 ? 0.8 : 0.6,
                  zIndex: item.offset === 0 ? 10 : 0
                }}
                animate={{ 
                  opacity: item.offset === 0 ? 1 : 0.4,
                  x: item.offset * (windowWidth < 768 ? 160 : 350),
                  scale: item.offset === 0 ? 1 : 0.75,
                  zIndex: item.offset === 0 ? 20 : 10
                }}
                exit={{ 
                  opacity: 0,
                  scale: 0.5,
                  zIndex: 0
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className={`absolute w-72 md:w-80 h-[400px] bg-[#13131a] rounded-[40px] p-8 flex flex-col items-center justify-center cursor-pointer transition-colors ${item.offset === 0 ? 'border border-[#38bdf8]/30 shadow-[0_0_80px_rgba(56,189,248,0.15)]' : 'border border-white/5'}`}
                onClick={() => {
                  if (item.offset === 1) nextSlide();
                  if (item.offset === -1) prevSlide();
                }}
              >
                <div className="w-24 h-24 mb-8 relative">
                  <img src={item.logo} alt={item.name} className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]" />
                </div>
                
                <h4 className="text-2xl font-bold text-white mb-4 text-center">{item.name}</h4>
                
                <div className={`px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase mb-6 ${
                  item.level === 'Advanced' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 
                  item.level === 'Intermediate' ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' : 
                  'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                }`}>
                  {item.level}
                </div>

                <p className="text-center text-white/50 text-sm font-medium leading-relaxed max-w-[200px]">
                  {item.capabilities}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute -bottom-16 flex gap-8 z-30">
            <button 
              onClick={prevSlide}
              className="w-14 h-14 rounded-full bg-[#1a1a24] border border-white/5 flex items-center justify-center hover:bg-[#38bdf8]/10 hover:border-[#38bdf8]/30 hover:text-[#38bdf8] transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="w-14 h-14 rounded-full bg-[#1a1a24] border border-white/5 flex items-center justify-center hover:bg-[#38bdf8]/10 hover:border-[#38bdf8]/30 hover:text-[#38bdf8] transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
