import { Terminal, Github, Package as PackageIcon, Shield, Zap, Palette, Globe, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Documentation = () => {
    return (
        <div className="min-h-screen bg-background text-foreground scroll-smooth">
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
                            <ChevronLeft className="w-4 h-4" /> Back to Home
                        </Link>
                        <a href="https://github.com/supto707/noorui-bangladesh-ui.git" target="_blank" rel="noreferrer" className="nui-btn nui-btn-outline nui-btn-primary nui-btn-sm font-bold rounded-xl border-2 hover:scale-105 transition-transform flex items-center">
                            <Github className="w-4 h-4 mr-2" /> GitHub
                        </a>
                    </div>
                </div>
            </nav>

            {/* Header */}
            <section className="py-20 bg-primary text-primary-content relative overflow-hidden">
                <div className="rui-pattern absolute inset-0 opacity-20" />
                <div className="container max-w-6xl mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-black mb-4">Documentation</h1>
                        <p className="text-primary-content/80 text-lg max-w-2xl font-medium"> Everything you need to get started with NoorUI in your project.</p>
                    </motion.div>
                </div>
            </section>

            <main className="container max-w-5xl mx-auto px-4 py-20 pb-40">
                <div className="mb-12">
                    <h1 className="text-4xl font-extrabold mb-2 tracking-tight">Installation & Usage</h1>
                    <p className="text-muted-foreground text-lg">Full-featured, framework-agnostic UI kit for Bangladeshi developers.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                    {/* Installation Card */}
                    <div className="bg-muted/30 border border-border/50 rounded-3xl p-8 shadow-sm">
                        <h2 className="font-extrabold text-xl mb-6">Installation</h2>

                        <div className="bg-[#EAECEB] dark:bg-[#1A1D1C] text-sm text-[#4E5B53] dark:text-[#A0AFAA] font-mono p-4 rounded-xl mb-6 flex justify-between items-center group relative cursor-pointer" onClick={() => navigator.clipboard.writeText('npm i @supto_noorui/noorui-bangladesh-ui')}>
                            <code>$ npm i @supto_noorui/noorui-bangladesh-ui</code>
                            <PackageIcon className="w-4 h-4 opacity-30 group-hover:opacity-100 transition-opacity" />
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-bold text-sm uppercase opacity-50 tracking-wider">Configure Tailwind</h3>
                            <div className="bg-[#EAECEB] dark:bg-[#1A1D1C] p-6 rounded-2xl relative">
                                <pre className="text-sm font-mono leading-loose text-[#4E5B53] dark:text-[#A0AFAA]">
                                    <code>
                                        <span className="opacity-50">// tailwind.config.ts</span><br />
                                        <span className="font-bold text-foreground">import</span> noorui <span className="text-primary">from</span> <span className="text-secondary">"@supto_noorui/noorui-bangladesh-ui"</span>;<br /><br />
                                        <span className="font-bold text-foreground">export default</span> {'{'}<br />
                                        {'  '}plugins: [<br />
                                        {'    '}noorui({'{'}<br />
                                        {'      '}themes: [<span className="text-secondary">'islamic-green'</span>, <span className="text-secondary">'ramadan'</span>],<br />
                                        {'      '}prefix: <span className="text-secondary">'nui-'</span>,<br />
                                        {'    '}{'}),'}<br />
                                        {'  '}],<br />
                                        {'}'}
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </div>

                    {/* Bundle Size Card */}
                    <div className="bg-muted/30 border border-border/50 rounded-3xl p-8 shadow-sm flex flex-col justify-between">
                        <div>
                            <h2 className="font-extrabold text-xl mb-8">Performance First</h2>

                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between text-sm font-bold mb-2">
                                        <span>Full library</span>
                                        <span className="text-primary tracking-tight">~42KB</span>
                                    </div>
                                    <div className="h-3 bg-border/40 rounded-full overflow-hidden">
                                        <div className="h-full bg-primary rounded-full w-[85%]" />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between text-sm font-bold mb-2">
                                        <span>CSS only</span>
                                        <span className="text-primary tracking-tight">~35KB</span>
                                    </div>
                                    <div className="h-3 bg-border/40 rounded-full overflow-hidden">
                                        <div className="h-full bg-primary rounded-full w-[70%]" />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between text-sm font-bold mb-2">
                                        <span>1 theme + 5 components</span>
                                        <span className="text-primary tracking-tight">~8KB</span>
                                    </div>
                                    <div className="h-3 bg-border/40 rounded-full overflow-hidden">
                                        <div className="h-full bg-primary rounded-full w-[15%]" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className="text-xs font-bold text-muted-foreground opacity-60 mt-8 leading-relaxed">
                            All sizes gzipped. Fully tree-shakable — import only what you need. NoorUI is designed for fast-loading Islamic apps and Bangladeshi web projects.
                        </p>
                    </div>
                </div>

                {/* Integration Row */}
                <div className="mb-20">
                    <h2 className="text-2xl font-black mb-8">Framework Integration</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { name: 'React', status: 'First-class' },
                            { name: 'Next.js', status: 'Optimized' },
                            { name: 'Vue', status: 'Full Support' },
                            { name: 'Vanilla JS', status: 'Ready' }
                        ].map((framework) => (
                            <div key={framework.name} className="bg-background border border-border/60 hover:border-primary/30 transition-shadow rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md group">
                                <h3 className="font-extrabold text-[15px] text-primary group-hover:scale-110 transition-transform">{framework.name}</h3>
                                <span className="text-xs text-muted-foreground font-semibold mt-1 opacity-70">{framework.status}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Features Section */}
                <div className="bg-primary/5 rounded-[40px] p-10 md:p-16 border border-primary/10">
                    <h2 className="text-3xl font-black mb-12 text-center">Core Pillars of NoorUI</h2>
                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="space-y-4">
                            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                <Globe className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold">RTL First</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">Full support for Arabic, Urdu, and Persian layouts out of the box using CSS logical properties.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                <Palette className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold">12 Semantic Themes</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">Curated palettes like <code>islamic-green</code>, <code>ramadan</code>, and city-themed flavors for Dhaka, Rangpur, and more.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold">Zero Dependencies</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">Pure PostCSS plugin. No heavy JS runtimes, just clean, high-performance utility classes.</p>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="py-16 bg-card border-t border-border mt-20">
                <div className="container max-w-6xl mx-auto px-4 text-center">
                    <p className="text-sm font-bold opacity-40 uppercase tracking-widest">© 2026 NoorUI Framework. Built for the Ummah & Bangladesh.</p>
                    <div className="mt-4 flex justify-center gap-6 opacity-30">
                        <a href="#" className="hover:opacity-100 transition-opacity"><Github className="w-5 h-5" /></a>
                        <a href="#" className="hover:opacity-100 transition-opacity"><Globe className="w-5 h-5" /></a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Documentation;
