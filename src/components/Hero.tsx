import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [slotsLeft, setSlotsLeft] = useState(1);

  useEffect(() => {
    // Random number between 1 and 7
    setSlotsLeft(Math.floor(Math.random() * 7) + 1);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden border-b border-border-gray pt-20">
      {/* Radial overlay */}
      <div className="absolute inset-0 bg-radial-hero opacity-80" />

      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 md:px-[40px] grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-0">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 md:p-20 border-b md:border-b-0 md:border-r border-border-gray"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-[10px] md:text-[12px] tracking-widest uppercase text-neon-purple mb-4 block">
              // Not For Everyone
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-[72px] font-black leading-[0.9] tracking-[-0.05em] mb-8"
          >
            We Don’t Take Every<br />
            Client!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-[450px] text-muted-gray text-base md:text-[18px] mb-12 font-medium leading-relaxed md:leading-[1.5]"
          >
            Most people aren’t a fit. If you’re looking for <i>cheap SEO, </i>this isn’t for you. <br/>
            We work long-term with brands we can actually <strong>scale.</strong>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 md:gap-6"
          >
            <a 
              href="https://calendly.com/0noorulain/bluntseo-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto text-center group"
            >
              Book Strategy Call
            </a>
            <a href="#work" className="btn-secondary w-full sm:w-auto text-center">
              See Proof
            </a>
          </motion.div>
        </motion.div>

        {/* Scarcity / Indicator Column (Matching the design's scarcity-cell structure) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-20 flex flex-col justify-between bg-surface"
        >
            <div>
                <div className="status-chip mb-6">ELITE SEO</div>
                <h2 className="text-2xl md:text-3xl mb-4 font-black">SELECTIVE ONBOARDING ONLY</h2>
                <p className="text-muted-gray text-xs md:text-sm mb-8 leading-relaxed">
                We work with <strong>3–4 </strong> brands at a time. If we don’t see real <i>growth potential, </i> we won’t take it on.
                </p>
                <div className="flex gap-2 mb-4">
                    {[1, 2, 3, 4].map((i) => {
                        // Logic: More slots left = fewer active bars
                        // Max slots usually 4 for this UI visualization
                        const threshold = 8 - slotsLeft;
                        const isActive = i * 2 <= threshold;
                        return (
                            <div 
                                key={i}
                                className={`w-8 h-1 md:w-10 md:h-1.5 transition-colors duration-500 ${
                                    isActive 
                                    ? 'bg-neon-purple shadow-[0_0_10px_var(--color-neon-purple)]' 
                                    : 'bg-border-gray'
                                }`} 
                            />
                        );
                    })}
                </div>
                <p className="font-mono text-[10px] md:text-[11px] uppercase text-muted-gray tracking-widest">
                    Current Availability: <strong className="text-off-white">{slotsLeft} SLOT{slotsLeft > 1 ? 'S' : ''} LEFT</strong>
                </p>
            </div>
            
            <div className="mt-12 md:mt-20 pt-8 md:pt-10 border-t border-border-gray">
                <p className="font-sans font-bold text-off-white text-sm">NOOR</p>
                <p className="text-muted-gray text-xs mt-1">Founder & AI Specialist</p>
                <p className="text-muted-gray text-[9px] md:text-[10px] mt-4 uppercase tracking-widest leading-loose">
                    100+ SEO Deliverables.<br className="hidden md:block" /> 5+ Years Experience.<br className="hidden md:block" /> Collaborated with 7  Agencies
                </p>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
