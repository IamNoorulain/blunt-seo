import { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Work from '../components/Work';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

interface LandingProps {
  onModalToggle: (isOpen: boolean) => void;
}

export default function Landing({ onModalToggle }: LandingProps) {
  useEffect(() => {
    // Check if there is a hash in the URL to scroll to
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Work onModalToggle={onModalToggle} />
      <Testimonials />
      <Contact />
    </main>
  );
}
