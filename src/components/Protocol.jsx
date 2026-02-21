import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Protocol = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".protocol-card");

      cards.forEach((card, i) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          pin: true,
          pinSpacing: false,
          endTrigger: containerRef.current,
          end: "bottom bottom",
        });

        // Add subtle scale down and blur to previous cards
        if (i < cards.length - 1) {
          gsap.to(card, {
            scale: 0.95,
            opacity: 0.4,
            filter: "blur(10px)",
            ease: "none",
            scrollTrigger: {
              trigger: cards[i + 1],
              start: "top bottom",
              end: "top top",
              scrub: true,
            },
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      month: "Month 1",
      title: "Strategy & Hypothesis",
      desc: "Define the core problem. Our platform synthesizes existing market data and establishes testable hypotheses.",
      color: "bg-brand-surface dark:bg-slate-900 border-slate-200 dark:border-white/10",
      accent: "text-brand-blue dark:text-brand-orange",
    },
    {
      month: "Month 2",
      title: "Rapid Concept Testing",
      desc: "Deploy proprietary AI telemetry across targeted demographic segments. Gather sentiment, heatmaps, and conjoint analysis in 24 hours.",
      color: "bg-brand-blue dark:bg-brand-dark border-brand-lightBlue dark:border-brand-blue/30",
      accent: "text-brand-orange dark:text-brand-blue",
      textDark: false,
    },
    {
      month: "Month 3",
      title: "Market-Ready Launch",
      desc: "Finalize product positioning based on absolute behavioral evidence. Zero guesswork. You are ready to launch.",
      color: "bg-brand-orange dark:bg-slate-800 border-orange-300 dark:border-brand-orange/30",
      accent: "text-white dark:text-brand-orange",
      textDark: false,
    },
  ];

  return (
    <section ref={containerRef} className="relative z-20 pb-[50vh] transition-colors duration-500">
      {steps.map((step, i) => (
        <div
          key={i}
          className={`protocol-card w-full h-[100dvh] flex items-center justify-center ${step.color} border-t ${i === 0 ? "border-none" : ""} transition-colors duration-500`}
          style={{ zIndex: i }}
        >
          <div className="max-w-6xl w-full mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div
              className={`p-16 rounded-[4rem] ${step.textDark === false ? "bg-white/10 border-white/20" : "bg-white/50 dark:bg-white/5 border-slate-200 dark:border-white/10"} backdrop-blur-xl border shadow-clay-base transition-all duration-500`}
            >
              <div
                className={`text-base font-mono tracking-widest uppercase font-bold mb-6 ${step.accent} transition-colors duration-500`}
              >
                {step.month}
              </div>
              <h2
                className={`text-6xl md:text-7xl font-display mb-8 leading-tight ${step.textDark === false ? "text-white" : "text-brand-dark dark:text-white"} transition-colors duration-500`}
              >
                {step.title}
              </h2>
              <p
                className={`text-xl md:text-2xl leading-relaxed ${step.textDark === false ? "text-white/80" : "text-brand-dark/70 dark:text-white/60"} font-sans transition-colors duration-500`}
              >
                {step.desc}
              </p>
            </div>

            {/* Abstract visualizer for each step */}
            <div className="hidden md:flex items-center justify-center h-full perspective-1000">
              {i === 0 && (
                <div className="w-64 h-64 border-4 border-dashed border-brand-blue/30 dark:border-brand-orange/30 rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite] transition-colors">
                  <div className="w-48 h-48 border-4 border-brand-blue/60 dark:border-brand-orange/60 rounded-full flex items-center justify-center animate-[spin_15s_linear_reverse_infinite]">
                    <div className="w-32 h-32 bg-brand-blue dark:bg-brand-orange rounded-full shadow-clay-base flex items-center justify-center">
                      <div className="w-16 h-16 bg-white dark:bg-brand-dark rounded-full"></div>
                    </div>
                  </div>
                </div>
              )}
              {i === 1 && (
                <div className="w-64 h-64 flex flex-col justify-between">
                  {[1, 2, 3, 4, 5].map((bar) => (
                    <div
                      key={bar}
                      className="w-full h-8 bg-white/20 dark:bg-white/10 rounded-full overflow-hidden relative"
                    >
                      <div
                        className="absolute top-0 left-0 h-full bg-brand-orange dark:bg-brand-blue"
                        style={{
                          width: `${Math.random() * 60 + 40}%`,
                          transition: "width 2s ease",
                        }}
                      ></div>
                    </div>
                  ))}
                </div>
              )}
              {i === 2 && (
                <div className="relative w-64 h-64 flex items-center justify-center space-x-2">
                  <div
                    className="w-16 h-16 bg-white dark:bg-brand-orange rounded-full animate-bounce"
                    style={{ animationDelay: "0s" }}
                  ></div>
                  <div
                    className="w-16 h-16 bg-white dark:bg-brand-orange rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="w-16 h-16 bg-white dark:bg-brand-orange rounded-full animate-bounce"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Protocol;
