import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="py-12 bg-black border-t border-off-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div >
        <Link to="/#" className="flex items-center">
  <img
    src="\logo.png"
    alt="Blunt SEO"
    className="h-8 md:h-10 w-auto"
  />
</Link>
        </div>
        <p className="font-tech text-[10px] tracking-[0.4em] uppercase opacity-30 text-center md:text-left">
          © {new Date().getFullYear()} Blunt SEO. Engineered for Dominance.
        </p>
        <div className="flex gap-8 text-[10px] font-tech tracking-widest uppercase opacity-50">
          <Link to="/privacy" className="hover:text-neon-purple transition-colors">Privacy</Link>
          <Link to="/terms" className="hover:text-neon-purple transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
