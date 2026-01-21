import { StateCreator } from 'zustand';
import { UISlice } from './uiSlice';

export interface StoreSlice {
  storeName: string;
  updateStoreName: (newName: string) => void;
}

export const createStoreSlice: StateCreator<
  StoreSlice & UISlice,
  [],
  [],
  StoreSlice
> = (set) => ({
  storeName: 'Starzi Store',
  updateStoreName: (newName: string) => set({ storeName: newName }),
});