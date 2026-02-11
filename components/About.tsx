
import React from 'react';
import { ShieldCheck, Rocket, Zap, Users } from 'lucide-react';

interface AboutProps {
  isDarkMode: boolean;
}

const About: React.FC<AboutProps> = ({ isDarkMode }) => {
  return (
    <section id="about" className="py-32 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className={`text-sm font-bold uppercase tracking-widest ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>Our Philosophy</h2>
            <h3 className="text-4xl md:text-5xl font-bold leading-tight">Built on <span className={isDarkMode ? 'text-cyan-400' : 'text-indigo-600'}>Technical Precision</span> & Visionary Strategy</h3>
            <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              At SmartBits, we bridge the gap between complex engineering and elegant business solutions. We don't just write code; we architect experiences that define the digital standard.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-10">
              {[
                { icon: Rocket, title: "Next-Gen Design", desc: "Purposeful aesthetics meeting high performance." },
                { icon: ShieldCheck, title: "Elite Security", desc: "Enterprise-grade protection by default." },
                { icon: Zap, title: "Agile Speed", desc: "Fast-track development cycles for rapid ROI." },
                { icon: Users, title: "Deep Partnership", desc: "Consultative approach that scales with your growth." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${isDarkMode ? 'bg-white/5 text-cyan-400' : 'bg-slate-100 text-indigo-600'}`}>
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h4 className={`font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{item.title}</h4>
                    <p className={`text-sm ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative group">
            <div className={`aspect-[4/5] rounded-[2.5rem] overflow-hidden transition-all duration-700 p-2 border ${isDarkMode ? 'bg-slate-900 border-white/10' : 'bg-white border-slate-200 shadow-2xl shadow-indigo-500/5'}`}>
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
                alt="Technology Close-up" 
                className="w-full h-full object-cover rounded-[2rem] group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
              />
              <div className={`absolute inset-0 bg-gradient-to-t pointer-events-none rounded-[2.5rem] ${isDarkMode ? 'from-slate-950/80 via-transparent' : 'from-indigo-900/20 via-transparent'}`}></div>
              
              <div className="absolute bottom-10 left-10 right-10">
                <div className={`p-8 rounded-3xl border backdrop-blur-md transition-colors ${isDarkMode ? 'bg-slate-950/60 border-white/10' : 'bg-white/80 border-slate-200/50 shadow-lg'}`}>
                  <p className={`italic text-lg font-medium mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    "Innovation is not just about new tech, it's about making intelligence accessible."
                  </p>
                  <p className={`font-bold uppercase tracking-widest text-xs ${isDarkMode ? 'text-cyan-400' : 'text-indigo-600'}`}>— SmartBits DNA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
