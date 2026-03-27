import { useEffect, useRef } from "react";
import { useSession } from "next-auth/react";
import { usePomodoroStore } from "@/store/pomodoroStore";
import { useGameStore } from "@/store/gameStore";
import { saveUserStats } from "@/services/userService";

export function useSaveProgress() {
  const { data: session } = useSession();
  const { phase } = usePomodoroStore();
  const prevPhaseRef = useRef<string>(phase);

  useEffect(() => {
    const prevPhase = prevPhaseRef.current;
    prevPhaseRef.current = phase;

    // Salva quando transita de FOCUS → BREAK
    if (prevPhase !== "FOCUS" || phase !== "BREAK") return;
    if (!session?.user) return;

    const {
      coins,
      damage,
      luck,
      speed,
      dmgLevel,
      luckLevel,
      speedLevel,
      currentWave,
    } = useGameStore.getState();

    saveUserStats({
      coins,
      damage,
      luck,
      speed,
      dmgLevel,
      luckLevel,
      speedLevel,
      currentWave,
    }).then((success) => {
      if (success) console.log("✅ Progresso salvo automaticamente");
      else console.warn("⚠️ Falha ao salvar progresso");
    });
  }, [phase, session]);
}
