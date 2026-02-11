
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Sync the dark class on the html element for Tailwind's dark: selector
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href.startsWith('#')) {
          const targetId = href.substring(1);
          const targetElement = targetId === "" ? document.body : document.getElementById(targetId);
          
          if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-900'}`}>
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        {isDarkMode ? (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-950/20 via-slate-950 to-slate-950"></div>
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-50/50 via-white to-white"></div>
        )}
      </div>
      
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      <main>
        <Hero isDarkMode={isDarkMode} />
        <Services isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
      </main>
      
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
