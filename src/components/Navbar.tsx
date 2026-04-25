import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { name: 'About', href: '/#about' },
  { name: 'Services', href: '/#services' },
  { name: 'Work', href: '/#work' },
  { name: 'Testimonials', href: '/#testimonials' },
  { name: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    if (location.pathname === '/' && href.startsWith('/#')) {
      const id = href.replace('/#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-[100] border-b border-border-gray bg-black h-[70px]"
    >
      <div className="max-w-[1440px] h-full w-full mx-auto px-6 md:px-[40px] flex items-center justify-between">
      <Link to="/#" className="flex items-center">
  <img
    src="/logo.png"
    alt="Blunt SEO"
    className="h-8 md:h-10 w-auto"
  />
</Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-[30px]">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => handleLinkClick(link.href)}
              className="font-sans text-[11px] tracking-[2px] uppercase text-muted-gray hover:text-neon-purple transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link to="https://tally.so/r/ZjRyGA" target="_blank"
          className="btn-primary py-2 px-6 text-[11px] h-auto">
            Apply Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-off-white z-[120] relative" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] md:hidden bg-black flex flex-col items-center justify-center gap-10 p-6"
          >
            {/* Branding Accent */}
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--color-neon-purple)_0%,_transparent_70%)]" />

            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className="font-display text-5xl font-black uppercase tracking-tighter text-off-white hover:text-neon-purple transition-colors relative z-10"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: NAV_LINKS.length * 0.05 }}
              className="w-full max-w-[280px]"
            >
              <Link
                to="https://tally.so/r/ZjRyGA" 
                className="btn-primary text-center mt-6 w-full py-6 relative z-10 block"
              >
                Fill the Form
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
