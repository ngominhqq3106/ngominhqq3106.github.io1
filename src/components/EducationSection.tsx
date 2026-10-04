import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, BookOpen, Award, CheckCircle, ChevronRight } from 'lucide-react';
import { CANDIDATE_INFO } from '../data/cvData';

export const EducationSection: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<number>(0);

  const keyCourses = [
    {
      title: 'International Financial Management & FX Risk',
      code: 'INT-FIN301',
      highlights: 'Mechanics of cross-border currency flows, Eurocurrency markets, hedging instruments including Forwards, Futures, Cross-Currency Swaps, and Currency Options.',
      applicability: 'Foundational framework for assessing foreign direct investment risk, exchange rate exposure, and macro market impacts on multi-asset portfolios.',
    },
    {
      title: 'Corporate Financial Statement Analysis',
      code: 'FIN-ACC202',
      highlights: 'Forensic dissection of Balance Sheets, Income Statements, and Cash Flow Statements; verifying earnings quality and identifying accounting adjustments.',
      applicability: 'Directly deployed when standardizing and analyzing 200+ listed corporations in FTU scientific research.',
    },
    {
      title: 'Financial Markets & Institutional Frameworks',
      code: 'FIN-MKT205',
      highlights: 'Capital market structures, corporate and sovereign bond yields, commercial banking operations, and collective mutual funds.',
      applicability: 'Shaped the defensive capital preservation strategy delivering a 9.2%/year yield for the FTU Blood Donation Club.',
    },
    {
      title: 'Applied Econometrics & Quantitative Analytics',
      code: 'QNT-ECO303',
      highlights: 'Multiple linear regressions, hypothesis significance testing, time-series forecasting, and error variance mitigation.',
      applicability: 'Empowered high-throughput data cleaning and quantitative sensitivity modeling in Microsoft Excel and Google Sheets.',
    },
  ];

  return (
    <section id="education" className="relative py-28 sm:py-36 border-t border-emerald-900/40 bg-[#091710]/95">
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
            <span>Chapter 03</span>
            <span aria-hidden="true">·</span>
            <span>Academic Roots</span>
            <span aria-hidden="true">·</span>
            <span>Foreign Trade University</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif-garden text-white tracking-tight leading-tight">
            The Cradle of International Finance & Global Vision
          </h2>
          <p className="text-emerald-200/80 text-base sm:text-lg leading-relaxed pt-2">
            Studying at Foreign Trade University (FTU) — Vietnam's foremost economic institution — provides the intellectual crucible where I refine academic theory, commercial intuition, and ethical financial governance.
          </p>
        </motion.div>

        {/* Main FTU Showcase Card: Expansive & Airy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          
          {/* Main Institution Card: GOTHIC CONSERVATORY ARCH */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 shape-conservatory-arch p-8 sm:p-12 lg:p-14"
          >
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="flex items-center gap-3.5">
                <div className="w-14 h-14 rounded-2xl bg-emerald-950/80 border-2 border-amber-400/60 flex items-center justify-center text-amber-300 shadow-inner">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-serif-garden text-white">
                    {CANDIDATE_INFO.university}
                  </h3>
                  <p className="text-xs text-amber-300/90 font-serif">
                    {CANDIDATE_INFO.major} · Period: {CANDIDATE_INFO.periodStudy}
                  </p>
                </div>
              </div>

              <div className="px-3.5 py-1 rounded-full bg-emerald-950/80 border border-amber-400/50 text-[11px] text-amber-300 font-serif whitespace-nowrap">
                ❧ Honors Track ☙
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-emerald-200/80 leading-relaxed border-t border-amber-400/30 pt-5">
              <p>
                The <strong>International Finance</strong> major at FTU builds foundational command over cross-border capital circulation, multi-asset risk management frameworks, and institutional quantitative methodologies.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-950/60 border border-amber-400/30">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-xs text-emerald-100">Critical thinking & real-world cases</span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-950/60 border border-amber-400/30">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-xs text-emerald-100">Econometric quantitative research</span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-950/60 border border-amber-400/30">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-xs text-emerald-100">Capital discipline & allocation</span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-950/60 border border-amber-400/30">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-xs text-emerald-100">Forensic financial statement analysis</span>
                </div>
              </div>
            </div>

            {/* IELTS Certificate Badge */}
            <div className="mt-6 p-4 rounded-2xl bg-amber-950/30 border border-amber-400/50 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-900/50 border border-amber-400/60 flex items-center justify-center text-amber-300">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-amber-200 font-serif">
                    International Certification: {CANDIDATE_INFO.ielts}
                  </div>
                  <div className="text-[11px] text-emerald-300/80">
                    Professional proficiency analyzing international equity reports, IMF/World Bank publications
                  </div>
                </div>
              </div>
              <span className="text-xs font-bold text-amber-300 px-3 py-1 rounded-xl bg-amber-950/80 border border-amber-400/60 font-mono">
                IELTS 6.0
              </span>
            </div>
          </motion.div>

          {/* Interactive Coursework Navigator: LEAF CONTOUR CARD */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 shape-leaf-card p-6 sm:p-8 space-y-4"
          >
            <div className="flex items-center justify-between pb-3 border-b border-amber-400/30">
              <h3 className="text-sm font-semibold font-serif-garden text-white flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-amber-300" />
                Core Specialized Coursework
              </h3>
              <span className="text-[11px] text-amber-300/80 font-serif">Select subject</span>
            </div>

            {/* Subject Selector Buttons */}
            <div className="space-y-2">
              {keyCourses.map((c, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedSubject(i)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                    selectedSubject === i
                      ? 'bg-emerald-950/90 border-amber-400 text-amber-200 shadow-md font-serif'
                      : 'bg-emerald-950/40 border-emerald-900/60 text-emerald-300/80 hover:bg-emerald-900/40'
                  }`}
                >
                  <div>
                    <div className="text-xs font-semibold">{c.title}</div>
                    <div className="text-[10px] text-emerald-400/70">{c.code}</div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 text-amber-400 transition-transform ${
                      selectedSubject === i ? 'rotate-90 text-amber-200' : ''
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Selected Subject In-depth Box */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedSubject}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="p-4 rounded-xl bg-emerald-950/80 border border-amber-400/40 space-y-2.5"
              >
                <div className="text-xs font-semibold text-amber-300 font-serif">
                  📌 Key Curriculum Focus:
                </div>
                <p className="text-xs text-emerald-100/90 leading-relaxed">
                  {keyCourses[selectedSubject].highlights}
                </p>
                <div className="text-xs font-semibold text-amber-300 pt-1 border-t border-emerald-900/60 font-serif">
                  💡 Practical Application by Minh:
                </div>
                <p className="text-xs text-emerald-200 leading-relaxed italic">
                  {keyCourses[selectedSubject].applicability}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
