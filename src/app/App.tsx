import './global.scss';

import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import { theme } from '../theme';
import Layout from './Layouts/Layout';
import { Router } from './Router';

const rootPaths = ['/', '/signin', '/signup', '/NotFound'];

// get current path
export default function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="light">
      <Notifications />
      <ModalsProvider>
        <Layout />
      </ModalsProvider>
    </MantineProvider>
  );
}
