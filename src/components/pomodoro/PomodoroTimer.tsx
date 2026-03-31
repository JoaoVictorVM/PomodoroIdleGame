"use client";

import { usePomodoroStore } from "@/store/pomodoroStore";
import { formatTime } from "@/lib/utils";

export function PomodoroTimer() {
  const { timeLeft, phase } = usePomodoroStore();

  const phaseConfig = {
    IDLE: { label: "Pronto para começar", dot: "#4C566A" },
    FOCUS: { label: "Foco", dot: "#BF616A" },
    BREAK: { label: "Descanso", dot: "#A3BE8C" },
  };

  const config = phaseConfig[phase];

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex items-center gap-2 bg-[#2E3440] rounded-full px-3 py-1">
        <div
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: config.dot }}
        />
        <span className="text-xs font-medium tracking-widest uppercase text-[#4C566A]">
          {config.label}
        </span>
      </div>
      <span className="text-6xl font-light text-[#ECEFF4] tabular-nums tracking-tight">
        {formatTime(timeLeft)}
      </span>
    </div>
  );
}
