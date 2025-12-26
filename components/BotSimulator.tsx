
import React, { useState, useEffect } from 'react';
import { Message } from '../types';
import { useTranslation } from '../App';

const BotSimulator: React.FC = () => {
  const { t, lang } = useTranslation();
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const initialMsg = lang === 'es' 
      ? 'Necesito una hoja de ruta para aprender IA Ops mientras trabajo a tiempo completo.'
      : 'I need a roadmap to learn AI Ops while working a full-time job.';
    
    setMessages([{ role: 'user', text: initialMsg }]);
    
    setIsTyping(true);
    const timer = setTimeout(() => {
      const response = lang === 'es'
        ? 'Analizando perfil... ⚙️\n\n1. Semanas 1-2: Master Prompt Engineering.\n2. Semana 3: Automatiza tu primer flujo con Make/Zapier.\n3. Semana 4: Despliega un bot basado en RAG.'
        : 'Analyzing profile... ⚙️\n\n1. Week 1-2: Master Prompt Engineering.\n2. Week 3: Automate your first workflow with Make/Zapier.\n3. Week 4: Deploy a RAG-based bot.';
        
      setMessages(prev => [...prev, { role: 'bot', text: response }]);
      setIsTyping(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [lang]);

  return (
    <div id="bot-simulator" className="py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white uppercase tracking-widest">{t.bot.title}</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            {t.bot.desc}
          </p>
        </div>

        <div className="glass-effect rounded-2xl max-w-2xl mx-auto overflow-hidden shadow-2xl shadow-blue-500/5">
          <div className="bg-white/10 px-4 py-3 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
            </div>
            <span className="text-xs text-slate-500 font-mono">{t.bot.placeholder}</span>
          </div>
          
          <div className="p-6 space-y-4 h-[350px] overflow-y-auto">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-xl text-sm ${
                  m.role === 'user' 
                  ? 'bg-blue-600 text-white rounded-br-none' 
                  : 'bg-white/5 border border-white/10 text-slate-200 rounded-bl-none font-mono whitespace-pre-wrap'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/5 p-4 rounded-xl rounded-bl-none">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-8 text-center text-xs text-slate-500 font-mono italic">
          {t.bot.systemMsg}
        </div>
      </div>
    </div>
  );
};

export default BotSimulator;
