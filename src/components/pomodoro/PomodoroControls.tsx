"use client";

import { usePomodoroStore } from "@/store/pomodoroStore";

export function PomodoroControls() {
  const { isRunning, phase, start, pause, reset } = usePomodoroStore();

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={reset}
        className="px-4 py-2 rounded-lg text-sm text-[#9090a8] hover:text-[#f0f0f5] border border-[#2a2a3a] hover:border-[#9090a8] transition-colors"
      >
        Reiniciar
      </button>

      <button
        onClick={isRunning ? pause : start}
        className="px-8 py-2 rounded-lg text-sm font-semibold bg-[#e63946] hover:bg-[#c1121f] text-white transition-colors"
      >
        {isRunning ? "Pausar" : phase === "IDLE" ? "Iniciar" : "Continuar"}
      </button>
    </div>
  );
}
