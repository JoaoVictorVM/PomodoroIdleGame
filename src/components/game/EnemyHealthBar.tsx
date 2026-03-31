"use client";

import { useGameStore } from "@/store/gameStore";

export function EnemyHealthBar() {
  const { enemyHp, enemyMaxHp, currentWave } = useGameStore();
  const percent = Math.max(0, (enemyHp / enemyMaxHp) * 100);

  const barColor =
    percent > 50 ? "#A3BE8C" : percent > 25 ? "#EBCB8B" : "#BF616A";

  return (
    <div className="flex flex-col gap-1 w-52">
      <div className="flex justify-between items-center">
        <span className="text-xs text-[#4C566A]">Onda {currentWave}</span>
        <span className="text-xs text-[#4C566A]">
          {enemyHp}/{enemyMaxHp}
        </span>
      </div>
      <div className="w-full h-2 bg-[#2E3440] rounded-full overflow-hidden border border-[#3B4252]">
        <div
          className="h-full rounded-full transition-all duration-150"
          style={{ width: `${percent}%`, background: barColor }}
        />
      </div>
    </div>
  );
}
