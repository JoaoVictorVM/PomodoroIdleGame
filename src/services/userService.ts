import { UpdateStatsPayload, ApiResponse, UserStats } from "@/types";

export async function fetchUserStats(): Promise<UserStats | null> {
  try {
    const res = await fetch("/api/user/stats");
    if (!res.ok) return null;
    const data: ApiResponse<UserStats> = await res.json();
    return data.data ?? null;
  } catch {
    return null;
  }
}

export async function saveUserStats(
  payload: UpdateStatsPayload,
): Promise<boolean> {
  try {
    const res = await fetch("/api/user/stats", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export async function purchaseUpgrade(
  type: "damage" | "luck" | "speed",
): Promise<UserStats | null> {
  try {
    const res = await fetch("/api/user/upgrades", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type }),
    });
    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.error || "Erro ao comprar upgrade");
    }
    const data: ApiResponse<UserStats> = await res.json();
    return data.data ?? null;
  } catch (error) {
    throw error;
  }
}
