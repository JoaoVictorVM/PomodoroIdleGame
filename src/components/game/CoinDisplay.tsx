"use client";

import { useGameStore } from "@/store/gameStore";
import { Coins, Swords } from "lucide-react";

export function CoinDisplay() {
  const { coins, currentWave } = useGameStore();

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2 bg-[#3B4252] border border-[#434C5E] rounded-full px-4 py-1.5">
        <div className="w-5 h-5 rounded-full bg-[#EBCB8B]/20 flex items-center justify-center">
          <Coins size={11} className="text-[#EBCB8B]" />
        </div>
        <span className="text-[#ECEFF4] font-semibold text-sm">{coins}</span>
        <span className="text-[#4C566A] text-xs">moedas</span>
      </div>

      <div className="flex items-center gap-2 bg-[#3B4252] border border-[#434C5E] rounded-full px-4 py-1.5">
        <div className="w-5 h-5 rounded-full bg-[#81A1C1]/20 flex items-center justify-center">
          <Swords size={11} className="text-[#81A1C1]" />
        </div>
        <span className="text-[#ECEFF4] font-semibold text-sm">
          Onda {currentWave}
        </span>
      </div>
    </div>
  );
}
