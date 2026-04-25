import { motion, AnimatePresence } from 'motion/react';
import { useState, useRef, useEffect } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

const CASE_STUDIES = [
  {
    id: 1,
    title: 'Fintech Lead Gen Platform',
    impact: '-72% Cost per Lead',
    image: 'https://images.pexels.com/photos/4386339/pexels-photo-4386339.jpeg',
    detail: 'Rebuilt content and technical SEO from the ground up. Cut paid dependency and stabilized inbound lead flow.',
  },
  {
    id: 2,
    title: 'B2B SaaS Analytics Tool',
    impact: '+310% Organic Traffic in 5 Months',
    image: 'https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg',
    detail: 'Mapped intent properly and built topic clusters. Turned passive blog traffic into a consistent conversion channel.',
  },
  {
    id: 3,
    title: 'E-commerce Electronics Brand',
    impact: 'Rank #1 for 40+ Keywords',
    image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg',
    detail: 'Focused on high-value terms with aggressive on-page and backlinks. Took over core commercial keywords.',
  },
  {
    id: 4,
    title: 'AI SaaS Startup',
    impact: '3.8x Demo Signups',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
    detail: 'Aligned landing pages with search intent. Built funnels that turned traffic into actual product demand.',
  },
  {
    id: 5,
    title: 'Healthcare Content Platform',
    impact: '120K Monthly Organic Traffic',
    image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg',
    detail: 'Built SEO from zero with structured content systems. Established long-term topical authority in a competitive niche.',
  },
  {
    id: 6,
    title: 'DTC Skincare Brand',
    impact: '+95% Revenue from Organic',
    image: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg',
    detail: 'Shifted focus from paid to SEO-led acquisition. Optimized product pages for high-intent traffic.',
  },
  {
    id: 7,
    title: 'Real Estate Marketplace',
    impact: 'Local Search Dominance in 90 Days',
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
    detail: 'Executed hyper-local SEO and map optimization. Took over visibility in high-demand regions fast.',
  },
  {
    id: 8,
    title: 'Online Education Platform',
    impact: '-58% Acquisition Cost',
    image: 'https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg',
    detail: 'Restructured content around intent. Reduced reliance on paid channels and improved conversion efficiency.',
  },
  {
    id: 9,
    title: 'Workflow Automation SaaS',
    impact: 'Top 3 for Core Keywords',
    image: 'https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg',
    detail: 'Focused on authority building and technical fixes. Outranked established competitors in key search terms.',
  },
];

interface WorkProps {
  onModalToggle?: (isOpen: boolean) => void;
}

