import { LucideIcon, Heart, Cpu, BarChart3, Briefcase, Leaf } from 'lucide-react';

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
}

export interface Author {
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: Author;
  date: string;
  readTime: string;
  image: string;
  isFeatured?: boolean;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  faqs: { question: string; answer: string }[];
}

export const CATEGORIES: Category[] = [
  {
    id: 'health',
    name: 'Health',
    slug: 'health',
    description: 'Practical tips for physical mental wellbeing, longevity, and modern wellness advice backed by science.',
    icon: 'Heart',
  },
  {
    id: 'tech',
    name: 'Technology',
    slug: 'tech',
    description: 'Breaking down the latest in AI, software trends, and gadgets to keep you ahead in the digital age.',
    icon: 'Cpu',
  },
  {
    id: 'seo',
    name: 'SEO & Digital Marketing',
    slug: 'seo',
    description: 'Actionable strategies to grow your organic traffic, master Google algorithms, and dominate search results.',
    icon: 'BarChart3',
  },
  {
    id: 'business',
    name: 'Business',
    slug: 'business',
    description: 'Insights into entrepreneurship, productivity, and modern business models for the digital nomad.',
    icon: 'Briefcase',
  },
  {
    id: 'lifestyle',
    name: 'Lifestyle',
    slug: 'lifestyle',
    description: 'Curated guides for travel, minimalism, and intentional living in a high-speed world.',
    icon: 'Leaf',
  },
];

export const AUTHORS: Record<string, Author> = {
  'sarah-jones': {
    name: 'Sarah Jones',
    role: 'Health Specialist',
    bio: 'Sarah has over 10 years of experience in nutritional science and holistic health coaching.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150',
  },
  'alex-chen': {
    name: 'Alex Chen',
    role: 'Tech Analyst & SEO Expert',
    bio: 'Alex is a full-stack developer obsessed with performance and organic growth strategies.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150',
  },
};

export const POSTS: Post[] = [
  {
    id: '1',
    title: '5 Science-Backed Ways to Boost Your Productivity in 2026',
    slug: 'boost-productivity-2026',
    excerpt: 'Discover the latest hacks in neuroplasticity and time management to double your output without burning out.',
    category: 'business',
    author: AUTHORS['alex-chen'],
    date: 'May 15, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&q=80&w=1200',
    isFeatured: true,
    seo: {
      title: 'How to Boost Productivity in 2026: 5 Science-Backed Methods',
      description: 'Learn 5 proven ways to increase your productivity in 2026 using neuroplasticity and smart time management techniques.',
      keywords: ['productivity hacks 2026', 'time management', 'neuroplasticity for work'],
    },
    faqs: [
      { question: 'What is the most effective productivity method?', answer: 'The "Deep Work" philosophy combined with the Pomodoro technique remains highly effective for cognitive tasks.' },
      { question: 'How does sleep affect productivity?', answer: 'Studies show that even losing 1 hour of sleep can decrease focus by up to 30% the next day.' },
    ],
    content: `
## Introduction: The New Productivity Paradigm
In 2026, the challenge isn't finding more time; it's protecting your attention. With AI handling repetitive tasks, your value lies in deep, creative work.

### 1. The Power of Monotasking
Multitasking is a myth. Every time you switch tasks, you pay a "context-switching tax" that drains your cognitive reserves.

### 2. Time Blocking for Deep Work
Allocate 90-minute blocks for your most difficult tasks. Use the first block of the day for your "frog"—the biggest, most important task.

> "The ability to perform deep work is becoming increasingly rare at exactly the same time it is becoming increasingly valuable in our economy." – Cal Newport

### 3. Leveraging AI as a Copilot
Stop using AI as a replacement and start using it as a researcher. Use it to outline, summarize, and debug your thoughts.

### 4. The 20-Minute Rejuvenation Loop
Non-Sleep Deep Rest (NSDR) or a quick 20-minute walk in nature can reset your dopamine levels and improve creative problem-solving.

### 5. Digital Minimalists Win
Audit your notifications. If it doesn't help you make more money or better memories, mute it.

### Conclusion
Productivity in 2026 is about output quality, not hours logged. Start with one change today.
    `,
  },
  {
    id: '2',
    title: 'The Ultimate Guide to Modern SEO in the AI Era',
    slug: 'modern-seo-ai-era',
    excerpt: 'SEO is changing rapidly with AI overviews. Learn how to optimize for user intent and EEAT to stay relevant.',
    category: 'seo',
    author: AUTHORS['alex-chen'],
    date: 'May 12, 2026',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    seo: {
      title: 'Modern SEO Guide 2026: Optimizing for AI & Google EEAT',
      description: 'Master SEO in the AI era. Learn about AI Overviews (SGE), EEAT optimization, and why user intent is more important than ever.',
      keywords: ['AI SEO strategy', 'EEAT for bloggers', 'Google AI Overviews optimization'],
    },
    faqs: [
      { question: 'Is SEO dead because of AI?', answer: 'No, but it is evolving. AI provides answers, but users still seek expert-backed, original content for complex decisions.' },
    ],
    content: `
## SEO in 2026: A Shift to Quality
Forget keyword stuffing. The era of "content for bots" is over. Google now prioritizes Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T).

### The Rise of AI Overviews
With search engines providing direct answers, your content needs to be the "source of truth."

### Internal Linking: Your Secret Weapon
Structure your site using the Pillar-Cluster model. Your Pillar pages should be comprehensive overviews, while clusters dive deep into specific sub-topics.

### Technical SEO still matters
Core Web Vitals are no longer a "bonus"—they are a requirement. If your site doesn't load in under 2 seconds, you've already lost the visitor.
    `,
  },
  {
    id: '3',
    title: 'Plant-Based Nutrition: Essential Tips for Longevity',
    slug: 'plant-based-longevity',
    excerpt: 'Explore the science of longevity and how a plant-rich diet can reduce inflammation and increase your lifespan.',
    category: 'health',
    author: AUTHORS['sarah-jones'],
    date: 'May 10, 2026',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1200',
    seo: {
      title: 'Plant-Based Diet for Longevity: Science-Backed Nutrition Tips',
      description: 'Learn how plant-based nutrition contributes to longevity and healthy aging. Discover top foods for inflammation reduction.',
      keywords: ['plant based longevity', 'anti-inflammatory diet', 'longevity nutrition'],
    },
    faqs: [
      { question: 'Can I get enough protein on a plant-based diet?', answer: 'Yes, lentils, chickpeas, quinoa, and tofu are excellent protein sources when eaten in varied combinations.' },
    ],
    content: `
## Why Plant-Based is the Future of Health
Focusing on whole, plant-based foods is the single most effective way to reduce chronic inflammation.

### The Power of Fiber
Fiber is the unsung hero of health. It fuels your microbiome, which regulates everything from immunity to mood.

### Micronutrients over Macros
While we obsess over proteins, it's the polyphenols and antioxidants in plants that truly protect our cells from oxidative stress.
    `,
  },
];
