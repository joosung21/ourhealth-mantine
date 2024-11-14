import './global.scss';

import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { theme } from '../theme';
import Layout from './Layouts/Layout';

// import { Router } from './Router';

const rootPaths = ['/', '/signin', '/signup'];

export default function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="light">
      <Notifications />
      {/* <Router /> */}
      <Layout />
    </MantineProvider>
  );
}
