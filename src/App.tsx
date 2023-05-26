import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import useTheme from './globalState/theme';
import { ThemeState } from './components/templates/Navbar';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

export default function App() {
  const theme = useTheme((state) => (state as ThemeState).theme);

  return (
    <MantineProvider theme={{ colorScheme: theme }} withNormalizeCSS withGlobalStyles>
      <Notifications />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </MantineProvider>
  );
}
