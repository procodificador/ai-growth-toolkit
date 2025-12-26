
import React, { useState, createContext, useContext } from 'react';
import Hero from './components/Hero';
import ContentGenerator from './components/ContentGenerator';
import BotSimulator from './components/BotSimulator';
import WorkflowVisual from './components/WorkflowVisual';
import Results from './components/Results';
import SkillMatrix from './components/SkillMatrix';
import About from './components/About';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import { translations } from './translations';

type Language = 'en' | 'es';

interface LangContextType {
  lang: Language;
  t: typeof translations.en;
  setLang: (l: Language) => void;
}

export const LangContext = createContext<LangContextType | undefined>(undefined);

export const useTranslation = () => {
  const context = useContext(LangContext);
  if (!context) throw new Error("useTranslation must be used within LangProvider");
  return context;
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [isContactOpen, setIsContactOpen] = useState(false);

  const t = translations[lang];

  return (
    <LangContext.Provider value={{ lang, t, setLang }}>
      <div className="min-h-screen bg-[#0a0a0a] selection:bg-blue-500/30">
        {/* Navigation */}
        <header className="fixed top-0 w-full z-[60] glass-effect border-b border-white/5">
          <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a href="#" className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white italic hover:scale-105 transition-transform">YF</a>
              <div className="text-white font-bold tracking-tighter text-lg uppercase hidden sm:block">
                Yousef <span className="text-slate-500">Toolkit</span>
              </div>
            </div>
            
            <div className="hidden lg:flex gap-10 text-[10px] font-bold uppercase tracking-widest text-slate-400">
              <a href="#tools" className="hover:text-white transition-colors uppercase">{t.nav.tools}</a>
              <a href="#about" className="hover:text-white transition-colors uppercase">{t.nav.story}</a>
              <a href="#workflow" className="hover:text-white transition-colors uppercase">{t.nav.workflow}</a>
              <a href="#results" className="hover:text-white transition-colors uppercase">{t.nav.results}</a>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex bg-white/5 border border-white/10 rounded-lg overflow-hidden">
                <button 
                  onClick={() => setLang('en')}
                  className={`px-3 py-1.5 text-[10px] font-bold transition-colors ${lang === 'en' ? 'bg-white/10 text-white' : 'text-slate-500 hover:text-white'}`}
                >
                  EN
                </button>
                <button 
                  onClick={() => setLang('es')}
                  className={`px-3 py-1.5 text-[10px] font-bold transition-colors ${lang === 'es' ? 'bg-white/10 text-white' : 'text-slate-500 hover:text-white'}`}
                >
                  ES
                </button>
              </div>
              <button 
                onClick={() => setIsContactOpen(true)}
                className="text-[10px] px-5 py-2.5 bg-white text-black rounded-lg uppercase font-bold tracking-tighter hover:bg-slate-200 transition-all shadow-lg shadow-white/5 active:scale-95"
              >
                {t.nav.hire}
              </button>
            </div>
          </nav>
        </header>

        <main className="relative">
          <Hero />
          
          <div id="tools" className="scroll-mt-20">
            <ContentGenerator />
          </div>

          <div id="about" className="scroll-mt-20">
            <About />
          </div>

          <SkillMatrix />

          <div id="workflow" className="scroll-mt-20">
            <WorkflowVisual />
            <BotSimulator />
          </div>

          <div id="results" className="scroll-mt-20">
             <Results />
          </div>

          {/* Hire Section "Page" */}
          <section id="hire" className="py-24 px-6 bg-gradient-to-b from-transparent to-blue-900/10 scroll-mt-20">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">{t.contact.title}</h2>
              <p className="text-xl text-slate-400 mb-10">{t.contact.subtitle}</p>
              <button 
                onClick={() => setIsContactOpen(true)}
                className="px-12 py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all shadow-2xl shadow-blue-500/20 text-lg uppercase tracking-widest"
              >
                {t.nav.hire}
              </button>
            </div>
          </section>
        </main>

        <Footer />

        <ContactModal 
          isOpen={isContactOpen} 
          onClose={() => setIsContactOpen(false)} 
        />
      </div>
    </LangContext.Provider>
  );
};

export default App;
