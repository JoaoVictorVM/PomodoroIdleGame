import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useGameStore } from "@/store/gameStore";
import { fetchUserStats } from "@/services/userService";

export function useLoadUserStats() {
  const { data: session, status } = useSession();
  const { loadStats } = useGameStore();

  useEffect(() => {
    if (status !== "authenticated" || !session?.user) return;

    async function load() {
      const stats = await fetchUserStats();
      if (stats) loadStats(stats);
    }

    load();
  }, [status, session]);
}
