import { Terminal, Github, Package as PackageIcon, Shield, Zap, Palette, Globe, ChevronLeft, Copy, Check, Info, Rocket, Layers, Code2, Cpu } from "lucide-react";
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
                    <div className="flex items-center gap-4">
                        <Link to="/" className="text-sm font-semibold hover:text-primary flex items-center gap-1 transition-colors">
                            <ChevronLeft className="w-4 h-4" /> Back
                        </Link>
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
                        <span className="bg-white/10 text-white/90 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/10 mb-6 inline-block">Official Guide</span>
                        <h1 className="text-4xl md:text-7xl font-black mb-4">Get Started</h1>
                        <p className="text-primary-content/80 text-xl max-w-2xl font-medium leading-relaxed">
                            Step-by-step instructions to integrate NoorUI into your favorite framework.
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
                                        <h2 className="text-2xl font-black">Install Package</h2>
                                    </div>
                                    <p className="text-muted-foreground">Add the core NoorUI package to your project dependencies.</p>
                                    {renderCodeBlock("Terminal", "npm install @supto_noorui/noorui-bangladesh-ui")}
                                </div>

                                {/* Configuration Step */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black">2</div>
                                        <h2 className="text-2xl font-black">Configure Tailwind</h2>
                                    </div>
                                    <p className="text-muted-foreground">Register NoorUI as a plugin in your Tailwind configuration file.</p>
                                    {activeFramework === "vite" ? (
                                        renderCodeBlock(
                                            activeLang === "ts" ? "tailwind.config.ts" : "tailwind.config.js",
                                            activeLang === "ts" ? `import noorui from "@supto_noorui/noorui-bangladesh-ui";\n\nexport default {\n  content: ["./src/**/*.{js,ts,jsx,tsx}"],\n  plugins: [\n    noorui({\n      themes: ["islamic-green", "ramadan", "dark"],\n      prefix: "nui-",\n    }),\n  ],\n};` : `const noorui = require("@supto_noorui/noorui-bangladesh-ui");\n\nmodule.exports = {\n  content: ["./src/**/*.{js,ts,jsx,tsx}"],\n  plugins: [\n    noorui({\n      themes: ["islamic-green", "ramadan", "dark"],\n      prefix: "nui-",\n    }),\n  ],\n};`,
                                            activeLang === "ts" ? "ESM" : "CommonJS"
                                        )
                                    ) : activeFramework === "next" ? (
                                        renderCodeBlock(
                                            activeLang === "ts" ? "tailwind.config.ts" : "tailwind.config.js",
                                            activeLang === "ts" ? `import type { Config } from "tailwindcss";\nimport noorui from "@supto_noorui/noorui-bangladesh-ui";\n\nconst config: Config = {\n  content: [\n    "./pages/**/*.{js,ts,jsx,tsx,mdx}",\n    "./components/**/*.{js,ts,jsx,tsx,mdx}",\n    "./app/**/*.{js,ts,jsx,tsx,mdx}",\n  ],\n  plugins: [noorui],\n};\nexport default config;` : `/** @type {import('tailwindcss').Config} */\nconst noorui = require("@supto_noorui/noorui-bangladesh-ui");\n\nmodule.exports = {\n  content: [\n    "./pages/**/*.{js,ts,jsx,tsx,mdx}",\n    "./components/**/*.{js,ts,jsx,tsx,mdx}",\n    "./app/**/*.{js,ts,jsx,tsx,mdx}",\n  ],\n  plugins: [noorui],\n};`
                                        )
                                    ) : (
                                        <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 rounded-2xl p-6 flex gap-4">
                                            <Info className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                                            <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed font-medium">
                                                For vanilla JS without Tailwind CLI, you can include our pre-compiled CSS or use the UMD version.
                                            </p>
                                        </div>
                                    )}
                                </div>

                                {/* Usage Step */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black">3</div>
                                        <h2 className="text-2xl font-black">Start Building</h2>
                                    </div>
                                    <p className="text-muted-foreground">Use semantic classes to style your components instantly.</p>
                                    {renderCodeBlock(
                                        "HTML / JSX",
                                        `<button className="nui-btn nui-btn-primary">\n  Bismillah — Get Started\n</button>\n\n<div className="nui-card">\n  <div className="nui-card-body">\n    <h2>Assalamu Alaikum</h2>\n    <p>Welcome to NoorUI</p>\n  </div>\n</div>`
                                    )}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Sidebar Stats / Info */}
                    <div className="space-y-8">
                        <div className="bg-muted/30 border border-border/50 rounded-[32px] p-8">
                            <h3 className="text-sm font-black uppercase tracking-widest opacity-40 mb-6">Package Stats</h3>
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-bold flex items-center gap-2">
                                        <Cpu className="w-4 h-4 text-primary" /> Size
                                    </span>
                                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-md font-black">~42KB</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-bold flex items-center gap-2">
                                        <Code2 className="w-4 h-4 text-primary" /> Deps
                                    </span>
                                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-md font-black">Zero</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-bold flex items-center gap-2">
                                        <Globe className="w-4 h-4 text-primary" /> RTL
                                    </span>
                                    <span className="text-xs bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded-md font-black">Native</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-primary/5 border border-primary/10 rounded-[32px] p-8">
                            <h3 className="text-lg font-black mb-4">Need Help?</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                                Join our community of Bangladeshi developers building modern apps.
                            </p>
                            <a href="https://github.com/supto707/noorui-bangladesh-ui.git" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primary text-primary-content font-bold hover:scale-[1.02] transition-transform">
                                <Github className="w-4 h-4" /> Open Issue
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
