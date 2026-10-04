import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/cvData';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const [initialInv, setInitialInv] = useState<number>(50000);
  const [cashFlowYr1, setCashFlowYr1] = useState<number>(18000);
  const [cashFlowYr2, setCashFlowYr2] = useState<number>(24000);
  const [cashFlowYr3, setCashFlowYr3] = useState<number>(32000);
  const [discountRate, setDiscountRate] = useState<number>(8);

  const r = discountRate / 100;
  const pv1 = cashFlowYr1 / Math.pow(1 + r, 1);
  const pv2 = cashFlowYr2 / Math.pow(1 + r, 2);
  const pv3 = cashFlowYr3 / Math.pow(1 + r, 3);
  const npv = pv1 + pv2 + pv3 - initialInv;

  return (
    <section id="skills" className="relative py-24 border-t border-emerald-900/40 bg-[#07140e]/95">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Editorial Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16"
        >
          <div className="flex items-center gap-2 text-xs text-amber-300 font-medium mb-3 font-serif">
            <span>Chapter 08</span>
            <span aria-hidden="true">·</span>
            <span>The Greenhouse of Competencies</span>
            <span aria-hidden="true">·</span>
            <span>Quantitative Analytical Arsenal</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif-garden text-white tracking-tight leading-tight">
            Financial Modeling & Quantitative Toolkits
          </h2>
          <p className="mt-4 text-emerald-200/80 text-sm sm:text-base leading-relaxed">
            From econometric regressions to processing multi-thousand row datasets in advanced Microsoft Excel and Google Sheets, I bridge academic financial theory with decisive operational tools.
          </p>
        </motion.div>

        {/* Skill Category Selector */}
        <div className="flex flex-wrap items-center gap-2.5 mb-10">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 border cursor-pointer font-serif ${
                activeCategory === idx
                  ? 'bg-amber-950/80 border-2 border-amber-400 text-amber-200 shadow-xl'
                  : 'bg-emerald-950/50 border border-amber-400/30 text-emerald-300/80 hover:bg-emerald-900/40'
              }`}
            >
              <span>{cat.category}</span>
            </button>
          ))}
        </div>

        {/* Selected Category Skill Meters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          <AnimatePresence mode="wait">
            {SKILL_CATEGORIES[activeCategory].skills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="shape-subcard p-6 border-amber-400/30 space-y-3 shadow-md"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-white text-sm font-serif">{skill.name}</span>
                  <span className="font-mono text-amber-300 font-bold">{skill.level}%</span>
                </div>

                {/* Botanical Growth Progress Bar */}
                <div className="w-full h-2 rounded-full bg-emerald-950/80 overflow-hidden border border-amber-400/30">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.0, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-emerald-600 via-amber-400 to-teal-300"
                  />
                </div>

                <p className="text-xs text-emerald-200/80 leading-relaxed pt-1">
                  {skill.desc}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Interactive Feature: SHAPE LEAF CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="shape-leaf-card p-6 sm:p-10 shadow-2xl"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-amber-400/30">
            <div>
              <h3 className="text-base sm:text-lg font-bold font-serif-garden text-white flex items-center gap-2">
                <Calculator className="w-5 h-5 text-amber-300" />
                Discounted Cash Flow (NPV) Valuation Simulator
              </h3>
              <p className="text-xs text-emerald-300/70 mt-0.5">
                Experience an interactive financial underwriting model deployed in capital budgeting
              </p>
            </div>
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-amber-400/50 text-[11px] font-mono text-amber-300">
              Formula: NPV = Σ [CF_t / (1+r)^t] - C_0
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Interactive Parameters */}
            <div className="lg:col-span-7 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                
                {/* Initial Investment */}
                <div>
                  <label className="block text-emerald-200 font-medium mb-1 font-serif">
                    Initial Outlay (C₀): <strong className="text-amber-300">${initialInv.toLocaleString()}</strong>
                  </label>
                  <input
                    type="range"
                    min="10000"
                    max="100000"
                    step="5000"
                    value={initialInv}
                    onChange={(e) => setInitialInv(Number(e.target.value))}
                    className="w-full accent-amber-400 cursor-pointer"
                  />
                </div>

                {/* Discount Rate */}
                <div>
                  <label className="block text-emerald-200 font-medium mb-1 font-serif">
                    Hurdle Rate / WACC (r): <strong className="text-amber-300">{discountRate}%/year</strong>
                  </label>
                  <input
                    type="range"
                    min="4"
                    max="16"
                    step="0.5"
                    value={discountRate}
                    onChange={(e) => setDiscountRate(Number(e.target.value))}
                    className="w-full accent-amber-400 cursor-pointer"
                  />
                </div>

              </div>

              {/* 3 Years Cashflows */}
              <div className="p-4 rounded-2xl bg-emerald-950/70 border border-amber-400/30 space-y-3">
                <div className="text-xs text-amber-300 font-semibold font-serif">
                  Projected Net Cash Inflows (Operating Free Cash Flow):
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div>
                    <span className="text-[11px] text-emerald-400/90 block font-serif">Year 1 ($)</span>
                    <input
                      type="number"
                      value={cashFlowYr1}
                      onChange={(e) => setCashFlowYr1(Number(e.target.value))}
                      className="w-full mt-1 p-2 rounded-xl bg-emerald-900/60 border border-amber-400/40 text-white font-mono text-xs focus:outline-none"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] text-emerald-400/90 block font-serif">Year 2 ($)</span>
                    <input
                      type="number"
                      value={cashFlowYr2}
                      onChange={(e) => setCashFlowYr2(Number(e.target.value))}
                      className="w-full mt-1 p-2 rounded-xl bg-emerald-900/60 border border-amber-400/40 text-white font-mono text-xs focus:outline-none"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] text-emerald-400/90 block font-serif">Year 3 ($)</span>
                    <input
                      type="number"
                      value={cashFlowYr3}
                      onChange={(e) => setCashFlowYr3(Number(e.target.value))}
                      className="w-full mt-1 p-2 rounded-xl bg-emerald-900/60 border border-amber-400/40 text-white font-mono text-xs focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Output Decision Card */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-emerald-950/90 border-2 border-amber-400/60 text-center space-y-3 shadow-xl">
              <div className="text-xs uppercase tracking-wider text-amber-300 font-semibold font-serif">
                Net Present Value (NPV)
              </div>
              <div className={`text-3xl sm:text-4xl font-bold font-serif-garden font-mono ${npv >= 0 ? 'text-amber-300' : 'text-rose-400'}`}>
                {npv >= 0 ? `+$${Math.round(npv).toLocaleString()}` : `-$${Math.abs(Math.round(npv)).toLocaleString()}`}
              </div>
              <div className="text-xs text-emerald-200/90 leading-relaxed border-t border-emerald-800/60 pt-3">
                {npv >= 0 ? (
                  <span className="text-emerald-200 font-medium">
                    ✅ <strong>Recommendation: INVEST.</strong> Economic alpha exceeds the {discountRate}% cost of capital.
                  </span>
                ) : (
                  <span className="text-rose-300 font-medium">
                    ⚠️ <strong>Recommendation: RESTRUCTURE.</strong> Cash inflows fail to compensate for the {discountRate}% hurdle.
                  </span>
                )}
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
