"use client";

import { useState } from "react";
import { useGame } from "@/hooks/useGame";
import { usePomodoroStore } from "@/store/pomodoroStore";
import { PomodoroTimer } from "@/components/pomodoro/PomodoroTimer";
import { PomodoroControls } from "@/components/pomodoro/PomodoroControls";
import { PomodoroConfig } from "@/components/pomodoro/PomodoroConfig";
import { GameArena } from "@/components/game/GameArena";
import { HeroStats } from "@/components/stats/HeroStats";
import { Shop } from "@/components/shop/Shop";

function GameTest() {
  useGame();
  const { phase } = usePomodoroStore();
  const [showConfig, setShowConfig] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <div className="game-card p-6 flex flex-col items-center gap-4">
        <h2 className="text-lg font-semibold text-[#f0f0f5]">⏱️ Pomodoro</h2>
        <PomodoroTimer />
        <PomodoroControls />
        <button
          onClick={() => setShowConfig(true)}
          className="text-sm text-[#9090a8] hover:text-[#f0f0f5] transition-colors"
        >
          Configurar
        </button>
        <p className="text-xs text-[#5a5a72]">Fase atual: {phase}</p>
        {showConfig && <PomodoroConfig onClose={() => setShowConfig(false)} />}
      </div>

      <GameArena />
      <HeroStats />
      <Shop />
    </div>
  );
}

export default function TestPage() {
  const [result, setResult] = useState("");

  async function testGetStats() {
    const res = await fetch("/api/user/stats");
    const data = await res.json();
    setResult(JSON.stringify(data, null, 2));
  }

  async function testPutStats() {
    const res = await fetch("/api/user/stats", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        coins: 999,
        damage: 20,
        luck: 3,
        speed: 2,
        dmgLevel: 3,
        luckLevel: 2,
        speedLevel: 2,
        currentWave: 5,
      }),
    });
    const data = await res.json();
    setResult(JSON.stringify(data, null, 2));
  }

  async function testUpgrade() {
    const res = await fetch("/api/user/upgrades", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "damage" }),
    });
    const data = await res.json();
    setResult(JSON.stringify(data, null, 2));
  }

  return (
    <div className="p-8 flex flex-col gap-6 max-w-2xl">
      <h1 className="text-2xl font-bold text-[#e63946]">🧪 Teste Geral</h1>

      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-[#f0f0f5]">API</h2>
        <p className="text-[#9090a8] text-sm">
          Logue primeiro em /login antes de testar
        </p>
        <div className="flex gap-3 flex-wrap">
          <button
            onClick={testGetStats}
            className="bg-[#4361ee] hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm"
          >
            GET /stats
          </button>
          <button
            onClick={testPutStats}
            className="bg-[#2dc653] hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm"
          >
            PUT /stats
          </button>
          <button
            onClick={testUpgrade}
            className="bg-[#e63946] hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm"
          >
            POST /upgrades
          </button>
        </div>
        {result && (
          <pre className="bg-[#1a1a24] border border-[#2a2a3a] rounded-lg p-4 text-[#f0f0f5] text-sm overflow-auto">
            {result}
          </pre>
        )}
      </div>

      <GameTest />
    </div>
  );
}
