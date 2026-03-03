import { Terminal, Github, Package as PackageIcon, Shield, Zap, Palette, Globe, ChevronLeft, Copy, Check, Info, Rocket, Layers, Code2, Cpu, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Documentation = () => {
    const [activeFramework, setActiveFramework] = useState("vite");
    const [activeLang, setActiveLang] = useState("ts");
    const [copied, setCopied] = useState<string | null>(null);

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(text);
        setTimeout(() => setCopied(null), 2000);
    };

    const frameworks = [
        { id: "vite", name: "Vite + React", icon: <Rocket className="w-4 h-4" /> },
        { id: "next", name: "Next.js", icon: <Zap className="w-4 h-4" /> },
        { id: "vanilla", name: "Vanilla / UMD", icon: <Layers className="w-4 h-4" /> },
    ];

    const renderCodeBlock = (title: string, code: string, langHint: string = "") => (
        <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-widest opacity-40">{title}</span>
                {langHint && <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-bold">{langHint}</span>}
            </div>
            <div className="bg-[#EAECEB] dark:bg-[#1A1D1C] p-6 rounded-2xl relative group border border-primary/5">
                <pre className="text-sm font-mono leading-loose text-[#4E5B53] dark:text-[#A0AFAA] overflow-x-auto">
                    <code>{code}</code>
                </pre>
                <button
                    onClick={() => handleCopy(code)}
                    className="absolute top-4 right-4 p-2 rounded-lg bg-background/50 hover:bg-background transition-colors border border-border/50 opacity-0 group-hover:opacity-100"
                >
                    {copied === code ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-background text-foreground scroll-smooth pb-20">
            {/* Navbar */}
            <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
                <div className="container max-w-6xl mx-auto flex items-center justify-between py-3 px-4">
                    <Link to="/" className="flex items-center gap-2 cursor-pointer">
                        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                            <span className="text-primary-content font-bold text-sm">N</span>
                        </div>
                        <span className="font-display font-bold text-lg">NoorUI</span>
                    </Link>
                    <div className="flex items-center gap-3">
                        <Link to="/" className="text-sm font-semibold hover:text-primary flex items-center gap-1 transition-colors mr-2">
                            <ChevronLeft className="w-4 h-4" /> Back
                        </Link>
                        <a href="https://www.npmjs.com/package/@supto_noorui/noorui-bangladesh-ui" target="_blank" rel="noreferrer" className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#CB3837]/10 text-[#CB3837] text-xs font-bold border border-[#CB3837]/20 hover:bg-[#CB3837]/20 transition-all">
                            <PackageIcon className="w-3.5 h-3.5" /> npm <ExternalLink className="w-3 h-3 opacity-50" />
                        </a>
                        <a href="https://github.com/supto707/noorui-bangladesh-ui.git" target="_blank" rel="noreferrer" className="nui-btn nui-btn-outline nui-btn-primary nui-btn-sm font-bold rounded-xl border-2 hover:scale-105 transition-transform flex items-center">
                            <Github className="w-4 h-4 mr-2" /> GitHub
                        </a>
                    </div>
                </div>
            </nav>

            {/* Hero Header */}
            <section className="py-24 bg-primary text-primary-content relative overflow-hidden">
                <div className="rui-pattern absolute inset-0 opacity-20" />
                <div className="container max-w-6xl mx-auto px-4 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className="bg-white/10 text-white/90 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/10 mb-6 inline-block">Official Documentation</span>
                        <h1 className="text-4xl md:text-7xl font-black mb-4">Installation</h1>
                        <p className="text-primary-content/80 text-xl max-w-2xl font-medium leading-relaxed">
                            Integrate NoorUI into your workflow with modern Tailwind v4 practices.
                        </p>
                    </motion.div>
                </div>
            </section>

            <main className="container max-w-6xl mx-auto px-4 mt-20">
                <div className="grid lg:grid-cols-[1fr_300px] gap-12">
                    {/* Main Content */}
                    <div>
                        <div className="flex flex-wrap items-center gap-2 mb-12 bg-muted/30 p-2 rounded-2xl w-fit">
                            {frameworks.map((fw) => (
                                <button
                                    key={fw.id}
                                    onClick={() => setActiveFramework(fw.id)}
                                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${activeFramework === fw.id ? "bg-primary text-primary-content shadow-lg shadow-primary/20 scale-105" : "hover:bg-muted"}`}
                                >
                                    {fw.icon} {fw.name}
                                </button>
                            ))}
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`${activeFramework}-${activeLang}`}
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-12"
                            >
                                {/* Language Toggle if applicable */}
                                {activeFramework !== "vanilla" && (
                                    <div className="flex items-center gap-4 mb-8">
                                        <span className="text-sm font-bold opacity-40 uppercase tracking-widest">Language:</span>
                                        <div className="flex bg-muted rounded-lg p-1">
                                            <button onClick={() => setActiveLang('ts')} className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${activeLang === 'ts' ? "bg-background shadow-sm text-primary" : "text-muted-foreground hover:text-foreground"}`}>TypeScript</button>
                                            <button onClick={() => setActiveLang('js')} className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${activeLang === 'js' ? "bg-background shadow-sm text-primary" : "text-muted-foreground hover:text-foreground"}`}>JavaScript</button>
                                        </div>
                                    </div>
                                )}

                                {/* Installation Step */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black">1</div>
                                        <h2 className="text-2xl font-black">Install NoorUI & Tailwind v4</h2>
                                    </div>
                                    <p className="text-muted-foreground">Tailwind v4 is highly optimized for Vite. We'll install the core engine and the Vite plugin.</p>
                                    {renderCodeBlock("Terminal", "npm install @supto_noorui/noorui-bangladesh-ui tailwindcss @tailwindcss/vite")}
                                </div>

                                {/* Configuration Step */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black">2</div>
                                        <h2 className="text-2xl font-black">Configure Vite Plugin</h2>
                                    </div>
                                    <p className="text-muted-foreground">In Tailwind v4, you no longer need a separate <code>tailwind.config.js</code>. Instead, simply add the plugin to your Vite config.</p>
                                    {renderCodeBlock(
                                        activeFramework === "vite" ? (activeLang === "ts" ? "vite.config.ts" : "vite.config.js") : (activeLang === "ts" ? "next.config.ts" : "next.config.js"),
                                        activeFramework === "vite" ? `import { defineConfig } from 'vite'\nimport tailwindcss from '@tailwindcss/vite'\n\nexport default defineConfig({\n  plugins: [\n    tailwindcss(),\n  ],\n})` : `import tailwindcss from '@tailwindcss/vite'\n\n/** @type {import('next').NextConfig} */\nconst nextConfig = {\n  // Your config\n}\n\n// Note: For Next.js v15+ ensure you use the CSS-first approach\nexport default nextConfig`,
                                        activeLang === "ts" ? "ESM" : "CommonJS"
                                    )}
                                </div>

                                {/* CSS Step */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black">3</div>
                                        <h2 className="text-2xl font-black">Import & Register Plugin</h2>
                                    </div>
                                    <p className="text-muted-foreground">Import Tailwind into your main CSS file and register NoorUI using the <code>@plugin</code> directive.</p>
                                    {renderCodeBlock(
                                        "src/index.css",
                                        `@import "tailwindcss";\n\n@plugin "@supto_noorui/noorui-bangladesh-ui" {\n  themes: islamic-green, ramadan;\n  prefix: nui-;\n}`
                                    )}
                                </div>

                                {/* Usage Step */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black">4</div>
                                        <h2 className="text-2xl font-black">Bismillah!</h2>
                                    </div>
                                    <p className="text-muted-foreground">You are ready. Start using NoorUI classes in your components.</p>
                                    {renderCodeBlock(
                                        "App.tsx / Page.tsx",
                                        `<button className="nui-btn nui-btn-primary">\n  Assalamu Alaikum\n</button>\n\n<div className="nui-card">\n  <div className="nui-card-body">\n    <h2>Modern UI</h2>\n    <p>Powered by Tailwind v4</p>\n  </div>\n</div>`
                                    )}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Sidebar Stats / Info */}
                    <div className="space-y-8">
                        <div className="bg-muted/30 border border-border/50 rounded-[32px] p-8">
                            <h3 className="text-sm font-black uppercase tracking-widest opacity-40 mb-6">Package Details</h3>
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-bold flex items-center gap-2">
                                        <Cpu className="w-4 h-4 text-primary" /> Version
                                    </span>
                                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-md font-black">v1.0.2</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-bold flex items-center gap-2">
                                        <Zap className="w-4 h-4 text-primary" /> Build
                                    </span>
                                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-md font-black">Vite v6+</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-bold flex items-center gap-2">
                                        <Shield className="w-4 h-4 text-primary" /> Engine
                                    </span>
                                    <span className="text-xs bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded-md font-black">TW v4</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-primary/5 border border-primary/10 rounded-[32px] p-8">
                            <h3 className="text-lg font-black mb-4">View on NPM</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                                Check the package details, download stats, and more on the official NPM registry.
                            </p>
                            <a href="https://www.npmjs.com/package/@supto_noorui/noorui-bangladesh-ui" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-[#CB3837] text-white font-bold hover:scale-[1.02] transition-transform shadow-lg shadow-[#CB3837]/20">
                                <PackageIcon className="w-4 h-4" /> Go to NPM
                            </a>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="mt-40 py-20 bg-card border-t border-border">
                <div className="container max-w-6xl mx-auto px-4 text-center">
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                            <span className="text-primary-content font-bold text-sm">N</span>
                        </div>
                        <span className="font-display font-black text-xl">NoorUI</span>
                    </div>
                    <p className="text-sm font-bold opacity-40 uppercase tracking-widest leading-loose">
                        Designed for the Next Generation of Apps in Bangladesh.<br />
                        © 2026 NoorUI Framework. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Documentation;
