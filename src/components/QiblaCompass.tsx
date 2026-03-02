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
    <div className="rui-card max-w-sm">
      <div className="rui-card-body flex flex-col items-center">
        <h3 className="font-bold text-lg mb-1">Qibla Compass</h3>
        <p className="text-sm text-muted-foreground mb-4">Direction from Dhaka: {qiblaAngle}°</p>

        <div className="relative w-48 h-48">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border-2 border-border" />
          
          {/* Compass markings */}
          <div className="absolute inset-2 rounded-full border border-muted">
            {["N", "E", "S", "W"].map((d, i) => (
              <span
                key={d}
                className="absolute text-xs font-bold text-muted-foreground"
                style={{
                  top: i === 0 ? "4px" : i === 2 ? "auto" : "50%",
                  bottom: i === 2 ? "4px" : "auto",
                  left: i === 3 ? "4px" : i === 1 ? "auto" : "50%",
                  right: i === 1 ? "4px" : "auto",
                  transform: i === 0 || i === 2 ? "translateX(-50%)" : "translateY(-50%)",
                }}
              >
                {d}
              </span>
            ))}
          </div>

          {/* Needle */}
          <div
            className="absolute inset-4 transition-transform duration-100 ease-linear"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            <div className="absolute left-1/2 top-2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-b-[16px] border-l-transparent border-r-transparent border-b-destructive" />
            <div className="absolute left-1/2 bottom-2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-t-[12px] border-l-transparent border-r-transparent border-t-muted-foreground/30" />
          </div>

          {/* Qibla indicator */}
          <div
            className="absolute inset-0"
            style={{ transform: `rotate(${qiblaAngle}deg)` }}
          >
            <div className="absolute left-1/2 -top-1 -translate-x-1/2">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse-glow" />
            </div>
          </div>

          {/* Center dot */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-foreground" />
        </div>

        <p className="text-xs text-muted-foreground mt-4 text-center">
          <span className="inline-block w-2 h-2 rounded-full bg-primary mr-1" />
          Qibla Direction (Kaaba)
        </p>
      </div>
    </div>
  );
};
