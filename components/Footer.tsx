
import React from 'react';
import { NAV_LINKS } from '../constants';
import { Twitter, Linkedin, Github, Instagram } from 'lucide-react';

interface FooterProps {
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  return (
    <footer className={`py-20 border-t transition-colors duration-500 ${isDarkMode ? 'bg-slate-950 border-white/5' : 'bg-slate-50 border-slate-200'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20">
          <div className="col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-8">
              <img src="/logo-s-removebg-preview.png" alt="Smart Bits Icon" className="w-9 h-9 object-contain rounded-lg" />
              <div className="flex flex-col leading-none">
                <span className={`text-lg font-bold tracking-tight ${isDarkMode ? 'text-cyan-400' : 'text-indigo-600'}`}>SMART</span>
                <span className={`text-lg font-bold tracking-tight ${isDarkMode ? 'text-slate-900' : 'text-slate-900'}`}>BITS</span>
              </div>
            </a>
            <p className={`leading-relaxed mb-8 max-w-sm ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>
              Professional engineering for the modern web. We specialize in building secure, scalable, and intelligent digital infrastructure.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Github, Instagram].map((Icon, i) => (
                <a key={i} href="#" className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${isDarkMode ? 'border-white/10 text-slate-400 hover:text-white hover:border-white' : 'border-slate-200 text-slate-400 hover:text-indigo-600 hover:border-indigo-200'}`}>
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 col-span-1 lg:col-span-2">
            <div>
              <h4 className={`font-bold mb-8 uppercase tracking-[0.2em] text-[10px] ${isDarkMode ? 'text-slate-300' : 'text-slate-900'}`}>Company</h4>
              <ul className="space-y-4">
                {NAV_LINKS.map(link => (
                  <li key={link.name}>
                    <a href={link.href} className={`text-sm font-semibold transition-colors ${isDarkMode ? 'text-slate-500 hover:text-cyan-400' : 'text-slate-500 hover:text-indigo-600'}`}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className={`font-bold mb-8 uppercase tracking-[0.2em] text-[10px] ${isDarkMode ? 'text-slate-300' : 'text-slate-900'}`}>Technologies</h4>
              <ul className="space-y-4">
                {['Website Development', 'AI Integration', 'Data Analysis', 'Mobile Apps'].map(tech => (
                  <li key={tech}>
                    <span className={`text-sm font-semibold ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>
                      {tech}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={`pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold uppercase tracking-widest ${isDarkMode ? 'border-white/5 text-slate-600' : 'border-slate-200 text-slate-400'}`}>
          <p>© {new Date().getFullYear()} SmartBits. All systems operational.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Security</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
