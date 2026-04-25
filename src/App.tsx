/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Landing from './pages/Landing';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import { motion, AnimatePresence } from 'motion/react';
import { Routes, Route, useLocation } from 'react-router-dom';

export default function App() {
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    const handleScroll = () => {
      // Show button after scrolling roughly half the viewport height
      const scrolled = window.scrollY || document.documentElement.scrollTop;
      // Only show sticky CTA on the home page
      setShowStickyCTA(scrolled > window.innerHeight * 0.5 && location.pathname === '/');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial state
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black overflow-x-hidden relative">
      <CustomCursor />
      
      {/* Conditionally show Navbar - hide on legal pages or simplify */}
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Landing onModalToggle={(isOpen) => setIsModalOpen(isOpen)} />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsConditions />} />
      </Routes>

      <Footer />

      {/* Sticky Bottom CTA */}
      <AnimatePresence>
        {showStickyCTA && !isModalOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            className="fixed bottom-10 left-0 w-full flex justify-center px-6 z-[999]"
            style={{ pointerEvents: 'none' }}
          >
            <a 
              href="https://calendly.com/0noorulain/bluntseo-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary block px-12 py-5 text-sm shadow-[0_12px_35px_rgba(188,19,254,0.35)] whitespace-nowrap pointer-events-auto"
            >
              Consult Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Noise/Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-[50]" />
    </div>
  );
}
