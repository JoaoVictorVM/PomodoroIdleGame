"use client";

import { useGameStore } from "@/store/gameStore";

export function HeroStats() {
  const { damage, speed, luck, dmgLevel, luckLevel, speedLevel } =
    useGameStore();

  const stats = [
    {
      label: "Dano",
      value: damage,
      level: dmgLevel,
      icon: "⚔️",
      color: "text-[#e63946]",
    },
    {
      label: "Velocidade",
      value: `${speed.toFixed(1)}/s`,
      level: speedLevel,
      icon: "⚡",
      color: "text-[#ffd60a]",
    },
    {
      label: "Sorte",
      value: `+${luck} moeda`,
      level: luckLevel,
      icon: "🍀",
      color: "text-[#2dc653]",
    },
  ];

  return (
    <div className="game-card p-4">
      <h3 className="text-sm font-semibold text-[#9090a8] uppercase tracking-wider mb-3">
        Seu Herói
      </h3>
      <div className="flex flex-col gap-2">
        {stats.map((stat) => (
          <div key={stat.label} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span>{stat.icon}</span>
              <span className="text-[#9090a8] text-sm">{stat.label}</span>
              {stat.level > 0 && (
                <span className="text-xs bg-[#0f0f13] border border-[#2a2a3a] rounded px-1.5 py-0.5 text-[#5a5a72]">
                  Nv.{stat.level}
                </span>
              )}
            </div>
            <span className={`text-sm font-bold ${stat.color}`}>
              {stat.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
