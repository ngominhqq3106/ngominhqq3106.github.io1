import React, { useState } from 'react';
import { motion } from 'motion/react';
import { HeartHandshake, TrendingUp, ShieldCheck, Sparkles, PieChart, CheckCircle2 } from 'lucide-react';
import { ACTIVITIES } from '../data/cvData';

interface DoiMauSectionProps {
  onDiscoverSecret: (secretId: string) => void;
  discovered: boolean;
}

export const DoiMauSection: React.FC<DoiMauSectionProps> = ({
  onDiscoverSecret,
  discovered,
}) => {
  const [initialCapital, setInitialCapital] = useState<number>(5000);
  const [investmentYears, setInvestmentYears] = useState<number>(3);

  const act = ACTIVITIES[0];

  const rateMinh = 0.092;
  const finalMinh = initialCapital * Math.pow(1 + rateMinh, investmentYears);
  const profitMinh = finalMinh - initialCapital;

  const rateBank = 0.045;
  const finalBank = initialCapital * Math.pow(1 + rateBank, investmentYears);
  const profitBank = finalBank - initialCapital;

  const excessProfit = profitMinh - profitBank;

  return (
    <section id="doimau" className="relative py-28 sm:py-36 border-t border-emerald-900/40 bg-[#07150f]/95">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Editorial Header with Generous Whitespace */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16 sm:mb-20 space-y-4"
        >
          <div className="flex items-center gap-2.5 text-xs sm:text-sm text-rose-300 font-medium font-serif">
            <span>Chapter 06</span>
            <span aria-hidden="true">·</span>
            <span>Social Responsibility Sanctuary</span>
            <span aria-hidden="true">·</span>
            <span>FTU Blood Donation Club</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif-garden text-white tracking-tight leading-tight">
            Humanitarian Purpose & Prudent 9.2%/yr Treasury Yield
          </h2>
          <p className="text-emerald-200/80 text-base sm:text-lg leading-relaxed pt-2">
            As Vice President of Finance at FTU Blood Donation Club, I not only steward life-saving blood donation drives across the university, but also demonstrated exceptional treasury management by generating an annualized return of 9.2%/year with absolute capital preservation.
          </p>
        </motion.div>

        {/* Main Leadership Card: Expansive & Airy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="shape-petal-card p-8 sm:p-12 lg:p-14 mb-20 border-rose-500/50"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-rose-900/40">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-rose-950/80 border-2 border-rose-400/60 flex items-center justify-center text-rose-300 shrink-0 shadow-lg">
                <HeartHandshake className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-center gap-2 text-xs text-rose-300 font-serif font-semibold mb-1">
                  <span>{act.organization}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-amber-300 font-normal">{act.period}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-serif-garden text-white">
                  {act.role}
                </h3>
                <p className="text-xs text-rose-200/80 mt-1 font-serif">
                  {act.badge}
                </p>
              </div>
            </div>

            {/* Glowing 9.2% Metric */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-rose-950/90 to-emerald-950/90 border-2 border-amber-400/60 shadow-xl">
              <div className="text-right">
                <div className="text-3xl font-bold font-serif-garden text-amber-300">
                  {act.keyNumber}
                </div>
                <div className="text-[10px] text-emerald-300/90 uppercase tracking-wider font-serif">
                  {act.keyMetric}
                </div>
              </div>
              <TrendingUp className="w-8 h-8 text-amber-400" />
            </div>
          </div>

          {/* Core Responsibilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {act.achievements.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-emerald-950/50 border border-rose-400/25 text-xs text-emerald-100 leading-relaxed"
              >
                <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>

          {/* Prudent Risk Management Philosophy Banner */}
          <div className="mt-6 p-4 rounded-2xl bg-[#091f15]/95 border border-amber-400/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-amber-400 shrink-0" />
              <div className="text-xs text-emerald-200">
                <strong className="text-amber-200 font-serif">100% Capital Preservation Mandate:</strong> The 9.2%/year yield was attained via dynamic cash tiering, laddered bank certificates of deposit, and predictive treasury scheduling — zero speculative risks.
              </div>
            </div>
          </div>
        </motion.div>

        {/* Interactive Feature: SHAPE CONSERVATORY ARCH */}
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
                <TrendingUp className="w-5 h-5 text-amber-300" />
                Compound Interest & Capital Preservation Simulator
              </h3>
              <p className="text-xs text-emerald-300/70 mt-0.5">
                Adjust sliders to benchmark Minh’s 9.2%/year active treasury strategy against standard commercial savings (4.5%/year)
              </p>
            </div>
          </div>

          {/* Interactive Sliders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 p-5 rounded-2xl bg-emerald-950/80 border border-amber-400/40 shadow-inner">
            <div>
              <div className="flex justify-between text-xs text-emerald-200 font-medium mb-2 font-serif">
                <span>Initial Treasury Capital:</span>
                <span className="font-bold text-amber-300 font-mono text-sm">${initialCapital.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="1000"
                max="25000"
                step="500"
                value={initialCapital}
                onChange={(e) => setInitialCapital(Number(e.target.value))}
                className="w-full accent-amber-400 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-emerald-400/80 mt-1 font-mono">
                <span>$1,000</span>
                <span>$12,500</span>
                <span>$25,000</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs text-emerald-200 font-medium mb-2 font-serif">
                <span>Holding Horizon:</span>
                <span className="font-bold text-amber-300 font-mono text-sm">{investmentYears} Years</span>
              </div>
              <input
                type="range"
                min="1"
                max="5"
                step="1"
                value={investmentYears}
                onChange={(e) => setInvestmentYears(Number(e.target.value))}
                className="w-full accent-amber-400 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-emerald-400/80 mt-1 font-mono">
                <span>1 Year</span>
                <span>3 Years</span>
                <span>5 Years</span>
              </div>
            </div>
          </div>

          {/* Results Comparison Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            
            {/* Strategy Minh */}
            <div className="p-5 rounded-2xl bg-gradient-to-b from-emerald-950/90 to-[#071d12] border-2 border-amber-400/70 shadow-lg space-y-2">
              <div className="text-[11px] text-amber-300 font-serif font-medium flex items-center justify-between">
                <span>Minh's Active Strategy</span>
                <span className="px-2 py-0.5 rounded-full bg-amber-400/20 text-[10px] font-bold text-amber-300 border border-amber-400/40">
                  9.2%/yr
                </span>
              </div>
              <div className="text-2xl font-bold font-serif-garden text-white font-mono">
                ${Math.round(finalMinh).toLocaleString()}
              </div>
              <div className="text-xs text-emerald-200/90">
                Net Cumulative Yield: <strong className="text-amber-300">+${Math.round(profitMinh).toLocaleString()}</strong>
              </div>
            </div>

            {/* Standard Bank Deposit */}
            <div className="p-5 rounded-2xl bg-emerald-950/40 border border-amber-400/30 space-y-2">
              <div className="text-[11px] text-emerald-300/80 font-serif font-medium flex items-center justify-between">
                <span>Bank Deposit Benchmark</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-900/50 text-[10px] text-emerald-400">
                  4.5%/yr
                </span>
              </div>
              <div className="text-2xl font-bold font-serif-garden text-emerald-200/90 font-mono">
                ${Math.round(finalBank).toLocaleString()}
              </div>
              <div className="text-xs text-emerald-400/80">
                Benchmark Yield: +${Math.round(profitBank).toLocaleString()}
              </div>
            </div>

            {/* Added Value Delivered */}
            <div className="p-5 rounded-2xl bg-amber-950/40 border-2 border-amber-400/70 space-y-2 shadow-md">
              <div className="text-[11px] text-amber-300 font-serif font-medium flex items-center justify-between">
                <span>Surplus Alpha Created</span>
                <span className="px-2 py-0.5 rounded-full bg-amber-900/60 text-[10px] text-amber-200 font-bold border border-amber-400/40">
                  +4.7% Alpha
                </span>
              </div>
              <div className="text-2xl font-bold font-serif-garden text-amber-300 font-mono">
                +${Math.round(excessProfit).toLocaleString()}
              </div>
              <div className="text-xs text-amber-200/80">
                Sponsoring thousands of volunteer blood drives
              </div>
            </div>

          </div>

          {/* Allocation Breakdown */}
          <div className="p-5 rounded-2xl bg-emerald-950/70 border border-amber-400/30 text-xs text-emerald-200/90 leading-relaxed">
            <h4 className="font-semibold text-amber-200 flex items-center gap-1.5 mb-2 font-serif">
              <PieChart className="w-4 h-4 text-amber-400" />
              Liquidity & Asset Allocation Architecture:
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
              <div className="p-2.5 rounded-xl bg-emerald-900/40 border border-amber-400/25">
                <span className="text-amber-300 font-semibold block font-serif">50% Tiered Bank CDs</span>
                <span>Laddered maturity, highest secured yield</span>
              </div>
              <div className="p-2.5 rounded-xl bg-emerald-900/40 border border-amber-400/25">
                <span className="text-amber-300 font-semibold block font-serif">25% Sovereign Debt Funds</span>
                <span>Ultra-low risk, T+2 liquid access</span>
              </div>
              <div className="p-2.5 rounded-xl bg-emerald-900/40 border border-amber-400/25">
                <span className="text-amber-300 font-semibold block font-serif">15% High-Yield Operating</span>
                <span>Weekly operational disbursements</span>
              </div>
              <div className="p-2.5 rounded-xl bg-emerald-900/40 border border-amber-400/25">
                <span className="text-amber-300 font-semibold block font-serif">10% Emergency Reserve</span>
                <span>Immediate volunteer event logistics</span>
              </div>
            </div>
          </div>

          {/* Secret 5 trigger */}
          <div className="mt-8 pt-4 border-t border-emerald-900/60 flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={() => onDiscoverSecret('clover-5')}
              className={`btn-vintage-botanical text-xs px-4 py-2 rounded-xl transition-all cursor-pointer ${
                discovered
                  ? 'border-amber-400 text-amber-200'
                  : 'border-emerald-500/50 text-emerald-300 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 inline mr-1 text-amber-300" />
              {discovered ? '🌿 Secret 5: Compassionate Capital Unlocked' : '🌱 Tap Dew Rose Petal'}
            </button>
            {discovered && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs text-amber-100 italic bg-emerald-950/80 p-3 rounded-xl border border-amber-400/50"
              >
                "Capital reaches its highest nobility when each percentage of yield is transformed into life-giving units of blood for those fighting for survival."
              </motion.p>
            )}
          </div>

        </motion.div>

      </div>
    </section>
  );
};
