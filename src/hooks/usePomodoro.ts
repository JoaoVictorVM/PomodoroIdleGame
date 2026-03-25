import { useEffect, useRef } from "react";
import { usePomodoroStore } from "@/store/pomodoroStore";

export function usePomodoro() {
  const { isRunning, tick, timeLeft, nextPhase } = usePomodoroStore();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        tick();
      }, 1000);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, tick]);

  useEffect(() => {
    if (timeLeft === 0 && isRunning) {
      nextPhase();
    }
  }, [timeLeft, isRunning, nextPhase]);
}
