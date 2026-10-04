import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Building2, Search, Filter, Sparkles, MapPin, TrendingUp, Home, CheckCircle2 } from 'lucide-react';
import { WORK_EXPERIENCES, SAMPLE_REAL_ESTATE_ITEMS } from '../data/cvData';

interface ThienKhoiSectionProps {
  onDiscoverSecret: (secretId: string) => void;
  discovered: boolean;
}

export const ThienKhoiSection: React.FC<ThienKhoiSectionProps> = ({
  onDiscoverSecret,
  discovered,
}) => {
  const [selectedDistrict, setSelectedDistrict] = useState<string>('all');
  const [minYield, setMinYield] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const exp = WORK_EXPERIENCES.find((w) => w.id === 'thien-khoi')!;

  const filteredProperties = SAMPLE_REAL_ESTATE_ITEMS.filter((item) => {
    const matchesDistrict = selectedDistrict === 'all' || item.district === selectedDistrict;
    const yieldNum = parseFloat(item.yield.replace('%', ''));
    const matchesYield = yieldNum >= minYield;
    const matchesSearch =
      item.highlights.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.district.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.price.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDistrict && matchesYield && matchesSearch;
  });

  return (
    <section id="thienkhoi" className="relative py-28 sm:py-36 border-t border-emerald-900/40 bg-[#07140e]/95">
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
            <span>Chapter 04</span>
            <span aria-hidden="true">·</span>
            <span>Market Intelligence</span>
            <span aria-hidden="true">·</span>
            <span>Thien Khoi Group</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif-garden text-white tracking-tight leading-tight">
            Navigating a 5,000+ Real Estate Data Repository
          </h2>
          <p className="text-emerald-200/80 text-base sm:text-lg leading-relaxed pt-2">
            At Thien Khoi Group — Vietnam's leading residential brokerage conglomerate — I developed real-world market acumen: evaluating actual transaction data, modeling rental yield cap rates, and advising retail investors on cash flow feasibility.
          </p>
        </motion.div>

        {/* Overview Banner Card: Expansive & Airy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="shape-leaf-card p-8 sm:p-12 lg:p-14 mb-20"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-8 border-b border-amber-400/30">
            <div className="flex items-start gap-5">
              <div className="w-16 h-16 rounded-2xl bg-emerald-950/80 border-2 border-amber-400/60 flex items-center justify-center text-amber-300 shrink-0 shadow-inner">
                <Building2 className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-amber-300 font-serif font-semibold">
                  <span>{exp.company}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-emerald-300 font-normal">{exp.period}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-serif-garden text-white">
                  {exp.position}
                </h3>
                <p className="text-xs sm:text-sm text-emerald-300/80 pt-1">
                  Regional Focus: Central Commercial & Residential Districts of Hanoi
                </p>
              </div>
            </div>

            {/* Impressive Quantitative Metric Flag */}
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-emerald-950/90 border border-amber-400/50 shadow-md shrink-0">
              <div className="text-right">
                <div className="text-3xl sm:text-4xl font-bold font-serif-garden text-amber-300">
                  5,000+
                </div>
                <div className="text-xs text-emerald-300/80 uppercase tracking-wider font-serif pt-1">
                  Managed Properties
                </div>
              </div>
              <Home className="w-9 h-9 text-amber-400" />
            </div>
          </div>

          {/* 4 Core Responsibilities from CV - Airy and Legible */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {exp.highlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-start gap-4 p-5 sm:p-6 rounded-2xl bg-emerald-950/60 border border-amber-400/25 text-sm sm:text-base text-emerald-100 leading-relaxed"
              >
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>

          {/* Skill Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-6 mt-6 border-t border-emerald-900/60 text-xs text-emerald-300/80 font-serif">
            <span className="text-amber-400 font-medium">Applied Competencies:</span>
            {exp.skillsLearned.map((s, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <span aria-hidden="true" className="text-amber-700">·</span>}
                <span className="text-emerald-200">{s}</span>
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* Interactive Feature: SHAPE PETAL CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="shape-petal-card p-6 sm:p-10 shadow-xl"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-amber-400/30">
            <div>
              <h3 className="text-base sm:text-lg font-bold font-serif-garden text-white flex items-center gap-2">
                <Search className="w-5 h-5 text-amber-300" />
                Live Real Estate Data Screening Simulator
              </h3>
              <p className="text-xs text-emerald-300/70 mt-0.5">
                Simulating how Pham Ngoc Minh filters high-cap-rate properties against custom investor constraints
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-amber-300 bg-emerald-950/80 px-4 py-2 rounded-xl border border-amber-400/40">
              <Filter className="w-3.5 h-3.5 text-amber-400" />
              <span>Matched: <strong>{filteredProperties.length}</strong> / {SAMPLE_REAL_ESTATE_ITEMS.length} sample listings</span>
            </div>
          </div>

          {/* Interactive Filters Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            
            {/* District Filter */}
            <div>
              <label className="block text-[11px] text-amber-300/90 font-medium mb-1.5 font-serif">
                Target District
              </label>
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="w-full text-xs rounded-xl bg-emerald-950/80 border border-amber-400/40 px-3.5 py-2.5 text-emerald-100 focus:outline-none focus:border-amber-400"
              >
                <option value="all">All Districts</option>
                <option value="Thanh Xuan">Thanh Xuan</option>
                <option value="Dong Da">Dong Da</option>
                <option value="Cau Giay">Cau Giay</option>
                <option value="Hai Ba Trung">Hai Ba Trung</option>
                <option value="Ha Dong">Ha Dong</option>
              </select>
            </div>

            {/* Min Yield Filter */}
            <div>
              <label className="block text-[11px] text-amber-300/90 font-medium mb-1.5 font-serif">
                Minimum Rental Yield (Cap Rate)
              </label>
              <select
                value={minYield}
                onChange={(e) => setMinYield(parseFloat(e.target.value))}
                className="w-full text-xs rounded-xl bg-emerald-950/80 border border-amber-400/40 px-3.5 py-2.5 text-emerald-100 focus:outline-none focus:border-amber-400"
              >
                <option value={0}>Any Cap Rate ({'>'} 0%)</option>
                <option value={8.0}>From 8.0%/yr and above</option>
                <option value={9.0}>From 9.0%/yr (High Cash Flow)</option>
              </select>
            </div>

            {/* Search Input */}
            <div>
              <label className="block text-[11px] text-amber-300/90 font-medium mb-1.5 font-serif">
                Keyword Filter
              </label>
              <input
                type="text"
                placeholder="e.g. elevator, car access, turnkey..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full text-xs rounded-xl bg-emerald-950/80 border border-amber-400/40 px-3.5 py-2.5 text-emerald-100 placeholder:text-emerald-600 focus:outline-none focus:border-amber-400"
              />
            </div>

          </div>

          {/* Property Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence>
              {filteredProperties.length > 0 ? (
                filteredProperties.map((prop) => (
                  <motion.div
                    key={prop.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="rounded-2xl bg-emerald-950/70 border border-amber-400/35 p-5 space-y-3 hover:border-amber-400 transition-colors cursor-pointer shadow-md"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-amber-200 flex items-center gap-1 font-serif">
                        <MapPin className="w-3.5 h-3.5 text-amber-400" />
                        {prop.district}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-emerald-900/80 text-amber-300 text-[10px] font-mono border border-amber-400/30">
                        {prop.id}
                      </span>
                    </div>

                    <div className="flex items-baseline justify-between pt-1">
                      <div className="text-base font-bold font-serif-garden text-white">
                        {prop.price}
                      </div>
                      <div className="text-xs font-semibold text-amber-300 flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5" />
                        Yield: {prop.yield}
                      </div>
                    </div>

                    <div className="text-xs text-emerald-200/90 space-y-1">
                      <div className="flex justify-between text-[11px]">
                        <span className="text-emerald-400/80">Area & Structure:</span>
                        <span>{prop.area} · {prop.floors}</span>
                      </div>
                      <div className="flex justify-between text-[11px]">
                        <span className="text-emerald-400/80">Monthly Cash Flow:</span>
                        <span className="text-amber-200 font-medium">{prop.cashFlow}</span>
                      </div>
                      <div className="flex justify-between text-[11px]">
                        <span className="text-emerald-400/80">Title / Legal:</span>
                        <span className="text-emerald-200">{prop.legal}</span>
                      </div>
                    </div>

                    <p className="text-[11px] text-amber-200/80 italic pt-2 border-t border-emerald-900/60 leading-relaxed">
                      💡 {prop.highlights}
                    </p>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full py-8 text-center text-xs text-amber-300/80 font-serif">
                  No matching assets found for this filter criteria. Try expanding search parameters.
                </div>
              )}
            </AnimatePresence>
          </div>

          {/* Secret 3 trigger */}
          <div className="mt-8 pt-4 border-t border-emerald-900/60 flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={() => onDiscoverSecret('clover-3')}
              className={`btn-vintage-botanical text-xs px-4 py-2 rounded-xl transition-all cursor-pointer ${
                discovered
                  ? 'border-amber-400 text-amber-200'
                  : 'border-emerald-500/50 text-emerald-300 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 inline mr-1 text-amber-300" />
              {discovered ? '🌿 Secret 3: 5,000+ Asset Archive Opened' : '🌱 Unlock Data Vault Secret'}
            </button>
            {discovered && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs text-amber-100 italic bg-emerald-950/80 p-3 rounded-xl border border-amber-400/50"
              >
                "Analyzing 5,000 properties taught me: true asset value is never superficial aesthetic; it is the resilient net operating cash flow it reliably yields across cycles."
              </motion.p>
            )}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
