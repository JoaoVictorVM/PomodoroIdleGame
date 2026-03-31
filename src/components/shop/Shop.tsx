"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useGameStore } from "@/store/gameStore";
import { usePomodoroStore } from "@/store/pomodoroStore";
import { purchaseUpgrade } from "@/services/userService";
import { UpgradeCard } from "./UpgradeCard";
import { UpgradeType } from "@/types";
import { Swords, Zap, Star } from "lucide-react";

const UPGRADES = [
  {
    type: "damage" as UpgradeType,
    label: "Dano",
    description: "+5 de dano por nível",
    icon: Swords,
    iconColor: "#BF616A",
    iconBg: "#BF616A22",
  },
  {
    type: "speed" as UpgradeType,
    label: "Velocidade",
    description: "+0.5 ataque/s por nível",
    icon: Zap,
    iconColor: "#EBCB8B",
    iconBg: "#EBCB8B22",
  },
  {
    type: "luck" as UpgradeType,
    label: "Sorte",
    description: "+1 moeda extra por kill",
    icon: Star,
    iconColor: "#A3BE8C",
    iconBg: "#A3BE8C22",
  },
];

export function Shop() {
  const { data: session } = useSession();
  const { phase } = usePomodoroStore();
  const { dmgLevel, luckLevel, speedLevel, applyUpgrade, coins } =
    useGameStore();
  const [loadingType, setLoadingType] = useState<UpgradeType | null>(null);
  const [message, setMessage] = useState<{
    text: string;
    type: "success" | "error";
  } | null>(null);

  const isLocked = phase === "FOCUS";

  async function handleBuy(type: UpgradeType) {
    if (isLocked || loadingType) return;
    setMessage(null);

    if (!session?.user) {
      const s = useGameStore.getState();
      applyUpgrade(type, {
        coins: s.coins - calcLocalCost(type),
        damage: type === "damage" ? s.damage + 5 : s.damage,
        luck: type === "luck" ? s.luck + 1 : s.luck,
        speed: type === "speed" ? s.speed + 0.5 : s.speed,
        dmgLevel: type === "damage" ? s.dmgLevel + 1 : s.dmgLevel,
        luckLevel: type === "luck" ? s.luckLevel + 1 : s.luckLevel,
        speedLevel: type === "speed" ? s.speedLevel + 1 : s.speedLevel,
      });
      setMessage({
        text: "Upgrade aplicado! Faça login para salvar.",
        type: "success",
      });
      return;
    }

    setLoadingType(type);
    try {
      const updatedStats = await purchaseUpgrade(type);
      if (updatedStats) {
        applyUpgrade(type, updatedStats);
        setMessage({ text: "Upgrade comprado!", type: "success" });
      }
    } catch (error: any) {
      setMessage({ text: error.message || "Erro ao comprar", type: "error" });
    } finally {
      setLoadingType(null);
    }
  }

  function calcLocalCost(type: UpgradeType) {
    const { dmgLevel, luckLevel, speedLevel } = useGameStore.getState();
    const map = { damage: dmgLevel, luck: luckLevel, speed: speedLevel };
    return Math.round(UPGRADE_BASE_COST * Math.pow(1.5, map[type]));
  }

  const UPGRADE_BASE_COST = 10;

  return (
    <div className="nord-card p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xs font-medium text-[#4C566A] uppercase tracking-wider">
          Loja
        </h3>
        <span
          className={`text-xs font-medium ${isLocked ? "text-[#BF616A]" : "text-[#A3BE8C]"}`}
        >
          {isLocked ? "Bloqueado durante o foco" : "Loja aberta"}
        </span>
      </div>

      {message && (
        <div
          className={`mb-3 px-3 py-2 rounded-lg text-xs ${
            message.type === "success"
              ? "bg-[#A3BE8C]/10 border border-[#A3BE8C]/20 text-[#A3BE8C]"
              : "bg-[#BF616A]/10 border border-[#BF616A]/20 text-[#BF616A]"
          }`}
        >
          {message.text}
        </div>
      )}

      <div className="flex flex-col">
        {UPGRADES.map((upgrade) => (
          <UpgradeCard
            key={upgrade.type}
            {...upgrade}
            isLocked={isLocked}
            onBuy={handleBuy}
            isLoading={loadingType === upgrade.type}
          />
        ))}
      </div>
    </div>
  );
}
