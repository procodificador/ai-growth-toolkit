
import React from 'react';
import { useTranslation } from '../App';

const Results: React.FC = () => {
  const { t } = useTranslation();

  const stats = [
    { label: t.results.growth, value: '+400k', sub: t.results.growthSub },
    { label: t.results.efficiency, value: '5x', sub: t.results.efficiencySub },
    { label: t.results.lang, value: '3', sub: t.results.langSub },
    { label: t.results.projects, value: '25+', sub: t.results.projectsSub },
  ];

  return (
    <section className="py-24 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center md:text-left">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm font-bold text-blue-500 mb-1 uppercase tracking-widest">{stat.label}</div>
              <div className="text-xs text-slate-500">{stat.sub}</div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 glass-effect p-8 rounded-3xl border-blue-500/20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">{t.results.outlierTitle}</h3>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>{t.results.outlier1}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>{t.results.outlier2}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>{t.results.outlier3}</span>
                </li>
              </ul>
            </div>
            <div className="relative group">
               <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full group-hover:bg-blue-500/30 transition-all duration-500"></div>
               <div className="relative glass-effect p-6 rounded-2xl border-white/10">
                 <p className="text-sm italic text-slate-300 mb-4">
                   "{t.results.testimonial}"
                 </p>
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-slate-700 rounded-full"></div>
                   <div>
                     <div className="text-xs font-bold text-white uppercase tracking-tighter">AI Ops Recruiter</div>
                     <div className="text-[10px] text-slate-500">Silicon Valley / EMEA</div>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
