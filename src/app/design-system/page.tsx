// src/app/design-system/page.tsx
import {
  Timer,
  Swords,
  Zap,
  Star,
  Coins,
  Lock,
  LogIn,
  UserPlus,
  LogOut,
  RotateCcw,
  Play,
  Pause,
} from "lucide-react";

// ─── Dados extraídos diretamente do globals.css e dos componentes reais ────────

const COLORS = [
  {
    group: "Polar Night",
    items: [
      { token: "nord0", hex: "#2E3440", label: "Fundo primário" },
      { token: "nord1", hex: "#3B4252", label: "Surface / Card" },
      {
        token: "nord2",
        hex: "#434C5E",
        label: "Border hover / Surface secundária",
      },
      {
        token: "nord3",
        hex: "#4C566A",
        label: "Texto muted / Ícones inativos",
      },
    ],
  },
  {
    group: "Snow Storm",
    items: [
      { token: "nord4", hex: "#D8DEE9", label: "Texto secundário / Labels" },
      { token: "nord5", hex: "#E5E9F0", label: "Texto secundário claro" },
      { token: "nord6", hex: "#ECEFF4", label: "Texto primário" },
    ],
  },
  {
    group: "Frost",
    items: [
      { token: "nord7", hex: "#8FBCBB", label: "Accent teal" },
      { token: "nord8", hex: "#88C0D0", label: "Accent azul claro" },
      {
        token: "nord9",
        hex: "#81A1C1",
        label: "Hover de links / Accent secundário",
      },
      {
        token: "nord10",
        hex: "#5E81AC",
        label: "Botão primário / Focus de input",
      },
    ],
  },
  {
    group: "Aurora",
    items: [
      {
        token: "nord11",
        hex: "#BF616A",
        label: "Perigo / Ponteiro do timer / Logo",
      },
      { token: "nord12", hex: "#D08770", label: "Hover do botão de perigo" },
      { token: "nord13", hex: "#EBCB8B", label: "Moedas / Ícone de sorte" },
      { token: "nord14", hex: "#A3BE8C", label: "Sucesso / Fase de descanso" },
      { token: "nord15", hex: "#B48EAD", label: "Accent roxo" },
    ],
  },
];

const TYPOGRAPHY = [
  {
    label: "Título de página",
    size: "text-xl",
    weight: "font-semibold",
    sample: "Pomodoro Idle Game",
    detail: "20px / semibold",
  },
  {
    label: "Título de card",
    size: "text-base",
    weight: "font-semibold",
    sample: "Entrar",
    detail: "16px / semibold",
  },
  {
    label: "Timer",
    size: "text-6xl",
    weight: "font-light",
    sample: "25:00",
    detail: "60px / light",
  },
  {
    label: "Corpo / Label",
    size: "text-sm",
    weight: "font-medium",
    sample: "Email",
    detail: "14px / medium",
  },
  {
    label: "Corpo regular",
    size: "text-sm",
    weight: "font-normal",
    sample: "+5 de dano por nível",
    detail: "14px / regular",
  },
  {
    label: "Texto muted",
    size: "text-sm",
    weight: "font-normal",
    sample: "Texto secundário apagado",
    detail: "14px / regular / #4C566A",
  },
  {
    label: "Caption / Badge",
    size: "text-xs",
    weight: "font-normal",
    sample: "Nv.3 · Loja aberta",
    detail: "12px / regular",
  },
  {
    label: "Section header",
    size: "text-xs",
    weight: "font-medium",
    sample: "HERÓI",
    detail: "12px / medium / uppercase / tracking",
  },
];

const SPACINGS = [
  { token: "p-1 / gap-1", px: 4 },
  { token: "p-1.5", px: 6 },
  { token: "p-2 / gap-2", px: 8 },
  { token: "p-2.5", px: 10 },
  { token: "p-3 / gap-3", px: 12 },
  { token: "p-4 / gap-4", px: 16 },
  { token: "p-5", px: 20 },
  { token: "p-6", px: 24 },
  { token: "p-8", px: 32 },
  { token: "p-10", px: 40 },
];

