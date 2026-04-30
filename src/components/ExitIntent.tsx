import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Gift, Sparkles, Send } from 'lucide-react';

export const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseOut = (e: MouseEvent) => {
      if (!hasShown && e.clientY <= 0) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseOut);
    return () => document.removeEventListener('mouseleave', handleMouseOut);
  }, [hasShown]);

  if (hasShown && !isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVisible(false)}
            className="absolute inset-0 bg-brand-primary/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg bg-brand-soft rounded-sm shadow-2xl overflow-hidden border border-brand-accent/20"
          >
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-6 right-6 p-2 text-slate-400 hover:text-brand-primary transition-colors"
            >
              <X size={20} />
            </button>

            <div className="p-12 text-center">
              <div className="inline-flex p-5 rounded-sm bg-brand-accent text-white mb-10 shadow-xl shadow-green-900/20">
                <Gift size={40} strokeWidth={1} />
              </div>
              <h2 className="text-4xl font-serif font-bold mb-6 italic">Wait! Don't leave empty-handed.</h2>
              <p className="text-slate-500 mb-10 leading-relaxed font-light text-sm tracking-wide">
                Download our <span className="font-bold text-brand-primary border-b border-brand-accent">"2026 Growth Blueprint"</span> and join 15,000+ professionals getting ahead every morning.
              </p>
              
              <form className="space-y-4">
                <input 
                  type="email" 
                  placeholder="EMAIL ADDRESS" 
                  className="w-full px-6 py-5 bg-white border border-brand-border focus:outline-none focus:border-brand-accent transition-all text-[10px] tracking-[0.2em] font-bold"
                />
                <button className="w-full py-5 accent-bg text-white font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-opacity-90 shadow-xl shadow-green-900/10 transition-all flex items-center justify-center gap-3">
                   Download Now <Send size={14} />
                </button>
              </form>
              
              <p className="mt-8 text-[9px] text-slate-400 uppercase tracking-widest font-bold">
                Exclusive value. No spam. EVER.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
