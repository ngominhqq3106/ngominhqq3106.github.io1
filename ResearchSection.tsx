import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Microscope, Database, Sparkles, CheckCircle2, Layers, FileSpreadsheet } from 'lucide-react';
import { WORK_EXPERIENCES, SAMPLE_RESEARCH_ENTERPRISES } from '../data/cvData';

interface ResearchSectionProps {
  onDiscoverSecret: (secretId: string) => void;
  discovered: boolean;
}

export const ResearchSection: React.FC<ResearchSectionProps> = ({
  onDiscoverSecret,
  discovered,
}) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');
  const [selectedEnterprise, setSelectedEnterprise] = useState<string>('VNM');

  const exp = WORK_EXPERIENCES.find((w) => w.id === 'ftu-research')!;

  const filteredEnterprises = SAMPLE_RESEARCH_ENTERPRISES.filter((item) => {
    return selectedIndustry === 'all' || item.industry === selectedIndustry;
  });

  const activeEnt = SAMPLE_RESEARCH_ENTERPRISES.find((e) => e.code === selectedEnterprise) || SAMPLE_RESEARCH_ENTERPRISES[0];

  return (
    <section id="research" className="relative py-28 sm:py-36 border-t border-emerald-900/40 bg-[#08170f]/95">
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
            <span>Chapter 05</span>
            <span aria-hidden="true">·</span>
            <span>Empirical Data Canopy</span>
            <span aria-hidden="true">·</span>
            <span>FTU Scientific Research</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif-garden text-white tracking-tight leading-tight">
            Econometric Rigor: Quantitative Modeling of 200+ Firms
          </h2>
          <p className="text-emerald-200/80 text-base sm:text-lg leading-relaxed pt-2">
            Scientific research at Foreign Trade University was the academic arena where I collected, standardized, and statistically regressed multi-year empirical metrics across more than 200 corporations listed on Vietnam's stock exchanges.
          </p>
        </motion.div>

        {/* Project Context Showcase: Expansive & Airy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="shape-leaf-card p-8 sm:p-12 lg:p-14 mb-20"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-amber-400/30">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-950/80 border-2 border-amber-400/60 flex items-center justify-center text-amber-300 shrink-0">
                <Microscope className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-center gap-2 text-xs text-amber-300 font-serif font-semibold mb-1">
                  <span>{exp.company}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-emerald-300 font-normal">{exp.period}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-serif-garden text-white">
                  Corporate Finance Empirical Research Paper
                </h3>
                <p className="text-xs text-emerald-300/80 mt-1">
                  Topic: Operating Capital Efficiency, Debt Structure & Systemic Market Risk Governance in Public Enterprises
                </p>
              </div>
            </div>

            {/* Impressive Metric Highlight */}
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-emerald-950/90 border border-amber-400/50 shadow-md">
              <div className="text-right">
                <div className="text-2xl font-bold font-serif-garden text-amber-300">
                  200+
                </div>
                <div className="text-[10px] text-emerald-300/80 uppercase tracking-wider font-serif">
                  Analyzed Enterprises
                </div>
              </div>
              <Database className="w-8 h-8 text-amber-400" />
            </div>
          </div>

          {/* Research Methodologies from CV */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {exp.highlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-emerald-950/60 border border-amber-400/25 text-xs text-emerald-100 leading-relaxed"
              >
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>

          {/* Research Workflow 4 Steps */}
          <div className="mt-8 pt-6 border-t border-emerald-900/60">
            <h4 className="text-xs font-semibold text-amber-300 mb-3 flex items-center gap-1.5 font-serif">
              <Layers className="w-4 h-4 text-amber-400" />
              Quantitative Research Pipeline Architecture
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-emerald-950/60 border border-amber-400/25">
                <div className="font-serif text-amber-300 font-bold mb-1">01. Ingestion</div>
                <div className="text-emerald-200/80 text-[11px]">Extracted 5 consecutive years of audited BCTC from Vietstock, FiinGroup & HOSE.</div>
              </div>
              <div className="p-3.5 rounded-xl bg-emerald-950/60 border border-amber-400/25">
                <div className="font-serif text-amber-300 font-bold mb-1">02. Sanitization</div>
                <div className="text-emerald-200/80 text-[11px]">Handled missing values, standardized accounting notes, eliminated statistical outliers.</div>
              </div>
              <div className="p-3.5 rounded-xl bg-emerald-950/60 border border-amber-400/25">
                <div className="font-serif text-amber-300 font-bold mb-1">03. Modeling</div>
                <div className="text-emerald-200/80 text-[11px]">Computed ROE, ROA, Debt/Equity, Beta; executed variance inflation checks.</div>
              </div>
              <div className="p-3.5 rounded-xl bg-emerald-950/60 border border-amber-400/25">
                <div className="font-serif text-amber-300 font-bold mb-1">04. Synthesis</div>
                <div className="text-emerald-200/80 text-[11px]">Delivered empirical leverage threshold recommendations tailored per sector.</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Interactive Feature: CONSERVATORY ARCH */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="shape-conservatory-arch p-6 sm:p-10 shadow-xl"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-amber-400/30">
            <div>
              <h3 className="text-base sm:text-lg font-bold font-serif-garden text-white flex items-center gap-2">
                <FileSpreadsheet className="w-5 h-5 text-amber-300" />
                Empirical Metrics Sample: 200+ Corporate Dataset
              </h3>
              <p className="text-xs text-emerald-300/70 mt-0.5">
                Click any corporation to inspect its quantitative matrix and empirical stability diagnostic
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-amber-300/90 font-serif">Sector Filter:</span>
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="text-xs rounded-xl bg-emerald-950/80 border border-amber-400/40 px-3.5 py-2 text-emerald-100 focus:outline-none"
              >
                <option value="all">All Sectors</option>
                <option value="Consumer Goods">Consumer Goods</option>
                <option value="Information Tech">Information Tech</option>
                <option value="Heavy Industry">Heavy Industry</option>
                <option value="Consumer Retail">Consumer Retail</option>
                <option value="Energy & Utilities">Energy & Utilities</option>
                <option value="Luxury & Jewelry">Luxury & Jewelry</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Enterprise Selector Grid */}
            <div className="lg:col-span-5 space-y-2">
              <div className="text-xs font-semibold text-amber-300 mb-2 font-serif">
                Sample Listed Corporations:
              </div>
              <div className="space-y-2">
                {filteredEnterprises.map((item) => (
                  <button
                    key={item.code}
                    onClick={() => setSelectedEnterprise(item.code)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                      selectedEnterprise === item.code
                        ? 'bg-emerald-950/90 border-amber-400 text-amber-100 shadow-md font-serif'
                        : 'bg-emerald-950/40 border-emerald-900/60 text-emerald-300/80 hover:bg-emerald-900/30'
                    }`}
                  >
                    <div>
                      <span className="font-bold text-sm font-mono text-amber-300">{item.code}</span>
                      <span className="text-xs text-emerald-300/80 ml-2">({item.industry})</span>
                    </div>
                    <div className="text-xs text-amber-300 font-semibold">
                      ROE: {item.roe}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Detailed Inspection Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeEnt.code}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3 }}
                className="lg:col-span-7 rounded-2xl bg-emerald-950/90 border border-amber-400/40 p-6 space-y-4 shadow-xl"
              >
                <div className="flex items-center justify-between pb-3 border-b border-amber-400/30">
                  <div>
                    <div className="text-xs text-amber-300/80 font-serif">Diagnostic Card:</div>
                    <div className="text-xl font-bold font-serif-garden text-white flex items-center gap-2">
                      <span className="font-mono text-amber-300">{activeEnt.code}</span>
                      <span className="text-xs font-sans text-emerald-300/80 font-normal">
                        · Sector: {activeEnt.industry}
                      </span>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-900/80 border border-amber-400/40 text-xs text-amber-200 font-serif">
                    Verified
                  </span>
                </div>

                {/* 4 Quantitative Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3.5 rounded-xl bg-[#06140c]/90 border border-amber-400/30 text-center">
                    <div className="text-[11px] text-emerald-400/80">ROE</div>
                    <div className="text-base font-bold text-amber-200 font-mono mt-0.5">{activeEnt.roe}</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#06140c]/90 border border-amber-400/30 text-center">
                    <div className="text-[11px] text-emerald-400/80">ROA</div>
                    <div className="text-base font-bold text-amber-200 font-mono mt-0.5">{activeEnt.roa}</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#06140c]/90 border border-amber-400/30 text-center">
                    <div className="text-[11px] text-emerald-400/80">D/E Ratio</div>
                    <div className="text-base font-bold text-amber-300 font-mono mt-0.5">{activeEnt.deRatio}</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#06140c]/90 border border-amber-400/30 text-center">
                    <div className="text-[11px] text-emerald-400/80">Beta (β)</div>
                    <div className="text-base font-bold text-teal-300 font-mono mt-0.5">{activeEnt.beta}</div>
                  </div>
                </div>

                {/* Research Insight Notes */}
                <div className="p-4 rounded-xl bg-emerald-900/30 border border-amber-400/30 text-xs text-emerald-100 leading-relaxed">
                  <strong className="text-amber-300 block mb-1 font-serif">Empirical Observation in Paper:</strong>
                  {activeEnt.status}. The observed regression coefficient between capital structure leverage and operating profit volatility demonstrates notable resilience against monetary tightening cycles.
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

          {/* Secret 4 trigger */}
          <div className="mt-8 pt-4 border-t border-emerald-900/60 flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={() => onDiscoverSecret('clover-4')}
              className={`btn-vintage-botanical text-xs px-4 py-2 rounded-xl transition-all cursor-pointer ${
                discovered
                  ? 'border-amber-400 text-amber-200'
                  : 'border-emerald-500/50 text-emerald-300 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 inline mr-1 text-amber-300" />
              {discovered ? '🌿 Secret 4: Econometric Canopy Unlocked' : '🌱 Tap Microscope Leaf'}
            </button>
            {discovered && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs text-amber-100 italic bg-emerald-950/80 p-3 rounded-xl border border-amber-400/50"
              >
                "Big data is an endless forest. Master analysts never strip the trees blindly; they follow each ring of grain to understand the living pulse of the macroeconomy."
              </motion.p>
            )}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
