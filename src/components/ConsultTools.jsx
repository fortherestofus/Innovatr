import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plus, Maximize2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const toolsData = [
  { id: 1, name: "Private Dashboards", comingSoon: false },
  { id: 2, name: "Social Media Feel", comingSoon: false },
  { id: 3, name: "Filtering", comingSoon: false },
  { id: 4, name: "Heat Mapping", comingSoon: false },
  { id: 5, name: "Market Share Simulator", comingSoon: false },
  { id: 6, name: "AI Qual", comingSoon: true },
  { id: 7, name: "Cultural Context Engine", comingSoon: true },
  { id: 8, name: "Agile Design", comingSoon: false },
];

const ConsultTools = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(cardsRef.current,
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 bg-brand-purple dark:bg-indigo-950 transition-colors duration-500 overflow-hidden z-20">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        
        <h2 className="text-4xl md:text-5xl lg:text-5xl font-display text-white mb-6">
          Turn Insights into evidence based decisions.
        </h2>
        
        <p className="text-white/90 font-sans text-lg max-w-2xl mx-auto mb-8">
          Our proprietary toolkit accelerates every phase of research — from hypothesis to action.
        </p>
        
        <a href="#" className="inline-block text-white underline decoration-white/50 hover:decoration-white transition-colors mb-20 text-sm font-bold uppercase tracking-widest">
          See how we Test Ideas in 24hrs
        </a>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {toolsData.map((tool, index) => (
            <div 
              key={tool.id} 
              ref={el => cardsRef.current[index] = el}
              className="clay-surface bg-white dark:bg-brand-dark rounded-[2rem] p-4 flex flex-col group cursor-pointer hover:-translate-y-2 hover:shadow-2xl dark:hover:shadow-brand-blue/20 transition-all duration-300 border border-transparent dark:border-white/5"
            >
              
              {/* Image Area placeholder */}
              <div className="bg-brand-surfaceAlt dark:bg-slate-800 rounded-[1.5rem] w-full aspect-square relative mb-4 overflow-hidden border border-slate-100 dark:border-white/5 flex items-center justify-center transition-colors">
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/80 dark:bg-brand-dark/80 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10 shadow-sm text-slate-500 dark:text-white/60 hover:text-brand-dark dark:hover:text-white">
                  <Maximize2 size={14} />
                </div>
                {tool.comingSoon && (
                  <div className="absolute top-4 left-4 bg-brand-lightBlue text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide z-10 shadow-sm">
                    Coming Soon
                  </div>
                )}
                {/* Abstract graphic representation of tool mapping */}
                <div className="w-[80%] h-[80%] bg-white dark:bg-brand-dark rounded-xl shadow-sm border border-slate-100 dark:border-white/5 flex items-center justify-center opacity-50 dark:opacity-30 group-hover:scale-105 transition-all duration-500">
                  <span className="text-slate-300 dark:text-white/40 font-mono text-xs">UI Preview</span>
                </div>
              </div>

              {/* Label Area */}
              <div className="flex items-center justify-between px-2 pb-2">
                <h3 className="font-bold text-brand-dark dark:text-white text-[15px] font-sans text-left leading-tight pr-4 transition-colors">
                  {tool.name}
                </h3>
                <div className="w-10 h-10 rounded-full bg-brand-lightBlue text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md">
                  <Plus size={18} />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ConsultTools;
