import { useState, useEffect, useMemo } from "react";
import { Moon, Star } from "lucide-react";

const getNextRamadan = () => {
  const now = new Date();
  const ramadanDates = [
    new Date(2026, 1, 28),
    new Date(2027, 1, 17),
  ];
  for (const d of ramadanDates) {
    if (d > now) return d;
  }
  return ramadanDates[ramadanDates.length - 1];
};

export const RamadanCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const ramadanDate = useMemo(() => getNextRamadan(), []);

  useEffect(() => {
    const calc = () => {
      const now = new Date().getTime();
      const diff = ramadanDate.getTime() - now;
      if (diff <= 0) return;
      setTimeLeft(prev => {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        if (prev.days === days && prev.hours === hours && prev.minutes === minutes && prev.seconds === seconds) return prev;
        return { days, hours, minutes, seconds };
      });
    };
    calc();
    const interval = setInterval(calc, 1000);
    return () => clearInterval(interval);
  }, [ramadanDate]);

  return (
    <div className="nui-card bg-base-200 border border-base-content/5 max-w-sm overflow-hidden shadow-xl hover:translate-y-[-4px] transition-transform duration-300">
      <div className="bg-secondary p-6 text-secondary-content text-center relative">
        <div className="absolute inset-0 rui-pattern opacity-20" />
        <Moon className="w-8 h-8 mx-auto mb-2 opacity-50" />
        <h3 className="font-black text-lg tracking-tight">Ramadan Countdown</h3>
        <p className="text-[10px] font-bold opacity-60">STARTS FEB 2026 (INSHA'ALLAH)</p>
      </div>
      <div className="p-6">
        <div className="flex gap-2 justify-center">
          {[
            { v: timeLeft.days, l: "DAYS" },
            { v: timeLeft.hours, l: "HRS" },
            { v: timeLeft.minutes, l: "MIN" },
            { v: timeLeft.seconds, l: "SEC" },
          ].map((u) => (
            <div key={u.l} className="flex flex-col items-center flex-1">
              <div className="bg-base-300 w-full rounded-xl py-3 text-center shadow-inner">
                <span className="font-mono font-black text-xl text-primary">{String(u.v).padStart(2, '0')}</span>
              </div>
              <span className="text-[8px] font-black opacity-30 mt-1">{u.l}</span>
            </div>
          ))}
        </div>
        <div className="mt-5 text-center px-4 py-2 bg-primary/5 rounded-xl border border-primary/10">
          <p className="text-[10px] font-bold opacity-70">
            <Star className="w-3 h-3 inline mr-1 text-primary" />
            Time to prepare your heart & soul
          </p>
        </div>
      </div>
    </div>
  );
};
