import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Process = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title Animation
      gsap.fromTo(titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          }
        }
      );

      // Cards Stagger Animation
      gsap.fromTo(cardsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      title: "STRATEGY & DIRECTION",
      phase: "Phase 01",
      intro: "Understand and anticipate the market through:",
      items: ["Trends and foresight", "Segmentation", "Brand & Category Health", "Demand Mapping"],
      accent: "bg-brand-blue"
    },
    {
      title: "INNOVATION & TESTING",
      phase: "Phase 02",
      intro: "Identify growth opportunities and build a business case via:",
      items: ["Idea screening & optimization", "Portfolio management", "Preliminary share & volume", "Price pack architecture"],
      accent: "bg-brand-orange"
    },
    {
      title: "EXECUTION & SCALE",
      phase: "Phase 03",
      intro: "Track launch effectiveness & market dynamics via:",
      items: ["Innovation launch monitoring", "Promotion tracking", "Brand & category tracking"],
      accent: "bg-[#FF7761]"
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-32 bg-[#FF7761] overflow-hidden z-10">
      {/* Background purely aesthetic circles */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-blue/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col items-center text-center mb-20 text-white">
          <div className="w-12 h-12 border border-white/40 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm">
             <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
          </div>
          <p className="text-white/80 font-mono text-sm tracking-[0.3em] uppercase mb-4">The Process</p>
          <h2 ref={titleRef} className="text-5xl md:text-7xl font-display leading-[1.1] max-w-4xl mx-auto">
            Move from <span className="opacity-70 italic font-light">Where to Play</span> to <span className="text-white font-bold">How to Win</span>, seamlessly.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, idx) => (
            <div 
              key={idx}
              ref={el => cardsRef.current[idx] = el}
              className="group relative bg-white p-10 rounded-[3rem] shadow-2xl hover:shadow-brand-blue/20 transition-all duration-500 overflow-hidden"
            >
              {/* Corner Accent */}
              <div className={`absolute top-0 right-0 w-24 h-24 ${step.accent} opacity-10 rounded-bl-full`}></div>
              
              <div className="relative z-10">
                <div className={`text-xs font-mono font-bold tracking-widest uppercase mb-4 opacity-50`}>
                  {step.phase}
                </div>
                <h3 className="text-3xl font-display font-bold text-brand-dark mb-6 leading-tight">
                  {step.title.split(" & ").map((part, i) => (
                    <span key={i} className="block">
                      {part} {i === 0 && "&"}
                    </span>
                  ))}
                </h3>
                <div className="w-12 h-1 bg-brand-dark/10 mb-8 rounded-full group-hover:w-20 group-hover:bg-brand-blue transition-all duration-500"></div>
                <p className="text-brand-dark/60 mb-8 font-sans leading-relaxed text-base min-h-[4rem]">
                  {step.intro}
                </p>
                <ul className="space-y-4">
                  {step.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 group/item">
                      <div className={`w-2 h-2 rounded-full mt-2 transition-all duration-300 ${step.accent} group-hover/item:scale-150`}></div>
                      <span className="text-brand-dark/80 text-sm font-sans leading-snug group-hover/item:text-brand-dark transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;
