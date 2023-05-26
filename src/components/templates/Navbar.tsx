import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';
import { Switch, Group, Burger, Drawer } from '@mantine/core';
import { IoSunny, IoIosMoon } from 'react-icons/all';
import { useEffect, useState } from 'react';
import useTheme from '../../globalState/theme';
import { useDisclosure } from '@mantine/hooks';

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
    <nav id="navbar" className="bg-white px-5 border-b border-gray-100 dark:bg-[#1A1B1E] dark:border-gray-800 sticky top-0 z-50">
      <div className="flex items-center justify-between w-full max-w-4xl m-auto">
        <Navlinks posision="top" />
        <BurgerButton />
        <Group>
          <Switch color="gray" checked={mode === 'dark'} onChange={toggleColorScheme} size="md" onLabel={<IoSunny className="text-yellow-300 w-4 h-4" />} offLabel={<IoIosMoon className="text-blue-600 w-4 h-4" />} />
        </Group>
      </div>
    </nav>
  );
}

function Navlinks({ posision }: { posision: 'top' | 'side' }): JSX.Element {
  const location = useLocation();
  return (
    <div className={clsx(posision === 'top' && 'sm:flex h-16 items-center hidden', posision === 'side' && 'flex flex-col items-center gap-5 sm:hidden text-center')}>
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

function BurgerButton() {
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <>
      <Burger className="sm:hidden h-16" opened={opened} onClick={toggle} />
      <Drawer opened={opened} onClose={toggle} onClick={toggle} overlayProps={{ opacity: 0.5, blur: 4 }}>
        <Navlinks posision="side" />
      </Drawer>
    </>
  );
}

const active = 'text-blue-600 hover:bg-blue-100/50 dark:text-blue-400 dark:hover:bg-blue-100/10';
const nonactive = 'hover:bg-gray-200/50 dark:text-gray-200 dark:hover:bg-gray-200/10';
const def = 'py-2 px-4 rounded-md font-semibold text-sm active:scale-90 w-full';
