import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
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

    return NextResponse.json({ success: true, data: stats });
  } catch (error) {
    console.error("[GET STATS ERROR]", error);
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
    }

    const body = await req.json();
    const {
      coins,
      damage,
      luck,
      speed,
      dmgLevel,
      luckLevel,
      speedLevel,
      currentWave,
    } = body;

    if (
      typeof coins !== "number" ||
      typeof damage !== "number" ||
      typeof luck !== "number" ||
      typeof speed !== "number"
    ) {
      return NextResponse.json({ error: "Dados inválidos" }, { status: 400 });
    }

    const stats = await prisma.userStats.update({
      where: { userId: session.user.id },
      data: {
        coins,
        damage,
        luck,
        speed,
        dmgLevel: dmgLevel ?? 0,
        luckLevel: luckLevel ?? 0,
        speedLevel: speedLevel ?? 0,
        currentWave: currentWave ?? 1,
      },
    });

    return NextResponse.json({ success: true, data: stats });
  } catch (error) {
    console.error("[PUT STATS ERROR]", error);
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}
