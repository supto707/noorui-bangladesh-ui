import { Link, useNavigate } from "react-router-dom";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

import { Moon, Package, Palette, Globe, Zap, Shield, ChevronRight, Star, Github, Terminal, Copy, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const Index = () => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("npm install noorui");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground scroll-smooth">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container max-w-6xl mx-auto flex items-center justify-between py-3 px-4">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-content font-bold text-sm">N</span>
            </div>
            <span className="font-display font-bold text-lg">NoorUI</span>
            <span className="nui-badge-primary nui-badge-sm ml-1">v1.0</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <Link to="/documentation" className="text-muted-foreground hover:text-foreground transition-colors font-semibold">Documentation</Link>
            <Link to="/components" className="text-muted-foreground hover:text-foreground transition-colors font-semibold">Components</Link>
            <button onClick={() => scrollTo('themes')} className="text-muted-foreground hover:text-foreground transition-colors font-semibold">Themes</button>
          </div>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="nui-btn nui-btn-outline nui-btn-primary nui-btn-sm font-bold rounded-xl border-2 hover:scale-105 transition-transform flex items-center">
            <Github className="w-4 h-4 mr-2" /> GitHub
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="nui-hero py-10 md:py-20 relative overflow-hidden bg-[#2D5A4C] text-white min-h-[85vh] flex items-center">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 20a10 10 0 1 1 0 20 10 10 0 0 1 0-20z\' fill=\'%23ffffff\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
            backgroundSize: '40px 40px'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2D5A4C] from-5% via-transparent to-transparent opacity-80" />

        <div className="container max-w-6xl mx-auto px-4 relative z-10 text-center md:text-left md:mt-4 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 mb-6">
              <span className="bg-white/10 text-white px-3 py-1 rounded-full text-[11px] font-bold border border-white/5 tracking-widest">Open Source</span>
              <span className="bg-white/10 text-white px-3 py-1 rounded-full text-[11px] font-bold border border-white/5 tracking-widest">{"<"}50KB</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-white leading-tight mb-6">
              Beautiful UI for<br />
              <span className="text-white/90">Bangladeshi Developers</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed font-medium mx-auto md:mx-0">
              A lightweight Tailwind CSS component library with 12 Islamic-themed palettes,
              RTL support, and 25+ semantic components. Framework-agnostic, tree-shakable, production-ready.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-16 relative z-20">
              <button
                onClick={() => scrollTo('components')}
                className="bg-white text-[#2D5A4C] font-extrabold px-6 py-3 rounded-xl shadow-lg hover:bg-white/90 transition-colors flex items-center text-[15px]"
              >
                Get Started <ChevronRight className="w-4 h-4 ml-1 stroke-[3]" />
              </button>
              <button
                onClick={() => scrollTo('themes')}
                className="bg-transparent border border-white/30 text-white font-bold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors text-[15px]"
              >
                View Components
              </button>
            </div>

            {/* Terminal install block */}
            <div className="max-w-md mx-auto md:mx-0 relative z-20 mt-8">
              <div
                className="bg-[#214338]/80 border border-white/5 rounded-2xl px-6 py-4 flex items-center justify-between shadow-2xl relative group cursor-pointer hover:bg-[#214338] transition-colors"
                onClick={handleCopy}
              >
                <code className="text-[#A4C4B9] font-mono text-sm tracking-wide bg-transparent flex items-center">
                  $ <span className="text-white ml-2">npm install noorui</span>
                </code>

                <div className="text-white/40 group-hover:text-white/80 transition-colors bg-white/5 rounded-md p-1.5 ml-4 flex items-center justify-center min-w-[32px] min-h-[32px]">
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-3">Why NoorUI?</h2>
            <p className="text-muted-foreground text-lg">Modern, lightweight, and culturally inclusive design system</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Package, title: "< 50KB Gzipped", desc: "Minimal footprint for maximum performance." },
              { icon: Palette, title: "12 Themes", desc: "Locally inspired palettes from Rangpur to Sylhet." },
              { icon: Globe, title: "RTL Ready", desc: "Optimized for Arabic and Urdu script applications." },
              { icon: Zap, title: "Fast Delivery", desc: "No runtime overhead, just optimized CSS classes." },
              { icon: Moon, title: "Dark First", desc: "Crafted specifically for night-mode and battery saving." },
              { icon: Shield, title: "Accessible", desc: "WAI-ARIA compliant components for everyone." },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="nui-card hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="nui-card-body">
                  <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-4">
                    <f.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-extrabold text-xl mb-2">{f.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Themes */}
      <section id="themes" className="py-24 bg-base-200 border-y border-border">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-3">12 Color Themes</h2>
          <p className="text-muted-foreground mb-12 text-lg">Dynamic palette switching with data-theme support</p>
          <div className="flex justify-center bg-background/50 p-8 rounded-3xl border border-border/50 backdrop-blur-sm">
            <ThemeSwitcher />
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section id="components" className="py-24 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-4xl font-black mb-3">Universal Components</h2>
            <p className="text-muted-foreground text-lg">A rich collection of fundamental UI blocks</p>
          </div>

          {/* Inline preview grid — no sidebar */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { title: 'Button', count: '10+', desc: 'Variants & states' },
              { title: 'Card', count: '5', desc: 'Layouts & overlays' },
              { title: 'Input', count: '6', desc: 'Fields & controls' },
              { title: 'Modal', count: '3', desc: 'Dialogs & sheets' },
            ].map((c) => (
              <div key={c.title} className="nui-card border-border/40 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                <div className="nui-card-body p-6">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="font-black text-lg">{c.title}</h3>
                    <span className="text-xs font-bold text-primary">{c.count}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/components" className="nui-btn nui-btn-outline rounded-xl font-bold px-8 group border-2">
              See All Components <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>


      <section className="py-24 text-center bg-background">
        <div className="nui-hero py-20 relative overflow-hidden text-center rounded-[3rem] container max-w-5xl mx-auto bg-primary text-primary-content">
          <div className="rui-pattern absolute inset-0 opacity-20" />
          <div className="container px-4 relative z-10">
            <h2 className="text-4xl font-black text-white mb-6">Ready to build something beautiful?</h2>
            <p className="text-white/80 text-lg mb-10">Start building your next masterpiece with NoorUI today.</p>
            <button onClick={() => scrollTo('components')} className="nui-btn bg-white text-primary nui-btn-xl px-12 rounded-2xl font-black shadow-xl hover:scale-105 transition-transform">
              Get Started Now
            </button>
          </div>
        </div>
      </section>

      <footer className="py-16 bg-card border-t border-border">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-black text-lg">N</span>
                </div>
                <span className="font-display font-black text-2xl">NoorUI</span>
              </div>
              <p className="text-muted-foreground max-w-xs text-center md:text-left">The delightful UI kit for modern web applications built for Bangladesh.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-sm">
              <div className="flex flex-col gap-4">
                <h4 className="font-black uppercase tracking-widest text-xs opacity-40">Library</h4>
                <Link to="/documentation" className="hover:text-primary transition-colors cursor-pointer font-bold">Documentation</Link>
                <Link to="/components" className="hover:text-primary transition-colors cursor-pointer font-bold">Components</Link>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="font-black uppercase tracking-widest text-xs opacity-40">Community</h4>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors cursor-pointer font-bold">GitHub</a>
                <a href="https://npmjs.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors cursor-pointer font-bold">npm Registry</a>
              </div>
              <div className="hidden md:flex flex-col gap-4">
                <h4 className="font-black uppercase tracking-widest text-xs opacity-40">Support</h4>
                <a className="hover:text-primary transition-colors cursor-pointer font-bold">Contact</a>
                <a className="hover:text-primary transition-colors cursor-pointer font-bold">Donate</a>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-bold opacity-40 uppercase tracking-widest">
            <p>© 2026 NoorUI Framework. All rights reserved.</p>
            <div className="flex gap-6">
              <a>Privacy Policy</a>
              <a>Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
