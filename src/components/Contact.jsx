import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, Calendar, ArrowRight, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(containerRef.current.children,
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

  return (
    <section ref={sectionRef} className="relative py-32 bg-[#FAF9F6] z-20 overflow-hidden" id="contact">
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-lightBlue/10 rounded-full text-brand-blue font-bold text-sm mb-6 shadow-sm">
             <Sparkles size={16} /> Let's Talk
          </div>
          <h2 className="text-5xl md:text-6xl font-display text-brand-dark mb-4">
            Ready to launch better innovation?
          </h2>
          <p className="text-brand-dark/60 font-sans text-lg max-w-2xl mx-auto">
            Get in touch with our team of expert DOers to discuss how we can accelerate your next big idea.
          </p>
        </div>

        <div ref={containerRef} className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          
          {/* Form Side */}
          <div className="lg:col-span-3 clay-surface bg-white rounded-[2.5rem] p-8 md:p-12 shadow-clay-base shadow-brand-dark/5 relative overflow-hidden group">
            
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-brand-purple/20 to-transparent rounded-bl-full -mr-20 -mt-20 z-0"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-display text-brand-dark mb-8">Send a message</h3>
              
              <form className="space-y-6">
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-widest text-brand-dark/60 mb-2">
                      First Name <span className="text-[#FF7761]">*</span>
                    </label>
                    <input 
                      type="text" 
                      placeholder="Jane" 
                      className="w-full px-5 py-4 bg-brand-surfaceAlt rounded-2xl border-2 border-transparent focus:outline-none focus:border-brand-lightBlue transition-all font-sans text-brand-dark placeholder:text-brand-dark/30"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-widest text-brand-dark/60 mb-2">
                      Last Name
                    </label>
                    <input 
                      type="text" 
                      placeholder="Doe" 
                      className="w-full px-5 py-4 bg-brand-surfaceAlt rounded-2xl border-2 border-transparent focus:outline-none focus:border-brand-lightBlue transition-all font-sans text-brand-dark placeholder:text-brand-dark/30"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-widest text-brand-dark/60 mb-2">
                    Work Email <span className="text-[#FF7761]">*</span>
                  </label>
                  <input 
                    type="email" 
                    placeholder="jane@company.com" 
                    className="w-full px-5 py-4 bg-brand-surfaceAlt rounded-2xl border-2 border-transparent focus:outline-none focus:border-brand-lightBlue transition-all font-sans text-brand-dark placeholder:text-brand-dark/30"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-widest text-brand-dark/60 mb-2">
                    How can we help? <span className="text-[#FF7761]">*</span>
                  </label>
                  <textarea 
                    rows="4"
                    placeholder="Tell us about your innovation challenge..." 
                    className="w-full px-5 py-4 bg-brand-surfaceAlt rounded-2xl border-2 border-transparent focus:outline-none focus:border-brand-lightBlue transition-all font-sans text-brand-dark placeholder:text-brand-dark/30 resize-none"
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button type="button" className="group flex items-center justify-between w-full clay-btn bg-brand-dark text-white hover:bg-black py-5 px-8 text-lg" onClick={(e) => e.preventDefault()}>
                    <span>Launch Inquiry</span>
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-brand-dark transition-colors">
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                </div>

              </form>
            </div>
          </div>

          {/* Contact Items Side */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            
            <div className="clay-surface bg-[#4D5BDE] rounded-[2.5rem] p-8 text-white shadow-clay-base shadow-brand-blue/20 hover:-translate-y-1 transition-transform cursor-pointer relative overflow-hidden group">
              <div className="absolute -right-4 -bottom-4 opacity-10 transform group-hover:scale-150 transition-transform duration-700">
                 <Mail size={120} />
              </div>
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-6 border border-white/30">
                <Mail size={24} className="text-white" />
              </div>
              <h4 className="text-2xl font-display font-bold mb-2">Email Us</h4>
              <p className="text-white/70 font-sans text-sm mb-4">Direct access to our senior partners.</p>
              <a href="mailto:richard@innovatr.co.za" className="text-white font-mono text-sm underline decoration-white/50 hover:decoration-white transition-colors">richard@innovatr.co.za</a>
            </div>

            <div className="clay-surface bg-[#F5A66A] rounded-[2.5rem] p-8 text-white shadow-clay-base shadow-brand-orange/20 hover:-translate-y-1 transition-transform cursor-pointer relative overflow-hidden group">
              <div className="absolute -right-4 -bottom-4 opacity-10 transform group-hover:scale-150 transition-transform duration-700">
                 <Phone size={120} />
              </div>
              <div className="w-14 h-14 rounded-2xl bg-white/30 backdrop-blur-md flex items-center justify-center mb-6 border border-white/40">
                <Phone size={24} className="text-white" />
              </div>
              <h4 className="text-2xl font-display font-bold mb-2">WhatsApp Us</h4>
              <p className="text-white/80 font-sans text-sm mb-4">Fastest response time for urgent queries.</p>
              <a href="#" className="flex items-center gap-2 text-white font-mono text-sm underline decoration-white/50 hover:decoration-white transition-colors">+27 (82) 301-2433</a>
            </div>

            <div className="clay-surface bg-white rounded-[2.5rem] p-8 shadow-clay-sm shadow-brand-dark/5 hover:-translate-y-1 transition-transform cursor-pointer border border-slate-100 relative overflow-hidden">
               <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[#CDE4AD]/30 to-transparent"></div>
              <div className="w-14 h-14 rounded-2xl bg-[#CDE4AD] flex items-center justify-center mb-6">
                <Calendar size={24} className="text-brand-dark" />
              </div>
              <h4 className="text-2xl font-display font-bold text-brand-dark mb-2">Book a Demo</h4>
              <p className="text-brand-dark/60 font-sans text-sm mb-6">See how Innovatr can transform your innovation process.</p>
              <button className="w-full py-3 rounded-xl border-2 border-slate-200 text-brand-dark font-sans font-bold hover:bg-slate-50 hover:border-slate-300 transition-colors">
                Schedule 30-min Demo
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
