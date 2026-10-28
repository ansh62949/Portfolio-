import React, { useState, useEffect } from 'react';
import { galleryItems } from '../../data/portfolio';
import { X, ZoomIn, CheckCircle2, ChevronLeft, ChevronRight, Tag } from 'lucide-react';

export const PhotosApp = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);

  const categories = ['All', 'Certificates', 'Hackathons', 'Profile'];

  const filteredItems = galleryItems.filter((item) =>
    activeCategory === 'All' ? true : item.category === activeCategory
  );

  // Keyboard navigation for lightbox (Escape to close, Left/Right arrows to cycle)
  useEffect(() => {
    if (activeLightboxIndex === null) return;

    const handleKey = (e) => {
      if (e.key === 'Escape') {
        setActiveLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setActiveLightboxIndex((prev) => (prev + 1) % filteredItems.length);
      } else if (e.key === 'ArrowLeft') {
        setActiveLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [activeLightboxIndex, filteredItems.length]);

  return (
    <div className="h-full bg-[#12121c] text-white p-6 sm:p-8 overflow-y-auto custom-scrollbar select-none font-sans space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
          Verified Photos & Visual Proofs
        </h2>
        <p className="text-xs text-white/50 font-mono mt-1">
          Authentic certificates, engineering moments, and verified visual artifacts.
        </p>
      </div>

      {/* Filter Categories Bar */}
      <div className="flex flex-wrap items-center gap-2 border-b border-white/10 pb-4">
        <span className="text-xs font-mono text-white/40 uppercase tracking-wider flex items-center gap-1 mr-2">
          <Tag size={12} /> Category:
        </span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors ${
              activeCategory === cat
                ? 'bg-[#E95420] text-white font-bold'
                : 'bg-white/5 hover:bg-white/10 text-white/60'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setActiveLightboxIndex(index)}
            className="group relative rounded-2xl overflow-hidden bg-black/40 border border-white/10 hover:border-[#E95420]/50 cursor-pointer transition-all duration-200 shadow-xl"
          >
            <div className="aspect-[4/3] w-full overflow-hidden bg-black/60 relative">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Verified badge */}
              <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-[10px] font-mono flex items-center gap-1 backdrop-blur-md">
                <CheckCircle2 size={11} /> Verified Proof
              </div>

              {/* Zoom hint */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn size={14} />
              </div>
            </div>

            <div className="p-4 bg-[#181824]">
              <span className="text-[10px] font-mono text-[#E95420] uppercase tracking-wider block mb-0.5">
                {item.category}
              </span>
              <h4 className="font-bold text-sm text-white truncate">{item.title}</h4>
              <p className="text-xs text-white/50 mt-1 line-clamp-1">{item.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && filteredItems[activeLightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setActiveLightboxIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setActiveLightboxIndex(null)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-50"
            title="Close (ESC)"
          >
            <X size={20} />
          </button>

          {/* Previous / Next buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-50"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveLightboxIndex((prev) => (prev + 1) % filteredItems.length);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-50"
          >
            <ChevronRight size={22} />
          </button>

          {/* Modal Image Box */}
          <div
            className="max-w-4xl max-h-[85vh] flex flex-col items-center select-text"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredItems[activeLightboxIndex].src}
              alt={filteredItems[activeLightboxIndex].title}
              className="max-h-[70vh] max-w-full rounded-2xl object-contain shadow-2xl border border-white/20"
            />
            <div className="mt-4 text-center">
              <h3 className="text-base font-bold text-white">
                {filteredItems[activeLightboxIndex].title}
              </h3>
              <p className="text-xs text-white/60 font-mono mt-1">
                {filteredItems[activeLightboxIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
