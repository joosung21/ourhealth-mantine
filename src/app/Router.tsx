import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom';
import AppSpec from '@/samples/AppSpec';
import Color from '@/samples/Color';
import DatePicker from '@/samples/DatePicker';
import Form from '@/samples/Form';
import Modal from '@/samples/Modal';
import Notification from '@/samples/Notification';
import Responsive from '@/samples/Responsive';
import Todo from '@/samples/Todo';
import Typography from '@/samples/Typography';
import NotFound from './NotFound';

const routes = [
  {
    path: '/',
    loader: () => redirect('/todo'),
  },
  {
    path: '/NotFound',
    element: <NotFound />,
  },
  {
    path: '/todo',
    element: <Todo />,
  },
  {
    path: '/app-spec',
    element: <AppSpec />,
  },
  {
    path: '/responsive',
    element: <Responsive />,
  },
  {
    path: '/ui',
    children: [
      {
        path: 'Color',
        element: <Color />,
      },
      {
        path: 'typography',
        element: <Typography />,
      },
      {
        path: 'form',
        element: <Form />,
      },
      {
        path: 'date-picker',
        element: <DatePicker />,
      },
      {
        path: 'notification',
        element: <Notification />,
      },
      {
        path: 'modal',
        element: <Modal />,
      },
    ],
  },
  {
    path: '*',
    loader: () => redirect('/NotFound'),
  },
];

const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
    v7_fetcherPersist: true,
  },
});

export function Router() {
  return <RouterProvider router={router} future={{ v7_startTransition: true }} />;
}
