import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function PrivacyPolicy() {
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
          <h1 className="text-4xl md:text-6xl mb-12 font-black uppercase tracking-tighter">Privacy Policy</h1>
          
          <div className="space-y-12 text-muted-gray leading-relaxed font-sans">

  <section>
    <h2 className="text-xl font-bold text-off-white uppercase tracking-wider mb-4 border-l-2 border-neon-purple pl-4">
      01. Data Collection
    </h2>
    <p>
      At Blunt SEO, we collect only the data required to evaluate and execute SEO campaigns. This may include business emails, website URLs, and performance data submitted through our forms or scheduling tools. We do not collect unnecessary or irrelevant information.
    </p>
  </section>

  <section>
    <h2 className="text-xl font-bold text-off-white uppercase tracking-wider mb-4 border-l-2 border-neon-purple pl-4">
      02. Use of Information
    </h2>
    <p>
      Data is used strictly for auditing, strategy development, and campaign execution. This includes analyzing search performance and related metrics to improve results. We do not sell or share your data with third-party marketing or advertising services.
    </p>
  </section>

  <section>
    <h2 className="text-xl font-bold text-off-white uppercase tracking-wider mb-4 border-l-2 border-neon-purple pl-4">
      03. Data Security
    </h2>
    <p>
      We use standard security practices to protect client information. Access is limited only to team members directly involved in your project work.
    </p>
  </section>

  <section>
    <h2 className="text-xl font-bold text-off-white uppercase tracking-wider mb-4 border-l-2 border-neon-purple pl-4">
      04. Contact
    </h2>
    <p>
      For any questions related to data handling, contact <span className="text-neon-purple">hello@bluntseo.com</span>. We respond to relevant operational queries.
    </p>
  </section>

</div>
        </motion.div>
      </div>
    </div>
  );
}
