import { create } from "zustand";
import { PomodoroPhase } from "@/types";
import {
  DEFAULT_FOCUS_DURATION,
  DEFAULT_BREAK_DURATION,
} from "@/lib/constants";

interface PomodoroStore {
  phase: PomodoroPhase;
  timeLeft: number;
  isRunning: boolean;
  focusDuration: number;
  breakDuration: number;

  start: () => void;
  pause: () => void;
  reset: () => void;
  tick: () => void;
  setConfig: (focus: number, breakTime: number) => void;
  nextPhase: () => void;
}

export const usePomodoroStore = create<PomodoroStore>((set, get) => ({
  phase: "IDLE",
  timeLeft: DEFAULT_FOCUS_DURATION,
  isRunning: false,
  focusDuration: DEFAULT_FOCUS_DURATION,
  breakDuration: DEFAULT_BREAK_DURATION,

  start: () =>
    set({
      isRunning: true,
      phase: get().phase === "IDLE" ? "FOCUS" : get().phase,
    }),
  pause: () => set({ isRunning: false }),
  reset: () =>
    set({
      phase: "IDLE",
      isRunning: false,
      timeLeft: get().focusDuration,
    }),
  tick: () => {
    const { timeLeft } = get();
    if (timeLeft > 0) {
      set({ timeLeft: timeLeft - 1 });
    }
  },
  setConfig: (focus, breakTime) =>
    set({
      focusDuration: focus,
      breakDuration: breakTime,
      timeLeft: focus,
      phase: "IDLE",
      isRunning: false,
    }),
  nextPhase: () => {
    const { phase, focusDuration, breakDuration } = get();
    if (phase === "FOCUS") {
      set({ phase: "BREAK", timeLeft: breakDuration, isRunning: true });
    } else {
      set({ phase: "FOCUS", timeLeft: focusDuration, isRunning: true });
    }
  },
}));
