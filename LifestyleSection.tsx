import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen, Headphones, Activity, Sparkles, Coffee } from 'lucide-react';
import { HOBBIES } from '../data/cvData';

interface LifestyleSectionProps {
  onDiscoverSecret: (secretId: string) => void;
  discovered: boolean;
}

export const LifestyleSection: React.FC<LifestyleSectionProps> = ({
  onDiscoverSecret,
  discovered,
}) => {
  const [activeHobby, setActiveHobby] = useState<number>(0);

  const curatedBooks = [
    { title: 'The Psychology of Money', author: 'Morgan Housel', quote: 'Doing well with money has a little to do with how smart you are and a lot to do with how you behave.' },
    { title: 'The Intelligent Investor', author: 'Benjamin Graham', quote: 'The essence of investment management is the management of risks, not the management of returns.' },
    { title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman', quote: 'A reliable way to make people believe in falsehoods is frequent repetition, because familiarity is not easily distinguished from truth.' },
  ];

  return (
    <section id="lifestyle" className="relative py-24 border-t border-emerald-900/40 bg-[#081810]/95">
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
            <span>Chapter 09</span>
            <span aria-hidden="true">·</span>
            <span>The Tea Pavilion</span>
            <span aria-hidden="true">·</span>
            <span>Mindful Equilibrium & Discipline</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif-garden text-white tracking-tight leading-tight">
            Quiet Sanctuaries Nourishing Analytical Composure
          </h2>
          <p className="mt-4 text-emerald-200/80 text-sm sm:text-base leading-relaxed">
            Behind quantitative models and institutional Excel spreadsheets lies an inner drive fueled by athletic discipline, intellectual depth found in behavioral economics literature, and the serenity of dawn podcasts over a hot cup of tea.
          </p>
        </motion.div>

        {/* 3 Hobbies Cards: SHAPE PETAL CARD */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {HOBBIES.map((h, idx) => {
            const icons = [
              <Activity key={0} className="w-6 h-6 text-teal-300" />,
              <BookOpen key={1} className="w-6 h-6 text-amber-300" />,
              <Headphones key={2} className="w-6 h-6 text-emerald-300" />,
            ];

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onClick={() => setActiveHobby(idx)}
                className={`shape-petal-card p-7 transition-all cursor-pointer relative overflow-hidden group ${
                  activeHobby === idx
                    ? 'border-amber-400 shadow-2xl scale-[1.02]'
                    : 'border-amber-400/40 hover:border-amber-400/70'
                }`}
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-950/80 border border-amber-400/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
                  {icons[idx]}
                </div>
                <h3 className="text-base font-bold font-serif-garden text-white mb-2">
                  {h.name}
                </h3>
                <blockquote className="text-xs text-amber-300 italic mb-3 font-serif">
                  "{h.quote}"
                </blockquote>
                <p className="text-xs text-emerald-200/80 leading-relaxed">
                  {h.reflection}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Visual Botanical Showcase: SHAPE LEAF CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="shape-leaf-card p-6 sm:p-10 shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Nature Dew Macro Image */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-4/3 group shadow-xl border border-amber-400/40">
              <img
                src="/src/assets/images/dew_leaves_macro_1791122957317.jpg"
                alt="Morning Dew on Emerald Ferns"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06120b] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-3 right-3 text-xs text-emerald-200 bg-emerald-950/90 p-3 rounded-xl backdrop-blur-md border border-amber-400/40">
                <span className="flex items-center gap-1.5 font-semibold text-amber-300 font-serif">
                  <Coffee className="w-3.5 h-3.5 text-amber-300" />
                  The Morning Tea Ritual
                </span>
                <span className="text-[10px] text-emerald-300/80">
                  "Clarity of thought precedes accuracy in valuation."
                </span>
              </div>
            </div>

            {/* Book / Podcast recommendations */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-amber-400/30">
                <h3 className="text-base font-bold font-serif-garden text-white flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-amber-300" />
                  Curated Morning Reading & Podcast Bench
                </h3>
                <span className="text-xs text-amber-300 font-serif">Personal Favorites</span>
              </div>

              <div className="space-y-2.5">
                {curatedBooks.map((b, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-emerald-950/70 border border-amber-400/30 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-amber-100 font-serif">{b.title}</span>
                      <span className="text-[11px] text-amber-300/80 font-serif">{b.author}</span>
                    </div>
                    <p className="text-[11px] text-emerald-200/80 italic mt-1">"{b.quote}"</p>
                  </div>
                ))}
              </div>

              {/* Secret 7 trigger */}
              <div className="pt-2 flex items-center justify-between border-t border-emerald-900/60">
                <button
                  onClick={() => onDiscoverSecret('clover-7')}
                  className={`btn-vintage-botanical text-xs px-4 py-2 rounded-xl transition-all cursor-pointer ${
                    discovered
                      ? 'border-amber-400 text-amber-200'
                      : 'border-emerald-500/50 text-emerald-300 hover:text-white'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 inline mr-1 text-amber-300" />
                  {discovered ? '🌿 Secret 7: The Heart of the Garden Awoken' : '🌱 Tap Herbal Tea Cup'}
                </button>
              </div>
              {discovered && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-amber-100 italic bg-emerald-950/90 p-3 rounded-xl border border-amber-400/50"
                >
                  "Congratulations on discovering all 7 secrets of the garden! May our collaboration take deep root and bloom with enduring value."
                </motion.p>
              )}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
