import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Key, Leaf, ArrowRight, Lock, Unlock, Flower2, X } from 'lucide-react';
import { CANDIDATE_INFO } from '../data/cvData';
import authenticPortraitImg from '../assets/images/portrait_ngoc_minh_real_1791124782373.jpg';

interface GardenGateProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose?: () => void;
}

export const GardenGate: React.FC<GardenGateProps> = ({ isOpen, onOpen, onClose }) => {
  const [isOpeningAnim, setIsOpeningAnim] = useState(false);
  const [bloomActive, setBloomActive] = useState(false);

  const handleUnlockClick = () => {
    setIsOpeningAnim(true);
    setBloomActive(true);
    // Flower petals burst and gate swings open with botanical grandeur
    setTimeout(() => {
      onOpen();
    }, 1400);
  };

  if (isOpen) {
    return null;
  }

  // Radiating blooming petals for the bloom effect
  const bloomPetals = Array.from({ length: 12 }, (_, i) => i);

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center bg-[#040e08]"
      style={{ perspective: '1600px' }}
    >
      {/* Background: Overgrown Botanical Conservatory Archway & Flowers */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/src/assets/images/garden_botanical_portal_1791124766628.jpg"
          alt="Overgrown Botanical Conservatory Portal"
          className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-[1.12] scale-105"
        />
        {/* Morning Mist and Sunbeams */}
        <div className="absolute inset-0 bg-radial-gradient from-emerald-950/30 via-[#05130b]/85 to-[#030906]" />
        <div className="absolute inset-0 opacity-30 animate-mist bg-gradient-to-t from-emerald-500/20 via-transparent to-amber-200/10" />
      </div>

      {/* Ornate Conservatory Double Doors with 3D Swing */}
      <div className="absolute inset-0 flex pointer-events-none z-10">
        
        {/* Left Gate Wing */}
        <motion.div
          initial={{ rotateY: 0 }}
          animate={{
            rotateY: isOpeningAnim ? -115 : 0,
            x: isOpeningAnim ? '-20%' : '0%',
            opacity: isOpeningAnim ? 0.2 : 1,
          }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-1/2 h-full border-r-2 border-amber-400/50 relative bg-gradient-to-r from-[#030d07]/95 via-[#06190f]/95 to-[#082214]/90 shadow-2xl flex flex-col justify-between p-6 sm:p-12 overflow-hidden"
          style={{ transformOrigin: 'left center' }}
        >
          {/* Ornate botanical lattice and ironwork */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fde047_1px,transparent_1px)] [background-size:28px_28px]" />
          
          {/* Antique Classical Moldings */}
          <div className="absolute top-10 left-10 right-10 h-64 border-2 border-amber-400/30 rounded-t-full border-b-0 pointer-events-none" />
          <div className="absolute top-16 left-16 right-16 h-52 border border-emerald-400/30 rounded-t-full border-b-0 pointer-events-none" />
          
          {/* Top Left Antique Seal */}
          <div className="relative z-10 flex items-center gap-2 text-amber-300/90 text-xs font-serif tracking-widest uppercase">
            <span className="text-amber-400 text-sm">❦</span>
            <span>Foreign Trade University</span>
          </div>

          {/* Center Vertical Wrought-Iron Spindles */}
          <div className="relative z-10 flex justify-around h-1/2 items-center opacity-30 px-8">
            <div className="w-1.5 h-full bg-gradient-to-b from-amber-400/40 via-emerald-400/30 to-amber-500/40 rounded-full" />
            <div className="w-1 h-4/5 bg-gradient-to-b from-amber-400/40 via-emerald-400/30 to-amber-500/40 rounded-full" />
            <div className="w-1.5 h-full bg-gradient-to-b from-amber-400/40 via-emerald-400/30 to-amber-500/40 rounded-full" />
          </div>

          <div className="relative z-10 text-[10px] text-emerald-400/80 font-mono tracking-widest">
            THE GARDEN PORTAL // WING A
          </div>
        </motion.div>

        {/* Right Gate Wing */}
        <motion.div
          initial={{ rotateY: 0 }}
          animate={{
            rotateY: isOpeningAnim ? 115 : 0,
            x: isOpeningAnim ? '20%' : '0%',
            opacity: isOpeningAnim ? 0.2 : 1,
          }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-1/2 h-full border-l-2 border-amber-400/50 relative bg-gradient-to-l from-[#030d07]/95 via-[#06190f]/95 to-[#082214]/90 shadow-2xl flex flex-col justify-between p-6 sm:p-12 overflow-hidden text-right"
          style={{ transformOrigin: 'right center' }}
        >
          {/* Lattice pattern */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fde047_1px,transparent_1px)] [background-size:28px_28px]" />
          
          {/* Antique Classical Moldings */}
          <div className="absolute top-10 left-10 right-10 h-64 border-2 border-amber-400/30 rounded-t-full border-b-0 pointer-events-none" />
          <div className="absolute top-16 left-16 right-16 h-52 border border-emerald-400/30 rounded-t-full border-b-0 pointer-events-none" />

          {/* Top Right Antique Seal */}
          <div className="relative z-10 flex items-center justify-end gap-2 text-amber-300/90 text-xs font-serif tracking-widest uppercase">
            <span>International Finance</span>
            <span className="text-amber-400 text-sm">☙</span>
          </div>

          {/* Center Vertical Spindles */}
          <div className="relative z-10 flex justify-around h-1/2 items-center opacity-30 px-8">
            <div className="w-1.5 h-full bg-gradient-to-b from-amber-400/40 via-emerald-400/30 to-amber-500/40 rounded-full" />
            <div className="w-1 h-4/5 bg-gradient-to-b from-amber-400/40 via-emerald-400/30 to-amber-500/40 rounded-full" />
            <div className="w-1.5 h-full bg-gradient-to-b from-amber-400/40 via-emerald-400/30 to-amber-500/40 rounded-full" />
          </div>

          <div className="relative z-10 text-[10px] text-emerald-400/80 font-mono tracking-widest">
            EST. 2024 - 2026 // WING B
          </div>
        </motion.div>

      </div>

      {/* Bursting Flower Bloom Animation Overlay when Opening */}
      <AnimatePresence>
        {bloomActive && (
          <div className="absolute inset-0 z-40 pointer-events-none flex items-center justify-center overflow-hidden">
            {/* Center golden sunburst */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 6, opacity: 0.95 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="w-48 h-48 rounded-full bg-gradient-to-r from-amber-200 via-emerald-300 to-teal-200 blur-2xl"
            />

            {/* Radiating Blooming Flower Petals */}
            {bloomPetals.map((idx) => {
              const angle = (idx * 360) / bloomPetals.length;
              const rad = (angle * Math.PI) / 180;
              const dist = 320;
              const targetX = Math.cos(rad) * dist;
              const targetY = Math.sin(rad) * dist;

              return (
                <motion.div
                  key={idx}
                  initial={{ scale: 0, x: 0, y: 0, opacity: 1, rotate: angle }}
                  animate={{
                    scale: [0, 1.8, 2.4],
                    x: targetX,
                    y: targetY,
                    opacity: [1, 0.9, 0],
                    rotate: angle + 45,
                  }}
                  transition={{ duration: 1.3, ease: 'easeOut' }}
                  className="absolute w-12 h-20 rounded-full bg-gradient-to-t from-emerald-400 via-amber-200 to-white shadow-xl opacity-90"
                  style={{ transformOrigin: 'center bottom' }}
                />
              );
            })}
          </div>
        )}
      </AnimatePresence>

      {/* Center Gate Plaque & Vintage Classical Interactive Unlocker */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 25 }}
        animate={{
          opacity: isOpeningAnim ? 0 : 1,
          scale: isOpeningAnim ? 1.25 : 1,
          y: isOpeningAnim ? -60 : 0,
        }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-30 max-w-xl mx-4 text-center p-6 sm:p-10 shape-conservatory-arch bg-[#091a11]/95 border-2 border-amber-400/80 shadow-[0_0_60px_rgba(0,0,0,0.85),inset_0_1px_3px_rgba(255,245,190,0.5)] backdrop-blur-xl"
      >
        {/* Subtle glowing halo */}
        <div className="absolute -inset-6 bg-gradient-to-r from-amber-400/20 via-emerald-500/20 to-teal-400/20 rounded-full blur-3xl pointer-events-none" />

        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-emerald-950/80 hover:bg-emerald-900 text-amber-300 hover:text-white border border-amber-400/40 transition-all cursor-pointer z-20"
            title="Return to Video Hero"
          >
            <X className="w-4 h-4" />
          </button>
        )}

        {/* Vintage Botanical Crest */}
        <div className="relative z-10 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#123623] to-[#081b11] border-2 border-amber-400/80 shadow-[0_4px_16px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.4)] mb-4 text-amber-300">
          <Flower2 className="w-8 h-8 text-amber-300 animate-spin" style={{ animationDuration: '24s' }} />
        </div>

        {/* Classical Engraved Eyebrow */}
        <div className="relative z-10 flex items-center justify-center gap-2 text-xs text-amber-300/90 font-serif tracking-widest uppercase mb-2">
          <span>❦ The Secret Garden of Finance ❦</span>
        </div>

        {/* Candidate Title */}
        <h1 className="relative z-10 text-3xl sm:text-5xl font-bold font-serif-garden text-white tracking-tight leading-snug drop-shadow-md">
          {CANDIDATE_INFO.fullName}
        </h1>

        <p className="relative z-10 mt-1.5 text-sm sm:text-base font-serif-garden italic text-emerald-200/95">
          {CANDIDATE_INFO.role} · Foreign Trade University (FTU)
        </p>

        <p className="relative z-10 mt-4 text-xs sm:text-sm text-emerald-100/80 leading-relaxed max-w-md mx-auto">
          Behind these overgrown botanical gates lies an enchanted financial sanctuary: 5,000+ real estate intelligence, empirical research on 200+ listed enterprises, and a 9.2%/year treasury management portfolio.
        </p>

        {/* Real Candidate Face Preview Badge */}
        <div className="relative z-10 mt-5 inline-flex items-center gap-3 p-2 pr-4 rounded-full bg-emerald-950/80 border border-amber-400/40 shadow-inner">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-amber-300/60 shrink-0">
            <img
              src={authenticPortraitImg}
              alt="Pham Ngoc Minh"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="text-left text-xs">
            <div className="font-semibold text-white font-serif-garden flex items-center gap-1.5">
              <span>Pham Ngoc Minh</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            </div>
            <div className="text-[10px] text-amber-300/80 font-mono">FTU · International Finance</div>
          </div>
        </div>

        {/* Classical Ornate Action Buttons: Unlock & Watch Video */}
        <div className="relative z-10 mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={handleUnlockClick}
            disabled={isOpeningAnim}
            className="btn-vintage-botanical px-7 py-3.5 rounded-2xl text-white font-semibold text-sm inline-flex items-center gap-2.5 cursor-pointer group shadow-xl"
          >
            <span className="p-1.5 rounded-lg bg-emerald-950/80 border border-amber-400/60 text-amber-300 shadow-sm">
              {isOpeningAnim ? (
                <Flower2 className="w-4 h-4 animate-spin text-amber-200" />
              ) : (
                <Key className="w-4 h-4 text-amber-300 group-hover:rotate-45 transition-transform" />
              )}
            </span>
            <span className="text-amber-100 group-hover:text-white transition-colors">
              {isOpeningAnim ? 'Blooming & Opening Gates...' : 'Unlock & Bloom the Secret Gate'}
            </span>
            <ArrowRight className="w-4 h-4 text-amber-300 group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

        {/* Footer Hint */}
        <div className="relative z-10 mt-5 flex items-center justify-center gap-3 text-[11px] text-emerald-400/80 font-serif">
          <span>❧ Touch the Golden Key to Step Inside ☙</span>
        </div>
      </motion.div>
    </div>
  );
};
