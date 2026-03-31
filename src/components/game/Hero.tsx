// src/components/game/Hero.tsx
"use client";

import { useEffect, useState } from "react";
import { useDamageStore } from "@/store/damageStore";

export function Hero() {
  const { events } = useDamageStore();
  const [attacking, setAttacking] = useState(false);

  // Anima o herói a cada ataque
  useEffect(() => {
    if (events.length === 0) return;
    setAttacking(true);
    const timer = setTimeout(() => setAttacking(false), 150);
    return () => clearTimeout(timer);
  }, [events.length]);

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={`w-24 h-24 flex items-center justify-center transition-transform duration-150 ${
          attacking ? "translate-x-3" : "translate-x-0"
        }`}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="25" r="12" fill="#2dc653" />
          <line
            x1="50"
            y1="37"
            x2="50"
            y2="65"
            stroke="#2dc653"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <line
            x1="50"
            y1="45"
            x2="28"
            y2="55"
            stroke="#2dc653"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <line
            x1="50"
            y1="45"
            x2="72"
            y2="42"
            stroke="#2dc653"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <line
            x1="72"
            y1="42"
            x2="88"
            y2="28"
            stroke="#9090a8"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <line
            x1="80"
            y1="37"
            x2="86"
            y2="43"
            stroke="#9090a8"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="50"
            y1="65"
            x2="38"
            y2="85"
            stroke="#2dc653"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <line
            x1="50"
            y1="65"
            x2="62"
            y2="85"
            stroke="#2dc653"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}
