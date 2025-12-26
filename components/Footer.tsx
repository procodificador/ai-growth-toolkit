
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h3 className="text-xl font-bold text-white mb-2 tracking-tighter">AI Growth Toolkit</h3>
          <p className="text-sm text-slate-500">Built with React, TypeScript and Vite.</p>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="https://github.com/procodificador" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">GitHub</a>
          <a href="https://www.linkedin.com/in/yousef-fathi-hellín-a358b33a1" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">LinkedIn</a>
          <a href="mailto:yousefathicontacto@gmail.com" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Email</a>
        </div>
        
        <div className="text-[10px] text-slate-600 font-mono uppercase tracking-widest text-center md:text-right">
          Developed by Yousef Fathi Hellín<br/>
          © 2025 AI Operations Portfolio
        </div>
      </div>
    </footer>
  );
};

export default Footer;
