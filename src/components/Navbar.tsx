import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';
import { Switch, Group } from '@mantine/core';
import { IoSunny, IoIosMoon } from 'react-icons/all';
import { useEffect, useState } from 'react';
import useTheme from '../globalState/theme';

type Mode = 'light' | 'dark';

export interface ThemeState {
  theme: Mode;
  setDarkMode: () => void;
  setLightMode: () => void;
}

export default function Navbar() {
  const theme = useTheme((state) => (state as ThemeState).theme);
  const setDarkMode = useTheme((state) => (state as ThemeState).setDarkMode);
  const setLightMode = useTheme((state) => (state as ThemeState).setLightMode);
  const [mode, setMode] = useState<Mode>(theme);

  const toggleColorScheme = () => {
    mode === 'light' ? setMode('dark') : setMode('light');
    mode === 'light' ? setDarkMode() : setLightMode();
  };

  useEffect(() => {
    document.documentElement.setAttribute('class', theme);
  }, [theme]);

  return (
    <nav className="bg-white px-5 border-b border-gray-100 dark:bg-[#1A1B1E] dark:border-gray-800 sticky top-0">
      <div className="flex items-center justify-between w-full max-w-4xl m-auto">
        <Topbar />
        <Group>
          <Switch color="gray" checked={mode === 'dark'} onChange={toggleColorScheme} size="md" onLabel={<IoSunny className="text-yellow-300 w-4 h-4" />} offLabel={<IoIosMoon className="text-blue-600 w-4 h-4" />} />
        </Group>
      </div>
    </nav>
  );
}

function Topbar() {
  const location = useLocation();

  return (
    <div className="flex h-16 items-center">
      <Link to="/" className={clsx(def, location.pathname === '/' ? active : nonactive)}>
        Home
      </Link>
      <Link to="/about" className={clsx(def, location.pathname === '/about' ? active : nonactive)}>
        About
      </Link>
      <Link to="/skills" className={clsx(def, location.pathname === '/skills' ? active : nonactive)}>
        Skills
      </Link>
      <Link to="/projects" className={clsx(def, location.pathname === '/projects' ? active : nonactive)}>
        Projects
      </Link>
      <Link to="/contact" className={clsx(def, location.pathname === '/contact' ? active : nonactive)}>
        Contact
      </Link>
    </div>
  );
}

const active = 'text-blue-600 hover:bg-blue-100/50 dark:text-blue-400 dark:hover:bg-blue-100/10';
const nonactive = 'hover:bg-gray-200/50 dark:text-gray-200 dark:hover:bg-gray-200/10';
const def = 'py-2 px-4 rounded-md font-semibold text-sm  active:scale-90';
