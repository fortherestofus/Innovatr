import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThemeToggle from './ThemeToggle';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      ref={navRef}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl rounded-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/70 dark:bg-brand-dark/70 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-clay-sm py-4 px-8'
          : 'bg-transparent py-6 px-4'
      }`}
    >
      <div className="flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-2xl font-display font-bold text-brand-dark dark:text-white tracking-tight">
            Innovatr
          </span>
          <div className="w-2 h-2 rounded-full bg-brand-orange group-hover:scale-150 transition-transform" />
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#process" className="text-sm font-semibold text-brand-dark/70 dark:text-white/70 hover:text-brand-blue dark:hover:text-brand-orange transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-brand-blue dark:after:bg-brand-orange after:transition-all hover:after:w-full">Services</a>
          <a href="#tools" className="text-sm font-semibold text-brand-dark/70 dark:text-white/70 hover:text-brand-blue dark:hover:text-brand-orange transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-brand-blue dark:after:bg-brand-orange after:transition-all hover:after:w-full">Tools</a>
          <a href="#pricing" className="text-sm font-semibold text-brand-dark/70 dark:text-white/70 hover:text-brand-blue dark:hover:text-brand-orange transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-brand-blue dark:after:bg-brand-orange after:transition-all hover:after:w-full">Pricing</a>
          <a href="#contact" className="text-sm font-semibold text-brand-dark/70 dark:text-white/70 hover:text-brand-blue dark:hover:text-brand-orange transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-brand-blue dark:after:bg-brand-orange after:transition-all hover:after:w-full">Consult</a>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button className="hidden sm:block text-sm font-bold text-brand-dark dark:text-white hover:text-brand-blue transition-colors">
            Sign In
          </button>
          <a href="#contact" className="clay-btn-primary px-6 py-2.5 text-sm">
            Launch with Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
