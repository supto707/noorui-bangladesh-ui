import { useState, useEffect } from "react";
import { Moon, Star } from "lucide-react";

// Next Ramadan: 2027 starts ~Feb 17 (approximate)
const getNextRamadan = () => {
  const now = new Date();
  // Approximate Ramadan start dates
  const ramadanDates = [
    new Date(2026, 1, 28), // ~Feb 28, 2026
    new Date(2027, 1, 17), // ~Feb 17, 2027
    new Date(2028, 1, 6),  // ~Feb 6, 2028
  ];
  for (const d of ramadanDates) {
    if (d > now) return d;
  }
  return ramadanDates[ramadanDates.length - 1];
};

export const RamadanCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const ramadanDate = getNextRamadan();

  useEffect(() => {
    const calc = () => {
      const now = new Date().getTime();
      const diff = ramadanDate.getTime() - now;
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };
    calc();
    const interval = setInterval(calc, 1000);
    return () => clearInterval(interval);
  }, [ramadanDate]);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="rui-card max-w-sm overflow-hidden">
      <div className="rui-hero px-6 py-8 text-primary-foreground relative">
        <div className="rui-pattern" />
        <div className="relative z-10 text-center">
          <Moon className="w-10 h-10 mx-auto mb-2 opacity-70 animate-float" />
          <h3 className="text-xl font-bold">Ramadan Countdown</h3>
          <p className="text-xs opacity-70 mt-1 font-arabic">رَمَضَانُ مُبَارَكٌ</p>
          <p className="text-xs opacity-60 mt-1">
            Starts ~{ramadanDate.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>
        </div>
      </div>
      <div className="rui-card-body">
        <div className="grid grid-cols-4 gap-3">
          {units.map((u) => (
            <div key={u.label} className="text-center">
              <div className="rui-card bg-muted/50 border-0">
                <div className="py-3">
                  <p className="text-2xl font-bold font-mono text-primary">
                    {String(u.value).padStart(2, "0")}
                  </p>
                </div>
              </div>
              <p className="text-[10px] text-muted-foreground mt-1.5 font-medium">{u.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <p className="text-xs text-muted-foreground">
            <Star className="w-3 h-3 inline text-accent mr-1" />
            Prepare your heart and soul for the blessed month
          </p>
        </div>
      </div>
    </div>
  );
};
