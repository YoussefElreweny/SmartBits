
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  isDarkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDarkMode }) => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden text-center">
      {/* Refined Background elements */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl aspect-square blur-[120px] rounded-full pointer-events-none -z-10 transition-colors duration-1000 ${isDarkMode ? 'bg-indigo-500/10' : 'bg-indigo-500/5'}`}></div>
      
      <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-bold uppercase tracking-widest ${isDarkMode ? 'bg-slate-900 border-slate-800 text-cyan-400' : 'bg-slate-50 border-slate-200 text-indigo-600'}`}>
          <Sparkles size={14} className="animate-pulse" />
          Intelligent Digital Architecture
        </div>
        
        <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight leading-[1.05]">
          Engineering <span className={isDarkMode ? 'gradient-text' : 'text-indigo-600'}>Brilliance</span> <br /> 
          one bit at a time.
        </h1>
        
        <p className={`text-lg md:text-xl max-w-2xl mx-auto leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          SmartBits delivers high-performance software solutions that transform complex challenges into intuitive experiences. We build the future with precision, speed, and intelligence.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#services" className={`group px-10 py-5 rounded-full font-bold flex items-center gap-2 transition-all scale-100 active:scale-95 ${isDarkMode ? 'bg-white text-slate-950 hover:bg-cyan-50 shadow-xl shadow-cyan-500/10' : 'bg-slate-900 text-white hover:bg-slate-800 shadow-xl shadow-indigo-200'}`}>
            View our services
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className={`px-10 py-5 rounded-full font-bold border transition-all ${isDarkMode ? 'border-slate-800 text-white hover:bg-slate-900' : 'border-slate-200 text-slate-900 hover:bg-slate-50'}`}>
            Schedule a consultation
          </a>
        </div>
      </div>
      
      {/* Abstract simple graphic or subtle scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <div className={`w-1 h-12 rounded-full ${isDarkMode ? 'bg-gradient-to-b from-cyan-400 to-transparent' : 'bg-gradient-to-b from-indigo-600 to-transparent'}`}></div>
      </div>
    </section>
  );
};

export default Hero;
