import React, { useState } from 'react';
import { Menu, X, Copy, Check, Eye, ChevronDown, Sparkles, Zap, ChevronLeft, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { components, categories, type ComponentDef } from './componentData';

/* ─── Component Page (right side) ─── */
const ComponentPage: React.FC<{ comp: ComponentDef }> = ({ comp }) => {
  const [view, setView] = useState<'preview' | 'code'>('preview');
  const [codeType, setCodeType] = useState<'jsx' | 'html'>('jsx');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeType === 'jsx' ? comp.jsx : comp.html);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      key={comp.id}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-bold text-primary uppercase tracking-wider">{comp.category}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-foreground tracking-tight mb-2">{comp.title}</h1>
        <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">{comp.desc}</p>
      </div>

      {/* Preview/Code Card */}
      <div className="bg-card/40 backdrop-blur-2xl border border-border/40 rounded-2xl overflow-hidden shadow-xl shadow-black/5">
        {/* Tab bar */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-border/40 bg-muted/30">
          <div className="flex gap-2">
            <button
              onClick={() => setView('preview')}
              className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all duration-200 flex items-center gap-1.5 ${view === 'preview'
                ? 'bg-primary text-white shadow-md shadow-primary/20'
                : 'text-muted-foreground hover:bg-muted/50'
                }`}
            >
              <Eye className="w-3.5 h-3.5" /> Preview
            </button>
            <button
              onClick={() => setView('code')}
              className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all duration-200 flex items-center gap-1.5 ${view === 'code'
                ? 'bg-primary text-white shadow-md shadow-primary/20'
                : 'text-muted-foreground hover:bg-muted/50'
                }`}
            >
              <Copy className="w-3.5 h-3.5" /> Code
            </button>
          </div>

          {view === 'code' && (
            <div className="flex items-center gap-2">
              <div className="flex bg-muted/50 p-0.5 rounded-lg border border-border/30">
                <button onClick={() => setCodeType('jsx')} className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${codeType === 'jsx' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground'}`}>JSX</button>
                <button onClick={() => setCodeType('html')} className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${codeType === 'html' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground'}`}>HTML</button>
              </div>
              <button onClick={handleCopy} className="p-1.5 rounded-lg hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-all" title="Copy code">
                {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-8 md:p-10">
          <AnimatePresence mode="wait">
            {view === 'preview' ? (
              <motion.div key="p" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center justify-center min-h-[250px]">
                {comp.preview}
              </motion.div>
            ) : (
              <motion.div key="c" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                <div className="flex items-center gap-2 px-4 py-2.5 bg-[#0a0a1a] rounded-t-xl border border-white/5 border-b-0">
                  <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-red-500/70" /><div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" /><div className="w-2.5 h-2.5 rounded-full bg-green-500/70" /></div>
                  <span className="ml-2 text-[10px] font-mono text-white/25 uppercase tracking-wider">{codeType === 'jsx' ? 'component.tsx' : 'template.html'}</span>
                </div>
                <pre className="p-5 rounded-b-xl bg-[#0d0d1a] border border-white/5 border-t-0 overflow-x-auto text-sm leading-relaxed text-blue-100/90 font-mono">
                  <code>{codeType === 'jsx' ? comp.jsx : comp.html}</code>
                </pre>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

/* ─── Main Showcase ─── */
const ComponentShowcase: React.FC = () => {
  const [activeId, setActiveId] = useState(components[0].id);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedCats, setExpandedCats] = useState<Record<string, boolean>>(
    Object.fromEntries(categories.map(c => [c.name, true]))
  );
  const [modalOpen, setModalOpen] = useState(false);

  const activeComp = components.find(c => c.id === activeId) || components[0];

  const toggleCat = (name: string) => {
    setExpandedCats(prev => ({ ...prev, [name]: !prev[name] }));
  };

  const selectComp = (id: string) => {
    setActiveId(id);
    setSidebarOpen(false);
    // no auto-triggers — user clicks the button in the preview
  };

  /* ── Sidebar Content (shared between desktop fixed & mobile drawer) ── */
  const SidebarContent = (
    <div className="flex flex-col h-full">
      {/* Logo + Back */}
      <div className="px-5 py-4 border-b border-border/30 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center text-white font-black text-sm shadow-lg shadow-primary/20 transition-transform hover:scale-110">N</div>
            <span className="font-black text-xl tracking-tighter bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent italic">NoorUI</span>
          </div>
          <ThemeSwitcher compact />
        </div>
        <Link to="/" className="flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors">
          <ChevronLeft className="w-3 h-3" /> Back to Home
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
        {categories.map(cat => {
          const catComponents = components.filter(c => c.category === cat.name);
          const isExpanded = expandedCats[cat.name];
          return (
            <div key={cat.name}>
              <button
                onClick={() => toggleCat(cat.name)}
                className="w-full flex items-center justify-between px-3 py-2 text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/30"
              >
                <span className="flex items-center gap-2">
                  <span>{cat.icon}</span>
                  {cat.name}
                </span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? '' : '-rotate-90'}`} />
              </button>
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    {catComponents.map(comp => (
                      <button
                        key={comp.id}
                        onClick={() => selectComp(comp.id)}
                        className={`w-full text-left px-4 pl-9 py-2 text-sm rounded-lg transition-all duration-200 ${activeId === comp.id
                          ? 'bg-primary/10 text-primary font-bold border-l-2 border-primary'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted/30 font-medium'
                          }`}
                      >
                        {comp.title}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-5 py-4 border-t border-border/30">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Sparkles className="w-3 h-3" />
          <span className="font-semibold">21 Components</span>
          <span className="opacity-50">• v2026</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background flex">
      {/* ── Desktop Sidebar (fixed) ── */}
      <aside className="hidden lg:flex flex-col w-72 border-r border-border/20 bg-background/80 backdrop-blur-3xl fixed top-0 bottom-0 left-0 z-40 shadow-[1px_0_0_0_rgba(0,0,0,0.02)]">
        {SidebarContent}
      </aside>

      {/* ── Mobile Sidebar (drawer) ── */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 z-[90] bg-black/40 backdrop-blur-sm"
              onClick={() => setSidebarOpen(false)}
            />
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="lg:hidden fixed top-0 bottom-0 left-0 z-[91] w-72 bg-background border-r border-border/30 shadow-2xl"
            >
              <button
                onClick={() => setSidebarOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-muted/50 hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-all"
              >
                <X className="w-4 h-4" />
              </button>
              {SidebarContent}
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* ── Main Content ── */}
      <main
        className="flex-1 lg:ml-72 min-h-screen"
        onClick={(e) => {
          const target = e.target as HTMLElement;
          const modalBtn = target.closest('[data-modal-trigger]');
          if (modalBtn) setModalOpen(true);

          const drawerBtn = target.closest('[data-drawer-trigger]');
          if (drawerBtn) setSidebarOpen(true);
        }}
      >
        {/* Mobile header */}
        <div className="lg:hidden flex items-center justify-between px-5 py-3 border-b border-border/30 bg-card/50 backdrop-blur-xl sticky top-0 z-30">
          <button onClick={() => setSidebarOpen(true)} className="p-2 rounded-lg hover:bg-muted/50 transition-colors">
            <Menu className="w-5 h-5" />
          </button>
          <span className="font-bold text-sm">{activeComp.title}</span>
          <div className="w-9" />
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-10 py-10 lg:py-16">
          <AnimatePresence mode="wait">
            <ComponentPage comp={activeComp} key={activeComp.id} />
          </AnimatePresence>
        </div>
      </main>

      {/* ── Modal Overlay ── */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-xl"
              onClick={() => setModalOpen(false)}
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: 'spring', stiffness: 350, damping: 28 }}
              className="relative w-full max-w-md bg-white dark:bg-zinc-900 rounded-[2.5rem] p-10 border border-border/40 shadow-[0_32px_120px_-20px_rgba(0,0,0,0.5)]"
            >
              <button onClick={() => setModalOpen(false)} className="absolute top-6 right-6 w-10 h-10 rounded-full bg-muted/50 hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-all">
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-inner"><Zap className="w-6 h-6" /></div>
                <h3 className="text-2xl font-black tracking-tighter">Ready to Deploy?</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-base mb-8">Push NoorUI Essentials v2026 to the production cloud. This will bundle all interactive premium components.</p>
              <div className="flex flex-col sm:flex-row justify-end gap-3">
                <button onClick={() => setModalOpen(false)} className="nui-btn nui-btn-ghost rounded-2xl px-6 py-3 font-bold">Maybe later</button>
                <button onClick={() => setModalOpen(false)} className="nui-btn nui-btn-primary rounded-2xl px-8 py-3 font-black shadow-xl shadow-primary/30">Confirm</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { ComponentShowcase };
export default ComponentShowcase;
