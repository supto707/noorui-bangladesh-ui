import { useState, useEffect } from "react";

export const QiblaCompass = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev + 0.3);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Qibla direction from Dhaka ≈ 282°
  const qiblaAngle = 282;

  return (
    <div className="qibla-compass w-full max-w-sm">
      <h3 className="qibla-compass-title">Qibla Compass</h3>
      <p className="qibla-compass-subtitle">Dhaka Direction: {qiblaAngle}°</p>

      <div className="qibla-ring">
        <div className="qibla-ring-inner" />

        {/* Cardinal directions */}
        <div className="absolute inset-4 flex items-start justify-center text-[10px] font-bold opacity-30">N</div>
        <div className="absolute inset-4 flex items-end justify-center text-[10px] font-bold opacity-30">S</div>
        <div className="absolute inset-4 flex items-center justify-start text-[10px] font-bold opacity-30">W</div>
        <div className="absolute inset-4 flex items-center justify-end text-[10px] font-bold opacity-30">E</div>

        {/* Qibla Needle (Static relative to compass) */}
        <div
          className="qibla-needle"
          style={{ transform: `rotate(${qiblaAngle}deg)` }}
        />

        {/* Device Heading Simulation (Rotating) */}
        <div
          className="absolute inset-0"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-1 h-32 bg-base-content/10 rounded-full" />
        </div>

        {/* Center dot */}
        <div className="qibla-center" />
      </div>

      <p className="text-[10px] opacity-60 mt-4 text-center">
        <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2" />
        Holy Kaaba (Mecca)
      </p>
    </div>
  );
};
