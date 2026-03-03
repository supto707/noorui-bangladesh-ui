import React from 'react';
import {
    Search, Menu, User, Bell, ChevronRight, ChevronDown,
    Mail, Lock, Eye, Check, X, Home, Settings, LogOut, Info,
    AlertCircle, ArrowRight, Share2, MoreHorizontal, Cloud,
    MessageSquare, Heart, Star, Zap, Copy, Shield, Package
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface ComponentDef {
    id: string;
    title: string;
    desc: string;
    category: string;
    preview: React.ReactNode;
    jsx: string;
    html: string;
}

/* helper to keep demos short */
const Btn = ({ c, children }: { c?: string; children: React.ReactNode }) => (
    <button className={`nui-btn ${c || ''}`}>{children}</button>
);

export const categories = [
    { name: 'Actions', icon: '⚡' },
    { name: 'Navigation', icon: '🧭' },
    { name: 'Data Input', icon: '✏️' },
    { name: 'Data Display', icon: '📊' },
    { name: 'Feedback', icon: '💬' },
];

const RangeDemo = () => {
    const [val1, setVal1] = React.useState(75);
    const [val2, setVal2] = React.useState(40);
    return (
        <div className="w-full max-w-md space-y-8">
            <div className="nui-form-control">
                <label className="nui-label flex justify-between items-center mb-2">
                    <span className="nui-label-text font-bold text-sm">System Volume</span>
                    <span className="nui-badge nui-badge-primary font-mono">{val1}%</span>
                </label>
                <input type="range" className="nui-range" value={val1} onChange={(e) => setVal1(parseInt(e.target.value))} />
            </div>
            <div className="nui-form-control">
                <label className="nui-label flex justify-between items-center mb-2">
                    <span className="nui-label-text font-bold text-sm">Screen Brightness</span>
                    <span className="nui-badge nui-badge-primary font-mono">{val2}%</span>
                </label>
                <input type="range" className="nui-range" value={val2} onChange={(e) => setVal2(parseInt(e.target.value))} />
            </div>
        </div>
    );
};

const TabsDemo = () => {
    const [activeTab, setActiveTab] = React.useState(0);
    const tabs = [
        { id: 0, label: 'Overview', icon: <Heart className="w-4 h-4" />, content: 'Overview panel — project stats, recent activity, and key metrics.' },
        { id: 1, label: 'Config', icon: <Settings className="w-4 h-4" />, content: 'Configuration and system settings for the active workspace.' },
        { id: 2, label: 'Teams', icon: <User className="w-4 h-4" />, content: 'Manage team members and role-based access control.' },
    ];

    return (
        <div className="w-full max-w-md mx-auto space-y-8">
            <div className="nui-tabs bg-muted/30 p-2 rounded-[1.25rem] border border-border/40 flex items-center relative overflow-hidden backdrop-blur-sm">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`nui-tab relative flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest z-10 transition-none ${activeTab === tab.id ? 'text-white' : 'text-muted-foreground hover:text-foreground'
                            }`}
                    >
                        <span className="flex items-center gap-2 relative z-20 pointer-events-none">
                            {tab.icon} {tab.label}
                        </span>
                        {activeTab === tab.id && (
                            <motion.div
                                layoutId="active-pill"
                                initial={false}
                                className="absolute inset-0 bg-primary shadow-xl shadow-primary/30 z-0 rounded-2xl"
                                transition={{ type: 'spring', stiffness: 600, damping: 38 }}
                            />
                        )}
                    </button>
                ))}
            </div>
            <div className="relative min-h-[120px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 15, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 1.02 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="bg-muted/20 border border-border/20 rounded-[2rem] p-10 text-base text-muted-foreground/80 leading-relaxed text-center italic shadow-inner"
                    >
                        {tabs[activeTab].content}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

