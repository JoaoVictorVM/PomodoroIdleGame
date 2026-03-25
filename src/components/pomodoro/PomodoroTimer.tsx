"use client";

import { usePomodoroStore } from "@/store/pomodoroStore";
import { formatTime } from "@/lib/utils";

export function PomodoroTimer() {
  const { timeLeft, phase } = usePomodoroStore();

  const phaseLabel = {
    IDLE: "Pronto para começar",
    FOCUS: "Foco",
    BREAK: "Descanso",
  };

  const phaseColor = {
    IDLE: "text-[#9090a8]",
    FOCUS: "text-[#e63946]",
    BREAK: "text-[#2dc653]",
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <span
        className={`text-sm font-medium uppercase tracking-widest ${phaseColor[phase]}`}
      >
        {phaseLabel[phase]}
      </span>
      <span className="text-6xl font-bold text-[#f0f0f5] tabular-nums">
        {formatTime(timeLeft)}
      </span>
    </div>
  );
}
