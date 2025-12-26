
import React from 'react';
import { useTranslation } from '../App';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 overflow-hidden relative group">
              <div className="absolute inset-0 flex items-center justify-center text-8xl grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700">👤</div>
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent">
                 <h4 className="text-2xl font-bold text-white">Yousef Fathi Hellín</h4>
                 <p className="text-blue-400 font-mono text-xs uppercase tracking-widest">Growth Hacker & AI Orchestrator</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 glass-effect p-4 rounded-xl border border-blue-500/30 animate-bounce [animation-duration:3s]">
               <span className="text-2xl">🌍</span>
            </div>
            <div className="absolute -bottom-6 -left-6 glass-effect p-4 rounded-xl border border-purple-500/30 animate-pulse">
               <span className="text-2xl">🤖</span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">{t.about.title}</h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-6">
                {t.about.desc1}
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                {t.about.desc2}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <h5 className="text-white font-bold mb-1">{t.about.skill1}</h5>
                <p className="text-xs text-slate-500">{t.about.skill1Desc}</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <h5 className="text-white font-bold mb-1">{t.about.skill2}</h5>
                <p className="text-xs text-slate-500">{t.about.skill2Desc}</p>
              </div>
            </div>

            <div className="flex gap-4">
               <button className="px-6 py-3 bg-white text-black font-bold rounded-lg text-sm hover:bg-slate-200 transition-all">{t.about.resumeBtn}</button>
               <button className="px-6 py-3 glass-effect text-white font-bold rounded-lg text-sm hover:bg-white/10 transition-all">{t.about.linkedInBtn}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
