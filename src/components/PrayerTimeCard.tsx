import { Moon, Sun, Sunrise, Sunset, CloudMoon } from "lucide-react";
import { motion } from "framer-motion";

const prayers = [
  { name: "Fajr", time: "5:15 AM", icon: Sunrise, active: false },
  { name: "Dhuhr", time: "12:30 PM", icon: Sun, active: false },
  { name: "Asr", time: "3:45 PM", icon: Sun, active: true },
  { name: "Maghrib", time: "6:20 PM", icon: Sunset, active: false },
  { name: "Isha", time: "8:00 PM", icon: Moon, active: false },
];

export const PrayerTimeCard = () => {
  return (
    <div className="pt-card w-full max-w-sm">
      <div className="pt-card-header rui-pattern">
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-2">
            <div>
              <p className="pt-card-title">Today's Prayer Times</p>
              <h3 className="pt-card-location">Dhaka, Bangladesh</h3>
            </div>
            <CloudMoon className="w-10 h-10 opacity-40" />
          </div>
          <p className="pt-card-bismillah">بِسْمِ اللَّهِ الرَّحْمَـٰنِ الرَّحِيمِ</p>
        </div>
      </div>
      <div className="bg-base-200">
        {prayers.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.name}
              className={`pt-card-row ${p.active ? "pt-card-active" : ""}`}
            >
              <div className="flex items-center gap-3">
                <Icon className={`w-4 h-4 ${p.active ? "text-primary" : "opacity-40"}`} />
                <span className="pt-card-name">{p.name}</span>
                {p.active && <span className="nui-badge-primary nui-badge-sm ml-2">Next</span>}
              </div>
              <span className="pt-card-time">
                {p.time}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
