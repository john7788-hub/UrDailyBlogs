import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { 
  Calendar, Clock, User, ArrowLeft, Share2, Twitter, 
  Linkedin, Facebook, ChevronRight, CheckCircle2, MessageCircle
} from 'lucide-react';
import { POSTS, CATEGORIES, Author } from '../data/mockData';
import { formatDate } from '../lib/utils';
import { motion, useScroll, useSpring } from 'motion/react';

export const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = POSTS.find(p => p.slug === slug);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-32 text-center font-serif">
        <h1 className="text-4xl font-bold mb-8">Post not found</h1>
        <Link to="/" className="accent-text uppercase tracking-widest text-xs font-bold">Return Home</Link>
      </div>
    );
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <article className="pb-24">
      {/* Reading Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-brand-accent z-[60] origin-left" style={{ scaleX }} />

      {/* Hero Header */}
      <header className="pt-40 pb-20 border-b border-brand-border">
        <div className="container mx-auto px-10">
          <div className="max-w-4xl">
            <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:accent-text transition-colors mb-12 text-[10px] font-bold uppercase tracking-[0.3em]">
              <ArrowLeft size={14} /> Back to Insights
            </Link>
            
            <div className="flex items-center gap-4 mb-8">
              <span className="accent-text text-[10px] font-black uppercase tracking-[0.3em]">
                {post.category}
              </span>
              <span className="opacity-20 text-slate-400">|</span>
              <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">{post.readTime}</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-brand-primary mb-12 leading-[1.1]">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-8">
              <div className="flex items-center gap-4">
                <img src={post.author.avatar} alt={post.author.name} className="w-12 h-12 rounded-full object-cover border border-brand-border grayscale" />
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-widest text-brand-primary">{post.author.name}</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">{post.author.role}</div>
                </div>
              </div>
              <div className="h-4 w-px bg-slate-200 hidden sm:block" />
              <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                Published {formatDate(post.date)}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="container mx-auto px-10 pt-10 mb-20">
        <div className="max-w-6xl mx-auto rounded-sm overflow-hidden aspect-[21/9]">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover grayscale" />
        </div>
      </div>

      {/* Content Area */}
      <div className="container mx-auto px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Main Content */}
          <main className="lg:col-span-8">
            <div className="markdown-body">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>

            {/* Newsletter CTA */}
            <div className="my-20 p-12 bg-white border border-brand-border relative overflow-hidden">
               <div className="relative z-10">
                 <span className="accent-text text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">Newsletter</span>
                 <h4 className="text-3xl font-serif font-bold mb-6 italic">Enjoyed this perspective?</h4>
                 <p className="text-slate-500 mb-10 max-w-lg font-light leading-relaxed">
                   Join 15,000+ modern professionals receiving our curated "Refined Insights" directly to their inbox every Tuesday.
                 </p>
                 <form className="flex flex-col sm:flex-row gap-4 max-w-md">
                   <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="flex-1 px-5 py-4 bg-transparent border border-brand-border text-[11px] uppercase tracking-widest focus:outline-none focus:border-brand-accent transition-colors" 
                   />
                   <button className="px-10 py-4 accent-bg text-white text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-opacity-90 transition-all">
                     Join
                   </button>
                 </form>
               </div>
            </div>

            {/* Author Bio */}
            <footer className="mt-20 py-16 border-t border-brand-border">
              <div className="flex gap-10 items-start flex-col sm:flex-row">
                <img src={post.author.avatar} className="w-24 h-24 rounded-full object-cover grayscale border border-brand-border" alt={post.author.name} />
                <div className="space-y-4">
                  <h4 className="text-sm font-bold uppercase tracking-widest italic">An insight by {post.author.name}</h4>
                  <p className="text-slate-500 leading-relaxed font-light max-w-xl">{post.author.bio}</p>
                </div>
              </div>
            </footer>
          </main>

          {/* Related Sidebar */}
          <aside className="lg:col-span-4 self-start sticky top-32">
             <div className="space-y-16">
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-30 mb-8 pb-4 border-b border-brand-border">Read Next</h4>
                  <div className="space-y-10">
                    {POSTS.filter(p => p.id !== post.id).slice(0, 3).map(related => (
                      <Link key={related.id} to={`/post/${related.slug}`} className="group block space-y-4">
                        <div className="relative aspect-video rounded-sm overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                          <img src={related.image} className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105" />
                        </div>
                        <h5 className="font-serif text-xl leading-snug group-hover:accent-text transition-colors duration-300">
                          {related.title}
                        </h5>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="p-8 accent-bg text-white space-y-6 rounded-sm">
                  <h4 className="text-xl font-serif italic">Free SEO Blueprint</h4>
                  <p className="text-[11px] leading-relaxed opacity-80 uppercase tracking-widest">Download our exclusive 2026 organic growth cheatsheet.</p>
                  <button className="w-full py-4 bg-white text-brand-accent text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-opacity-90 transition-all">
                    Get PDF
                  </button>
                </div>
             </div>
          </aside>

        </div>
      </div>
    </article>
  );
};
