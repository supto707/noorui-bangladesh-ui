import { Moon, Sun, Sunrise, Sunset, CloudMoon } from "lucide-react";

const prayers = [
  { name: "Fajr", time: "5:15 AM", icon: Sunrise, active: false },
  { name: "Dhuhr", time: "12:30 PM", icon: Sun, active: false },
  { name: "Asr", time: "3:45 PM", icon: Sun, active: true },
  { name: "Maghrib", time: "6:20 PM", icon: Sunset, active: false },
  { name: "Isha", time: "8:00 PM", icon: Moon, active: false },
];

export const PrayerTimeCard = () => {
  return (
    <div className="rui-card max-w-sm overflow-hidden">
      <div className="rui-hero px-6 py-8 text-primary-foreground relative">
        <div className="rui-pattern" />
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-2">
            <div>
              <p className="text-sm opacity-80">Today's Prayer Times</p>
              <h3 className="text-xl font-bold">Dhaka, Bangladesh</h3>
            </div>
            <CloudMoon className="w-10 h-10 opacity-60 animate-float" />
          </div>
          <p className="text-xs opacity-70 font-arabic">بِسْمِ اللَّهِ الرَّحْمَـٰنِ الرَّحِيمِ</p>
        </div>
      </div>
      <div className="rui-card-body p-0">
        {prayers.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.name}
              className={`flex items-center justify-between px-6 py-3 border-b border-border last:border-0 transition-colors ${
                p.active ? "bg-primary/5" : "hover:bg-muted/50"
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon className={`w-4 h-4 ${p.active ? "text-primary" : "text-muted-foreground"}`} />
                <span className={`font-medium ${p.active ? "text-primary" : ""}`}>{p.name}</span>
                {p.active && <span className="rui-badge-primary text-[10px] px-2 py-0">Next</span>}
              </div>
              <span className={`text-sm font-mono ${p.active ? "text-primary font-semibold" : "text-muted-foreground"}`}>
                {p.time}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
