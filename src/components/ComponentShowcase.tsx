import { useState, useRef, useEffect } from "react";
import { Star, Check, AlertCircle, Info, AlertTriangle, ChevronRight, ChevronDown, X, Menu, MoreVertical, Bell } from "lucide-react";

export const ComponentShowcase = () => {
  return (
    <div className="space-y-16">
      {/* Buttons */}
      <Section title="Buttons" desc="Multiple variants, sizes, and states">
        <div className="flex flex-wrap gap-3 items-center">
          <button className="rui-btn-primary">Primary</button>
          <button className="rui-btn-secondary">Secondary</button>
          <button className="rui-btn-outline">Outline</button>
          <button className="rui-btn-ghost">Ghost</button>
          <button className="rui-btn-primary rui-btn-xs">XS</button>
          <button className="rui-btn-primary rui-btn-sm">SM</button>
          <button className="rui-btn-primary rui-btn-lg">LG</button>
          <button className="rui-btn-primary rui-btn-xl">XL</button>
          <button className="rui-btn-primary" disabled>Disabled</button>
          <button className="rui-btn-primary flex items-center gap-2">
            <span className="rui-spinner rui-spinner-sm border-primary-foreground/30 border-t-primary-foreground" />
            Loading
          </button>
        </div>
      </Section>

      {/* Badges */}
      <Section title="Badges" desc="Status indicators and tags">
        <div className="flex flex-wrap gap-2 items-center">
          <span className="rui-badge-primary">Primary</span>
          <span className="rui-badge-secondary">Secondary</span>
          <span className="rui-badge-accent">Accent</span>
          <span className="rui-badge-outline">Outline</span>
          <span className="rui-badge bg-success text-success-foreground">Active</span>
          <span className="rui-badge bg-destructive text-destructive-foreground">Urgent</span>
        </div>
      </Section>

      {/* Modal / Dialog */}
      <ModalDemo />

      {/* Tabs */}
      <TabsDemo />

      {/* Accordion */}
      <AccordionDemo />

      {/* Dropdown Menu */}
      <DropdownDemo />

      {/* Drawer */}
      <DrawerDemo />

      {/* Cards */}
      <Section title="Cards" desc="Content containers with hover effects">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rui-card">
            <div className="rui-card-body">
              <h3 className="font-bold text-lg mb-2">Standard Card</h3>
              <p className="text-muted-foreground text-sm">A versatile content container with subtle shadow and hover elevation.</p>
              <div className="mt-4">
                <button className="rui-btn-primary rui-btn-sm">Learn More</button>
              </div>
            </div>
          </div>
          <div className="rui-card rui-card-compact">
            <div className="rui-card-body">
              <div className="flex items-center gap-2 mb-2">
                <span className="rui-badge-accent">New</span>
                <h3 className="font-bold">Compact Card</h3>
              </div>
              <p className="text-muted-foreground text-sm">Less padding for denser layouts.</p>
            </div>
          </div>
          <div className="rui-card overflow-hidden">
            <div className="h-32 bg-gradient-to-br from-primary to-teal" />
            <div className="rui-card-body">
              <h3 className="font-bold text-lg mb-1">Image Card</h3>
              <p className="text-muted-foreground text-sm">With gradient header.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Alerts */}
      <Section title="Alerts" desc="Contextual feedback messages">
        <div className="space-y-3 max-w-2xl">
          <div className="rui-alert rui-alert-info"><Info className="w-5 h-5 shrink-0 mt-0.5" /> <div><strong>Info:</strong> Your settings have been saved successfully.</div></div>
          <div className="rui-alert rui-alert-success"><Check className="w-5 h-5 shrink-0 mt-0.5" /> <div><strong>Success:</strong> Payment processed — JazakAllah Khair!</div></div>
          <div className="rui-alert rui-alert-warning"><AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" /> <div><strong>Warning:</strong> Your subscription expires in 3 days.</div></div>
          <div className="rui-alert rui-alert-error"><AlertCircle className="w-5 h-5 shrink-0 mt-0.5" /> <div><strong>Error:</strong> Unable to connect to the server.</div></div>
        </div>
      </Section>

      {/* Inputs */}
      <Section title="Form Controls" desc="Inputs, textareas, and select fields">
        <div className="grid md:grid-cols-3 gap-4 max-w-3xl">
          <div>
            <label className="text-sm font-medium mb-1.5 block text-foreground">Name</label>
            <input className="rui-input" placeholder="Enter your name" />
          </div>
          <div>
            <label className="text-sm font-medium mb-1.5 block text-foreground">Email</label>
            <input className="rui-input" type="email" placeholder="you@example.com" />
          </div>
          <div>
            <label className="text-sm font-medium mb-1.5 block text-foreground">City</label>
            <select className="rui-input">
              <option>Dhaka</option>
              <option>Rangpur</option>
              <option>Sylhet</option>
              <option>Chittagong</option>
            </select>
          </div>
        </div>
      </Section>

      {/* Table */}
      <Section title="Table" desc="Data display with zebra striping">
        <div className="rui-card max-w-2xl overflow-hidden">
          <table className="rui-table rui-table-zebra">
            <thead>
              <tr><th>Prayer</th><th>Time</th><th>Status</th></tr>
            </thead>
            <tbody>
              <tr><td>Fajr</td><td>5:15 AM</td><td><span className="rui-badge bg-success text-success-foreground">Done</span></td></tr>
              <tr><td>Dhuhr</td><td>12:30 PM</td><td><span className="rui-badge bg-success text-success-foreground">Done</span></td></tr>
              <tr><td>Asr</td><td>3:45 PM</td><td><span className="rui-badge-accent">Upcoming</span></td></tr>
              <tr><td>Maghrib</td><td>6:20 PM</td><td><span className="rui-badge-outline">Pending</span></td></tr>
              <tr><td>Isha</td><td>8:00 PM</td><td><span className="rui-badge-outline">Pending</span></td></tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* Progress */}
      <Section title="Progress & Spinners" desc="Loading indicators">
        <div className="space-y-4 max-w-md">
          <div className="rui-progress"><div className="rui-progress-bar" style={{ width: "75%" }} /></div>
          <div className="rui-progress"><div className="rui-progress-bar bg-secondary" style={{ width: "45%" }} /></div>
          <div className="flex gap-4 items-center">
            <span className="rui-spinner rui-spinner-sm" />
            <span className="rui-spinner rui-spinner-md" />
            <span className="rui-spinner rui-spinner-lg" />
          </div>
        </div>
      </Section>

      {/* Steps */}
      <Section title="Steps" desc="Multi-step process indicator">
        <div className="rui-steps max-w-md">
          <span className="rui-step rui-step-active">1</span>
          <span className="rui-step-line rui-step-line-active" />
          <span className="rui-step rui-step-active">2</span>
          <span className="rui-step-line" />
          <span className="rui-step">3</span>
          <span className="rui-step-line" />
          <span className="rui-step">4</span>
        </div>
      </Section>

      {/* Rating */}
      <Section title="Rating" desc="Star-based rating display">
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} className={`w-6 h-6 ${i <= 4 ? "fill-accent text-accent" : "text-muted-foreground"}`} />
          ))}
          <span className="ml-2 text-sm text-muted-foreground">(4.0 / 5)</span>
        </div>
      </Section>

      {/* Stats */}
      <Section title="Stats Cards" desc="KPI displays">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Total Users", value: "24.5K", change: "+12%" },
            { label: "Downloads", value: "1.2M", change: "+24%" },
            { label: "Components", value: "25+", change: "" },
            { label: "Themes", value: "12", change: "" },
          ].map((s) => (
            <div key={s.label} className="rui-card">
              <div className="rui-card-body text-center">
                <p className="text-2xl font-bold text-primary">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
                {s.change && <p className="text-xs text-success mt-1">{s.change}</p>}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Breadcrumbs & Pagination */}
      <Section title="Navigation" desc="Breadcrumbs and pagination">
        <div className="space-y-4">
          <nav className="flex items-center gap-1 text-sm">
            <a className="text-primary hover:underline cursor-pointer">Home</a>
            <ChevronRight className="w-3 h-3 text-muted-foreground" />
            <a className="text-primary hover:underline cursor-pointer">Components</a>
            <ChevronRight className="w-3 h-3 text-muted-foreground" />
            <span className="text-muted-foreground">Buttons</span>
          </nav>
          <div className="flex gap-1">
            {[1, 2, 3, "...", 8].map((p, i) => (
              <button
                key={i}
                className={`rui-btn text-xs w-8 h-8 p-0 rounded-lg ${
                  p === 1 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-primary/10"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

/* ============================================
   Interactive Component Demos
   ============================================ */

const ModalDemo = () => {
  const [open, setOpen] = useState(false);
  return (
    <Section title="Modal / Dialog" desc="Centered overlay dialogs with backdrop">
      <button className="rui-btn-primary" onClick={() => setOpen(true)}>Open Modal</button>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" onClick={() => setOpen(false)}>
          <div className="fixed inset-0 bg-foreground/40 backdrop-blur-sm animate-fade-in-up" style={{ animationDuration: "0.15s" }} />
          <div
            className="relative z-10 rui-card w-full max-w-md mx-4 animate-fade-in-up"
            style={{ animationDuration: "0.2s" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="rui-card-body">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg">Modal Title</h3>
                <button className="rui-btn-ghost p-1 rounded-full" onClick={() => setOpen(false)}>
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="text-muted-foreground text-sm mb-6">
                This is a RangpurUI modal component. It supports backdrop click to close, 
                keyboard navigation, and smooth animations. All themed with CSS custom properties.
              </p>
              <div className="flex gap-2 justify-end">
                <button className="rui-btn-ghost" onClick={() => setOpen(false)}>Cancel</button>
                <button className="rui-btn-primary" onClick={() => setOpen(false)}>Confirm</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};

const TabsDemo = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Overview", "Features", "Installation"];
  const contents = [
    "RangpurUI is a lightweight Tailwind CSS component library designed for Bangladeshi developers and Islamic web applications.",
    "12 themes, 25+ components, RTL support, dark mode, tree-shakable, framework-agnostic, and fully accessible.",
    "Install via npm: npm install rangpurui — then add it to your tailwind.config.js plugins array.",
  ];
  return (
    <Section title="Tabs" desc="Tabbed content navigation">
      <div className="max-w-xl">
        <div className="flex border-b border-border">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className={`px-4 py-2.5 text-sm font-medium transition-colors border-b-2 -mb-px ${
                activeTab === i
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="rui-card rounded-t-none border-t-0">
          <div className="rui-card-body">
            <p className="text-sm text-muted-foreground">{contents[activeTab]}</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

const AccordionDemo = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const items = [
    { q: "What is RangpurUI?", a: "A lightweight Tailwind CSS component library with Islamic-themed palettes, built for Bangladeshi developers." },
    { q: "Is it framework-agnostic?", a: "Yes! RangpurUI works with React, Vue, Vanilla JS, Next.js, Vite, and any other framework that supports Tailwind CSS." },
    { q: "Does it support RTL?", a: "Fully! All components use CSS logical properties and support dir=\"rtl\" for Arabic and Urdu prayer apps." },
  ];
  return (
    <Section title="Accordion / Collapse" desc="Expandable content sections">
      <div className="max-w-xl space-y-2">
        {items.map((item, i) => (
          <div key={i} className="rui-card">
            <button
              className="w-full flex items-center justify-between px-5 py-3.5 text-left font-medium text-sm"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              {item.q}
              <ChevronDown
                className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-200 ease-out ${
                openIndex === i ? "max-h-40" : "max-h-0"
              }`}
            >
              <div className="px-5 pb-4 text-sm text-muted-foreground">{item.a}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

const DropdownDemo = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <Section title="Dropdown Menu" desc="Contextual action menus">
      <div className="relative inline-block" ref={ref}>
        <button className="rui-btn-outline" onClick={() => setOpen(!open)}>
          <MoreVertical className="w-4 h-4" /> Options
        </button>
        {open && (
          <div className="absolute top-full left-0 mt-1 w-48 rui-card py-1 z-20 animate-fade-in-up" style={{ animationDuration: "0.15s" }}>
            {["Edit Profile", "Settings", "Notifications", "Sign Out"].map((item, i) => (
              <button
                key={item}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-muted transition-colors ${
                  i === 3 ? "text-destructive" : "text-foreground"
                }`}
                onClick={() => setOpen(false)}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
};

const DrawerDemo = () => {
  const [open, setOpen] = useState(false);
  return (
    <Section title="Drawer / Sidebar" desc="Slide-out panel for mobile navigation">
      <button className="rui-btn-outline" onClick={() => setOpen(true)}>
        <Menu className="w-4 h-4" /> Open Drawer
      </button>
      {open && (
        <div className="fixed inset-0 z-50" onClick={() => setOpen(false)}>
          <div className="fixed inset-0 bg-foreground/40 backdrop-blur-sm" />
          <div
            className="fixed top-0 left-0 h-full w-72 bg-card border-r border-border shadow-xl z-10"
            style={{ animation: "slide-in-left 0.3s ease-out" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-5">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-xs">R</span>
                  </div>
                  <span className="font-bold">RangpurUI</span>
                </div>
                <button className="rui-btn-ghost p-1 rounded-full" onClick={() => setOpen(false)}>
                  <X className="w-5 h-5" />
                </button>
              </div>
              <nav className="space-y-1">
                {["Home", "Components", "Themes", "Documentation", "Islamic Tools"].map((item, i) => (
                  <a
                    key={item}
                    className={`block px-3 py-2.5 rounded-lg text-sm transition-colors cursor-pointer ${
                      i === 0 ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};

const Section = ({ title, desc, children }: { title: string; desc: string; children: React.ReactNode }) => (
  <section className="animate-fade-in-up">
    <h2 className="text-2xl font-bold mb-1">{title}</h2>
    <p className="text-muted-foreground text-sm mb-6">{desc}</p>
    {children}
  </section>
);
