import { useState } from "react";
import { Calendar, Moon } from "lucide-react";

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

  const daysInMonth = viewMonth % 2 === 1 ? 30 : 29;

  return (
    <div className="nui-card bg-base-200 border border-base-content/5 max-w-sm overflow-hidden shadow-xl hover:translate-y-[-4px] transition-transform duration-300">
      <div className="bg-primary p-4 text-primary-content relative">
        <div className="absolute inset-0 rui-pattern opacity-20" />
        <div className="relative z-10 flex items-center justify-between">
          <div>
            <p className="text-[10px] opacity-70 uppercase tracking-widest font-black">HIJRI CALENDAR</p>
            <h3 className="font-bold text-lg">{hijriMonths[viewMonth - 1]} {viewYear}</h3>
          </div>
          <Calendar className="w-8 h-8 opacity-40" />
        </div>
      </div>
      <div className="p-4">
        {/* Week headers */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {weekDays.map((d) => (
            <div key={d} className="text-center text-[10px] font-black opacity-30 uppercase">{d}</div>
          ))}
        </div>
        {/* Days grid */}
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: 35 }).map((_, i) => {
            const day = (i % 30) + 1;
            const isTodayDay = viewMonth === hijriToday.month && day === hijriToday.day;
            const isRamadan = viewMonth === 9;
            if (i >= daysInMonth) return <div key={i} />;
            return (
              <div
                key={i}
                className={`aspect-square rounded-lg flex items-center justify-center text-xs transition-all pointer-events-none ${isTodayDay ? "bg-primary text-primary-content font-bold shadow-lg scale-110" :
                  isRamadan ? "bg-accent/10 text-accent font-semibold" : ""
                  }`}
              >
                {day}
              </div>
            );
          })}
        </div>
        {viewMonth === 9 && (
          <div className="mt-4 flex items-center gap-2 text-[10px] font-bold opacity-50 px-2 py-1 bg-accent/5 rounded-full w-fit">
            <Moon className="w-3 h-3 text-accent" />
            <span>RAMADAN MUBARAK</span>
          </div>
        )}
      </div>
    </div>
  );
};
