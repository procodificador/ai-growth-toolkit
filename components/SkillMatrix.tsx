
import React from 'react';
import { Skill } from '../types';

const SkillMatrix: React.FC = () => {
  const skills: Skill[] = [
    { name: 'Prompt Engineering', level: 95, category: 'AI' },
    { name: 'Growth Marketing', level: 90, category: 'Growth' },
    { name: 'React Prototyping', level: 85, category: 'Dev' },
    { name: 'Automation (Make/Zapier)', level: 92, category: 'AI' },
    { name: 'Adobe Creative Suite', level: 80, category: 'Growth' },
    { name: 'Community Scaling', level: 98, category: 'Growth' },
    { name: 'API Orchestration', level: 88, category: 'Dev' },
    { name: 'Data Scraping & Mining', level: 82, category: 'Dev' },
  ];

  return (
    <section className="py-24 px-6 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">The Skill Matrix</h2>
          <p className="text-slate-500">My technical landscape across three core domains.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {(['AI', 'Growth', 'Dev'] as const).map((cat) => (
            <div key={cat} className="glass-effect p-8 rounded-2xl border-white/10">
              <h4 className={`text-xl font-bold mb-8 flex items-center gap-3 ${
                cat === 'AI' ? 'text-blue-400' : cat === 'Growth' ? 'text-purple-400' : 'text-emerald-400'
              }`}>
                <span className="w-2 h-2 rounded-full bg-current"></span>
                {cat} Stack
              </h4>
              <div className="space-y-6">
                {skills.filter(s => s.category === cat).map((skill, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-slate-300">
                      <span>{skill.name}</span>
                      <span className="text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-1000 ease-out ${
                          cat === 'AI' ? 'bg-blue-500' : cat === 'Growth' ? 'bg-purple-500' : 'bg-emerald-500'
                        }`} 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillMatrix;
