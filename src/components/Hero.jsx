import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);
  const featuresTextRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Timeline for staggered reveal
      const tl = gsap.timeline();

      tl.from(".hero-pill", { 
        y: 20, 
        opacity: 0, 
        duration: 0.8, 
        ease: "power3.out" 
      })
      .from(".hero-title-line", {
        y: 60,
        opacity: 0,
        rotation: 2,
        duration: 1.2,
        stagger: 0.15,
        ease: "power4.out"
      }, "-=0.4")
      .from(".hero-sub", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.6")
      .from(".hero-cta", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.7)"
      }, "-=0.4")
      .from(".clay-hero-graphic", {
        scale: 0.8,
        opacity: 0,
        y: 60,
        rotationX: 10,
        duration: 1.5,
        ease: "power4.out"
      }, "-=1.0");

      // Floating animation for the 3D element
      gsap.to(".floating-clay", {
        y: "-=15",
        rotation: 2,
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
      });

      // --- FEATURES ANIMATIONS (Unified) ---
      
      // Animate the small magnifying glass icon
      gsap.fromTo(".mag-icon",
        { scale: 0, rotation: -45, opacity: 0 },
        {
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 1,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: ".features-trigger",
            start: "top 80%",
          }
        }
      );

      // Kinetic typography animation for the heading (staggered words)
      gsap.fromTo(".kinetic-word",
        { y: 100, opacity: 0, rotateX: -45 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.2,
          stagger: 0.05,
          ease: "expo.out",
          scrollTrigger: {
            trigger: featuresTextRef.current,
            start: "top 85%",
          }
        }
      );

      // Fade up the paragraph
      gsap.fromTo(".feature-para",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          delay: 0.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: featuresTextRef.current,
            start: "top 85%",
          }
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const headingText = "Built for the Speed of CPG Innovation";

  return (
    <section ref={containerRef} className="relative pt-32 pb-40 overflow-hidden bg-[#FAF9F6] dark:bg-brand-dark/95 transition-colors duration-500 z-20">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center mb-32 lg:mb-48">
        
        {/* Text Content */}
        <div className="max-w-2xl">
          <div className="hero-pill inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-purple/20 dark:bg-brand-purple/10 text-brand-dark dark:text-brand-purple font-mono text-xs font-bold mb-8 shadow-clay-sm border border-brand-purple/40">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></span>
            TRANSFORMING CONSUMER INSIGHTS
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.05] font-display text-brand-dark dark:text-white mb-8 perspective-1000">
            <div className="hero-title-line overflow-hidden pb-2">Ready to</div>
            <div className="hero-title-line overflow-hidden text-brand-blue dark:text-brand-orange pb-2">Launch?</div>
          </h1>
          
          <p className="hero-sub text-xl md:text-2xl font-sans text-brand-dark/70 dark:text-white/60 mb-10 max-w-lg leading-relaxed">
            Agile, Idea-to-Market Consumer Insights. Launch better innovation through smart 24hr research.
          </p>
          
          <div className="hero-cta flex flex-wrap items-center gap-4">
            <button className="clay-btn-primary px-8 lg:px-10 py-4 lg:py-5 text-lg">
              Launch with Us
            </button>
            <button className="clay-btn bg-white dark:bg-white/5 text-brand-dark dark:text-white border-2 border-slate-200/50 dark:border-white/10 px-8 py-4 lg:py-5 text-lg">
              Explore Tools
            </button>
          </div>
        </div>

        {/* 3D Clay Illustration / Graphic */}
        <div className="clay-hero-graphic relative hidden lg:flex items-center justify-center min-h-[500px] perspective-1000">
          <div className="relative w-full aspect-square max-w-[500px]">
            {/* The base soft "clay" platform */}
            <div className="absolute inset-x-0 bottom-10 h-32 bg-brand-blue/10 rounded-[100%] blur-3xl transform rotate-x-60"></div>
            
            {/* Main Clay Object - Binoculars abstract */}
            <div className="floating-clay absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-orange rounded-full shadow-clay-base border border-orange-200/50 flex items-center justify-center">
               <div className="flex gap-4">
                  <div className="w-24 h-24 rounded-full bg-brand-blue shadow-clay-sm border border-brand-lightBlue/30 flex items-center justify-center overflow-hidden">
                     <div className="w-16 h-16 rounded-full bg-cyan-300 shadow-inner"></div>
                  </div>
                  <div className="w-24 h-24 rounded-full bg-brand-blue shadow-clay-sm border border-brand-lightBlue/30 flex items-center justify-center overflow-hidden">
                     <div className="w-16 h-16 rounded-full bg-cyan-300 shadow-inner"></div>
                  </div>
               </div>
            </div>

            {/* Decorative floaters */}
            <div className="floating-clay absolute top-1/4 left-1/4 w-12 h-12 rounded-full bg-brand-purple shadow-clay-sm"></div>
            <div className="floating-clay absolute bottom-1/3 right-1/4 w-16 h-16 rounded-3xl bg-brand-blue shadow-clay-base rotate-12" style={{animationDelay: '-1s'}}></div>
          </div>
        </div>
      </div>

      {/* --- UNIFIED FEATURES CONTENT --- */}
      <div className="max-w-6xl mx-auto px-6 w-full relative z-10 features-trigger">
        <div ref={featuresTextRef} className="flex flex-col items-center text-center">
          <div className="mb-12 flex justify-center mag-icon">
             {/* Small animated magnifying glass graphic */}
             <div className="w-20 h-20 rounded-full bg-brand-lightBlue/10 dark:bg-brand-blue/20 flex items-center justify-center relative transition-colors duration-500">
               <div className="w-10 h-10 rounded-full border-4 border-brand-blue dark:border-brand-orange absolute -translate-x-1 -translate-y-1"></div>
               <div className="w-5 h-1.5 bg-brand-blue dark:bg-brand-orange absolute translate-x-4 translate-y-4 rotate-45 rounded-full"></div>
             </div>
          </div>
          
          <h2 className="text-5xl md:text-7xl lg:text-[5rem] font-display text-brand-dark dark:text-white mb-12 leading-[1.1] perspective-1000 transition-colors duration-500">
            {headingText.split(" ").map((word, i) => (
              <span key={i} className="inline-block overflow-hidden pb-2 mr-[0.25em]">
                <span className="inline-block kinetic-word origin-bottom">{word}</span>
              </span>
            ))}
          </h2>
          
          <p className="feature-para text-xl md:text-2xl text-brand-dark/70 dark:text-white/60 font-sans leading-relaxed max-w-4xl mx-auto transition-colors duration-500">
            The Consumer Packaged Goods industry moves fast. Trends shift overnight, and launching the wrong product is a costly mistake. Innovatr's proprietary approach combines <span className="font-bold text-brand-blue dark:text-brand-orange">Strategy, Innovation & Testing</span>, and precise <span className="font-bold text-brand-blue dark:text-brand-orange font-bold">Execution</span> to deliver market-ready, actionable insights in just 24 hours. <br/><br/><span className="text-brand-dark dark:text-white font-display text-4xl">Stop guessing. Start launching.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

