import { create } from "zustand";

interface DamageEvent {
  id: number;
  damage: number;
}

interface DamageStore {
  events: DamageEvent[];
  addEvent: (damage: number) => void;
  removeEvent: (id: number) => void;
}

let nextId = 0;

export const useDamageStore = create<DamageStore>((set) => ({
  events: [],
  addEvent: (damage) =>
    set((state) => ({
      events: [...state.events, { id: nextId++, damage }],
    })),
  removeEvent: (id) =>
    set((state) => ({
      events: state.events.filter((e) => e.id !== id),
    })),
}));
