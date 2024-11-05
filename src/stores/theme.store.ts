// theme.store.ts
// : 전역 테마 상태 관리

import { create } from "zustand";

interface ThemeStoreType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const useThemeStore = create<ThemeStoreType>((set) => ({
  theme: 'light',
  toggleTheme: () => set((state) => ({
    theme: state.theme === 'light' ? 'dark' : 'light',
  })),
}));

export default useThemeStore;