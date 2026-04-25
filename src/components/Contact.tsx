import { motion } from 'motion/react';
import { Calendar, ClipboardList, Mail, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-12 md:py-24 bg-black border-t border-border-gray">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[40px]">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-0 border border-border-gray">
          {/* Left Side: Strategic Filter */}
          <div className="p-6 md:p-16 border-b md:border-b-0 md:border-r border-border-gray flex flex-col justify-between">
              <div>
              <span className="font-mono text-[11px] tracking-widest text-neon-purple mb-4 block uppercase font-bold">
                Entry Protocol
              </span>
              <h2 className="text-4xl md:text-6xl mb-8 leading-tight font-black uppercase tracking-tighter">
                Not Every Brand <br /> Gets In.
              </h2>
              
              <p className="text-muted-gray text-base md:text-lg mb-12 max-w-sm leading-relaxed">
                We don’t do <i>"chats".</i> <br /> We focus on <strong>EXECUTION.</strong> <br /> If you’re not ready to invest at a serious level, this isn’t the right place.
              </p>
            </div>

            <div className="pt-8 border-t border-border-gray/50">
              <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-gray mb-4">Direct Channel</p>
              <a href="mailto:hello@bluntseo.com" className="flex items-center gap-4 group">
                <div className="w-10 h-10 shrink-0 rounded-sm border border-border-gray flex items-center justify-center group-hover:bg-off-white group-hover:text-black transition-all">
                    <Mail size={18} />
                </div>
                <div className="text-xs md:text-sm font-bold uppercase tracking-widest text-off-white group-hover:text-neon-purple transition-colors overflow-hidden text-ellipsis whitespace-nowrap text-left">
                  hello@bluntseo.com
                </div>
              </a>
            </div>
          </div>

          {/* Right Side: Execution Gates */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="p-6 md:p-16 bg-surface flex flex-col justify-center gap-6"
          >
            <div className="space-y-6">
              {/* CTA 1: Calendly */}
              <a 
                href="https://calendly.com/0noorulain/bluntseo-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col p-6 md:p-8 border border-border-gray hover:border-neon-purple transition-all bg-black active:scale-[0.98]"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-sm bg-neon-purple/10 flex items-center justify-center border border-neon-purple/20 group-hover:bg-neon-purple/20 transition-all text-neon-purple">
                    <Calendar size={24} />
                  </div>
                  <ArrowRight size={20} className="text-muted-gray group-hover:text-neon-purple group-hover:translate-x-2 transition-all" />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-2">Talk ROI for 15 Min.</h3>
                <p className="text-muted-gray text-[10px] md:text-xs uppercase tracking-widest leading-relaxed">
                  Fast-track your dominance. Only if you're ready to act now.
                </p>
              </a>

              {/* CTA 2: Tally Form */}
              <a 
                href="https://tally.so/r/ZjRyGA"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col p-6 md:p-8 border border-border-gray hover:border-off-white transition-all bg-black active:scale-[0.98]"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-sm bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white group-hover:text-black transition-all text-muted-gray group-hover:text-black">
                    <ClipboardList size={24} />
                  </div>
                  <ArrowRight size={20} className="text-muted-gray group-hover:text-off-white group-hover:translate-x-2 transition-all" />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-2">Submit Application.</h3>
                <p className="text-muted-gray text-[10px] md:text-xs uppercase tracking-widest leading-relaxed">
                  Fill out the Form. We'll audit your business.If there’s real potential, we’ll reach out.
                </p>
              </a>
            </div>

            <p className="text-[10px] text-center opacity-30 font-mono uppercase tracking-[0.4em] mt-4">
              Access is very LIMITED.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
