import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const themes = [
  { id: "light", label: "Light", color: "hsl(152 55% 28%)" },
  { id: "dark", label: "Dark", color: "hsl(152 55% 45%)" },
  { id: "islamic-green", label: "Islamic Green", color: "hsl(140 60% 25%)" },
  { id: "ramadan", label: "Ramadan", color: "hsl(270 45% 35%)" },
  { id: "hijri", label: "Hijri", color: "hsl(200 65% 35%)" },
  { id: "dhaka-night", label: "Dhaka Night", color: "hsl(180 70% 45%)" },
  { id: "rangpur", label: "Rangpur", color: "hsl(25 75% 42%)" },
  { id: "sylhet", label: "Sylhet", color: "hsl(120 45% 30%)" },
  { id: "chittagong", label: "Chittagong", color: "hsl(15 65% 40%)" },
  { id: "coxsbazar", label: "Cox's Bazar", color: "hsl(195 70% 38%)" },
  { id: "sundarban", label: "Sundarban", color: "hsl(90 40% 28%)" },
  { id: "cupcake", label: "Cupcake", color: "hsl(340 55% 55%)" },
];

export const ThemeSwitcher = ({ compact }: { compact?: boolean }) => {
  const [active, setActive] = useState("light");

  const switchTheme = (id: string) => {
    setActive(id);
    document.documentElement.setAttribute("data-theme", id);
    document.documentElement.classList.toggle("dark", id === "dark" || id === "dhaka-night");
  };

  // In compact mode we render a small button that opens a popover with theme choices.
  if (compact) {
    const [open, setOpen] = useState(false);
    const rootRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      const onDocClick = (e: MouseEvent) => {
        if (!rootRef.current) return;
        if (!rootRef.current.contains(e.target as Node)) setOpen(false);
      };
      document.addEventListener('click', onDocClick);
      return () => document.removeEventListener('click', onDocClick);
    }, []);

    const current = themes.find(t => t.id === active) || themes[0];

    return (
      <div className="relative" ref={rootRef}>
        <button
          onClick={() => setOpen(v => !v)}
          title={`Theme: ${current.label}`}
          className="flex items-center gap-2 p-1 rounded-lg nui-btn nui-btn-sm nui-btn-ghost"
        >
          <span className="w-3 h-3 rounded-full inline-block" style={{ backgroundColor: current.color }} />
          <span className="text-sm font-semibold">{current.label}</span>
        </button>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.12 }}
            className="absolute right-0 mt-2 w-56 bg-background border border-border/40 rounded-lg p-3 shadow-lg z-50"
          >
            <div className="grid grid-cols-3 gap-2">
              {themes.map(t => (
                <button
                  key={t.id}
                  onClick={() => { switchTheme(t.id); setOpen(false); }}
                  className={`flex items-center gap-2 px-2 py-1 rounded-md text-sm transition-colors ${active === t.id ? 'bg-primary/10 text-primary font-semibold' : 'text-muted-foreground hover:bg-muted/20'}`}
                >
                  <span className="w-3 h-3 rounded-full inline-block" style={{ backgroundColor: t.color }} />
                  <span className="truncate">{t.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {themes.map((t) => (
        <motion.button
          key={t.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => switchTheme(t.id)}
          className={`nui-btn nui-btn-sm rounded-full transition-colors duration-300 ${active === t.id
            ? "nui-btn-primary shadow-lg shadow-primary/25"
            : "nui-btn-ghost bg-base-100 hover:bg-base-200"
            }`}
        >
          <span
            className="w-3 h-3 rounded-full inline-block mr-2"
            style={{ backgroundColor: t.color }}
          />
          {t.label}
        </motion.button>
      ))}
    </div>
  );
};
