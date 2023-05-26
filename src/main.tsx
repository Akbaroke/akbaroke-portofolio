import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
// import { MantineProvider } from '@mantine/core';
// import { Notifications } from '@mantine/notifications';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
