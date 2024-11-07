import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { en } from '../translations/en';
import { es } from '../translations/es';
import { Translation } from '../types';

interface Store {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  language: 'en' | 'es';
  toggleLanguage: () => void;
  translations: Translation;
}

export const useStore = create<Store>()(
  persist(
    (set) => ({
      isDarkMode: window.matchMedia('(prefers-color-scheme: dark)').matches,
      toggleDarkMode: () =>
        set((state) => {
          const newDarkMode = !state.isDarkMode;
          document.documentElement.classList.toggle('dark', newDarkMode);
          return { isDarkMode: newDarkMode };
        }),
      language: 'en',
      toggleLanguage: () =>
        set((state) => ({
          language: state.language === 'en' ? 'es' : 'en',
          translations: state.language === 'en' ? es : en,
        })),
      translations: en,
    }),
    {
      name: 'theme-storage',
      partialize: (state) => ({ isDarkMode: state.isDarkMode, language: state.language }),
    }
  )
);