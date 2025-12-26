
import React, { useState } from 'react';
import { useTranslation } from '../App';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('https://formspree.io/f/mregbqoe', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative glass-effect w-full max-w-lg rounded-3xl border border-white/10 overflow-hidden animate-in zoom-in-95 duration-300">
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">{t.contact.title}</h3>
              <p className="text-slate-400 text-sm">{t.contact.subtitle}</p>
            </div>
            <button onClick={onClose} className="text-slate-500 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {status === 'success' ? (
            <div className="py-12 text-center animate-in fade-in zoom-in duration-500">
              <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-500">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Message Received</h4>
              <p className="text-slate-400 mb-8">The Outlier will reach back to you shortly.</p>
              <button 
                onClick={onClose}
                className="px-8 py-3 bg-white text-black font-bold rounded-xl hover:bg-slate-200 transition-all"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{t.contact.name}</label>
                  <input required type="text" name="name" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{t.contact.role}</label>
                  <input required type="text" name="role" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 outline-none transition-colors" placeholder="Recruiter @ Tech" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{t.contact.email}</label>
                <input required type="email" name="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 outline-none transition-colors" placeholder="john@company.com" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{t.contact.message}</label>
                <textarea required name="message" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 outline-none transition-colors h-32 resize-none" placeholder="..."></textarea>
              </div>
              <button 
                disabled={status === 'sending'}
                className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-slate-200 disabled:opacity-50 transition-all flex items-center justify-center gap-2"
              >
                {status === 'sending' ? 'Sending...' : t.contact.send}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              {status === 'error' && (
                <p className="text-red-400 text-sm text-center">Error sending message. Please try again.</p>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
