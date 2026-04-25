import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function TermsConditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black pt-32 pb-24 selection:bg-neon-purple selection:text-white">
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-gray hover:text-neon-purple transition-colors font-mono text-xs uppercase tracking-widest mb-12 group">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Dominance
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-[11px] tracking-widest text-neon-purple mb-4 block uppercase font-bold">
            Legal Protocol
          </span>
          <h1 className="text-4xl md:text-6xl mb-12 font-black uppercase tracking-tighter">Terms & Conditions</h1>
          
          <div className="space-y-12 text-muted-gray leading-relaxed font-sans">

  <section>
    <h2 className="text-xl font-bold text-off-white uppercase tracking-wider mb-4 border-l-2 border-neon-purple pl-4">
      01. Service Engagement
    </h2>
    <p>
      By using our services, you acknowledge that Blunt SEO operates as a technical execution partner. We do not guarantee specific rankings, as search performance depends on external factors. However, we do implement proven, advanced SEO systems designed to improve visibility and growth.
    </p>
  </section>

  <section>
    <h2 className="text-xl font-bold text-off-white uppercase tracking-wider mb-4 border-l-2 border-neon-purple pl-4">
      02. Selective Onboarding
    </h2>
    <p>
      We reserve the right to decline or discontinue engagements if a project does not align with our scalability criteria. We only work with businesses where meaningful growth potential is clear.
    </p>
  </section>

  <section>
    <h2 className="text-xl font-bold text-off-white uppercase tracking-wider mb-4 border-l-2 border-neon-purple pl-4">
      03. Intellectual Property
    </h2>
    <p>
      All proprietary systems, workflows, and technical methods developed by Blunt SEO remain our intellectual property unless explicitly transferred through a written agreement.
    </p>
  </section>

  <section>
    <h2 className="text-xl font-bold text-off-white uppercase tracking-wider mb-4 border-l-2 border-neon-purple pl-4">
      04. Termination of Access
    </h2>
    <p>
      We may suspend or terminate access in cases of misuse, violation of agreed terms, or attempts to replicate or misuse our internal systems without authorization.
    </p>
  </section>

</div>
        </motion.div>
      </div>
    </div>
  );
}
