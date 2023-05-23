import { create } from 'zustand';
import { ThemeState } from '../components/Navbar';

const initialTheme = localStorage.getItem('theme');

const useTheme = create((set) => ({
  theme: initialTheme || 'light',
  setDarkMode: () =>
    set(() => ({
      theme: 'dark',
    })),
  setLightMode: () =>
    set(() => ({
      theme: 'light',
    })),
}));

useTheme.subscribe((newState) => {
  console.log('Tema berubah:', (newState as ThemeState).theme);
  localStorage.setItem('theme', (newState as ThemeState).theme);
});

export default useTheme;
