import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, Zap, Heart, Cpu, BarChart3, Mail, Briefcase, Leaf } from 'lucide-react';
import { CATEGORIES, POSTS } from '../data/mockData';
import { cn, formatDate } from '../lib/utils';

export const Home = () => {
  const featuredPost = POSTS.find(p => p.isFeatured) || POSTS[0];
  const recentPosts = POSTS.filter(p => p.id !== featuredPost.id);

  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="container mx-auto px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-7 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="accent-text text-sm font-semibold tracking-[0.2em] uppercase mb-6 block">
                  Refined Daily Insights
                </span>
                <h1 className="text-6xl md:text-8xl font-serif font-bold leading-[1.05] mb-8 text-brand-primary">
                  Actionable advice for the <span className="italic font-normal">modern mind.</span>
                </h1>
                <p className="text-xl text-slate-600 max-w-xl leading-relaxed font-light mb-10">
                  Expert-backed strategies in SEO, Technology, and Wellness. Join our community of 15,000+ readers getting ahead every single morning.
                </p>
                <div className="flex items-center gap-6">
                  <Link 
                    to="/blog" 
                    className="accent-bg text-white px-12 py-5 text-xs uppercase tracking-[0.2em] font-semibold rounded-sm shadow-2xl shadow-green-900/20 active:scale-95 transition-all"
                  >
                    Start Reading
                  </Link>
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200"></div>
                    ))}
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white bg-brand-soft text-[10px] font-bold">
                      +15k
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="md:col-span-5">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="glass-card p-10 rounded-lg shadow-sm border-l-4 border-l-brand-accent h-full"
              >
                <h3 className="text-2xl font-serif mb-4">The SEO Cheat Sheet</h3>
                <p className="text-sm text-slate-500 mb-8 font-light leading-relaxed">
                  Get our exclusive 2026 guide: "10 Myths That Kill Your Rankings." Sent directly to your inbox.
                </p>
                <form className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="First Name" 
                    className="w-full px-4 py-4 bg-white border border-brand-border text-xs uppercase tracking-widest focus:outline-none focus:border-brand-accent transition-colors"
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full px-4 py-4 bg-white border border-brand-border text-xs uppercase tracking-widest focus:outline-none focus:border-brand-accent transition-colors"
                  />
                  <button className="w-full accent-bg text-white py-5 text-xs uppercase tracking-[0.2em] font-semibold hover:bg-opacity-90 transition-all">
                    Get Free Updates
                  </button>
                </form>
                <p className="text-[9px] text-center mt-6 opacity-40 uppercase tracking-widest">
                  No spam. Just value. Unsubscribe anytime.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Grid */}
      <section className="px-10">
        <div className="header-border mb-12 flex justify-between items-end pb-6">
          <h2 className="text-xs uppercase tracking-[0.3em] font-bold opacity-80">Latest Collections</h2>
          <Link to="/blog" className="text-xs underline underline-offset-8 opacity-40 hover:opacity-100 transition-opacity uppercase tracking-widest">
            View All Posts
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {POSTS.map(post => (
            <Link 
              key={post.id} 
              to={`/post/${post.slug}`} 
              className="space-y-6 group cursor-pointer"
            >
              <div className="aspect-[4/3] bg-slate-100 overflow-hidden relative">
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-white px-3 py-1.5 text-[9px] uppercase font-bold tracking-[0.2em] shadow-sm">
                    {post.category}
                  </span>
                </div>
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                />
              </div>
              <div className="space-y-3">
                <h4 className="text-2xl font-serif leading-snug group-hover:accent-text transition-colors duration-300">
                  {post.title}
                </h4>
                <p className="text-xs text-slate-400 font-light tracking-wide flex items-center gap-2">
                  <span>{post.readTime}</span>
                  <span className="opacity-30">&bull;</span>
                  <span>{post.date}</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Category Ticker */}
      <section className="bg-white py-16 header-border">
        <div className="container mx-auto px-10">
          <div className="flex flex-wrap justify-center gap-x-16 gap-y-8">
            {CATEGORIES.map(cat => (
              <Link 
                key={cat.id} 
                to={`/category/${cat.slug}`}
                className="text-[11px] uppercase tracking-[0.3em] font-bold opacity-30 hover:opacity-100 hover:accent-text transition-all"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const ChevronRight = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
);
