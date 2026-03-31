"use client";

import { useGameStore } from "@/store/gameStore";
import { Swords, Zap, Star } from "lucide-react";

const STATS = [
  {
    key: "damage",
    label: "Dano",
    icon: Swords,
    color: "#BF616A",
    bg: "#BF616A22",
    levelKey: "dmgLevel",
  },
  {
    key: "speed",
    label: "Velocidade",
    icon: Zap,
    color: "#EBCB8B",
    bg: "#EBCB8B22",
    levelKey: "speedLevel",
  },
  {
    key: "luck",
    label: "Sorte",
    icon: Star,
    color: "#A3BE8C",
    bg: "#A3BE8C22",
    levelKey: "luckLevel",
  },
] as const;

export function HeroStats() {
  const store = useGameStore();

  return (
    <div className="nord-card p-4">
      <h3 className="text-xs font-medium text-[#4C566A] uppercase tracking-wider mb-3">
        Herói
      </h3>
      <div className="flex flex-col gap-2.5">
        {STATS.map(({ key, label, icon: Icon, color, bg, levelKey }) => {
          const value = store[key];
          const level = store[levelKey];
          const display =
            key === "speed"
              ? `${(value as number).toFixed(1)}/s`
              : key === "luck"
                ? `+${value}`
                : String(value);

          return (
            <div key={key} className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div
                  className="w-6 h-6 rounded-md flex items-center justify-center"
                  style={{ background: bg }}
                >
                  <Icon size={12} style={{ color }} />
                </div>
                <span className="text-[#D8DEE9] text-sm">{label}</span>
                {level > 0 && (
                  <span className="text-xs bg-[#2E3440] border border-[#3B4252] rounded px-1.5 py-0.5 text-[#4C566A]">
                    Nv.{level}
                  </span>
                )}
              </div>
              <span className="text-sm font-semibold" style={{ color }}>
                {display}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
