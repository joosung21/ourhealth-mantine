import './index.css';
import './global.scss';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import AppSpec from '../samples/AppSpec';
import Color from '../samples/Color';
import DatePicker from '../samples/DatePicker';
import Form from '../samples/Form';
import Modal from '../samples/Modal';
import Notification from '../samples/Notification';
import Responsive from '../samples/Responsive';
import Todo from '../samples/Todo';
import Typography from '../samples/Typography';
import { theme } from '../theme';
import Layout from './Layouts/Layout';
import NotFound from './NotFound';

export default function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="light">
      <Notifications />
      <ModalsProvider></ModalsProvider>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          <Route path="*" element={<NotFound />} />

          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/todo" replace />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/app-spec" element={<AppSpec />} />
            <Route path="/responsive" element={<Responsive />} />
            <Route path="/ui">
              <Route path="/ui/color" element={<Color />} />
              <Route path="/ui/typography" element={<Typography />} />
              <Route path="/ui/form" element={<Form />} />
              <Route path="/ui/date-picker" element={<DatePicker />} />
              <Route path="/ui/notification" element={<Notification />} />
              <Route path="/ui/modal" element={<Modal />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}