// ─── Seção ────────────────────────────────────────────────────────────────────

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h2 className="text-base font-semibold text-[#ECEFF4]">{title}</h2>
        <div className="h-px bg-[#3B4252]" />
      </div>
      {children}
    </section>
  );
}

function GroupLabel({ label }: { label: string }) {
  return (
    <p className="text-xs font-medium text-[#4C566A] uppercase tracking-wider">
      {label}
    </p>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-[#2E3440]">
      {/* Header */}
      <div className="w-full border-b border-[#3B4252] bg-[#2E3440]">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center gap-3">
          <div className="w-7 h-7 bg-[#BF616A] rounded-lg flex items-center justify-center">
            <Timer size={14} className="text-[#ECEFF4]" />
          </div>
          <span className="text-[#ECEFF4] font-semibold text-sm">
            Design System
          </span>
          <span className="text-[#4C566A] text-xs">· Pomodoro Idle Game</span>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 py-12 flex flex-col gap-16">
        {/* ── CORES ─────────────────────────────────────────────────────────── */}
        <Section title="Cores">
          {COLORS.map((group) => (
            <div key={group.group} className="flex flex-col gap-3">
              <GroupLabel label={group.group} />
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {group.items.map((color) => (
                  <div key={color.token} className="flex flex-col gap-2">
                    <div
                      className="w-full h-14 rounded-lg border border-[#3B4252]"
                      style={{ background: color.hex }}
                    />
                    <div className="flex flex-col gap-0.5">
                      <span className="text-xs font-medium text-[#ECEFF4]">
                        {color.hex}
                      </span>
                      <span className="text-xs text-[#4C566A]">
                        {color.token}
                      </span>
                      <span className="text-xs text-[#4C566A]">
                        {color.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Section>

        {/* ── TIPOGRAFIA ────────────────────────────────────────────────────── */}
        <Section title="Tipografia">
          <div className="flex flex-col divide-y divide-[#3B4252]">
            {TYPOGRAPHY.map((t) => (
              <div
                key={t.label}
                className="flex items-center justify-between py-4 gap-4"
              >
                <div className="flex flex-col gap-0.5 w-40 flex-shrink-0">
                  <span className="text-xs text-[#4C566A]">{t.label}</span>
                  <span className="text-xs text-[#4C566A]">{t.detail}</span>
                </div>
                <div className="flex-1">
                  <span
                    className={`${t.size} ${t.weight} ${t.label === "Texto muted" ? "text-[#4C566A]" : t.label === "Section header" ? "text-[#4C566A] uppercase tracking-wider" : "text-[#ECEFF4]"}`}
                  >
                    {t.sample}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── ESPAÇAMENTOS ──────────────────────────────────────────────────── */}
        <Section title="Espaçamentos">
          <div className="flex flex-col gap-3">
            {SPACINGS.map((s) => (
              <div key={s.token} className="flex items-center gap-4">
                <div
                  className="bg-[#5E81AC]/30 border border-[#5E81AC]/50 rounded flex-shrink-0"
                  style={{ width: s.px, height: 20 }}
                />
                <div className="flex gap-3 items-center">
                  <span className="text-xs font-medium text-[#ECEFF4] w-28">
                    {s.token}
                  </span>
                  <span className="text-xs text-[#4C566A]">{s.px}px</span>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── BOTÕES ────────────────────────────────────────────────────────── */}
        <Section title="Botões">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <GroupLabel label="Variantes" />
              <div className="flex flex-wrap gap-3 items-center">
                {/* Primário */}
                <button className="flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-medium bg-[#5E81AC] hover:bg-[#81A1C1] text-[#ECEFF4] transition-colors">
                  <Play size={14} /> Iniciar
                </button>
                {/* Perigo */}
                <button className="flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-medium bg-[#BF616A] hover:bg-[#D08770] text-[#ECEFF4] transition-colors">
                  <Pause size={14} /> Pausar
                </button>
                {/* Ghost */}
                <button className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm text-[#4C566A] hover:text-[#D8DEE9] border border-[#3B4252] hover:border-[#434C5E] transition-colors">
                  <RotateCcw size={13} /> Reiniciar
                </button>
                {/* Link */}
                <button className="flex items-center gap-1.5 text-sm text-[#ECEFF4] hover:text-[#81A1C1] transition-colors">
                  <LogIn size={13} /> Entrar
                </button>
                {/* Register */}
                <button className="flex items-center gap-1.5 text-sm bg-[#5E81AC] hover:bg-[#81A1C1] text-[#ECEFF4] rounded-lg px-3 py-1.5 transition-colors">
                  <UserPlus size={13} /> Registrar
                </button>
                {/* Sair */}
                <button className="flex items-center gap-1.5 text-sm text-[#4C566A] hover:text-[#ECEFF4] border border-[#3B4252] hover:border-[#434C5E] rounded-lg px-3 py-1.5 transition-colors">
                  <LogOut size={13} /> Sair
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <GroupLabel label="Estados" />
              <div className="flex flex-wrap gap-3 items-center">
                {/* Normal */}
                <button className="flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-medium bg-[#5E81AC] text-[#ECEFF4]">
                  Normal
                </button>
                {/* Hover simulado */}
                <button className="flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-medium bg-[#81A1C1] text-[#ECEFF4]">
                  Hover
                </button>
                {/* Disabled */}
                <button
                  disabled
                  className="flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-medium bg-[#5E81AC] text-[#ECEFF4] opacity-50 cursor-not-allowed"
                >
                  Desabilitado
                </button>
                {/* Loading */}
                <button
                  disabled
                  className="flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-medium bg-[#5E81AC] text-[#ECEFF4] opacity-50 cursor-not-allowed"
                >
                  Carregando...
                </button>
                {/* Bloqueado upgrade */}
                <button
                  disabled
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#2E3440] text-[#4C566A] cursor-not-allowed"
                >
                  <Lock size={11} /> Bloqueado
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <GroupLabel label="Botão de upgrade — estados" />
              <div className="flex flex-wrap gap-3 items-center">
                {/* Pode comprar */}
                <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#5E81AC] hover:bg-[#81A1C1] text-[#ECEFF4] transition-all">
                  <Coins size={11} /> 10
                </button>
                {/* Não pode comprar */}
                <button
                  disabled
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#2E3440] text-[#4C566A] cursor-not-allowed"
                >
                  <Coins size={11} /> 23
                </button>
                {/* Loja bloqueada */}
                <button
                  disabled
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#2E3440] text-[#4C566A] cursor-not-allowed"
                >
                  <Lock size={11} /> Bloqueado
                </button>
              </div>
            </div>
          </div>
        </Section>

        {/* ── CARDS ─────────────────────────────────────────────────────────── */}
        <Section title="Cards">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* nord-card */}
            <div className="flex flex-col gap-3">
              <GroupLabel label="nord-card — bg #3B4252" />
              <div className="bg-[#3B4252] border border-[#434C5E] rounded-xl p-6">
                <h3 className="text-xs font-medium text-[#4C566A] uppercase tracking-wider mb-4">
                  Título da seção
                </h3>
                <p className="text-sm text-[#D8DEE9]">
                  Conteúdo do card com texto secundário.
                </p>
                <p className="text-xs text-[#4C566A] mt-1">
                  Texto muted para informações auxiliares.
                </p>
              </div>
            </div>

            {/* nord-surface */}
            <div className="flex flex-col gap-3">
              <GroupLabel label="nord-surface — bg #2E3440" />
              <div className="bg-[#2E3440] border border-[#3B4252] rounded-xl p-6">
                <h3 className="text-xs font-medium text-[#4C566A] uppercase tracking-wider mb-4">
                  Título da seção
                </h3>
                <p className="text-sm text-[#D8DEE9]">
                  Conteúdo do card com texto secundário.
                </p>
                <p className="text-xs text-[#4C566A] mt-1">
                  Texto muted para informações auxiliares.
                </p>
              </div>
            </div>

            {/* Upgrade card */}
            <div className="flex flex-col gap-3">
              <GroupLabel label="UpgradeCard" />
              <div className="bg-[#3B4252] border border-[#434C5E] rounded-xl p-4">
                <h3 className="text-xs font-medium text-[#4C566A] uppercase tracking-wider mb-3">
                  Loja
                </h3>
                {[
                  {
                    label: "Dano",
                    desc: "+5 de dano por nível",
                    icon: Swords,
                    color: "#BF616A",
                    bg: "#BF616A22",
                    cost: 10,
                    canAfford: true,
                  },
                  {
                    label: "Velocidade",
                    desc: "+0.5 ataque/s por nível",
                    icon: Zap,
                    color: "#EBCB8B",
                    bg: "#EBCB8B22",
                    cost: 15,
                    canAfford: false,
                  },
                  {
                    label: "Sorte",
                    desc: "+1 moeda extra por kill",
                    icon: Star,
                    color: "#A3BE8C",
                    bg: "#A3BE8C22",
                    cost: 23,
                    canAfford: false,
                  },
                ].map((u) => (
                  <div
                    key={u.label}
                    className="flex items-center justify-between gap-3 py-2.5 border-b border-[#434C5E] last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: u.bg }}
                      >
                        <u.icon size={15} style={{ color: u.color }} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-[#ECEFF4] font-medium">
                            {u.label}
                          </span>
                          <span className="text-xs bg-[#2E3440] border border-[#3B4252] rounded px-1.5 py-0.5 text-[#4C566A]">
                            Nv.1
                          </span>
                        </div>
                        <span className="text-xs text-[#4C566A]">{u.desc}</span>
                      </div>
                    </div>
                    <button
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium flex-shrink-0 ${u.canAfford ? "bg-[#5E81AC] text-[#ECEFF4]" : "bg-[#2E3440] text-[#4C566A] cursor-not-allowed"}`}
                    >
                      <Coins size={11} /> {u.cost}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Badge / Pill */}
            <div className="flex flex-col gap-3">
              <GroupLabel label="Badges & Pills" />
              <div className="flex flex-wrap gap-3 items-start">
                {/* Badge de nível */}
                <span className="text-xs bg-[#2E3440] border border-[#3B4252] rounded px-1.5 py-0.5 text-[#4C566A]">
                  Nv.3
                </span>
                {/* Fase ativa */}
                <div className="flex items-center gap-2 bg-[#2E3440] rounded-full px-3 py-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#BF616A]" />
                  <span className="text-xs font-medium tracking-widest uppercase text-[#4C566A]">
                    Foco
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-[#2E3440] rounded-full px-3 py-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#A3BE8C]" />
                  <span className="text-xs font-medium tracking-widest uppercase text-[#4C566A]">
                    Descanso
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-[#2E3440] rounded-full px-3 py-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4C566A]" />
                  <span className="text-xs font-medium tracking-widest uppercase text-[#4C566A]">
                    Idle
                  </span>
                </div>
                {/* Status loja */}
                <span className="text-xs font-medium text-[#A3BE8C]">
                  Loja aberta
                </span>
                <span className="text-xs font-medium text-[#BF616A]">
                  Bloqueado durante o foco
                </span>
              </div>
            </div>
          </div>
        </Section>

        {/* ── FORMULÁRIOS & INPUTS ──────────────────────────────────────────── */}
        <Section title="Formulários & Inputs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex flex-col gap-5">
              {/* Default */}
              <div className="flex flex-col gap-2">
                <GroupLabel label="Default" />
                <label className="text-[#D8DEE9] text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  readOnly
                  className="nord-input"
                />
              </div>

              {/* Focus simulado */}
              <div className="flex flex-col gap-2">
                <GroupLabel label="Focus" />
                <label className="text-[#D8DEE9] text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  defaultValue="seu@email.com"
                  readOnly
                  className="bg-[#2E3440] border border-[#5E81AC] rounded-lg px-4 py-3 text-[#ECEFF4] text-sm w-full outline-none"
                />
              </div>

              {/* Erro */}
              <div className="flex flex-col gap-2">
                <GroupLabel label="Erro" />
                <label className="text-[#D8DEE9] text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  defaultValue="emailerrado"
                  readOnly
                  className="bg-[#2E3440] border border-[#BF616A] rounded-lg px-4 py-3 text-[#ECEFF4] text-sm w-full outline-none"
                />
                <div className="bg-[#BF616A]/10 border border-[#BF616A]/20 rounded-lg px-4 py-3 text-[#BF616A] text-sm">
                  Email ou senha incorretos
                </div>
              </div>

              {/* Disabled */}
              <div className="flex flex-col gap-2">
                <GroupLabel label="Disabled" />
                <label className="text-[#D8DEE9] text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  disabled
                  className="bg-[#2E3440] border border-[#3B4252] rounded-lg px-4 py-3 text-[#4C566A] text-sm w-full outline-none opacity-50 cursor-not-allowed"
                />
              </div>
            </div>

            {/* Formulário completo */}
            <div className="flex flex-col gap-2">
              <GroupLabel label="Formulário completo" />
              <div className="bg-[#3B4252] border border-[#434C5E] rounded-xl p-6">
                <h3 className="text-sm font-semibold text-[#ECEFF4] mb-5">
                  Criar conta
                </h3>
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-[#D8DEE9] text-sm font-medium">
                      Nome{" "}
                      <span className="text-[#4C566A] font-normal">
                        (opcional)
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Seu nome"
                      readOnly
                      className="nord-input"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[#D8DEE9] text-sm font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="seu@email.com"
                      readOnly
                      className="nord-input"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[#D8DEE9] text-sm font-medium">
                      Senha
                    </label>
                    <input
                      type="password"
                      placeholder="Mínimo 6 caracteres"
                      readOnly
                      className="nord-input"
                    />
                  </div>
                  <button className="w-full bg-[#5E81AC] hover:bg-[#81A1C1] text-[#ECEFF4] font-medium rounded-lg px-4 py-3 text-sm transition-colors">
                    Criar conta
                  </button>
                  <p className="text-center text-[#4C566A] text-xs">
                    Já tem conta? <span className="text-[#81A1C1]">Entrar</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* ── NAVBAR ────────────────────────────────────────────────────────── */}
        <Section title="Navbar">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <GroupLabel label="Usuário não autenticado" />
              <div className="bg-[#2E3440] border border-[#3B4252] rounded-xl overflow-hidden">
                <div className="w-full border-b border-[#3B4252]">
                  <div className="px-4 h-14 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 bg-[#BF616A] rounded-lg flex items-center justify-center">
                        <Timer size={14} className="text-[#ECEFF4]" />
                      </div>
                      <span className="text-[#ECEFF4] font-semibold text-sm">
                        Pomodoro Idle Game
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1.5 text-sm text-[#ECEFF4]">
                        <LogIn size={13} /> Entrar
                      </span>
                      <span className="flex items-center gap-1.5 text-sm bg-[#5E81AC] text-[#ECEFF4] rounded-lg px-3 py-1.5">
                        <UserPlus size={13} /> Registrar
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <GroupLabel label="Usuário autenticado" />
              <div className="bg-[#2E3440] border border-[#3B4252] rounded-xl overflow-hidden">
                <div className="w-full border-b border-[#3B4252]">
                  <div className="px-4 h-14 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 bg-[#BF616A] rounded-lg flex items-center justify-center">
                        <Timer size={14} className="text-[#ECEFF4]" />
                      </div>
                      <span className="text-[#ECEFF4] font-semibold text-sm">
                        Pomodoro Idle Game
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[#4C566A] text-sm">
                        jogador@email.com
                      </span>
                      <span className="flex items-center gap-1.5 text-sm text-[#4C566A] border border-[#3B4252] rounded-lg px-3 py-1.5">
                        <LogOut size={13} /> Sair
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Footer */}
        <div className="text-center pb-8">
          <p className="text-xs text-[#4C566A]">
            Pomodoro Idle Game · Design System
          </p>
        </div>
      </main>
    </div>
  );
}
