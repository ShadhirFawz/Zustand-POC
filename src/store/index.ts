import { create } from 'zustand';
import { StoreSlice, createStoreSlice } from './storeSlice';
import { UISlice, createUISlice } from './uiSlice';

export type AppState = StoreSlice & UISlice;

export const useAppStore = create<AppState>()((...a) => ({
  ...createStoreSlice(...a),
  ...createUISlice(...a),
}));