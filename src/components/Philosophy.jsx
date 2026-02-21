import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Philosophy = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax background
      gsap.to(".philo-bg", {
        y: "20%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      // Word by word reveal
      const words = textRef.current.querySelectorAll('.reveal-word');
      
      gsap.from(words, {
        opacity: 0.1,
        y: 20,
        rotationX: parseInt(-20),
        stagger: 0.1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 70%",
          end: "bottom 40%",
          scrub: 1
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const statement = "Most agencies take months to deliver insights. We get you market-ready answers in 24 hours.";
  
  const brands = [
    "Rugani Juice", "Namibian Breweries", "Dairy Maid", "KWV", "Discovery Bank", 
    "Heineken", "Rain", "Mondelez", "Revlon"
  ];

  const stats = [
    { value: "200+", label: "Studies" },
    { value: "25+", label: "Markets" },
    { value: "44M+", label: "Panel" },
    { value: "10+", label: "Industries" }
  ];
  
  return (
    <section ref={sectionRef} className="relative py-40 bg-brand-dark dark:bg-slate-950 transition-colors duration-500 overflow-hidden z-10">
      
      {/* Background Parallax Texture */}
      <div className="philo-bg absolute inset-0 opacity-20 pointer-events-none" style={{ top: '-20%', height: '140%' }}>
         <div className="absolute inset-0 bg-brand-blue/30 blur-[100px] rounded-full mix-blend-screen -left-1/4 -top-1/4 w-[150%] h-[150%]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-32">
          <div className="inline-block mb-12">
             <span className="text-brand-orange text-sm font-mono tracking-[0.2em] uppercase font-bold px-4 py-2 border border-brand-orange/30 rounded-full bg-brand-orange/10">
                The Manifesto
             </span>
          </div>
          
          <h2 ref={textRef} className="text-4xl md:text-5xl lg:text-7xl font-display text-white leading-tight perspective-1000">
            {statement.split(' ').map((word, i) => (
              <span key={i} className={`reveal-word inline-block mr-[0.3em] ${word.includes('24') || word.includes('hours') ? 'text-brand-orange italic' : 'text-white'}`}>
                {word}
              </span>
            ))}
          </h2>
        </div>

        {/* Dynamic Visual Section */}
        <div className="mt-32 space-y-24">
          {/* Brand Marquee */}
          <div className="relative">
            <div className="text-center mb-12">
              <h3 className="text-xl md:text-2xl font-display font-bold text-brand-orange uppercase tracking-[0.3em] drop-shadow-[0_0_15px_rgba(245,166,106,0.3)] animate-pulse">
                Ambitious Brands Who Trust Innovatr
              </h3>
            </div>
            
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-dark dark:from-slate-950 to-transparent z-10 transition-colors duration-500"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-dark dark:from-slate-950 to-transparent z-10 transition-colors duration-500"></div>
            
            <div className="flex overflow-hidden group">
              <div className="flex animate-marquee whitespace-nowrap py-12 gap-24">
                {[...brands, ...brands].map((brand, i) => (
                  <span 
                    key={i} 
                    className="text-4xl md:text-5xl font-display font-bold text-white/20 hover:text-brand-orange transition-colors duration-500 cursor-default"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <div 
                key={i} 
                className="group p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-orange/40 transition-all duration-500 text-center"
              >
                <div className="text-4xl md:text-6xl font-display font-bold text-brand-orange mb-2 group-hover:scale-110 transition-transform duration-500">
                  {stat.value}
                </div>
                <div className="text-sm font-mono tracking-widest uppercase text-white/50 group-hover:text-white transition-colors duration-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