const DrawerDemo = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div className="w-full max-w-lg mx-auto h-[450px] border border-border/40 rounded-[3rem] bg-muted/5 overflow-hidden relative group shadow-2xl shadow-black/5">
            {/* Background/Mock Content */}
            <div className="absolute inset-0 p-10 space-y-8 opacity-40">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-muted/40 rounded-2xl" />
                    <div className="space-y-2 flex-1">
                        <div className="h-4 w-1/3 bg-muted/40 rounded-full" />
                        <div className="h-3 w-1/2 bg-muted/20 rounded-full" />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <div className="h-32 bg-muted/20 rounded-[2rem] border border-border/10" />
                    <div className="h-32 bg-muted/20 rounded-[2rem] border border-border/10" />
                </div>
                <div className="h-40 bg-muted/20 rounded-[2.5rem] border border-border/10" />
            </div>

            <div className="absolute inset-0 flex items-center justify-center z-10">
                <button
                    onClick={() => setIsOpen(true)}
                    className="nui-btn nui-btn-primary rounded-2xl shadow-xl shadow-primary/30 px-8 py-4 text-sm font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all"
                >
                    <Menu className="w-5 h-5 mr-3" /> Preview Sidebar
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-md z-20 cursor-pointer"
                        />
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'spring', stiffness: 400, damping: 40 }}
                            className="absolute top-0 bottom-0 left-0 w-72 bg-white dark:bg-zinc-900 border-r border-border/30 z-30 p-10 shadow-2xl flex flex-col"
                        >
                            <div className="flex items-center justify-between mb-12">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-black">N</div>
                                    <div className="font-black text-2xl tracking-tighter">NoorUI</div>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="w-10 h-10 rounded-xl hover:bg-muted flex items-center justify-center transition-all hover:rotate-90 active:scale-90"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <nav className="space-y-2 flex-1">
                                {[
                                    { label: 'Dashboard', icon: <Home className="w-4 h-4" /> },
                                    { label: 'Analytics', icon: <Star className="w-4 h-4" /> },
                                    { label: 'Settings', icon: <Settings className="w-4 h-4" /> },
                                    { label: 'Projects', icon: <Package className="w-4 h-4" /> }
                                ].map((item, i) => (
                                    <div
                                        key={item.label}
                                        className={`px-5 py-4 rounded-2xl text-sm font-bold flex items-center gap-4 transition-all cursor-pointer ${i === 0 ? 'bg-primary text-white shadow-xl shadow-primary/20' : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'}`}
                                    >
                                        {item.icon} {item.label}
                                    </div>
                                ))}
                            </nav>

                            <div className="mt-auto pt-8">
                                <div className="p-5 bg-muted/30 rounded-3xl border border-border/10">
                                    <div className="flex justify-between items-end mb-3">
                                        <div className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">Storage Usage</div>
                                        <div className="text-[10px] font-black text-primary italic">64%</div>
                                    </div>
                                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: '64%' }}
                                            transition={{ delay: 0.5, duration: 1 }}
                                            className="h-full bg-primary"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export const components: ComponentDef[] = [
    /* ═══ ACTIONS ═══ */
    {
        id: 'button', title: 'Button', category: 'Actions',
        desc: 'The core interaction element with variants: Primary, Secondary, Ghost, Outline, and Loading states.',
        preview: (
            <div className="flex flex-wrap items-center justify-center gap-4">
                <button className="nui-btn nui-btn-primary shadow-lg shadow-primary/20">Primary</button>
                <button className="nui-btn nui-btn-secondary">Secondary</button>
                <button className="nui-btn nui-btn-accent">Accent</button>
                <button className="nui-btn nui-btn-outline">Outline</button>
                <button className="nui-btn nui-btn-ghost">Ghost</button>
                <button className="nui-btn nui-btn-link">Link</button>
                <button className="nui-btn nui-btn-primary nui-btn-loading">Loading</button>
                <button className="nui-btn nui-btn-disabled" disabled>Disabled</button>
                <button className="nui-btn nui-btn-primary nui-btn-sm">Small</button>
                <button className="nui-btn nui-btn-primary nui-btn-lg">Large</button>
                <button className="nui-btn nui-btn-primary nui-btn-circle"><Heart className="w-5 h-5" /></button>
                <button className="nui-btn nui-btn-primary nui-btn-square"><Star className="w-5 h-5" /></button>
            </div>
        ),
        jsx: `<button className="nui-btn nui-btn-primary">Primary</button>
<button className="nui-btn nui-btn-secondary">Secondary</button>
<button className="nui-btn nui-btn-outline">Outline</button>
<button className="nui-btn nui-btn-ghost">Ghost</button>
<button className="nui-btn nui-btn-link">Link</button>
<button className="nui-btn nui-btn-primary nui-btn-loading">Loading</button>
<button className="nui-btn nui-btn-disabled" disabled>Disabled</button>
<button className="nui-btn nui-btn-primary nui-btn-sm">Small</button>
<button className="nui-btn nui-btn-primary nui-btn-lg">Large</button>
<button className="nui-btn nui-btn-primary nui-btn-circle">
  <HeartIcon />
</button>`,
        html: `<button class="nui-btn nui-btn-primary">Primary</button>
<button class="nui-btn nui-btn-secondary">Secondary</button>
<button class="nui-btn nui-btn-outline">Outline</button>
<button class="nui-btn nui-btn-ghost">Ghost</button>
<button class="nui-btn nui-btn-primary nui-btn-loading">Loading</button>
<button class="nui-btn nui-btn-disabled" disabled>Disabled</button>`,
    },
    {
        id: 'dropdown', title: 'Dropdown Menu', category: 'Actions',
        desc: 'A contextual menu that appears on hover or click, used for sub-navigation or action menus.',
        preview: (
            <div className="flex gap-6 items-start justify-center">
                <div className="nui-dropdown">
                    <button className="nui-btn nui-btn-primary gap-2"><Share2 className="w-4 h-4" /> Share</button>
                    <div className="nui-dropdown-content w-56 p-2 space-y-1 mt-2 rounded-xl">
                        <div className="p-2.5 hover:bg-muted/50 rounded-lg cursor-pointer flex items-center gap-3 text-sm font-semibold"><Copy className="w-4 h-4 opacity-40" /> Copy Link</div>
                        <div className="p-2.5 hover:bg-muted/50 rounded-lg cursor-pointer flex items-center gap-3 text-sm font-semibold text-primary"><Mail className="w-4 h-4 opacity-60" /> Email</div>
                        <div className="p-2.5 hover:bg-muted/50 rounded-lg cursor-pointer flex items-center gap-3 text-sm font-semibold"><MessageSquare className="w-4 h-4 opacity-40" /> Message</div>
                    </div>
                </div>
            </div>
        ),
        jsx: `<div className="nui-dropdown">
  <button className="nui-btn nui-btn-primary">Share</button>
  <div className="nui-dropdown-content">
    <div>Copy Link</div>
    <div>Email</div>
  </div>
</div>`,
        html: `<div class="nui-dropdown">
  <button class="nui-btn nui-btn-primary">Share</button>
  <div class="nui-dropdown-content">
    <div>Copy Link</div>
    <div>Email</div>
  </div>
</div>`,
    },
    {
        id: 'modal', title: 'Modal', category: 'Actions',
        desc: 'A center-screen dialog for critical actions, confirmations, or deep-dive content.',
        preview: (
            <div className="flex flex-col items-center justify-center gap-6 w-full">
                <p className="text-sm text-muted-foreground text-center max-w-xs">Click the button below to trigger an animated modal dialog.</p>
                <button className="nui-btn nui-btn-primary nui-btn-lg gap-2 rounded-xl shadow-lg shadow-primary/20 px-8" data-modal-trigger="true">
                    <Zap className="w-5 h-5" /> Open Modal
                </button>
            </div>
        ),
        jsx: `<div className="nui-modal nui-modal-open">
  <div className="nui-modal-backdrop" />
  <div className="nui-modal-box">
    <h3>Confirm Action?</h3>
    <p>This cannot be undone.</p>
    <div className="nui-modal-action">
      <button className="nui-btn nui-btn-ghost">Cancel</button>
      <button className="nui-btn nui-btn-primary">Confirm</button>
    </div>
  </div>
</div>`,
        html: `<div class="nui-modal nui-modal-open">
  <div class="nui-modal-backdrop"></div>
  <div class="nui-modal-box">
    <h3>Confirm Action?</h3>
    <p>This cannot be undone.</p>
    <div class="nui-modal-action">
      <button class="nui-btn nui-btn-ghost">Cancel</button>
      <button class="nui-btn nui-btn-primary">Confirm</button>
    </div>
  </div>
</div>`,
    },

    /* ═══ NAVIGATION ═══ */
    {
        id: 'navbar', title: 'Navbar', category: 'Navigation',
        desc: 'The main horizontal header with branding, navigation links, and action items.',
        preview: (
            <div className="w-full">
                <div className="nui-navbar bg-muted/50 rounded-2xl border border-border/40 px-6 shadow-sm">
                    <div className="nui-navbar-start">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center text-white font-black text-sm shadow-lg shadow-primary/20">N</div>
                            <span className="font-black text-lg tracking-tighter">NoorUI</span>
                        </div>
                    </div>
                    <div className="nui-navbar-center hidden md:flex items-center gap-8 text-sm font-semibold text-muted-foreground">
                        <a href="#" className="hover:text-primary transition-colors">Products</a>
                        <a href="#" className="hover:text-primary transition-colors">Features</a>
                        <a href="#" className="hover:text-primary transition-colors">Pricing</a>
                    </div>
                    <div className="nui-navbar-end gap-3">
                        <div className="nui-btn nui-btn-ghost nui-btn-circle"><Search className="w-4 h-4" /></div>
                        <div className="nui-btn nui-btn-primary px-5 rounded-xl text-sm shadow-lg shadow-primary/20">Launch App</div>
                    </div>
                </div>
            </div>
        ),
        jsx: `<nav className="nui-navbar">
  <div className="nui-navbar-start">
    <span>NoorUI</span>
  </div>
  <div className="nui-navbar-center">
    <a href="#">Products</a>
    <a href="#">Features</a>
  </div>
  <div className="nui-navbar-end">
    <button className="nui-btn nui-btn-primary">Launch</button>
  </div>
</nav>`,
        html: `<nav class="nui-navbar">
  <div class="nui-navbar-start"><span>NoorUI</span></div>
  <div class="nui-navbar-center">
    <a href="#">Products</a>
    <a href="#">Features</a>
  </div>
  <div class="nui-navbar-end">
    <button class="nui-btn nui-btn-primary">Launch</button>
  </div>
</nav>`,
    },
    {
        id: 'drawer', title: 'Drawer (Sidebar)', category: 'Navigation',
        desc: 'A collapsible vertical menu, essential for mobile and dashboard layouts.',
        preview: <DrawerDemo />,
        jsx: `<div className="nui-drawer nui-drawer-open">
  <div className="nui-drawer-overlay" onClick={close} />
  <div className="nui-drawer-side">
    <button onClick={close}><X /></button>
    <nav>
      <div className="active">Workspace</div>
      <div>Discussions</div>
      <div>Assets</div>
    </nav>
  </div>
</div>`,
        html: `<div class="nui-drawer nui-drawer-open">
  <div class="nui-drawer-overlay"></div>
  <div class="nui-drawer-side">
    <button>&times;</button>
    <nav>
      <div>Workspace</div>
      <div>Discussions</div>
    </nav>
  </div>
</div>`,
    },
    {
        id: 'tabs', title: 'Tabs', category: 'Navigation',
        desc: 'Switch between related content views with smooth spring animations.',
        preview: <TabsDemo />,
        jsx: `<div className="nui-tabs bg-muted/40 p-1.5 rounded-2xl border border-border/40 flex">
  <button className="nui-tab nui-tab-active flex-1 py-2.5 rounded-xl bg-primary text-white shadow-lg">
    Overview
  </button>
  <button className="nui-tab flex-1 py-2.5 text-muted-foreground">
    Config
  </button>
  <button className="nui-tab flex-1 py-2.5 text-muted-foreground">
    Teams
  </button>
</div>`,
        html: `<div class="nui-tabs bg-muted/40 p-1.5 rounded-2xl border border-border/40 flex">
  <div class="nui-tab nui-tab-active flex-1 py-2.5 rounded-xl bg-primary text-white shadow-lg text-center">
    Overview
  </div>
  <div class="nui-tab flex-1 py-2.5 text-muted-foreground text-center">
    Config
  </div>
</div>`,
    },
    {
        id: 'pagination', title: 'Pagination', category: 'Navigation',
        desc: 'Navigation controls for moving through multi-page lists or datasets.',
        preview: (
            <div className="nui-pagination">
                <div className="nui-pagination-item opacity-40"><ArrowRight className="w-4 h-4 rotate-180" /></div>
                <div className="nui-pagination-item nui-active">1</div>
                <div className="nui-pagination-item">2</div>
                <div className="nui-pagination-item">3</div>
                <div className="nui-pagination-item border-none bg-transparent text-muted-foreground">…</div>
                <div className="nui-pagination-item">10</div>
                <div className="nui-pagination-item text-primary"><ArrowRight className="w-4 h-4" /></div>
            </div>
        ),
        jsx: `<div className="nui-pagination">
  <div className="nui-pagination-item">«</div>
  <div className="nui-pagination-item nui-active">1</div>
  <div className="nui-pagination-item">2</div>
  <div className="nui-pagination-item">3</div>
  <div className="nui-pagination-item">»</div>
</div>`,
        html: `<div class="nui-pagination">
  <div class="nui-pagination-item">«</div>
  <div class="nui-pagination-item nui-active">1</div>
  <div class="nui-pagination-item">2</div>
  <div class="nui-pagination-item">»</div>
</div>`,
    },
    {
        id: 'breadcrumbs', title: 'Breadcrumbs', category: 'Navigation',
        desc: 'A trail showing the user\'s current location within the site hierarchy.',
        preview: (
            <div className="nui-breadcrumbs bg-muted/30 px-6 py-3 rounded-full border border-border/30">
                <span className="hover:text-primary cursor-pointer transition-colors">Dashboard</span>
                <span className="hover:text-primary cursor-pointer transition-colors">Settings</span>
                <span className="font-bold text-foreground">Advanced API</span>
            </div>
        ),
        jsx: `<nav className="nui-breadcrumbs">
  <span>Dashboard</span>
  <span>Settings</span>
  <span>Advanced API</span>
</nav>`,
        html: `<nav class="nui-breadcrumbs">
  <span>Dashboard</span>
  <span>Settings</span>
  <span>Advanced API</span>
</nav>`,
    },

    /* ═══ DATA INPUT ═══ */
    {
        id: 'input', title: 'Input', category: 'Data Input',
        desc: 'The standard text field for strings, emails, and passwords with icon support.',
        preview: (
            <div className="w-full max-w-md space-y-4">
                <div className="nui-form-control">
                    <label className="nui-label"><span className="nui-label-text">Email</span></label>
                    <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/40" />
                        <input type="email" placeholder="user@noorui.com" className="nui-input pl-11" />
                    </div>
                </div>
                <div className="nui-form-control">
                    <label className="nui-label"><span className="nui-label-text">Password</span></label>
                    <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/40" />
                        <input type="password" placeholder="••••••••" className="nui-input pl-11 pr-11" />
                        <Eye className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/40 cursor-pointer hover:text-primary transition-colors" />
                    </div>
                </div>
            </div>
        ),
        jsx: `<div className="nui-form-control">
  <label className="nui-label">
    <span className="nui-label-text">Email</span>
  </label>
  <input className="nui-input" type="email"
    placeholder="user@noorui.com" />
</div>`,
        html: `<div class="nui-form-control">
  <label class="nui-label">
    <span class="nui-label-text">Email</span>
  </label>
  <input class="nui-input" type="email"
    placeholder="user@noorui.com" />
</div>`,
    },
    {
        id: 'select', title: 'Select', category: 'Data Input',
        desc: 'A dropdown list for picking an option from a set of choices.',
        preview: (
            <div className="w-full max-w-md">
                <div className="nui-form-control">
                    <label className="nui-label"><span className="nui-label-text">Subscription Tier</span></label>
                    <select className="nui-select">
                        <option disabled selected>Select a tier</option>
                        <option>Professional Tier</option>
                        <option>Enterprise Suite</option>
                        <option>Personal Sandbox</option>
                    </select>
                </div>
            </div>
        ),
        jsx: `<select className="nui-select">
  <option disabled selected>Select a tier</option>
  <option>Professional</option>
  <option>Enterprise</option>
</select>`,
        html: `<select class="nui-select">
  <option disabled selected>Select a tier</option>
  <option>Professional</option>
  <option>Enterprise</option>
</select>`,
    },
    {
        id: 'checkbox', title: 'Checkbox', category: 'Data Input',
        desc: 'For binary choices or multiple selections from a list.',
        preview: (
            <div className="space-y-3 w-full max-w-sm">
                <label className="flex items-center gap-3 px-4 py-3 bg-muted/30 rounded-xl border border-border/30 cursor-pointer hover:border-primary/30 transition-colors">
                    <input type="checkbox" className="nui-checkbox" defaultChecked /> <span className="text-sm font-semibold">Accept terms</span>
                </label>
                <label className="flex items-center gap-3 px-4 py-3 bg-muted/30 rounded-xl border border-border/30 cursor-pointer hover:border-primary/30 transition-colors">
                    <input type="checkbox" className="nui-checkbox" defaultChecked /> <span className="text-sm font-semibold">Notifications</span>
                </label>
                <label className="flex items-center gap-3 px-4 py-3 bg-muted/30 rounded-xl border border-border/30 cursor-pointer hover:border-primary/30 transition-colors">
                    <input type="checkbox" className="nui-checkbox" /> <span className="text-sm font-semibold">Newsletter</span>
                </label>
            </div>
        ),
        jsx: `<label>
  <input type="checkbox" className="nui-checkbox" />
  <span>Accept terms</span>
</label>`,
        html: `<label>
  <input type="checkbox" class="nui-checkbox" />
  <span>Accept terms</span>
</label>`,
    },
    {
        id: 'toggle', title: 'Toggle (Switch)', category: 'Data Input',
        desc: 'A visual On/Off slider for settings and preferences.',
        preview: (
            <div className="space-y-3 w-full max-w-sm">
                <label className="flex items-center justify-between px-4 py-3 bg-muted/30 rounded-xl border border-border/30 cursor-pointer hover:border-primary/30 transition-colors">
                    <span className="text-sm font-semibold">Dark Mode</span>
                    <input type="checkbox" className="nui-toggle" />
                </label>
                <label className="flex items-center justify-between px-4 py-3 bg-muted/30 rounded-xl border border-border/30 cursor-pointer hover:border-primary/30 transition-colors">
                    <span className="text-sm font-semibold">High Performance</span>
                    <input type="checkbox" className="nui-toggle" defaultChecked />
                </label>
                <label className="flex items-center justify-between px-4 py-3 bg-muted/30 rounded-xl border border-border/30 cursor-pointer hover:border-primary/30 transition-colors">
                    <span className="text-sm font-semibold">Auto-save</span>
                    <input type="checkbox" className="nui-toggle" defaultChecked />
                </label>
            </div>
        ),
        jsx: `<label>
  <span>Dark Mode</span>
  <input type="checkbox" className="nui-toggle" />
</label>`,
        html: `<label>
  <span>Dark Mode</span>
  <input type="checkbox" class="nui-toggle" />
</label>`,
    },
    {
        id: 'range', title: 'Range Slider', category: 'Data Input',
        desc: 'For selecting a value from a range, with interactive number updates.',
        preview: <RangeDemo />,
        jsx: `const [val, setVal] = useState(75);
<div className="nui-form-control">
  <label className="nui-label">
    <span className="nui-label-text">Volume</span>
    <span className="nui-badge nui-badge-primary nui-badge-sm">{val}%</span>
  </label>
  <input type="range" className="nui-range" 
    value={val} onChange={(e) => setVal(e.target.value)} />
</div>`,
        html: `<div class="nui-form-control">
  <label class="nui-label">
    <span class="nui-label-text">Volume</span>
    <span class="nui-badge nui-badge-primary">75%</span>
  </label>
  <input type="range" class="nui-range" value="75" />
</div>`,
    },

    /* ═══ DATA DISPLAY ═══ */
    {
        id: 'card', title: 'Card', category: 'Data Display',
        desc: 'A flexible container for images, text, and actions — the building block of Bento layouts.',
        preview: (
            <div className="grid md:grid-cols-2 gap-6 w-full max-w-2xl">
                <div className="nui-card border-border/40 hover:border-primary/40 hover:shadow-xl transition-all duration-300">
                    <figure className="h-40 bg-gradient-to-br from-primary/10 to-purple-600/10 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=80" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="" />
                    </figure>
                    <div className="nui-card-body p-5">
                        <h3 className="nui-card-title text-lg">Bento Component</h3>
                        <p className="text-sm text-muted-foreground">Flexible container for content grouping.</p>
                        <div className="nui-card-actions mt-3">
                            <button className="nui-btn nui-btn-primary nui-btn-sm rounded-lg text-sm">View</button>
                        </div>
                    </div>
                </div>
                <div className="nui-card nui-card-compact border-border/40">
                    <div className="nui-card-body p-5">
                        <h3 className="nui-card-title text-lg">Compact Card</h3>
                        <p className="text-sm text-muted-foreground">A minimal card variant with reduced padding for dense layouts.</p>
                        <div className="nui-card-actions mt-3">
                            <button className="nui-btn nui-btn-outline nui-btn-sm rounded-lg text-sm">Details</button>
                        </div>
                    </div>
                </div>
            </div>
        ),
        jsx: `<div className="nui-card">
  <figure><img src="..." alt="" /></figure>
  <div className="nui-card-body">
    <h3 className="nui-card-title">Title</h3>
    <p>Description</p>
    <div className="nui-card-actions">
      <button className="nui-btn nui-btn-primary nui-btn-sm">
        View
      </button>
    </div>
  </div>
</div>`,
        html: `<div class="nui-card">
  <figure><img src="..." alt="" /></figure>
  <div class="nui-card-body">
    <h3 class="nui-card-title">Title</h3>
    <p>Description</p>
    <div class="nui-card-actions">
      <button class="nui-btn nui-btn-primary nui-btn-sm">View</button>
    </div>
  </div>
</div>`,
    },
    {
        id: 'table', title: 'Table', category: 'Data Display',
        desc: 'For displaying large amounts of structured data with premium styling and interactive actions.',
        preview: (
            <div className="overflow-hidden border border-border/40 rounded-3xl bg-muted/20 w-full shadow-sm">
                <table className="nui-table">
                    <thead><tr>
                        <th className="text-xs uppercase tracking-wider text-muted-foreground font-bold">User</th>
                        <th className="text-xs uppercase tracking-wider text-muted-foreground font-bold">Status</th>
                        <th className="text-xs uppercase tracking-wider text-muted-foreground font-bold text-right">Action</th>
                    </tr></thead>
                    <tbody>
                        {[
                            { name: 'Supto Rahman', role: 'Lead Dev', status: 'High', color: 'nui-badge-primary', img: '20' },
                            { name: 'Noor Alam', role: 'UI Designer', status: 'Active', color: 'nui-badge-success', img: '21' },
                            { name: 'Tahmid Khan', role: 'DevOps', status: 'Warning', color: 'nui-badge-warning', img: '22' },
                        ].map((u, i) => (
                            <tr key={i} className="hover:bg-muted/30 transition-colors group">
                                <td className="flex items-center gap-3 py-4">
                                    <div className="nui-avatar nui-avatar-circle" style={{ width: '2.5rem', height: '2.5rem' }}>
                                        <img src={`https://i.pravatar.cc/150?u=${u.img}`} alt="" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-sm tracking-tight">{u.name}</div>
                                        <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">{u.role}</div>
                                    </div>
                                </td>
                                <td>
                                    <div className={`nui-badge ${u.color}`}>{u.status}</div>
                                </td>
                                <td className="text-right">
                                    <div className="nui-dropdown nui-dropdown-end">
                                        <button className="nui-btn nui-btn-ghost nui-btn-circle nui-btn-sm opacity-50 group-hover:opacity-100 transition-opacity">
                                            <MoreHorizontal className="w-4 h-4" />
                                        </button>
                                        <div className="nui-dropdown-content w-48 shadow-2xl border-border/40">
                                            <div className="p-2 space-y-1">
                                                <button className="w-full text-left px-3 py-2 text-xs font-bold hover:bg-muted/50 rounded-lg flex items-center gap-2"><User className="w-3.5 h-3.5" /> View Profile</button>
                                                <button className="w-full text-left px-3 py-2 text-xs font-bold hover:bg-muted/50 rounded-lg flex items-center gap-2"><Settings className="w-3.5 h-3.5" /> Permissions</button>
                                                <div className="h-px bg-border/20 my-1"></div>
                                                <button className="w-full text-left px-3 py-2 text-xs font-bold hover:bg-red-500/10 text-destructive rounded-lg flex items-center gap-2"><X className="w-3.5 h-3.5" /> Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        ),
        jsx: `<table className="nui-table">
  <thead><tr><th>User</th><th>Status</th><th>Action</th></tr></thead>
  <tbody>
    <tr>
      <td>Supto Rahman</td>
      <td><span className="nui-badge nui-badge-primary">High</span></td>
      <td>
        <div className="nui-dropdown nui-dropdown-end">
           <button className="nui-btn nui-btn-ghost">...</button>
           <div className="nui-dropdown-content">...</div>
        </div>
      </td>
    </tr>
  </tbody>
</table>`,
        html: `<table class="nui-table">
  <thead><tr><th>User</th><th>Status</th><th>Action</th></tr></thead>
  <tbody>
    <tr>
      <td>Supto Rahman</td>
      <td><span class="nui-badge nui-badge-primary">High</span></td>
      <td>...actions...</td>
    </tr>
  </tbody>
</table>`,
    },
    {
        id: 'avatar', title: 'Avatar', category: 'Data Display',
        desc: 'Circular or square placeholders for user profile images or initials.',
        preview: (
            <div className="flex flex-wrap items-end gap-6 justify-center">
                <div className="nui-avatar nui-avatar-circle" style={{ width: '4.5rem', height: '4.5rem' }}><img src="https://i.pravatar.cc/150?u=1" alt="" /></div>
                <div className="nui-avatar nui-avatar-circle shadow-lg" style={{ width: '3.5rem', height: '3.5rem' }}><img src="https://i.pravatar.cc/150?u=2" alt="" /></div>
                <div className="nui-avatar nui-avatar-circle" style={{ width: '2.5rem', height: '2.5rem' }}><img src="https://i.pravatar.cc/150?u=3" alt="" /></div>
                <div className="nui-avatar rounded-2xl" style={{ width: '3.5rem', height: '3.5rem' }}><img src="https://i.pravatar.cc/150?u=4" alt="" /></div>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-black text-xl">SR</div>
            </div>
        ),
        jsx: `<div className="nui-avatar nui-avatar-circle">
  <img src="avatar.jpg" alt="User" />
</div>`,
        html: `<div class="nui-avatar nui-avatar-circle">
  <img src="avatar.jpg" alt="User" />
</div>`,
    },
    {
        id: 'badge', title: 'Badge', category: 'Data Display',
        desc: 'Small, colorful indicators for statuses, tags, or count indicators.',
        preview: (
            <div className="flex flex-wrap gap-3 justify-center">
                <div className="nui-badge nui-badge-primary">Primary</div>
                <div className="nui-badge nui-badge-secondary">Secondary</div>
                <div className="nui-badge nui-badge-accent">Accent</div>
                <div className="nui-badge nui-badge-success">Success</div>
                <div className="nui-badge nui-badge-error">Error</div>
                <div className="nui-badge nui-badge-warning">Warning</div>
                <div className="nui-badge nui-badge-outline">Outline</div>
                <div className="nui-badge">Default</div>
            </div>
        ),
        jsx: `<div className="nui-badge nui-badge-primary">Primary</div>
<div className="nui-badge nui-badge-success">Success</div>
<div className="nui-badge nui-badge-outline">Outline</div>`,
        html: `<div class="nui-badge nui-badge-primary">Primary</div>
<div class="nui-badge nui-badge-success">Success</div>
<div class="nui-badge nui-badge-outline">Outline</div>`,
    },
    {
        id: 'accordion', title: 'Accordion', category: 'Data Display',
        desc: 'Stacked headers that expand to reveal content with smooth spring animations.',
        preview: (
            <div className="nui-accordion">
                {['What is NoorUI?', 'How to install?', 'Is it free?'].map((q, i) => (
                    <details key={i} className="nui-collapse group" open={i === 0}>
                        <summary className="nui-collapse-title">
                            {q}
                            <ChevronDown className="w-4 h-4 text-muted-foreground group-open:rotate-180 transition-transform" />
                        </summary>
                        <div className="nui-collapse-content">
                            {i === 0 && 'NoorUI is a lightweight, framework-agnostic UI component library built as a Tailwind CSS plugin.'}
                            {i === 1 && 'Install via npm: npm install noorui, then add it to your tailwind.config.js plugins array.'}
                            {i === 2 && 'Yes! NoorUI is open source and free to use in both personal and commercial projects.'}
                        </div>
                    </details>
                ))}
            </div>
        ),
        jsx: `<div className="nui-accordion">
  <details className="nui-collapse">
    <summary className="nui-collapse-title">Title</summary>
    <div className="nui-collapse-content">Content</div>
  </details>
</div>`,
        html: `<div class="nui-accordion">
  <details class="nui-collapse">
    <summary class="nui-collapse-title">Title</summary>
    <div class="nui-collapse-content">Content</div>
  </details>
</div>`,
    },

    /* ═══ FEEDBACK ═══ */
    {
        id: 'alert', title: 'Alert / Toast', category: 'Feedback',
        desc: 'Temporary, non-intrusive notification bubbles for success, error, or info messages.',
        preview: (
            <div className="w-full max-w-lg space-y-4">
                <div className="nui-alert nui-alert-success shadow-lg shadow-green-500/5 border-green-500/20">
                    <Check className="w-5 h-5 mt-0.5 shrink-0" />
                    <div><h4 className="font-bold text-sm">Update Synchronized</h4><p className="text-xs opacity-70">All changes persisted to the cloud.</p></div>
                </div>
                <div className="nui-alert nui-alert-error shadow-lg shadow-red-500/5 border-red-500/20">
                    <AlertCircle className="w-5 h-5 mt-0.5 shrink-0" />
                    <div><h4 className="font-bold text-sm">Connection Lost</h4><p className="text-xs opacity-70">Retrying in 5s...</p></div>
                </div>
                <div className="nui-alert border-border/40 bg-muted/40">
                    <Bell className="w-5 h-5 mt-0.5 text-primary shrink-0" />
                    <div><h4 className="font-bold text-sm">New Message</h4><p className="text-xs opacity-70">Supto707 shared a design.</p></div>
                </div>
            </div>
        ),
        jsx: `<div className="nui-alert nui-alert-success">
  <CheckIcon />
  <div>
    <h4>Success!</h4>
    <p>Changes saved.</p>
  </div>
</div>`,
        html: `<div class="nui-alert nui-alert-success">
  <span>✓</span>
  <div>
    <h4>Success!</h4>
    <p>Changes saved.</p>
  </div>
</div>`,
    },
    {
        id: 'tooltip', title: 'Tooltip', category: 'Feedback',
        desc: 'A tiny informational bubble that appears when hovering over an icon or button.',
        preview: (
            <div className="flex gap-6 justify-center items-center py-8">
                <div className="nui-tooltip" data-tip="Hello from NoorUI!">
                    <button className="nui-btn nui-btn-primary">Hover me</button>
                </div>
                <div className="nui-tooltip" data-tip="More info here">
                    <div className="nui-btn nui-btn-circle nui-btn-outline"><Info className="w-5 h-5" /></div>
                </div>
            </div>
        ),
        jsx: `<div className="nui-tooltip" data-tip="Hello!">
  <button className="nui-btn">Hover me</button>
</div>`,
        html: `<div class="nui-tooltip" data-tip="Hello!">
  <button class="nui-btn">Hover me</button>
</div>`,
    },
    {
        id: 'progress', title: 'Progress Bar', category: 'Feedback',
        desc: 'A visual indicator of process completion or loading state.',
        preview: (
            <div className="w-full max-w-lg space-y-6">
                {[{ label: 'Upload', pct: 85 }, { label: 'Processing', pct: 45 }, { label: 'Syncing', pct: 20 }].map((p) => (
                    <div key={p.label} className="space-y-2">
                        <div className="flex justify-between text-sm"><span className="font-semibold">{p.label}</span><span className="text-muted-foreground font-mono text-xs">{p.pct}%</span></div>
                        <div className="nui-progress h-2"><div className="nui-progress-bar" style={{ width: `${p.pct}%` }} /></div>
                    </div>
                ))}
            </div>
        ),
        jsx: `<div className="nui-progress">
  <div className="nui-progress-bar"
       style={{ width: '85%' }} />
</div>`,
        html: `<div class="nui-progress">
  <div class="nui-progress-bar"
       style="width: 85%"></div>
</div>`,
    },
];
