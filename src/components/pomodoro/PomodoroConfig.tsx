"use client";

import { useState } from "react";
import { usePomodoroStore } from "@/store/pomodoroStore";
import {
  MIN_FOCUS_DURATION,
  MAX_FOCUS_DURATION,
  MIN_BREAK_DURATION,
  MAX_BREAK_DURATION,
} from "@/lib/constants";

interface Props {
  onClose: () => void;
}

export function PomodoroConfig({ onClose }: Props) {
  const { focusDuration, breakDuration, setConfig } = usePomodoroStore();

  const [focusMin, setFocusMin] = useState(focusDuration / 60);
  const [breakMin, setBreakMin] = useState(breakDuration / 60);

  function handleSave() {
    const focus = Math.min(
      Math.max(focusMin, MIN_FOCUS_DURATION / 60),
      MAX_FOCUS_DURATION / 60,
    );
    const breakTime = Math.min(
      Math.max(breakMin, MIN_BREAK_DURATION / 60),
      MAX_BREAK_DURATION / 60,
    );
    setConfig(focus * 60, breakTime * 60);
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
      <div className="game-card p-6 w-full max-w-sm">
        <h3 className="text-lg font-semibold text-[#f0f0f5] mb-6">
          Configurar Pomodoro
        </h3>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-[#9090a8] text-sm">
              Tempo de foco (minutos)
            </label>
            <input
              type="number"
              value={focusMin}
              onChange={(e) => setFocusMin(Number(e.target.value))}
              min={MIN_FOCUS_DURATION / 60}
              max={MAX_FOCUS_DURATION / 60}
              className="bg-[#0f0f13] border border-[#2a2a3a] rounded-lg px-4 py-2.5 text-[#f0f0f5] text-sm focus:outline-none focus:border-[#e63946] transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[#9090a8] text-sm">
              Tempo de descanso (minutos)
            </label>
            <input
              type="number"
              value={breakMin}
              onChange={(e) => setBreakMin(Number(e.target.value))}
              min={MIN_BREAK_DURATION / 60}
              max={MAX_BREAK_DURATION / 60}
              className="bg-[#0f0f13] border border-[#2a2a3a] rounded-lg px-4 py-2.5 text-[#f0f0f5] text-sm focus:outline-none focus:border-[#e63946] transition-colors"
            />
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 rounded-lg text-sm text-[#9090a8] border border-[#2a2a3a] hover:border-[#9090a8] transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            className="flex-1 px-4 py-2 rounded-lg text-sm font-semibold bg-[#e63946] hover:bg-[#c1121f] text-white transition-colors"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}
