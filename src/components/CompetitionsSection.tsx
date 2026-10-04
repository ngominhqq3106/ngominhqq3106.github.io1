import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, Swords, Sparkles, Target, Lightbulb, Flame } from 'lucide-react';
import { COMPETITIONS } from '../data/cvData';

interface CompetitionsSectionProps {
  onDiscoverSecret: (secretId: string) => void;
  discovered: boolean;
}

export const CompetitionsSection: React.FC<CompetitionsSectionProps> = ({
  onDiscoverSecret,
  discovered,
}) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const competitionDetails = [
    {
      ...COMPETITIONS[0],
      tagline: 'Northern Vietnam’s most grueling collegiate investment banking & valuation championship',
      challenge: 'Perform forensic equity valuation on an industrial manufacturer and structure optimal financing for a cross-border M&A acquisition.',
      solutionHighlights: [
        'Formulated multi-stage Discounted Cash Flow (DCF) and comparative multiples (EV/EBITDA, P/E) under conservative growth assumptions.',
        'Operated in rapid sprint cadence, compiling a publication-grade 30-page institutional investment memorandum within 72 hours.',
        'Defended financial assumptions under acute scrutiny from senior investment banking directors.',
      ],
      currentStatus: 'National Top 50 Finalist',
    },
    {
      ...COMPETITIONS[1],
      tagline: 'Nationwide fintech & financial resilience initiative commemorating World Savings Day',
      challenge: 'Design a scalable digital financial solution incentivizing disciplined micro-savings and automated portfolio accumulation for young professionals.',
      solutionHighlights: [
        'Modeled behavioral spending patterns and engineered an automated adaptive 50/30/20 algorithm.',
        'Integrated micro-investing gamification mechanics fostering habitual compound capital growth.',
        'Currently collaborating in agile sprints advancing through the final competitive rounds.',
      ],
      currentStatus: 'Active Finalist · Competing for National Top 12',
    },
  ];

  return (
    <section id="competitions" className="relative py-28 sm:py-36 border-t border-emerald-900/40 bg-[#081810]/95">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Editorial Header with Generous Whitespace */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16 sm:mb-20 space-y-4"
        >
          <div className="flex items-center gap-2.5 text-xs sm:text-sm text-amber-300 font-medium font-serif">
            <span>Chapter 07</span>
            <span aria-hidden="true">·</span>
            <span>Competitive Arenas</span>
            <span aria-hidden="true">·</span>
            <span>Financial Championship Crucible</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif-garden text-white tracking-tight leading-tight">
            Forging Resolve in Prestigious Academic Arenas
          </h2>
          <p className="text-emerald-200/80 text-base sm:text-lg leading-relaxed pt-2">
            Never satisfied with passive classroom lectures, I compete in high-stakes nationwide collegiate finance arenas to stress-test real-world case solving, agile teamwork under extreme deadlines, and defense of independent valuation theses.
          </p>
        </motion.div>

        {/* Tab Selection */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          {competitionDetails.map((c, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 border cursor-pointer font-serif ${
                activeTab === idx
                  ? 'bg-amber-950/80 border-2 border-amber-400 text-amber-200 shadow-xl'
                  : 'bg-emerald-950/50 border border-amber-400/30 text-emerald-300/80 hover:bg-emerald-900/40'
              }`}
            >
              <Trophy className={`w-4 h-4 ${activeTab === idx ? 'text-amber-400' : 'text-emerald-500'}`} />
              <span>{c.name}</span>
              <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono ${activeTab === idx ? 'bg-amber-400/20 text-amber-300 border border-amber-400/40' : 'bg-emerald-900/50 text-emerald-400'}`}>
                {c.rank}
              </span>
            </button>
          ))}
        </div>

        {/* Detailed Arena Showcase Card: SHAPE LEAF CARD */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="shape-leaf-card p-8 sm:p-12 lg:p-14 mb-16 shadow-2xl"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-8 border-b border-amber-400/30">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-amber-300 font-serif font-medium">
                  <span>{competitionDetails[activeTab].organizer}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-emerald-300">{competitionDetails[activeTab].time}</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-bold font-serif-garden text-white">
                  {competitionDetails[activeTab].name}
                </h3>
                <p className="text-sm text-emerald-200/90 max-w-2xl italic font-serif pt-1">
                  "{competitionDetails[activeTab].tagline}"
                </p>
              </div>

              {/* Achievement Badge */}
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-amber-950/80 border-2 border-amber-400/60 shadow-lg shrink-0">
                <div className="text-right">
                  <div className="text-2xl sm:text-3xl font-bold font-serif-garden text-amber-300">
                    {competitionDetails[activeTab].rank}
                  </div>
                  <div className="text-xs text-amber-400/90 uppercase tracking-wider font-serif pt-0.5">
                    {competitionDetails[activeTab].currentStatus}
                  </div>
                </div>
                <Flame className="w-9 h-9 text-amber-400 animate-pulse" />
              </div>
            </div>

            {/* Challenge and Solution Body */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
              
              {/* The Challenge */}
              <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-emerald-950/60 border border-amber-400/30 space-y-4">
                <div className="text-sm font-semibold text-amber-300 flex items-center gap-2 font-serif">
                  <Swords className="w-5 h-5 text-amber-400" />
                  The Case Challenge
                </div>
                <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed">
                  {competitionDetails[activeTab].challenge}
                </p>
                <div className="text-[11px] text-emerald-400/80 italic pt-2 border-t border-emerald-900/60">
                  {competitionDetails[activeTab].description}
                </div>
              </div>

              {/* Practical Learnings & Solutions */}
              <div className="lg:col-span-7 space-y-3">
                <div className="text-xs font-semibold text-amber-300 flex items-center gap-1.5 font-serif">
                  <Lightbulb className="w-4 h-4 text-amber-400" />
                  Methodological Innovations & Minh's Contributions
                </div>
                <div className="space-y-2.5">
                  {competitionDetails[activeTab].solutionHighlights.map((sol, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-emerald-950/50 border border-amber-400/25 text-xs text-emerald-100 leading-relaxed"
                    >
                      <span className="font-serif font-bold text-amber-300 mt-0.5">0{i + 1}.</span>
                      <span>{sol}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>

            {/* Target Milestone for Smart Finance */}
            {competitionDetails[activeTab].target && (
              <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-amber-950/50 to-emerald-950/60 border border-amber-400/40 flex items-center justify-between text-xs text-amber-200">
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-amber-400" />
                  <span><strong>Active Objective:</strong> {competitionDetails[activeTab].target}</span>
                </div>
                <span className="text-[10px] text-amber-300/90 italic font-serif">Advancing through collaborative sprints</span>
              </div>
            )}

            {/* Secret 6 trigger */}
            <div className="mt-8 pt-4 border-t border-emerald-900/60 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => onDiscoverSecret('clover-6')}
                className={`btn-vintage-botanical text-xs px-4 py-2 rounded-xl transition-all cursor-pointer ${
                  discovered
                    ? 'border-amber-400 text-amber-200'
                    : 'border-emerald-500/50 text-emerald-300 hover:text-white'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 inline mr-1 text-amber-300" />
                {discovered ? '🌿 Secret 6: Competitive Crucible Unlocked' : '🌱 Tap Championship Leaf'}
              </button>
              {discovered && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-amber-100 italic bg-emerald-950/80 p-3 rounded-xl border border-amber-400/50"
                >
                  "Trophy triumphs fade; the enduring reward is the stamina gained solving impenetrable financial matrices alongside brilliant peers until sunrise."
                </motion.p>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
