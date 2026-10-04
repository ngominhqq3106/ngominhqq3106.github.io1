import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Target, Compass, Sparkles, Sprout, ShieldCheck, TrendingUp, CheckCircle2, Droplets } from 'lucide-react';
import { CANDIDATE_INFO, PILLARS } from '../data/cvData';

interface IdentitySectionProps {
  onDiscoverSecret: (secretId: string) => void;
  discovered: boolean;
}

export const IdentitySection: React.FC<IdentitySectionProps> = ({
  onDiscoverSecret,
  discovered,
}) => {
  const [wateringLevel, setWateringLevel] = useState<number>(2);

  const growthStages = [
    {
      level: 1,
      name: 'The Academic Seedling (2024)',
      summary: 'Initiation at Foreign Trade University with rigorous International Finance fundamentals and IELTS 6.0 competency.',
      focus: 'Mastering central banking mechanisms, macro financial flows, and corporate accounting foundations.',
      heightPct: '35%',
    },
    {
      level: 2,
      name: 'Anchoring Deep Roots (2024 - Present)',
      summary: 'Direct market exposure with 5,000+ properties at Thien Khoi and generating a 9.2%/yr treasury yield for FTU Blood Club.',
      focus: 'Underwriting cash flows, mitigating liquidity risk, and practicing decisive capital stewardship.',
      heightPct: '70%',
    },
    {
      level: 3,
      name: 'Spreading the Canopy (Target Horizon)',
      summary: 'Ascending into a Senior Quantitative Financial Analyst & Systemic Risk Strategist.',
      focus: 'Architecting big data econometrics, enterprise portfolio risk management, and long-term capital preservation.',
      heightPct: '100%',
    },
  ];

  return (
    <section id="identity" className="relative py-28 sm:py-36 border-t border-emerald-900/40 bg-[#07130d]/85">
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
            <span>Chapter 02</span>
            <span aria-hidden="true">·</span>
            <span>Identity & Career Philosophy</span>
            <span aria-hidden="true">·</span>
            <span>The Botanical Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif-garden text-white tracking-tight leading-tight">
            Deep Roots Endure, Expansive Canopies Flourish
          </h2>
          <p className="text-emerald-200/80 text-base sm:text-lg leading-relaxed pt-2">
            In a volatile financial ecosystem, I believe risk governance is not about timid hesitation — it is the fine art of anchoring deep roots so capital can fearlessly absorb the torrential rains of market opportunity.
          </p>
        </motion.div>

        {/* Career Objective Showcase Card: Expansive & Airy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="shape-leaf-card p-8 sm:p-12 lg:p-16 mb-20"
        >
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-amber-400/50 text-xs sm:text-sm text-amber-300 font-serif">
                <Target className="w-4 h-4 text-amber-400" />
                <span>❧ Core Career Objective ☙</span>
              </div>
              <blockquote className="text-xl sm:text-2xl lg:text-3xl font-serif-garden text-emerald-100 italic leading-relaxed py-2">
                "{CANDIDATE_INFO.objective}"
              </blockquote>
              <p className="text-sm sm:text-base text-emerald-300/90 leading-loose max-w-3xl">
                Dedicated to distilling dense, unstructured datasets into transparent quantitative models — empowering institutional organizations to optimize yields while erecting robust capital protection buffers.
              </p>
            </div>

            <div className="lg:col-span-4 p-6 sm:p-8 rounded-2xl bg-emerald-950/80 border border-amber-400/40 text-xs sm:text-sm space-y-4 shadow-inner">
              <div className="font-semibold text-amber-200 flex items-center gap-2 pb-3 border-b border-emerald-800/60 font-serif text-sm sm:text-base">
                <Compass className="w-4 h-4 text-amber-300" />
                Three Guiding Principles
              </div>
              <div className="space-y-3.5 text-emerald-200/90 leading-relaxed">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                  <span><strong>Absolute Precision:</strong> Data is the most candid dialect of financial value.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                  <span><strong>Capital Discipline:</strong> A 9.2% yield is only meaningful with zero capital impairment.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                  <span><strong>Relentless Inquiry:</strong> Continuously mastering cutting-edge analytical tools.</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* The 3 Botanical Pillars Cards: Expansive & Readable */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {PILLARS.map((pillar, idx) => {
            const icons = [
              <Sprout key={0} className="w-7 h-7 text-amber-300" />,
              <ShieldCheck key={1} className="w-7 h-7 text-emerald-300" />,
              <TrendingUp key={2} className="w-7 h-7 text-teal-300" />,
            ];

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="shape-petal-card p-8 sm:p-10 space-y-4 group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-950/80 border border-amber-400/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                  {icons[idx]}
                </div>
                <div className="text-xs sm:text-sm text-amber-300/80 font-serif">{pillar.subtitle}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white font-serif-garden">
                  {pillar.title}
                </h3>
                <p className="text-sm text-emerald-200/90 leading-relaxed pt-1">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Feature: CONSERVATORY GOTHIC ARCH */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="shape-conservatory-arch p-6 sm:p-10"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-amber-400/30">
            <div>
              <h3 className="text-base sm:text-lg font-bold font-serif-garden text-white flex items-center gap-2">
                <Droplets className="w-5 h-5 text-teal-300" />
                The Botanical Progression: Cultivating Competence
              </h3>
              <p className="text-xs text-emerald-300/70 mt-0.5">
                Select a stage to water the roots and observe the evolution from academic theory into battle-tested execution
              </p>
            </div>

            {/* Stage Selector Buttons */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-emerald-950/80 border border-amber-400/40">
              {[1, 2, 3].map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setWateringLevel(lvl)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer font-serif ${
                    wateringLevel === lvl
                      ? 'bg-amber-400 text-emerald-950 font-bold shadow-md'
                      : 'text-amber-200/80 hover:text-white'
                  }`}
                >
                  Stage {lvl}
                </button>
              ))}
            </div>
          </div>

          {/* Stage Details Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Visual Tree Growth Column */}
            <div className="md:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-[#06120b]/80 border border-amber-400/30 min-h-[220px] relative overflow-hidden">
              <motion.div
                layout
                className="w-16 rounded-t-full bg-gradient-to-t from-emerald-800 via-amber-400 to-teal-200 flex items-center justify-center relative shadow-lg"
                style={{
                  height: growthStages[wateringLevel - 1].heightPct,
                  boxShadow: '0 0 30px rgba(245, 197, 66, 0.4)',
                }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <Sprout className="w-6 h-6 text-emerald-950 absolute -top-3 animate-bounce" />
              </motion.div>
              <div className="w-32 h-2 rounded-full bg-amber-400/40 mt-2" />
              <div className="text-[11px] text-amber-300/90 mt-2 font-medium font-serif">
                Botanical Maturity: {wateringLevel === 1 ? '35%' : wateringLevel === 2 ? '70%' : '100%'}
              </div>
            </div>

            {/* Explanation Column */}
            <div className="md:col-span-8 space-y-3">
              <div className="text-xs text-amber-300 font-semibold tracking-wide font-serif">
                {growthStages[wateringLevel - 1].name}
              </div>
              <div className="text-sm sm:text-base text-emerald-100 font-medium">
                {growthStages[wateringLevel - 1].summary}
              </div>
              <p className="text-xs text-emerald-300/80 leading-relaxed bg-emerald-950/70 p-3 rounded-xl border border-amber-400/30">
                <strong>Core Focus:</strong> {growthStages[wateringLevel - 1].focus}
              </p>

              {/* Secret 2 trigger */}
              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => onDiscoverSecret('clover-2')}
                  className={`btn-vintage-botanical text-xs px-3.5 py-1.5 rounded-lg border transition-all cursor-pointer ${
                    discovered
                      ? 'border-amber-400 text-amber-200'
                      : 'border-emerald-500/50 text-emerald-300 hover:text-white'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 inline mr-1 text-amber-300" />
                  {discovered ? '🌿 Secret 2: Philosophy Unlocked' : '🌱 Tap Dewdrop for Secret 2'}
                </button>
              </div>
              {discovered && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs italic text-amber-100 bg-emerald-950/80 p-3 rounded-xl border border-amber-400/50"
                >
                  "A financial garden only thrives when the grower looks past sweet fruits to attend diligently to every fiber of data anchoring deep within reality."
                </motion.p>
              )}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
