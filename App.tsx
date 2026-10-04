import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { AurevonHero } from './components/AurevonHero';
import { MorningDewCanvas } from './components/MorningDewCanvas';
import { GardenMusicPlayer } from './components/GardenMusicPlayer';
import { GardenGate } from './components/GardenGate';
import { GardenNavbar } from './components/GardenNavbar';
import { HeroSection } from './components/HeroSection';
import { IdentitySection } from './components/IdentitySection';
import { EducationSection } from './components/EducationSection';
import { ThienKhoiSection } from './components/ThienKhoiSection';
import { ResearchSection } from './components/ResearchSection';
import { DoiMauSection } from './components/DoiMauSection';
import { CompetitionsSection } from './components/CompetitionsSection';
import { SkillsSection } from './components/SkillsSection';
import { LifestyleSection } from './components/LifestyleSection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  const [isGateOpen, setIsGateOpen] = useState(false);
  const [isGateModalOpen, setIsGateModalOpen] = useState(false);
  const [discoveredSecrets, setDiscoveredSecrets] = useState<Set<string>>(new Set());
  const TOTAL_SECRETS = 7;

  const handleDiscoverSecret = (secretId: string) => {
    setDiscoveredSecrets((prev) => {
      const next = new Set(prev);
      next.add(secretId);
      return next;
    });
  };

  const handleExplorePortfolio = () => {
    if (!isGateOpen) {
      setIsGateModalOpen(true);
    } else {
      const target = document.getElementById('explore');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleGateUnlocked = () => {
    setIsGateOpen(true);
    setIsGateModalOpen(false);
    setTimeout(() => {
      const target = document.getElementById('explore');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }, 200);
  };

  const handleLockGate = () => {
    setIsGateOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-black text-[#e8f3ec] overflow-x-hidden selection:bg-emerald-800 selection:text-white">
      {/* 1. Full-Viewport Luxury Video Landing Intro (Aurevon Botanical Theme) */}
      <AurevonHero onExplorePortfolio={handleExplorePortfolio} />

      {/* The Grand Interactive Secret Garden Entrance Gate Modal */}
      <AnimatePresence>
        {isGateModalOpen && (
          <GardenGate
            isOpen={false}
            onOpen={handleGateUnlocked}
            onClose={() => setIsGateModalOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* 2. The Secret Garden Exploration Section */}
      <div id="explore" className="relative scroll-mt-0">
        {/* Interactive Morning Dew, Petals and Ambient Fog Canvas with Continuous Falling Leaves */}
        <MorningDewCanvas />

        {/* Ambient Botanical Tree Foliage Silhouettes & Overhanging Branches */}
        <div className="fixed top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 pointer-events-none z-15 opacity-30 select-none animate-sway">
          <svg viewBox="0 0 200 200" className="w-full h-full fill-emerald-800/40">
            <path d="M0,0 Q60,20 90,80 Q120,40 180,60 Q150,110 200,140 Q130,140 100,200 Q70,130 0,150 Z" />
            <circle cx="90" cy="80" r="14" fill="rgba(16,185,129,0.35)" />
            <circle cx="150" cy="110" r="20" fill="rgba(52,211,153,0.25)" />
          </svg>
        </div>
        <div className="fixed bottom-0 right-0 w-72 sm:w-96 h-72 sm:h-96 pointer-events-none z-15 opacity-25 select-none animate-sway-reverse">
          <svg viewBox="0 0 200 200" className="w-full h-full fill-emerald-900/40">
            <path d="M200,200 Q140,180 110,120 Q80,160 20,140 Q50,90 0,60 Q70,60 100,0 Q130,70 200,50 Z" />
            <circle cx="110" cy="120" r="16" fill="rgba(16,185,129,0.3)" />
            <circle cx="50" cy="90" r="18" fill="rgba(245,197,66,0.2)" />
          </svg>
        </div>

        {/* Floating Garden Music Player with User's YouTube Song & Dew Ambience */}
        <GardenMusicPlayer videoId="pHehPg_Y9MM" />

        {/* Sticky Botanical Navbar (appears when scrolled into exploration) */}
        <GardenNavbar
          discoveredSecrets={discoveredSecrets.size}
          totalSecrets={TOTAL_SECRETS}
          onLockGate={handleLockGate}
        />

        {/* Transition Bridge Banner */}
        <div className="relative py-12 px-6 text-center border-t border-b border-emerald-900/40 bg-gradient-to-b from-black via-[#081810] to-[#07130d] z-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-amber-400/40 text-xs text-amber-300 font-serif mb-3">
            <span>❧ The Secret Garden of Finance ☙</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif-garden text-white">
            The Curated Professional Portfolio of Ngoc Minh Pham
          </h2>
          <p className="text-xs sm:text-sm text-emerald-300/80 max-w-xl mx-auto mt-2">
            From international market assets to corporate data analytics — step inside the botanical chapters below.
          </p>
        </div>

        {/* Main Journey Through the Secret Garden Chapters */}
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: isGateOpen ? 1 : 0.8 }}
          transition={{ duration: 0.8 }}
          className="relative z-20"
        >
          {/* Chapter 01: The Gateway at Dawn */}
          <HeroSection
            onDiscoverSecret={handleDiscoverSecret}
            discovered={discoveredSecrets.has('clover-1')}
          />

          {/* Chapter 02: Identity & Botanical Career Philosophy */}
          <IdentitySection
            onDiscoverSecret={handleDiscoverSecret}
            discovered={discoveredSecrets.has('clover-2')}
          />

          {/* Chapter 03: Academic Roots (Foreign Trade University) */}
          <EducationSection />

          {/* Chapter 04: Market Intelligence (Thien Khoi 5,000+ Assets) */}
          <ThienKhoiSection
            onDiscoverSecret={handleDiscoverSecret}
            discovered={discoveredSecrets.has('clover-3')}
          />

          {/* Chapter 05: Empirical Research Canopy (200+ Listed Firms) */}
          <ResearchSection
            onDiscoverSecret={handleDiscoverSecret}
            discovered={discoveredSecrets.has('clover-4')}
          />

          {/* Chapter 06: Humanitarian Treasury Sanctuary (9.2%/yr Yield) */}
          <DoiMauSection
            onDiscoverSecret={handleDiscoverSecret}
            discovered={discoveredSecrets.has('clover-5')}
          />

          {/* Chapter 07: Academic Competition Arenas (Go Finance & Smart Finance) */}
          <CompetitionsSection
            onDiscoverSecret={handleDiscoverSecret}
            discovered={discoveredSecrets.has('clover-6')}
          />

          {/* Chapter 08: The Greenhouse of Competencies & Quantitative Modeling */}
          <SkillsSection />

          {/* Chapter 09: The Tea Pavilion (Equilibrium, Literature & Badminton) */}
          <LifestyleSection
            onDiscoverSecret={handleDiscoverSecret}
            discovered={discoveredSecrets.has('clover-7')}
          />

          {/* Chapter 10: The Gazebo of Connection & Resume */}
          <ContactSection
            discoveredSecrets={discoveredSecrets.size}
            totalSecrets={TOTAL_SECRETS}
          />
        </motion.main>
      </div>
    </div>
  );
}
