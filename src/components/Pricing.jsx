import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Pricing = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(cardsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
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

  return (
    <section ref={sectionRef} className="relative py-32 bg-[#FF7761] dark:bg-slate-900 transition-colors duration-500 z-20 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        
        <p className="text-white/80 dark:text-white/40 font-mono text-[10px] tracking-[0.25em] uppercase font-bold mb-4">
          05 — Memberships
        </p>

        <h2 className="text-5xl md:text-6xl font-display text-white mb-6">
          Join the Club & Save
        </h2>

        <p className="text-white/90 dark:text-white/60 font-sans text-lg mb-20 transition-colors">
          Scale your research. Save up to 50%.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left max-w-6xl mx-auto">
          
          {/* Starter Card */}
          <div ref={el => cardsRef.current[0] = el} className="clay-surface bg-brand-surface dark:bg-brand-dark rounded-[2rem] p-8 md:p-10 flex flex-col group hover:-translate-y-2 transition-all duration-300 border border-transparent dark:border-white/5">
            <div className="h-40 flex items-center justify-center mb-6">
              <div className="w-24 h-24 rounded-full bg-teal-400 border border-teal-500 shadow-clay-sm flex items-center justify-center relative transform group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold text-white">:D</span>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center transform rotate-12">📢</div>
              </div>
            </div>
            
            <h3 className="text-3xl font-display text-[#FF7761] dark:text-brand-orange mb-2 font-bold transition-colors">Starter</h3>
            <p className="text-brand-dark/60 dark:text-white/60 text-sm font-sans mb-4 transition-colors">For startups & small teams</p>
            
            <div className="mb-2">
              <span className="text-4xl font-sans font-bold text-[#FF7761] dark:text-brand-orange transition-colors">R60k</span>
              <span className="text-brand-dark/50 dark:text-white/40 text-sm"> per year</span>
            </div>
            <p className="text-brand-dark/40 dark:text-white/30 text-[11px] uppercase tracking-wider font-mono mb-8">R5k/month</p>
            
            <ul className="space-y-4 mb-10 flex-grow font-sans text-[15px] text-brand-dark/80 dark:text-white/70 transition-colors">
              <li className="flex items-start gap-3"><Check size={18} className="text-[#FF7761] dark:text-brand-orange mt-0.5 flex-shrink-0" /> Trends Report Access</li>
              <li className="flex items-start gap-3"><Check size={18} className="text-[#FF7761] dark:text-brand-orange mt-0.5 flex-shrink-0" /> Discounted Research</li>
              <li className="flex items-start gap-3"><Check size={18} className="text-[#FF7761] dark:text-brand-orange mt-0.5 flex-shrink-0" /> Private Dashboard Access</li>
              <li className="flex items-start gap-3"><Check size={18} className="text-[#FF7761] dark:text-brand-orange mt-0.5 flex-shrink-0" /> Test24 Basic: R 5 000 per concept</li>
              <li className="flex items-start gap-3"><Check size={18} className="text-[#FF7761] dark:text-brand-orange mt-0.5 flex-shrink-0" /> Test24 Pro: R 45 000 per survey</li>
            </ul>

            <button className="w-full clay-btn bg-[#E88E73] dark:bg-brand-orange text-white hover:bg-[#D97D62] dark:hover:bg-orange-600 transition-colors">
              Become a Member
            </button>
          </div>

          {/* Growth Card */}
          <div ref={el => cardsRef.current[1] = el} className="clay-surface bg-white dark:bg-brand-dark rounded-[2rem] p-8 md:p-10 flex flex-col group hover:-translate-y-2 transition-all duration-300 relative border border-transparent dark:border-white/5">
            <div className="h-40 flex items-center justify-center mb-6">
              <div className="w-24 h-24 rounded-[2rem] bg-brand-lightBlue border border-brand-blue shadow-clay-sm flex items-center justify-center relative transform group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold text-white">:-|</span>
                <div className="absolute -left-4 top-4 w-8 h-8 bg-teal-300 rounded-xl flex items-center justify-center transform -rotate-12 border border-teal-400">📊</div>
              </div>
            </div>
            
            <h3 className="text-3xl font-display text-brand-lightBlue mb-2 font-bold">Growth</h3>
            <p className="text-brand-dark/60 dark:text-white/60 text-sm font-sans mb-4 transition-colors">For growing businesses<br/><span className="text-[10px]">Starter (R60k) + Growth (R120k)</span></p>
            
            <div className="mb-2">
              <span className="text-4xl font-sans font-bold text-brand-lightBlue">R180k</span>
              <span className="text-brand-dark/50 dark:text-white/40 text-sm"> per year</span>
            </div>
            <p className="text-[#FF7761]/80 dark:text-brand-orange/80 text-[11px] uppercase tracking-wider font-mono mb-8 font-bold transition-colors">~R260k value</p>
            
            <ul className="space-y-4 mb-10 flex-grow font-sans text-[15px] text-brand-dark/80 dark:text-white/70 transition-colors">
              <li className="flex items-start gap-3"><Check size={18} className="text-brand-lightBlue mt-0.5 flex-shrink-0" /> Everything in Starter</li>
              <li className="flex items-start gap-3"><Check size={18} className="text-brand-lightBlue mt-0.5 flex-shrink-0" /> x10 Test24 Basic ideas / year</li>
              <li className="flex items-start gap-3"><Check size={18} className="text-brand-lightBlue mt-0.5 flex-shrink-0" /> x2 Test24 Pro Studies / year</li>
            </ul>

            <button className="w-full clay-btn bg-brand-lightBlue text-white hover:bg-brand-blue transition-colors">
              Become a Member
            </button>
          </div>

          {/* Scale Card */}
          <div ref={el => cardsRef.current[2] = el} className="clay-surface bg-white dark:bg-brand-dark rounded-[2rem] p-8 md:p-10 flex flex-col group hover:-translate-y-2 transition-all duration-300 border border-transparent dark:border-white/5">
            <div className="h-40 flex items-center justify-center mb-6">
              <div className="w-24 h-24 rounded-[2.5rem] bg-[#E85D50] border border-red-500 shadow-clay-sm flex items-center justify-center relative transform group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold text-white">:-D</span>
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-brand-dark rounded-full flex items-center justify-center transform -rotate-12 border border-brand-dark/80 text-white text-xs">🏁</div>
              </div>
            </div>
            
            <h3 className="text-3xl font-display text-brand-lightBlue mb-2 font-bold">Scale</h3>
            <p className="text-brand-dark/60 dark:text-white/60 text-sm font-sans mb-4 transition-colors">Enterprise-level insights<br/><span className="text-[10px]">Starter (R60k) + Scale (R195k)</span></p>
            
            <div className="mb-2">
              <span className="text-4xl font-sans font-bold text-brand-lightBlue">R255k</span>
              <span className="text-brand-dark/50 dark:text-white/40 text-sm"> per year</span>
            </div>
            <p className="text-[#FF7761]/80 dark:text-brand-orange/80 text-[11px] uppercase tracking-wider font-mono mb-8 font-bold transition-colors">~R360k value</p>
            
            <ul className="space-y-4 mb-10 flex-grow font-sans text-[15px] text-brand-dark/80 dark:text-white/70 transition-colors">
              <li className="flex items-start gap-3"><Check size={18} className="text-brand-lightBlue mt-0.5 flex-shrink-0" /> Everything in Starter</li>
              <li className="flex items-start gap-3"><Check size={18} className="text-brand-lightBlue mt-0.5 flex-shrink-0" /> x15 Test24 Basic ideas / year</li>
              <li className="flex items-start gap-3"><Check size={18} className="text-brand-lightBlue mt-0.5 flex-shrink-0" /> x3 Test24 Pro Studies / year</li>
              <li className="flex items-start gap-3"><Check size={18} className="text-brand-lightBlue mt-0.5 flex-shrink-0" /> Dedicated Insights Support</li>
            </ul>

            <button className="w-full clay-btn bg-brand-lightBlue text-white hover:bg-brand-blue transition-colors">
              Become a Member
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Pricing;
