
import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { NAV_LINKS } from '../constants';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? (isDarkMode ? 'bg-slate-950/80 backdrop-blur-lg border-b border-white/10 py-3' : 'bg-white/80 backdrop-blur-lg border-b border-slate-200 py-3')
          : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-3 group">
          <img src="/logo-s-removebg-preview.png" alt="Smart Bits Logo" className="h-10 w-auto object-contain" />
          <div className="flex flex-col leading-none">
            <span className={`text-lg font-bold tracking-tight ${isDarkMode ? 'text-cyan-400' : 'text-indigo-600'}`}>SMART</span>
            <span className={`text-lg font-bold tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>BITS</span>
          </div>
        </a>

        {/* Desktop Controls */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold uppercase tracking-wider transition-colors ${isDarkMode ? 'text-slate-300 hover:text-cyan-400' : 'text-slate-600 hover:text-indigo-600'}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all ${isDarkMode ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all ${isDarkMode ? 'bg-slate-800 text-yellow-400' : 'bg-slate-100 text-slate-600'}`}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className={isDarkMode ? 'text-slate-300' : 'text-slate-600'}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`md:hidden absolute top-full left-0 right-0 border-b p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 ${isDarkMode ? 'bg-slate-900 border-white/10' : 'bg-white border-slate-200 shadow-xl'}`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-lg font-bold uppercase tracking-widest ${isDarkMode ? 'text-slate-300 hover:text-cyan-400' : 'text-slate-600 hover:text-indigo-600'}`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
