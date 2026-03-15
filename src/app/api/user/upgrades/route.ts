import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { calcUpgradeCost } from "@/lib/utils";
import { UPGRADE_BASE_COST } from "@/lib/constants";

export async function POST(req: NextRequest) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
    }

    const body = await req.json();
    const { type } = body; // "damage" | "luck" | "speed"

    if (!["damage", "luck", "speed"].includes(type)) {
      return NextResponse.json(
        { error: "Tipo de upgrade inválido" },
        { status: 400 },
      );
    }

    const stats = await prisma.userStats.findUnique({
      where: { userId: session.user.id },
    });

    if (!stats) {
      return NextResponse.json(
        { error: "Stats não encontradas" },
        { status: 404 },
      );
    }

    const levelMap = {
      damage: stats.dmgLevel,
      luck: stats.luckLevel,
      speed: stats.speedLevel,
    };
    const currentLevel = levelMap[type as keyof typeof levelMap];
    const cost = calcUpgradeCost(UPGRADE_BASE_COST, currentLevel);

    if (stats.coins < cost) {
      return NextResponse.json(
        { error: `Moedas insuficientes. Necessário: ${cost}` },
        { status: 400 },
      );
    }

    const updateMap = {
      damage: {
        dmgLevel: stats.dmgLevel + 1,
        damage: stats.damage + 5,
        coins: stats.coins - cost,
      },
      luck: {
        luckLevel: stats.luckLevel + 1,
        luck: stats.luck + 1,
        coins: stats.coins - cost,
      },
      speed: {
        speedLevel: stats.speedLevel + 1,
        speed: stats.speed + 0.5,
        coins: stats.coins - cost,
      },
    };

    const updatedStats = await prisma.userStats.update({
      where: { userId: session.user.id },
      data: updateMap[type as keyof typeof updateMap],
    });

    return NextResponse.json({ success: true, data: updatedStats });
  } catch (error) {
    console.error("[UPGRADE ERROR]", error);
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}
