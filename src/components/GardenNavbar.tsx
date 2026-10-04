import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Leaf, Sparkles, Menu, X, Download, Lock } from 'lucide-react';
import { CANDIDATE_INFO } from '../data/cvData';

interface GardenNavbarProps {
  discoveredSecrets: number;
  totalSecrets: number;
  onLockGate: () => void;
}

export const GardenNavbar: React.FC<GardenNavbarProps> = ({
  discoveredSecrets,
  totalSecrets,
  onLockGate,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      setIsPastHero(window.scrollY > window.innerHeight * 0.75);

      const sections = [
        'hero',
        'identity',
        'education',
        'thienkhoi',
        'research',
        'doimau',
        'competitions',
        'skills',
        'lifestyle',
        'contact',
      ];

      const scrollPosition = window.scrollY + 220;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Gateway' },
    { id: 'identity', label: 'Philosophy' },
    { id: 'education', label: 'FTU Roots' },
    { id: 'thienkhoi', label: '5,000+ Assets' },
    { id: 'research', label: '200+ Firms' },
    { id: 'doimau', label: '9.2% Fund' },
    { id: 'competitions', label: 'Arenas' },
    { id: 'skills', label: 'Toolkit' },
    { id: 'lifestyle', label: 'Pavilion' },
    { id: 'contact', label: 'Connect' },
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isPastHero
          ? 'opacity-100 translate-y-0 pointer-events-auto bg-[#08150f]/90 backdrop-blur-md border-b border-emerald-900/50 shadow-lg py-2.5'
          : 'opacity-0 -translate-y-full pointer-events-none'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px- flex items-center justify-between">
        {/* Monogram Brand */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 text-emerald-100 hover:text-emerald-300 transition-colors group"
        >
          <div className="w-8 h-8 rounded-full bg-emerald-900/80 border border-emerald-500/40 flex items-center justify-center text- font-serif font-bold text-emerald-300 shadow-inner group-hover:scale-105 transition-transform">
            NMP
          </div>
          <div>
            <div className="text-base sm:text-lg font-semibold tracking-wide flex items-center gap-1.5">
              <span>{CANDIDATE_INFO.fullName}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <p className="text-xs sm:text-sm text-emerald-400/80 font-normal">
              FTU International Finance · The Secret Garden
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-4 py-2 text-sm lg:text- tracking-wide transition-all relative ${
                  isActive
                    ? 'text-emerald-300 font-semibold'
                    : 'text-emerald-200/70 hover:text-emerald-100'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-emerald-400 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Actions Right */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Garden Secret Progress */}
          <div
            className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-800/50 text- text-emerald-300"
            title="Secrets discovered in the garden"
          >
            <Sparkles className="w-3 h-3 text-amber-300" />
            <span>
              Secrets: {discoveredSecrets}/{totalSecrets}
            </span>
          </div>

          {/* Close Garden Gate Trigger */}
          <button
            onClick={onLockGate}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 hover:text-emerald-100 text-xs border border-emerald-800/50 transition-all hover:scale-105"
            title="Return to the Grand Gate entrance"
          >
            <Lock className="w-3.5 h-3.5 text-amber-300" />
            <span className="hidden md:inline">Lock Gate</span>
          </button>

          {/* Quick Print/Save CV */}
          <button
            onClick={handlePrint}
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-800/70 hover:bg-emerald-700/80 text-emerald-100 text-xs font-medium border border-emerald-500/40 shadow-sm transition-all hover:scale-105 active:scale-95"
            title="Save or Print Resume"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-emerald-950/80 border border-emerald-800/50 text-emerald-300 hover:text-emerald-100"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#07150e]/95 border-b border-emerald-800/60 px-4 pt-3 pb-6 backdrop-blur-xl"
          >
            <div className="grid grid-cols-2 gap-2 mb-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`p-2.5 rounded-lg text-xs tracking-wide transition-colors ${
                    activeSection === item.id
                      ? 'bg-emerald-800/50 text-emerald-200 font-semibold border border-emerald-600/40'
                      : 'text-emerald-300/80 hover:bg-emerald-900/30'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-emerald-900/50 text-xs text-emerald-400">
              <span className="flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                Discovered {discoveredSecrets}/{totalSecrets} secrets
              </span>
              <button
                onClick={handlePrint}
                className="flex items-center gap-1 px-3 py-1.5 rounded-md bg-emerald-800/80 text-emerald-100 text-xs"
              >
                <Download className="w-3.5 h-3.5" />
                Save Resume
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
