"use client";

import { useEffect } from "react";

interface Props {
  damage: number;
  id: number;
  onDone: (id: number) => void;
}

export function DamageNumber({ damage, id, onDone }: Props) {
  useEffect(() => {
    const timer = setTimeout(() => onDone(id), 900);
    return () => clearTimeout(timer);
  }, [id, onDone]);

  return (
    <span
      className="absolute text-xs font-bold text-[#BF616A] pointer-events-none select-none animate-damage"
      style={{
        top: `${15 + Math.random() * 20}%`,
        right: `${10 + Math.random() * 15}%`,
      }}
    >
      -{damage}
    </span>
  );
}
