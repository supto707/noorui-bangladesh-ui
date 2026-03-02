import { Star, Check, AlertCircle, Info, AlertTriangle, ChevronRight, Bell } from "lucide-react";

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

const Section = ({ title, desc, children }: { title: string; desc: string; children: React.ReactNode }) => (
  <section className="animate-fade-in-up">
    <h2 className="text-2xl font-bold mb-1">{title}</h2>
    <p className="text-muted-foreground text-sm mb-6">{desc}</p>
    {children}
  </section>
);
