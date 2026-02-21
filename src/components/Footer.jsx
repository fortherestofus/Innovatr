import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Footer = () => {
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(ctaRef.current, {
        scale: 1.05,
        color: '#F5A66A', // brand-orange
        duration: 0.3,
        paused: true,
        ease: "power2.out",
      });
    }, ctaRef);

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = () => {
    gsap.to(ctaRef.current, { scale: 1.05, color: '#F5A66A', duration: 0.4, ease: "back.out(1.7)" });
  };
  
  const handleMouseLeave = () => {
    gsap.to(ctaRef.current, { scale: 1, color: '#FFFFFF', duration: 0.4, ease: "power2.out" });
  };

  return (
    <footer className="relative bg-brand-dark pt-32 pb-12 rounded-t-[4rem] mt-[-4rem] z-30 overflow-hidden">
      
      {/* Massive Kinetic CTA */}
      <div className="w-full flex justify-center mb-32 group cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <h2 ref={ctaRef} className="text-[12vw] leading-none font-display font-black text-white whitespace-nowrap tracking-tighter transition-colors">
          LAUNCH WITH US
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/10 pt-12">
        
        {/* Brand Info */}
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-2xl font-display text-white mb-4">Innovatr</h3>
          <p className="text-white/60 font-sans max-w-sm mb-8 leading-relaxed">
            Agile, idea-to-market consumer insights for world-class CPG brands. Turning guesses into evidence-based decisions.
          </p>
          
          <div className="flex items-center gap-3 bg-white/5 inline-flex px-4 py-2 rounded-full border border-white/10">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-xs font-mono text-white/70 uppercase tracking-widest">System Operational</span>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-bold mb-6 font-sans">Platform</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-white/60 hover:text-brand-orange transition-colors font-sans text-sm">Diagnostic Shuffler</a></li>
            <li><a href="#" className="text-white/60 hover:text-brand-orange transition-colors font-sans text-sm">Telemetry Typewriter</a></li>
            <li><a href="#" className="text-white/60 hover:text-brand-orange transition-colors font-sans text-sm">Pricing Models</a></li>
            <li><a href="#" className="text-white/60 hover:text-brand-orange transition-colors font-sans text-sm">Enterprise API</a></li>
          </ul>
        </div>

        {/* Contact/Legal */}
        <div>
          <h4 className="text-white font-bold mb-6 font-sans">Company</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-white/60 hover:text-brand-orange transition-colors font-sans text-sm">About Us</a></li>
            <li><a href="#" className="text-white/60 hover:text-brand-orange transition-colors font-sans text-sm">Careers</a></li>
            <li><a href="#" className="text-white/60 hover:text-brand-orange transition-colors font-sans text-sm">Privacy Policy</a></li>
            <li><a href="#" className="text-white/60 hover:text-brand-orange transition-colors font-sans text-sm">Terms of Service</a></li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 flex flex-col md:flex-row items-center justify-between text-white/40 text-xs font-mono">
        <p>&copy; {new Date().getFullYear()} Innovatr Inc. All rights reserved.</p>
        <p className="mt-4 md:mt-0">Website redesign concept | Designed and vibe coded by Alroy Ndhlovu for Innovatr</p>
      </div>

    </footer>
  );
};

export default Footer;