export default function Work({ onModalToggle }: WorkProps) {
  const [selectedCase, setSelectedCase] = useState<typeof CASE_STUDIES[0] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth < 640) setItemsToShow(1);
      else if (window.innerWidth < 1024) setItemsToShow(2);
      else setItemsToShow(3);
    };

    updateItemsToShow();
    window.addEventListener('resize', updateItemsToShow);
    return () => window.removeEventListener('resize', updateItemsToShow);
  }, []);

  const handleOpenModal = (item: typeof CASE_STUDIES[0]) => {
    setSelectedCase(item);
    onModalToggle?.(true);
  };

  const handleCloseModal = () => {
    setSelectedCase(null);
    onModalToggle?.(false);
  };

  const nextSlide = () => {
    if (currentIndex < CASE_STUDIES.length - itemsToShow) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section id="work" className="py-24 bg-black border-b border-border-gray overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[40px]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-12">
          <div className="flex-1">
            <span className="font-mono text-[11px] tracking-widest text-neon-purple mb-4 block uppercase font-bold">
              Evidence
            </span>
            <h2 className="text-4xl md:text-5xl uppercase tracking-tighter font-black">Control Over Results.</h2>
          </div>
          
          <div className="flex flex-wrap gap-8 md:gap-12 border-l border-border-gray pl-8 md:pl-12 py-2 md:h-20 items-center">
            <div className="stat-item border-l border-neon-purple pl-4">
                <div className="text-2xl md:text-3xl font-black">+412%</div>
                <div className="text-[10px] text-muted-gray uppercase tracking-widest">Organic Growth</div>
            </div>
            <div className="stat-item border-l border-neon-purple pl-4">
                <div className="text-2xl md:text-3xl font-black">1.2M</div>
                <div className="text-[10px] text-muted-gray uppercase tracking-widest">Monthly Traffic</div>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div ref={containerRef} className="overflow-hidden border border-border-gray bg-[#050505]">
            <motion.div
              animate={{ x: `-${currentIndex * (100 / itemsToShow)}%` }}
              transition={{ type: "spring", damping: 25, stiffness: 120 }}
              className="flex"
            >
              {CASE_STUDIES.map((item) => (
                <div 
                  key={item.id} 
                  className="flex-shrink-0 border-r border-border-gray last:border-r-0"
                  style={{ width: `${100 / itemsToShow}%` }}
                >
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="relative aspect-[3/2] overflow-hidden cursor-pointer"
                    onClick={() => handleOpenModal(item)}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 hover:grayscale-0 hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/60 hover:bg-black/20 transition-all duration-500" />
                    
                    <div className="absolute bottom-8 left-8 right-8 z-10">
                      <div className="text-neon-purple font-mono text-[10px] tracking-widest uppercase mb-2">
                        {item.impact}
                      </div>
                      <h3 className="text-2xl mb-4 font-black uppercase tracking-tight">{item.title}</h3>
                      <button className="flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase text-off-white/50 group-hover:text-neon-purple transition-colors">
                        View Data <Maximize2 size={12} />
                      </button>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-between items-center mt-10">
            <div className="flex gap-4">
              <button 
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className={`w-14 h-14 border border-border-gray flex items-center justify-center transition-all ${currentIndex === 0 ? 'opacity-20 cursor-not-allowed' : 'hover:border-neon-purple hover:bg-neon-purple/5'}`}
              >
                <ChevronLeft size={24} className={currentIndex === 0 ? 'text-muted-gray' : 'text-off-white'} />
              </button>
              <button 
                onClick={nextSlide}
                disabled={currentIndex >= CASE_STUDIES.length - itemsToShow}
                className={`w-14 h-14 border border-border-gray flex items-center justify-center transition-all ${currentIndex >= CASE_STUDIES.length - itemsToShow ? 'opacity-20 cursor-not-allowed' : 'hover:border-neon-purple hover:bg-neon-purple/5'}`}
              >
                <ChevronRight size={24} className={currentIndex >= CASE_STUDIES.length - itemsToShow ? 'text-muted-gray' : 'text-off-white'} />
              </button>
            </div>

            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-gray hidden sm:block">
              Case Distribution <span className="text-neon-purple">{currentIndex + 1}</span>-{Math.min(currentIndex + itemsToShow, CASE_STUDIES.length)} / {CASE_STUDIES.length}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/95 backdrop-blur-xl"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-5xl w-full max-h-[90vh] overflow-y-auto bg-[#0a0a0a] border border-off-white/10 p-6 md:p-12 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 md:top-6 md:right-6 text-off-white/50 hover:text-off-white transition-colors z-20"
                onClick={handleCloseModal}
              >
                <X size={24} className="md:w-8 md:h-8" />
              </button>

              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
                <div className="aspect-video md:aspect-square bg-off-white/5 rounded-sm overflow-hidden border border-off-white/10 w-full">
                  <img
                    src={selectedCase.image}
                    alt={selectedCase.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col h-full justify-center">
                  <span className="font-mono text-[10px] md:text-sm text-neon-purple tracking-[0.3em] uppercase mb-4 block">
                    {selectedCase.impact}
                  </span>
                  <h3 className="text-3xl md:text-5xl mb-6 md:mb-8 font-black leading-tight uppercase tracking-tighter">{selectedCase.title}</h3>
                  <p className="text-muted-gray text-base md:text-xl leading-relaxed mb-8 md:mb-10">
                    {selectedCase.detail}
                  </p>
                  <a href="https://tally.so/r/ZjRyGA" onClick={handleCloseModal} className="btn-primary w-full text-center block text-sm">
                    Apply for Similar Results
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
