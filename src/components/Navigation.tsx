import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ChevronRight, Mail, Github, Twitter, Linkedin, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CATEGORIES } from '../data/mockData';
import { cn } from '../lib/utils';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 header-border",
        isScrolled ? "bg-white/80 backdrop-blur-md py-3" : "bg-white/50 backdrop-blur-sm py-5 px-6 md:px-10"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-serif font-bold tracking-tight accent-text italic">
              UrDailyBlogs
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-semibold opacity-70">
            <Link to="/" className="hover:opacity-100 transition-opacity">Home</Link>
            {CATEGORIES.slice(0, 5).map(cat => (
              <Link 
                key={cat.id} 
                to={`/category/${cat.slug}`}
                className="hover:opacity-100 transition-opacity"
              >
                {cat.name}
              </Link>
            ))}
            <Link to="/about" className="hover:opacity-100 transition-opacity">About</Link>
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <button className="text-[11px] uppercase tracking-[0.2em] font-semibold opacity-70 hover:opacity-100 transition-opacity flex items-center gap-2">
            <Search className="w-4 h-4" /> Search
          </button>
          <Link 
            to="/subscribe" 
            className="accent-bg text-white px-6 py-2.5 text-[11px] uppercase tracking-[0.2em] font-semibold rounded-sm shadow-xl shadow-green-900/10 active:scale-95 transition-all"
          >
            Subscribe
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-brand-border overflow-hidden"
          >
            <nav className="flex flex-col p-6 gap-6 text-[10px] uppercase tracking-widest font-bold">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
              {CATEGORIES.map(cat => (
                <Link 
                  key={cat.id} 
                  to={`/category/${cat.slug}`} 
                  onClick={() => setIsMenuOpen(false)}
                  className="accent-text"
                >
                  {cat.name}
                </Link>
              ))}
              <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              <button className="w-full py-4 accent-bg text-white rounded-sm mt-4">
                Subscribe
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export const Footer = () => {
  return (
    <footer className="header-border mx-6 md:mx-10 mt-auto py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] uppercase tracking-[0.2em] font-semibold opacity-50">
      <div>&copy; 2026 UrDailyBlogs. All rights reserved.</div>
      <div className="flex flex-wrap justify-center gap-8">
        <Link to="/privacy" className="hover:opacity-100">Privacy</Link>
        <Link to="/terms" className="hover:opacity-100">Terms</Link>
        <Link to="/contact" className="hover:opacity-100">Contact</Link>
        <a href="#" className="hover:opacity-100">Twitter</a>
        <a href="#" className="hover:opacity-100">LinkedIn</a>
      </div>
    </footer>
  );
};
