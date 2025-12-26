
import React, { useState } from 'react';
import { generateGrowthContent } from '../services/geminiService';
import { ContentResult, ContentType } from '../types';
import { useTranslation } from '../App';

const ContentGenerator: React.FC = () => {
  const { t, lang } = useTranslation();
  const [topic, setTopic] = useState('');
  const [type, setType] = useState<ContentType>('viral-hooks');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ContentResult | null>(null);

  const handleGenerate = async () => {
    if (!topic.trim()) return;
    setLoading(true);
    try {
      const data = await generateGrowthContent(topic, type, lang);
      setResult(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const types: { id: ContentType; label: string; icon: string }[] = [
    { id: 'viral-hooks', label: t.contentGen.viralHooks, icon: '🪝' },
    { id: 'video-script', label: t.contentGen.videoScript, icon: '🎥' },
    { id: 'thread-writer', label: t.contentGen.xThread, icon: '🧵' },
    { id: 'ad-copy', label: t.contentGen.adCopy, icon: '💰' },
  ];

  return (
    <section id="tools" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-4">
              {t.contentGen.badge}
            </div>
            <h2 className="text-4xl font-bold mb-6 text-white tracking-tight">{t.contentGen.title}</h2>
            <p className="text-slate-400 mb-8 leading-relaxed text-lg">
              {t.contentGen.desc}
            </p>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-3">
                {types.map((tItem) => (
                  <button
                    key={tItem.id}
                    onClick={() => setType(tItem.id)}
                    className={`p-4 rounded-xl border text-sm font-semibold transition-all flex items-center gap-3 ${
                      type === tItem.id 
                      ? 'bg-blue-600 border-blue-400 text-white shadow-lg shadow-blue-500/20' 
                      : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
                    }`}
                  >
                    <span>{tItem.icon}</span>
                    {tItem.label}
                  </button>
                ))}
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder={t.contentGen.placeholder}
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600"
                />
              </div>

              <button
                onClick={handleGenerate}
                disabled={loading}
                className="group relative w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:opacity-50 text-white font-bold py-5 rounded-xl transition-all shadow-xl shadow-blue-900/20 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <span className="relative">{loading ? t.contentGen.loading : t.contentGen.generateBtn}</span>
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 blur-3xl opacity-50"></div>
            <div className="relative glass-effect rounded-3xl p-8 border border-white/10 shadow-2xl min-h-[500px] flex flex-col">
              {loading ? (
                <div className="flex-1 flex flex-col items-center justify-center space-y-4">
                  <div className="relative w-16 h-16">
                    <div className="absolute inset-0 border-4 border-blue-500/20 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-t-blue-500 rounded-full animate-spin"></div>
                  </div>
                  <p className="text-blue-400 font-mono text-xs animate-pulse">EXECUTING_PROMPT_CHAIN...</p>
                </div>
              ) : result ? (
                <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
                  {result.headline && (
                    <div>
                      <h3 className="text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-2 font-bold">Headline / Title</h3>
                      <p className="text-xl font-bold text-white leading-tight">{result.headline}</p>
                    </div>
                  )}
                  {result.hook && (
                    <div>
                      <h3 className="text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-2 font-bold">The Viral Hook</h3>
                      <div className="p-4 bg-blue-500/10 border-l-2 border-blue-500 rounded-r text-lg italic text-slate-200">
                        "{result.hook}"
                      </div>
                    </div>
                  )}
                  {result.ideas && (
                    <div>
                      <h3 className="text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-2 font-bold">Strategic Pillars</h3>
                      <ul className="space-y-3">
                        {result.ideas.map((idea, i) => (
                          <li key={i} className="flex items-start gap-4 text-sm text-slate-300 group">
                            <span className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center text-[10px] text-blue-500 border border-white/10 group-hover:bg-blue-500/20 transition-colors">{i+1}</span>
                            {idea}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {result.steps && (
                    <div>
                      <h3 className="text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-2 font-bold">Thread Steps</h3>
                      <div className="space-y-4">
                        {result.steps.map((step, i) => (
                          <div key={i} className="text-sm p-3 bg-white/5 rounded-lg text-slate-300 font-mono">
                            {step}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {result.script && (
                    <div>
                      <h3 className="text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-2 font-bold">Master Script</h3>
                      <p className="text-sm text-slate-300 whitespace-pre-wrap leading-relaxed bg-white/5 p-4 rounded-xl font-mono">
                        {result.script}
                      </p>
                    </div>
                  )}
                  <div className="pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-widest text-blue-500 font-bold">Call to Action</span>
                      <span className="px-2 py-1 bg-emerald-500/10 text-emerald-400 text-[10px] rounded border border-emerald-500/20 font-bold tracking-widest">READY</span>
                    </div>
                    <p className="text-sm font-semibold text-white mt-2">{result.cta}</p>
                  </div>
                </div>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-center opacity-30">
                  <div className="w-20 h-20 mb-6 rounded-full border border-dashed border-slate-500 flex items-center justify-center">
                    <svg className="w-8 h-8 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </div>
                  <p className="text-slate-400 max-w-xs font-mono text-xs">{t.contentGen.waiting}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentGenerator;
