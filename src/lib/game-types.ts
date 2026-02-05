export interface Hero {
  id: string;
  user_id: string;
  coins: number;
  damage: number;
  luck: number;
  speed: number;
  enemies_killed: number;
  total_focus_time: number;
  created_at: string;
  updated_at: string;
}

export interface Enemy {
  name: string;
  maxHp: number;
  currentHp: number;
  reward: number;
}

export interface GameState {
  hero: Hero | null;
  enemy: Enemy | null;
  isBreak: boolean;
  timeLeft: number;
  isRunning: boolean;
  workDuration: number;
  breakDuration: number;
  sessionsCompleted: number;
}

export const UPGRADE_COSTS = {
  damage: 10,
  luck: 10,
  speed: 10,
} as const;

export const ENEMY_BASE_HP = 100;
export const ENEMY_BASE_REWARD = 5;

export const DEFAULT_WORK_DURATION = 25 * 60;
export const DEFAULT_BREAK_DURATION = 5 * 60;

export function createEnemy(): Enemy {
  const names = [
    "Slime Roxo",
    "Goblin Feroz",
    "Esqueleto Guerreiro",
    "Morcego Vampiro",
    "Lobo Sombrio",
    "Ogro Furioso",
    "Fantasma Errante",
    "Aranha Venenosa",
  ];
  return {
    name: names[Math.floor(Math.random() * names.length)],
    maxHp: ENEMY_BASE_HP,
    currentHp: ENEMY_BASE_HP,
    reward: ENEMY_BASE_REWARD,
  };
}
