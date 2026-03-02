import { useState } from "react";

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

export const ThemeSwitcher = () => {
  const [active, setActive] = useState("light");

  const switchTheme = (id: string) => {
    setActive(id);
    document.documentElement.setAttribute("data-theme", id);
    document.documentElement.classList.toggle("dark", id === "dark" || id === "dhaka-night");
  };

  return (
    <div className="flex flex-wrap gap-2">
      {themes.map((t) => (
        <button
          key={t.id}
          onClick={() => switchTheme(t.id)}
          className={`rui-btn text-xs px-3 py-1.5 rounded-full border transition-all ${
            active === t.id
              ? "border-primary bg-primary text-primary-foreground scale-105"
              : "border-border bg-card text-card-foreground hover:border-primary/50"
          }`}
          style={{ "--dot-color": t.color } as React.CSSProperties}
        >
          <span
            className="w-3 h-3 rounded-full inline-block mr-1.5 shrink-0"
            style={{ backgroundColor: t.color }}
          />
          {t.label}
        </button>
      ))}
    </div>
  );
};
