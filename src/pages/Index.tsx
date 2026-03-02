import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { ComponentShowcase } from "@/components/ComponentShowcase";
import { PrayerTimeCard } from "@/components/PrayerTimeCard";
import { QiblaCompass } from "@/components/QiblaCompass";
import { Moon, Package, Palette, Globe, Zap, Shield, ChevronRight, Star, Github } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container max-w-6xl mx-auto flex items-center justify-between py-3 px-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">R</span>
            </div>
            <span className="font-display font-bold text-lg">RangpurUI</span>
            <span className="rui-badge-primary text-[10px]">v1.0</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#themes" className="text-muted-foreground hover:text-foreground transition-colors">Themes</a>
            <a href="#components" className="text-muted-foreground hover:text-foreground transition-colors">Components</a>
            <a href="#islamic" className="text-muted-foreground hover:text-foreground transition-colors">Islamic</a>
          </div>
          <button className="rui-btn-outline rui-btn-sm">
            <Github className="w-4 h-4" /> GitHub
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="rui-hero py-24 md:py-32 relative">
        <div className="rui-pattern" />
        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="flex items-center gap-2 mb-4">
              <span className="rui-badge bg-primary-foreground/20 text-primary-foreground">Open Source</span>
              <span className="rui-badge bg-primary-foreground/20 text-primary-foreground">{"<"}50KB</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-primary-foreground leading-tight mb-4">
              Beautiful UI for<br />
              <span className="opacity-80">Bangladeshi Developers</span>
            </h1>
            <p className="text-lg text-primary-foreground/75 max-w-xl mb-8 leading-relaxed">
              A lightweight Tailwind CSS component library with 12 Islamic-themed palettes, 
              RTL support, and 25+ semantic components. Framework-agnostic, tree-shakable, production-ready.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="rui-btn bg-primary-foreground text-primary font-bold hover:brightness-95 rui-btn-lg">
                Get Started <ChevronRight className="w-4 h-4" />
              </button>
              <button className="rui-btn border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 rui-btn-lg">
                View Components
              </button>
            </div>
          </div>

          {/* Install snippet */}
          <div className="mt-12 max-w-md animate-fade-in-up delay-200">
            <div className="rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 p-4 font-mono text-sm text-primary-foreground">
              <span className="text-primary-foreground/50">$</span> npm install rangpurui
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">Why RangpurUI?</h2>
          <p className="text-center text-muted-foreground mb-12">Built with love for the Bangladeshi and Islamic dev community</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Package, title: "< 50KB Gzipped", desc: "Lightweight and tree-shakable. Only ship what you use." },
              { icon: Palette, title: "12 Themes", desc: "From Islamic Green to Cox's Bazar — palettes inspired by Bangladesh." },
              { icon: Globe, title: "RTL Ready", desc: "Full dir='rtl' support with CSS logical properties for Arabic/Urdu apps." },
              { icon: Zap, title: "Framework Agnostic", desc: "Works with React, Vue, Vanilla JS, Next.js, Vite — any stack." },
              { icon: Moon, title: "Dark/Light/Auto", desc: "Built-in dark mode with smooth transitions and auto-detection." },
              { icon: Shield, title: "Accessible", desc: "ARIA roles, focus-visible, keyboard nav — inclusive by default." },
            ].map((f) => (
              <div key={f.title} className="rui-card">
                <div className="rui-card-body">
                  <f.icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-bold text-lg mb-1">{f.title}</h3>
                  <p className="text-muted-foreground text-sm">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Theme Switcher */}
      <section id="themes" className="py-20 bg-muted/30">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2">12 Color Themes</h2>
          <p className="text-muted-foreground mb-8">Click a theme to see the entire page transform instantly</p>
          <ThemeSwitcher />
        </div>
      </section>

      {/* Components */}
      <section id="components" className="py-20 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2">Component Showcase</h2>
          <p className="text-muted-foreground mb-12">25+ semantic components, all themed with CSS custom properties</p>
          <ComponentShowcase />
        </div>
      </section>

      {/* Islamic Components */}
      <section id="islamic" className="py-20 bg-muted/30">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2">Islamic Components</h2>
          <p className="text-muted-foreground mb-8">Purpose-built for prayer apps and Islamic web projects</p>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl">
            <PrayerTimeCard />
            <QiblaCompass />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rui-hero py-20 relative">
        <div className="rui-pattern" />
        <div className="container max-w-6xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to build something beautiful?
          </h2>
          <p className="text-primary-foreground/70 mb-8 max-w-lg mx-auto">
            Start using RangpurUI today — open source, forever free, built for the ummah.
          </p>
          <button className="rui-btn bg-primary-foreground text-primary font-bold rui-btn-lg">
            Get Started — It's Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-card border-t border-border">
        <div className="container max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">R</span>
            </div>
            <span className="font-display font-semibold">RangpurUI</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Made with ❤️ from Rangpur, Bangladesh
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <a className="hover:text-foreground transition-colors cursor-pointer">Docs</a>
            <a className="hover:text-foreground transition-colors cursor-pointer">GitHub</a>
            <a className="hover:text-foreground transition-colors cursor-pointer">npm</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
