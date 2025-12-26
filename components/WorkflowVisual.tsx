
import React from 'react';
import { useTranslation } from '../App';

const WorkflowVisual: React.FC = () => {
  const { t, lang } = useTranslation();

  const steps = lang === 'es' ? [
    { title: 'Idea', icon: '💡', desc: 'Brainstorming asistido por IA' },
    { title: 'Script', icon: '📝', desc: 'Optimizado para retención' },
    { title: 'Multimedia', icon: '🎬', desc: 'Video e imágenes Gen-IA' },
    { title: 'Publicar', icon: '🚀', desc: 'Programación automatizada' },
    { title: 'Métricas', icon: '📊', desc: 'Análisis algorítmico' },
  ] : [
    { title: 'Idea', icon: '💡', desc: 'AI-assisted brainstorming' },
    { title: 'Script', icon: '📝', desc: 'Optimized for retention' },
    { title: 'Multimedia', icon: '🎬', desc: 'Gen-AI Video & Images' },
    { title: 'Publish', icon: '🚀', desc: 'Automated scheduling' },
    { title: 'Metrics', icon: '📊', desc: 'Algorithmic analysis' },
  ];

  return (
    <section id="workflow" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <div className="max-w-md">
            <h2 className="text-3xl font-bold mb-4 text-white">{t.workflow.title}</h2>
            <p className="text-slate-400">
              {t.workflow.desc}
            </p>
          </div>
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {steps.map((step, i) => (
              <div key={i} className="glass-effect p-4 rounded-xl text-center flex flex-col items-center group hover:border-blue-500/50 transition-all duration-300">
                <span className="text-3xl mb-3 group-hover:scale-110 transition-transform">{step.icon}</span>
                <h4 className="text-white text-sm font-bold mb-1">{step.title}</h4>
                <p className="text-[10px] text-slate-500 uppercase tracking-tighter">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative p-8 rounded-2xl bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-white/5 overflow-hidden">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="text-4xl font-bold text-white">80%</div>
            <div className="flex-1">
              <h5 className="text-lg font-semibold text-white mb-1">{t.workflow.efficiency}</h5>
              <p className="text-sm text-slate-400">
                {t.workflow.efficiencyDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowVisual;
