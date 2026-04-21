# Pomodoro Idle Game

Um jogo idle fullstack integrado à técnica Pomodoro. Durante o foco, seu herói combate inimigos automaticamente. No descanso, gaste as moedas conquistadas em upgrades para ficar mais forte.

**[▶ Jogar agora](https://pomodoroidlegame.vercel.app/)**

---

## Stack

| Camada         | Tecnologia                           |
| -------------- | ------------------------------------ |
| Front-end      | Next.js 14 (App Router) + TypeScript |
| Estilização    | Tailwind CSS v4 + Design System Nord |
| Estado global  | Zustand                              |
| Autenticação   | NextAuth.js v5 (JWT + Credentials)   |
| ORM            | Prisma v7                            |
| Banco de dados | PostgreSQL (Vercel Postgres)         |
| Ícones         | Lucide React                         |
| Deploy         | Vercel                               |

---

## Funcionalidades

**Pomodoro**

- Timer configurável (foco e descanso)
- Fases: IDLE → FOCUS → BREAK com transição automática
- Configuração de duração via modal

**Jogo Idle**

- Combate automático durante a fase FOCUS
- Sistema de ondas com escalonamento de HP
- Animação de ataque do herói e números de dano flutuantes
- Personagens customizáveis via PNG

**Upgrades**

- Loja disponível no IDLE e BREAK, bloqueada durante o FOCUS
- 3 upgrades: Dano (+5 por nível), Velocidade (+0.5 ataque/s), Sorte (+1 moeda por kill)
- Custo escalonado: `baseCost × 1.5^nível`

**Autenticação**

- Login opcional — jogadores sem conta jogam normalmente com estado local
- Registro e login com e-mail e senha
- Progresso salvo automaticamente ao fim de cada ciclo FOCUS → BREAK

---

## Estrutura do Projeto

```
src/
├── app/
│   ├── (auth)/login e register   # Páginas de autenticação
│   ├── api/auth/                 # NextAuth + registro
│   ├── api/user/stats            # GET e PUT do progresso
│   └── api/user/upgrades         # POST compra de upgrade
├── components/
│   ├── auth/                     # LoginForm, RegisterForm
│   ├── game/                     # GameArena, Hero, Enemy, HealthBar
│   ├── pomodoro/                 # Timer, Controls, Config
│   ├── shop/                     # Shop, UpgradeCard
│   ├── stats/                    # HeroStats
│   └── ui/                       # Navbar
├── hooks/
│   ├── useGame.ts                # Agregador de todos os hooks
│   ├── usePomodoro.ts            # Lógica do timer
│   ├── useGameLoop.ts            # Loop de combate
│   ├── useLoadUserStats.ts       # Carrega stats do banco ao logar
│   └── useSaveProgress.ts        # Salva progresso ao fim do FOCUS
├── store/
│   ├── pomodoroStore.ts          # Estado do timer (Zustand)
│   ├── gameStore.ts              # Estado do jogo (Zustand)
│   └── damageStore.ts            # Eventos de dano (Zustand)
├── lib/
│   ├── auth.ts                   # Configuração NextAuth
│   ├── prisma.ts                 # Singleton Prisma Client
│   ├── utils.ts                  # Funções utilitárias
│   └── constants.ts              # Constantes do jogo
├── services/
│   └── userService.ts            # Funções de chamada à API
└── types/
    └── index.ts                  # Tipagens centralizadas
prisma/
├── schema.prisma                 # Modelos: User, UserStats, NextAuth
└── seed.ts                       # Usuário de teste
```

---

## Banco de Dados

```prisma
model User {
  id           String     @id @default(cuid())
  email        String     @unique
  passwordHash String?
  stats        UserStats?
}

model UserStats {
  userId      String @unique
  coins       Int    @default(0)
  damage      Float  @default(5)
  speed       Float  @default(1)
  luck        Int    @default(1)
  dmgLevel    Int    @default(0)
  speedLevel  Int    @default(0)
  luckLevel   Int    @default(0)
  currentWave Int    @default(1)
}
```

---

## Rodando Localmente

**Pré-requisitos:** Node.js 20+, PostgreSQL (ou conta no Neon/Vercel Postgres)

```bash
# 1. Clonar o repositório
git clone https://github.com/JoaoVictorVM/Pomodoro-IdleGame.git
cd Pomodoro-IdleGame

# 2. Instalar dependências
npm install

# 3. Configurar variáveis de ambiente
cp .env.example .env
# Preencha DATABASE_URL, POSTGRES_URL, PRISMA_DATABASE_URL e AUTH_SECRET

# 4. Gerar o Prisma Client e rodar migrations
npx prisma generate
npx prisma migrate dev

# 5. Popular o banco com usuário de teste (opcional)
npx prisma db seed

# 6. Iniciar o servidor
npm run dev
```

Acesse `http://localhost:3000`.

Usuário de teste (após seed): `teste@exemplo.com` / `senha123`

---

## Variáveis de Ambiente

```env
DATABASE_URL=             # URL de conexão PostgreSQL
POSTGRES_URL=             # URL com pooling (runtime)
PRISMA_DATABASE_URL=      # URL sem pooling (migrations)
AUTH_SECRET=              # Chave secreta do NextAuth (gere com: node -e "console.log(require('crypto').randomBytes(32).toString('base64'))")
NEXTAUTH_URL=             # http://localhost:3000 em dev
```

---

## Scripts

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build de produção
npx prisma studio    # Interface visual do banco
npx prisma migrate dev --name <nome>  # Nova migration
npx prisma db seed   # Seed do banco
```

---

## Deploy

O projeto está configurado para deploy contínuo na Vercel. Todo push para `main` dispara um novo deploy automaticamente.

Para deploy manual:

```bash
npx prisma migrate deploy  # Aplica migrations em produção
```

## Licenca

Este projeto esta sob a licenca MIT. Veja o arquivo [LICENSE](LICENSE).
