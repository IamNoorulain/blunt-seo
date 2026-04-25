import { motion } from 'motion/react';
import { Search, Zap, Link2, ShieldCheck, Cpu, BarChart3 } from 'lucide-react';

const SERVICES = [
  {
    title: 'SEO Audits',
    desc: 'Hyper-detailed technical and strategic forensics. We find the leaks; we fix the foundation.',
    icon: Search,
  },
  {
    title: 'On-Page Optimization',
    desc: 'Linguistic and semantic engineering. We make search engines believe you’re the authority.',
    icon: Zap,
  },
  {
    title: 'Off-Page Authority',
    desc: 'Strategic power acquisition through elite link building and network leverage.',
    icon: Link2,
  },
  {
    title: 'Technical Fixes',
    desc: 'Removing technical bottlenecks that hide your content from indexers & crwalers.',
    icon: ShieldCheck,
  },
  {
    title: 'AI SEO / AEO',
    desc: 'Positioning your brand for the era of Answer Engines and LLM-driven search.',
    icon: Cpu,
  },
  {
    title: 'CRO Systems',
    desc: 'Conversion Rate Optimization to ensure your traffic turns into revenue.',
    icon: BarChart3,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-black border-b border-border-gray">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-0">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-8 md:p-10 border-b border-r-0 sm:border-r border-border-gray hover:bg-[#0f0015] transition-colors group flex flex-col justify-between min-h-[180px] md:min-h-[200px]"
          >
            <div>
              <h3 className="font-bold text-sm uppercase mb-4 group-hover:text-neon-purple transition-colors">{service.title}</h3>
              <p className="text-muted-gray text-[11px] leading-relaxed">
                {service.desc}
              </p>
            </div>
            <div className="w-8 h-[1px] bg-neon-purple/30 group-hover:w-full transition-all duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
