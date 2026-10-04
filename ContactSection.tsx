import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Check, Copy, ExternalLink, Download, Sparkles, Leaf } from 'lucide-react';
import { CANDIDATE_INFO } from '../data/cvData';

interface ContactSectionProps {
  discoveredSecrets: number;
  totalSecrets: number;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  discoveredSecrets,
  totalSecrets,
}) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '', role: 'Hiring Manager' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 border-t border-emerald-900/40 bg-[#06120b] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Editorial Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16"
        >
          <div className="flex items-center gap-2 text-xs text-amber-300 font-medium mb-3 font-serif">
            <span>Chapter 10</span>
            <span aria-hidden="true">·</span>
            <span>The Gazebo of Connection</span>
            <span aria-hidden="true">·</span>
            <span>Bridging Values</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif-garden text-white tracking-tight leading-tight">
            Sowing Seeds of High-Impact Collaboration
          </h2>
          <p className="mt-4 text-emerald-200/80 text-sm sm:text-base leading-relaxed">
            I am always eager to explore internship opportunities, quantitative corporate finance engagements, real estate cash flow modeling projects, and challenging competitions. Let’s connect and create sustainable value.
          </p>
        </motion.div>

        {/* Discovery Milestones Banner: SHAPE PETAL CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="shape-petal-card p-6 sm:p-8 mb-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-950/80 border-2 border-amber-400/60 flex items-center justify-center text-amber-300 shadow-md">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white flex items-center gap-2 font-serif">
                Secret Garden Discovery Status:
                <span className="font-mono text-amber-300 font-bold">
                  {discoveredSecrets}/{totalSecrets} Secrets Unveiled
                </span>
              </div>
              <div className="text-xs text-emerald-300/80">
                {discoveredSecrets === totalSecrets
                  ? '🎉 Extraordinary! You have unlocked all 7 secrets of the financial garden.'
                  : 'Tap the morning dewdrops on each chapter to reveal hidden perspectives.'}
              </div>
            </div>
          </div>

          <button
            onClick={() => window.print()}
            className="btn-vintage-botanical flex items-center gap-2 px-6 py-3 rounded-xl text-amber-200 hover:text-white text-xs font-semibold shadow-md transition-all self-start sm:self-auto cursor-pointer"
          >
            <Download className="w-4 h-4 text-amber-400" />
            <span>Save / Print Resume PDF</span>
          </button>
        </motion.div>

        {/* Contact Cards & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Phone */}
            <motion.div
              whileHover={{ x: 4 }}
              className="p-5 rounded-2xl bg-[#0b1d14]/90 border border-amber-400/35 hover:border-amber-400 transition-colors flex items-center justify-between shadow-md"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-emerald-950/80 border border-amber-400/50 flex items-center justify-center text-amber-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-amber-300/80 font-serif">Direct Telephone</div>
                  <a
                    href={`tel:${CANDIDATE_INFO.phone}`}
                    className="text-sm font-semibold text-white hover:text-amber-300 transition-colors font-mono"
                  >
                    {CANDIDATE_INFO.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(CANDIDATE_INFO.phone, 'phone')}
                className="p-2 text-amber-400 hover:text-amber-200 hover:bg-emerald-900/40 rounded-lg transition-colors cursor-pointer"
                title="Copy phone number"
              >
                {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
              </button>
            </motion.div>

            {/* Email */}
            <motion.div
              whileHover={{ x: 4 }}
              className="p-5 rounded-2xl bg-[#0b1d14]/90 border border-amber-400/35 hover:border-amber-400 transition-colors flex items-center justify-between shadow-md"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-emerald-950/80 border border-amber-400/50 flex items-center justify-center text-amber-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-amber-300/80 font-serif">Electronic Mail</div>
                  <a
                    href={`mailto:${CANDIDATE_INFO.email}`}
                    className="text-xs sm:text-sm font-semibold text-white hover:text-amber-300 transition-colors font-mono break-all"
                  >
                    {CANDIDATE_INFO.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(CANDIDATE_INFO.email, 'email')}
                className="p-2 text-amber-400 hover:text-amber-200 hover:bg-emerald-900/40 rounded-lg transition-colors cursor-pointer"
                title="Copy email address"
              >
                {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
              </button>
            </motion.div>

            {/* Location */}
            <motion.div
              whileHover={{ x: 4 }}
              className="p-5 rounded-2xl bg-[#0b1d14]/90 border border-amber-400/35 flex items-center gap-3.5 shadow-md"
            >
              <div className="w-11 h-11 rounded-xl bg-emerald-950/80 border border-amber-400/50 flex items-center justify-center text-amber-300 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] text-amber-300/80 font-serif">Current Residence</div>
                <div className="text-sm font-semibold text-white">
                  {CANDIDATE_INFO.location}
                </div>
                <div className="text-[11px] text-emerald-400/80">
                  Open for on-site or hybrid engagements in Hanoi
                </div>
              </div>
            </motion.div>

            {/* LinkedIn Profile */}
            <motion.div
              whileHover={{ x: 4 }}
              className="p-5 rounded-2xl bg-[#0b1d14]/90 border border-amber-400/35 flex items-center justify-between shadow-md"
            >
              <div>
                <div className="text-[11px] text-amber-300/80 font-serif">Professional Network</div>
                <div className="text-sm font-semibold text-white font-serif-garden">Verified LinkedIn</div>
                <div className="text-[11px] text-emerald-400/80">Connect for career updates</div>
              </div>
              <a
                href={CANDIDATE_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-vintage-botanical px-4 py-2 rounded-xl text-amber-200 hover:text-white text-xs font-semibold flex items-center gap-1.5"
              >
                <span>View Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
              </a>
            </motion.div>

          </div>

          {/* Right Column: Working Contact Form: SHAPE LEAF CARD */}
          <div className="lg:col-span-7 shape-leaf-card p-6 sm:p-10 shadow-2xl">
            <h3 className="text-lg font-bold font-serif-garden text-white mb-1">
              Send a Direct Ingestion / Opportunity Message
            </h3>
            <p className="text-xs text-emerald-300/80 mb-6">
              Please share your inquiry or opportunity; Pham Ngoc Minh responds promptly within 24 hours.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-emerald-950/80 border border-amber-400/50 text-center space-y-3"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-800/60 border border-amber-400 flex items-center justify-center text-amber-200 mx-auto">
                  <Check className="w-6 h-6 text-amber-300" />
                </div>
                <h4 className="text-base font-bold font-serif-garden text-white">
                  Message Dispatched Over Morning Mist!
                </h4>
                <p className="text-xs text-emerald-200/90 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>, for reaching out. Minh will review your note and respond via <strong>{formData.email}</strong> shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-3 text-xs text-amber-300 hover:text-amber-100 underline cursor-pointer font-serif"
                >
                  Send another inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-amber-200 font-medium mb-1.5 font-serif">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe / Recruiter"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full text-xs rounded-xl bg-emerald-950/80 border border-amber-400/40 px-3.5 py-2.5 text-white placeholder:text-emerald-600 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-amber-200 font-medium mb-1.5 font-serif">
                      Your Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@enterprise.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full text-xs rounded-xl bg-emerald-950/80 border border-amber-400/40 px-3.5 py-2.5 text-white placeholder:text-emerald-600 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-amber-200 font-medium mb-1.5 font-serif">
                    Your Organization / Relationship
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full text-xs rounded-xl bg-emerald-950/80 border border-amber-400/40 px-3.5 py-2.5 text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="Hiring Manager">Corporate Enterprise / Financial Recruiter</option>
                    <option value="Research Scholar">Academic Faculty / Research Colleague</option>
                    <option value="Real Estate Partner">Real Estate Investor / Broker Principal</option>
                    <option value="Student Peer">Student Peer / Academic Network</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-amber-200 font-medium mb-1.5 font-serif">
                    Collaboration / Inquiry Note
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Outline your internship offer, quantitative research collaboration, or discussion topics..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full text-xs rounded-xl bg-emerald-950/80 border border-amber-400/40 px-3.5 py-2.5 text-white placeholder:text-emerald-600 focus:outline-none focus:border-amber-400 resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  className="btn-vintage-botanical w-full py-3.5 rounded-xl text-amber-100 hover:text-white font-medium text-xs sm:text-sm shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-amber-300" />
                  <span>Send Message Through the Morning Mist</span>
                </motion.button>
              </form>
            )}
          </div>

        </div>

        {/* Footer Botanical Sign-off */}
        <div className="mt-20 pt-8 border-t border-amber-400/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-amber-300/80 font-serif">
          <div className="flex items-center gap-2">
            <Leaf className="w-4 h-4 text-amber-400" />
            <span>Pham Ngoc Minh © 2026 · The Secret Garden of Finance Portfolio</span>
          </div>
          <div className="flex items-center gap-3">
            <span>Foreign Trade University</span>
            <span aria-hidden="true">·</span>
            <span>Hanoi, Vietnam</span>
          </div>
        </div>

      </div>
    </section>
  );
};
