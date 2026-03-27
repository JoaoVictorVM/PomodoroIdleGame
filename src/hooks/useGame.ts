import { usePomodoro } from "./usePomodoro";
import { useGameLoop } from "./useGameLoop";
import { useLoadUserStats } from "./useLoadUserStats";
import { useSaveProgress } from "./useSaveProgress";

export function useGame() {
  usePomodoro();
  useGameLoop();
  useLoadUserStats();
  useSaveProgress();
}
