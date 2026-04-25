import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#050505] border-b border-border-gray">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-[40px]">
        <div className="grid grid-cols-1 xl:grid-cols-[450px_1fr] lg:grid-cols-[400px_1fr] border border-border-gray">
          {/* Image Block */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="aspect-square sm:aspect-[4/5] md:aspect-video lg:aspect-auto lg:h-full overflow-hidden border-b lg:border-b-0 lg:border-r border-border-gray bg-surface"
          >
            <img 
              src='\CEO.png'
              alt="Noor - Founder"
              className="w-full h-full object-cover "
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Content Block */}
          <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row xl:grid xl:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 border-b md:border-b-0 md:border-r border-border-gray"
            >
              <span className="font-mono text-[10px] md:text-[11px] tracking-widest text-neon-purple mb-4 block uppercase font-bold text-left">
                FOUNDER
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 md:mb-10 text-left leading-tight">Noor — SEO & AI Specialist</h2>
              
              <div className="space-y-4 md:space-y-6 text-muted-gray text-sm sm:text-base md:text-lg leading-relaxed text-left">
                <p>
                SEO is about <strong>execution. </strong>  I started in 2020, when most people were guessing and <i>getting nowhere.</i>
                </p>
                <p>
                I don’t do packages. Everything is built from scratch for brands with real growth potential. <br /> If scaling isn’t the goal, this isn’t for you.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 bg-surface"
            >
                <h3 className="text-[10px] md:text-xs font-black tracking-widest uppercase mb-6 md:mb-10 text-left opacity-70">THE BLUNT PROTOCOL</h3>
                <ul className="space-y-4 md:space-y-6 font-mono text-[11px] md:text-[13px] text-muted-gray text-left">
                    <li className="flex items-start gap-3 text-off-white">
                        <span className="text-neon-purple font-bold mt-1">—</span> 
                        <span>Zero Motivational Fluff</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-neon-purple font-bold mt-1">—</span> 
                        <span>Technical Domination</span>
                    </li>
                    <li className="flex items-start gap-3 text-off-white">
                        <span className="text-neon-purple font-bold mt-1">—</span> 
                        <span>Aggressive Growth Only</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-neon-purple font-bold mt-1">—</span> 
                        <span>AEO & AI Optimization</span>
                    </li>
                </ul>

                <div className="mt-10 md:mt-16 p-6 md:p-8 border border-border-gray bg-black/50 hover:border-neon-purple transition-all duration-500 group">
                    <div className="text-3xl md:text-4xl font-display text-off-white mb-2 group-hover:neon-glow transition-all">200+</div>
                    <div className="font-mono text-[9px] md:text-[10px] tracking-widest uppercase opacity-50">Proven Deliverables</div>
                </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
