"use client";

import { useEffect, useState } from "react";

interface DamageNumberProps {
  damage: number;
  id: number;
  onDone: (id: number) => void;
}

export function DamageNumber({ damage, id, onDone }: DamageNumberProps) {
  useEffect(() => {
    const timer = setTimeout(() => onDone(id), 900);
    return () => clearTimeout(timer);
  }, [id, onDone]);

  return (
    <span
      className="absolute text-sm font-bold text-[#e63946] pointer-events-none select-none animate-damage"
      style={{
        top: `${20 + Math.random() * 20}%`,
        right: `${15 + Math.random() * 15}%`,
      }}
    >
      -{damage}
    </span>
  );
}
