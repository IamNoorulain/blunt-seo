
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const TESTIMONIALS = [
  {
    name: "Jason Miller",
    role: "Co-Founder, Xtinio",
    text: "They asked tough questions and said no the first time. When we came back, they showed us exactly what needed fixing and laid out a plan that changed everything."
  },
  {
    name: "Ayesha R.",
    role: "CMO, Zelst",
    text: "They don’t take on just any brand, and that shows in the work. No fluff, just clear actions that actually moved our rankings."
  },
  {
    name: "Rahul Mehta",
    role: "Founder, Xugar",
    text: "We applied twice. First time was a no. Second time, they were clear on what had changed. That level of selectivity made the decision easy for us."
  },
  {
    name: "Sophia Lane",
    role: "Head of Digital, DB Digital",
    text: "Every call was straight to the point. Clear analysis, clear direction, and no wasted time. You either keep up or you don’t."
  },
  {
    name: "Daniel Cruz",
    role: "CEO, Yoghurt Digital",
    text: "They’re selective about what they take on. Once we started, growth came faster than expected. Traffic picked up within weeks."
  },
  {
    name: "Hassan Ali",
    role: "Founder, VANHA Digital",
    text: "Most agencies overpromise. They don’t. They focus on what matters and execute quietly, and the results speak for themselves."
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-black border-b border-border-gray">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[40px]">
        <div className="text-left border-l border-neon-purple pl-6 md:pl-10 mb-20">
          <span className="font-mono text-[11px] tracking-widest text-neon-purple mb-4 block uppercase font-bold">
            Verification
          </span>
          <h2 className="text-3xl md:text-5xl">Authentic & Effective!</h2>
        </div>

        <div className="relative border border-border-gray bg-[#020202] overflow-hidden min-h-[380px] md:min-h-[400px] flex items-center mb-8 pb-12">
  <AnimatePresence mode="wait">
    <motion.div
      key={currentIndex}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full p-2 md:p-5 pb-5 md:pb-6"
    >
      <div className="max-w-4xl mx-auto flex flex-col h-full">
        <Quote className="text-neon-purple opacity-40 mb-6 w-10 h-10 md:w-12 md:h-12" />
        <p className="text-xl md:text-3xl leading-snug md:leading-tight mb-10 text-off-white font-medium">
          "{TESTIMONIALS[currentIndex].text}"
        </p>
        <div className="flex flex-col gap-2 border-l-2 border-neon-purple pl-6">
          <div className="font-sans font-black text-xl md:text-2xl text-off-white tracking-tight uppercase leading-none">
            {TESTIMONIALS[currentIndex].name}
          </div>
          <div className="font-mono text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-neon-purple font-bold">
            {TESTIMONIALS[currentIndex].role}
          </div>
        </div>
      </div>
    </motion.div>
  </AnimatePresence>

  {/* Progress dots */}
  <div className="absolute bottom-4 left-8 md:left-16 flex gap-3">
    {TESTIMONIALS.map((_, i) => (
      <button
        key={i}
        onClick={() => setCurrentIndex(i)}
        className={`h-1 transition-all duration-300 ${
          currentIndex === i ? 'w-10 bg-neon-purple' : 'w-4 bg-border-gray'
        }`}
        aria-label={`Go to slide ${i + 1}`}
      />
    ))}
  </div>
</div>

        <div className="flex justify-between items-center sm:flex-row flex-col gap-8">
          <div className="flex gap-4">
            <button 
              onClick={prevSlide}
              className="w-16 h-16 border border-border-gray flex items-center justify-center hover:border-neon-purple hover:bg-neon-purple/5 transition-all group active:scale-95"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={28} className="text-muted-gray group-hover:text-neon-purple transition-colors" />
            </button>
            <button 
              onClick={nextSlide}
              className="w-16 h-16 border border-border-gray flex items-center justify-center hover:border-neon-purple hover:bg-neon-purple/5 transition-all group active:scale-95"
              aria-label="Next testimonial"
            >
              <ChevronRight size={28} className="text-muted-gray group-hover:text-neon-purple transition-colors" />
            </button>
          </div>
          
          <div className="flex flex-col items-end gap-1">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-gray">
              Verification Protocol
            </div>
            <div className="font-mono text-xs font-bold">
              <span className="text-neon-purple">PHASE_0{currentIndex + 1}</span> / 0{TESTIMONIALS.length}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
