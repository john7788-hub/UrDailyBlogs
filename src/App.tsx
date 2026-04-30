import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components/Navigation';
import { ExitIntentPopup } from './components/ExitIntent';
import { Home } from './pages/Home';
import { BlogPost } from './pages/BlogPost';
import { CATEGORIES, POSTS } from './data/mockData';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const CategoryPage = () => {
  const { slug } = useParams();
  const category = CATEGORIES.find(c => c.slug === slug);
  const posts = POSTS.filter(p => p.category === slug);

  if (!category) return null;

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <header className="max-w-3xl mb-16">
          <span className="text-brand-accent font-black uppercase tracking-widest text-xs mb-4 inline-block">Category</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 capitalize">{category.name}</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            {category.description}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map(post => (
            <Link key={post.id} to={`/post/${post.slug}`} className="group">
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-6 shadow-sm">
                <img src={post.image} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex items-center gap-3 text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                <span>{post.date}</span>
                <span className="w-1 h-1 bg-slate-200 rounded-full" />
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-2xl font-bold mb-4 group-hover:text-brand-accent transition-colors leading-tight">{post.title}</h2>
              <p className="text-slate-600 line-clamp-3 mb-6 text-sm">{post.excerpt}</p>
              <div className="inline-flex items-center gap-2 text-sm font-bold text-brand-primary group-hover:gap-4 transition-all">
                Read Post <ArrowRight size={18} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-grow">{children}</main>
    <Footer />
    <ExitIntentPopup />
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:slug" element={<BlogPost />} />
          <Route path="/category/:slug" element={<CategoryPage />} />
          <Route path="/about" element={
            <div className="pt-48 pb-24 container mx-auto px-4 max-w-4xl text-center">
              <h1 className="text-5xl font-bold mb-8">About UrDailyBlogs</h1>
              <p className="text-xl text-slate-600 mb-12 leading-relaxed">
                We are a team of experts dedicated to bringing you high-quality, actionable content. Our platform is built on transparency, expertise, and a passion for helping readers grow in their personal and professional lives.
              </p>
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" className="rounded-3xl shadow-xl w-full" alt="Team" />
            </div>
          } />
          <Route path="/contact" element={
            <div className="pt-48 pb-24 container mx-auto px-4 max-w-2xl">
              <h1 className="text-5xl font-bold mb-8 text-center">Get in Touch</h1>
              <p className="text-center text-slate-600 mb-12">Have a question or a story to share? We'd love to hear from you.</p>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                   <div className="flex flex-col gap-2">
                     <label className="text-sm font-bold">First Name</label>
                     <input type="text" className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-brand-accent" placeholder="John" />
                   </div>
                   <div className="flex flex-col gap-2">
                     <label className="text-sm font-bold">Last Name</label>
                     <input type="text" className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-brand-accent" placeholder="Doe" />
                   </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold">Email Address</label>
                  <input type="email" className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-brand-accent" placeholder="john@example.com" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold">Message</label>
                  <textarea rows={5} className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-brand-accent" placeholder="How can we help?" />
                </div>
                <button className="w-full py-4 bg-brand-primary text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-xl shadow-brand-primary/20">
                  Send Message
                </button>
              </form>
            </div>
          } />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
