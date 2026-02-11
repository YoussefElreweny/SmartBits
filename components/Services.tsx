
import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { Globe, Smartphone, Cpu, BarChart3, ChevronRight } from 'lucide-react';

interface ServicesProps {
  isDarkMode: boolean;
}

const IconMap: Record<string, any> = {
  Globe,
  Smartphone,
  Cpu,
  BarChart3
};

const Services: React.FC<ServicesProps> = ({ isDarkMode }) => {
  const [activeTab, setActiveTab] = useState(SERVICES[0].id);
  const activeCategory = SERVICES.find(s => s.id === activeTab);

  return (
    <section id="services" className={`py-32 scroll-mt-24 transition-colors duration-500 ${isDarkMode ? 'bg-slate-950/50' : 'bg-slate-50/50'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className={`text-sm font-bold uppercase tracking-widest mb-4 ${isDarkMode ? 'text-cyan-400' : 'text-indigo-600'}`}>Capabilities</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Expertise across the <span className={isDarkMode ? 'gradient-text' : 'text-indigo-600'}>Digital Spectrum</span></h3>
          <p className={`text-lg ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Tailored technical solutions designed to scale your business and outpace the competition.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {SERVICES.map((cat) => {
            const Icon = IconMap[cat.icon];
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-3 px-8 py-4 rounded-full font-bold transition-all border ${
                  isActive 
                    ? (isDarkMode ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/30' : 'bg-slate-900 border-slate-900 text-white shadow-lg shadow-slate-200') 
                    : (isDarkMode ? 'bg-slate-900/50 border-white/5 text-slate-400 hover:text-white hover:bg-slate-800' : 'bg-white border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-50')
                }`}
              >
                <Icon size={18} />
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeCategory?.items.map((item, idx) => (
            <div 
              key={idx}
              className={`group p-8 rounded-3xl transition-all duration-300 border h-full flex flex-col ${
                isDarkMode 
                  ? 'bg-slate-900/40 border-white/5 hover:border-cyan-500/30 hover:bg-slate-900/60' 
                  : 'bg-white border-slate-100 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 hover:border-indigo-500/20'
              }`}
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-8 transition-all ${
                isDarkMode 
                  ? 'bg-white/5 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white' 
                  : 'bg-slate-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white shadow-inner'
              }`}>
                <ChevronRight size={24} />
              </div>
              <h4 className={`text-xl font-bold mb-4 transition-colors ${isDarkMode ? 'text-white group-hover:text-cyan-400' : 'text-slate-900 group-hover:text-indigo-600'}`}>
                {item.title}
              </h4>
              <p className={`leading-relaxed text-sm flex-grow ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
