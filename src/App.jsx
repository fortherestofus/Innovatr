import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Protocol from './components/Protocol';
import Process from './components/Process';
import ConsultTools from './components/ConsultTools';
import CaseStudies from './components/CaseStudies';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

// For Smooth Scrolling
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  
  useEffect(() => {
    // Setup smooth scrolling with Lenis (gives that premium feel)
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Sync GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0, 0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    }
  }, []);

  return (
    <div className="w-full min-h-screen bg-brand-surface dark:bg-brand-dark transition-colors duration-500 selection:bg-brand-blue selection:text-white relative">
      <Navbar />
      <Hero />
      <Philosophy />
      <Protocol />
      <div id="process"><Process /></div>
      <div id="tools"><ConsultTools /></div>
      <div id="work"><CaseStudies /></div>
      <div id="pricing"><Pricing /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </div>
  );
}

export default App;
