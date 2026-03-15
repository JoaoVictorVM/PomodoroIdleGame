"use client";

import { useState } from "react";

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
        coins: 99,
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
    <div className="p-8 flex flex-col gap-4 max-w-2xl">
      <h1 className="text-2xl font-bold text-[#e63946]">🧪 Teste de API</h1>
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
          POST /upgrades (damage)
        </button>
      </div>

      {result && (
        <pre className="bg-[#1a1a24] border border-[#2a2a3a] rounded-lg p-4 text-[#f0f0f5] text-sm overflow-auto">
          {result}
        </pre>
      )}
    </div>
  );
}
