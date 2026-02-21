import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CaseStudies = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(cardRef.current,
        { scale: 0.95, opacity: 0, y: 40 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 50%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 bg-[#CDE4AD] dark:bg-emerald-950/30 z-10 transition-colors duration-1000 overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex flex-col items-center justify-center mb-6">
            <div className="w-12 h-10 flex items-end justify-center gap-1 mb-4">
              <div className="w-1.5 h-4 bg-brand-dark/30 dark:bg-white/20 rounded-full"></div>
              <div className="w-1.5 h-6 bg-brand-dark/50 dark:bg-white/40 rounded-full"></div>
              <div className="w-1.5 h-10 bg-brand-dark dark:bg-white rounded-full"></div>
            </div>
            <p className="text-brand-dark/70 dark:text-white/40 font-mono text-[10px] tracking-[0.25em] uppercase font-bold">The Results</p>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display text-brand-dark dark:text-white mb-6 transition-colors">
            Growth is our Currency.
          </h2>
          <p className="text-brand-dark/80 dark:text-white/70 text-lg md:text-xl font-sans max-w-2xl mx-auto font-medium transition-colors">
            See how we transformed some of the world's most ambitious brands.
          </p>
        </div>

        {/* Categories / Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button className="px-6 py-2.5 rounded-full bg-brand-lightBlue text-white font-sans text-sm font-bold shadow-md hover:-translate-y-0.5 transition-transform">
            Strategy & Direction
          </button>
          <button className="px-6 py-2.5 rounded-full bg-white/70 dark:bg-white/5 text-brand-dark dark:text-white/70 font-sans text-sm font-semibold hover:bg-white dark:hover:bg-white/10 transition-colors">
            Innovation & Testing
          </button>
          <button className="px-6 py-2.5 rounded-full bg-white/70 dark:bg-white/5 text-brand-dark dark:text-white/70 font-sans text-sm font-semibold hover:bg-white dark:hover:bg-white/10 transition-colors">
            Execution & Scale
          </button>
        </div>

        <p className="text-center text-brand-dark/70 dark:text-white/40 text-sm font-sans mb-16 transition-colors">
          Define where to play and identify growth opportunities
        </p>

        {/* Case Study Card */}
        <div ref={cardRef} className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Visual Side */}
          <div className="w-full md:w-1/2">
            <div className="relative aspect-square w-full max-w-[400px] mx-auto bg-[#FFE4DF] dark:bg-brand-dark rounded-[2.5rem] p-10 flex items-center justify-center shadow-clay-base shadow-black/5 dark:shadow-none border border-transparent dark:border-white/5 transform rotate-2 hover:rotate-0 transition-all duration-500">
              {/* Decorative pinpoint */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-2 border-white dark:border-white/10 bg-[#CDE4AD] dark:bg-emerald-900 flex items-center justify-center shadow-lg">
                <div className="w-2.5 h-2.5 bg-brand-blue dark:bg-brand-orange rounded-full"></div>
              </div>
              
              {/* Illustration Placeholder */}
              <div className="w-full h-full relative flex items-center justify-center opacity-80 mix-blend-multiply dark:mix-blend-normal">
                 <div className="absolute inset-x-8 top-1/2 bottom-8 bg-black/10 dark:bg-brand-orange/10 rounded-full blur-xl translate-y-4"></div>
                 {/* Imagine a playful character surfing a rocket here */}
                 <svg className="w-full h-full text-brand-orange" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M50 10 C30 10 10 30 10 50 C10 70 30 90 50 90 C70 90 90 70 90 50 C90 30 70 10 50 10 Z" opacity="0.1"/>
                    <circle cx="50" cy="50" r="20" className="text-brand-blue dark:text-brand-orange"/>
                    <rect x="45" y="40" width="10" height="40" className="text-brand-orange dark:text-brand-blue" rx="5"/>
                 </svg>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2 text-left">
            <div className="flex items-center gap-3 mb-6 font-mono text-xs uppercase font-bold text-brand-dark/60 dark:text-white/40 tracking-wider">
              <span>RAIN</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-lightBlue/50"></span>
              <span className="bg-brand-lightBlue text-white px-3 py-1 rounded-full text-[10px]">Telecommunications</span>
              <span className="bg-white/60 dark:bg-white/10 text-brand-dark dark:text-white/70 px-3 py-1 rounded-full text-[10px]">3 Months</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-display text-brand-dark dark:text-white leading-[1.1] mb-6 transition-colors">
              Defining Winning Market Entry Strategy Through Consumer Intelligence
            </h3>
            
            <p className="text-brand-dark/70 dark:text-white/60 font-sans text-base leading-relaxed mb-8 transition-colors">
              Market dominated by established players with high barriers to entry and unclear value proposition.
            </p>
            
            <div className="inline-flex items-center gap-3 bg-white/40 dark:bg-white/5 border border-white/60 dark:border-white/10 px-5 py-3 rounded-2xl mb-8 transition-all duration-500">
              <span className="text-brand-dark/50 dark:text-white/30 text-xs font-mono uppercase tracking-widest font-bold">Key Result:</span>
              <span className="text-brand-blue dark:text-brand-orange font-bold font-sans">Market Entry Roadmap</span>
            </div>
            
            <div>
              <a href="#" className="inline-flex items-center gap-2 text-brand-dark dark:text-white font-sans font-bold border-b border-brand-dark dark:border-white/20 pb-1 hover:text-brand-blue dark:hover:text-brand-orange hover:border-brand-blue dark:hover:border-brand-orange transition-all group">
                Read Full Case Study
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CaseStudies;
