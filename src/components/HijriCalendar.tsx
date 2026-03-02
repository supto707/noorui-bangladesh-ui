import { useState, useEffect } from "react";
import { Calendar, Moon, Star } from "lucide-react";

// Simple Hijri date approximation
const gregorianToHijri = (date: Date) => {
  const jd = Math.floor(date.getTime() / 86400000) + 2440588;
  const l = jd - 1948440 + 10632;
  const n = Math.floor((l - 1) / 10631);
  const l2 = l - 10631 * n + 354;
  const j = Math.floor((10985 - l2) / 5316) * Math.floor((50 * l2) / 17719) + Math.floor(l2 / 5670) * Math.floor((43 * l2) / 15238);
  const l3 = l2 - Math.floor((30 - j) / 15) * Math.floor((17719 * j) / 50) - Math.floor(j / 16) * Math.floor((15238 * j) / 43) + 29;
  const month = Math.floor((24 * l3) / 709);
  const day = l3 - Math.floor((709 * month) / 24);
  const year = 30 * n + j - 30;
  return { year, month, day };
};

const hijriMonths = [
  "Muharram", "Safar", "Rabi al-Awwal", "Rabi al-Thani",
  "Jumada al-Ula", "Jumada al-Thani", "Rajab", "Sha'ban",
  "Ramadan", "Shawwal", "Dhul Qi'dah", "Dhul Hijjah"
];

const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export const HijriCalendar = () => {
  const today = new Date();
  const hijriToday = gregorianToHijri(today);
  const [viewMonth, setViewMonth] = useState(hijriToday.month);
  const [viewYear, setViewYear] = useState(hijriToday.year);

  // Generate days for display (approximation — 29/30 days per Hijri month)
  const daysInMonth = viewMonth % 2 === 1 ? 30 : 29;
  // Approximate start day
  const startDay = (new Date(today.getFullYear(), today.getMonth(), 1).getDay() + (viewMonth - hijriToday.month) * 2) % 7;
  const normalizedStart = ((startDay % 7) + 7) % 7;

  const prevMonth = () => {
    if (viewMonth === 1) { setViewMonth(12); setViewYear(viewYear - 1); }
    else setViewMonth(viewMonth - 1);
  };
  const nextMonth = () => {
    if (viewMonth === 12) { setViewMonth(1); setViewYear(viewYear + 1); }
    else setViewMonth(viewMonth + 1);
  };

  const isToday = viewMonth === hijriToday.month && viewYear === hijriToday.year;

  return (
    <div className="rui-card max-w-sm">
      <div className="rui-hero px-5 py-4 text-primary-foreground relative">
        <div className="rui-pattern" />
        <div className="relative z-10 flex items-center justify-between">
          <div>
            <p className="text-xs opacity-70">Hijri Calendar</p>
            <h3 className="font-bold text-lg">{hijriMonths[viewMonth - 1]} {viewYear}</h3>
          </div>
          <Calendar className="w-8 h-8 opacity-50" />
        </div>
      </div>
      <div className="rui-card-body p-4">
        <div className="flex items-center justify-between mb-3">
          <button className="rui-btn-ghost p-1 text-xs" onClick={prevMonth}>← Prev</button>
          <span className="text-sm font-semibold">{hijriMonths[viewMonth - 1]}</span>
          <button className="rui-btn-ghost p-1 text-xs" onClick={nextMonth}>Next →</button>
        </div>
        {/* Week headers */}
        <div className="grid grid-cols-7 gap-1 mb-1">
          {weekDays.map((d) => (
            <div key={d} className="text-center text-xs font-medium text-muted-foreground py-1">{d}</div>
          ))}
        </div>
        {/* Days grid */}
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: normalizedStart }).map((_, i) => (
            <div key={`empty-${i}`} />
          ))}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const isTodayDay = isToday && day === hijriToday.day;
            const isRamadan = viewMonth === 9;
            return (
              <button
                key={day}
                className={`w-8 h-8 rounded-lg text-xs font-medium transition-all flex items-center justify-center ${
                  isTodayDay
                    ? "bg-primary text-primary-foreground font-bold"
                    : isRamadan
                    ? "bg-accent/20 text-accent-foreground hover:bg-accent/40"
                    : "hover:bg-muted text-foreground"
                }`}
              >
                {day}
              </button>
            );
          })}
        </div>
        {viewMonth === 9 && (
          <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
            <Moon className="w-3 h-3 text-accent" />
            <span>Highlighted: Ramadan days</span>
          </div>
        )}
      </div>
    </div>
  );
};
