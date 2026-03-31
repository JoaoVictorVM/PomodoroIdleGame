// src/components/game/Enemy.tsx
"use client";

import { useCallback } from "react";
import { useGameStore } from "@/store/gameStore";
import { useDamageStore } from "@/store/damageStore";
import { EnemyHealthBar } from "./EnemyHealthBar";
import { DamageNumber } from "./DamageNumber";

export function Enemy() {
  const { enemySkin } = useGameStore();
  const { events, removeEvent } = useDamageStore();

  const handleDone = useCallback(
    (id: number) => {
      removeEvent(id);
    },
    [removeEvent],
  );

  return (
    <div className="relative flex flex-col items-center gap-2">
      <EnemyHealthBar />
      <div className="relative w-24 h-24 flex items-center justify-center">
        {/* Números de dano */}
        {events.map((event) => (
          <DamageNumber
            key={event.id}
            id={event.id}
            damage={event.damage}
            onDone={handleDone}
          />
        ))}
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <ellipse cx="50" cy="60" rx="30" ry="25" fill="#8b1a1a" />
          <ellipse cx="50" cy="55" rx="28" ry="28" fill="#a52020" />
          <circle cx="38" cy="48" r="7" fill="white" />
          <circle cx="62" cy="48" r="7" fill="white" />
          <circle cx="40" cy="49" r="4" fill="#1a0000" />
          <circle cx="64" cy="49" r="4" fill="#1a0000" />
          <path
            d="M 35 65 Q 50 75 65 65"
            stroke="#1a0000"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <line
            x1="42"
            y1="65"
            x2="42"
            y2="71"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <line
            x1="50"
            y1="67"
            x2="50"
            y2="73"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <line
            x1="58"
            y1="65"
            x2="58"
            y2="71"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}
