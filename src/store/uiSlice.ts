import { StateCreator } from 'zustand';
import { StoreSlice } from './storeSlice';

export type Theme = 'light' | 'dark';

export interface UISlice {
  theme: Theme;
  counter: number;
  toggleTheme: () => void;
  incrementCounter: () => void;
  decrementCounter: () => void;
  resetCounter: () => void;
}

export const createUISlice: StateCreator<
  StoreSlice & UISlice,
  [],
  [],
  UISlice
> = (set) => ({
  theme: 'light',
  counter: 0,
  toggleTheme: () => set((state: { theme: string; }) => ({ 
    theme: state.theme === 'light' ? 'dark' : 'light' 
  })),
  incrementCounter: () => set((state: { counter: number; }) => ({ 
    counter: state.counter + 1 
  })),
  decrementCounter: () => set((state: { counter: number; }) => ({ 
    counter: state.counter - 1 
  })),
  resetCounter: () => set({ counter: 0 }),
});