
import React from 'react';
import { useTranslation } from '../App';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative pt-40 pb-20 px-6 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[20%] right-[-5%] w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] animate-pulse-slow"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8 animate-in fade-in slide-in-from-top-4 duration-1000">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-medium text-emerald-400 tracking-wide uppercase">{t.hero.badge}</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight gradient-text leading-tight animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          {t.hero.title}
        </h1>
        
        <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          {t.hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
          <a href="#tools" className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-slate-200 hover:scale-105 active:scale-95 transition-all duration-300 w-full sm:w-auto text-center">
            {t.hero.tryBtn}
          </a>
          <a href="#workflow" className="px-8 py-4 glass-effect text-white font-semibold rounded-lg hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-300 w-full sm:w-auto text-center">
            {t.hero.workflowBtn}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
