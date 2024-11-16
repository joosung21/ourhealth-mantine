import { Navigate, Route, Routes } from 'react-router-dom';
import FetchData from '@/samples/FetchData';
import AppSpec from '../samples/AppSpec';
import Color from '../samples/Color';
import DatePicker from '../samples/DatePicker';
import Form from '../samples/Form';
import Modal from '../samples/Modal';
import Notification from '../samples/Notification';
import Responsive from '../samples/Responsive';
import Todo from '../samples/Todo';
import Typography from '../samples/Typography';
import Layout from './Layouts/Layout';
import NotFound from './NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Not Found Route */}
      <Route path="*" element={<NotFound />} />

      {/* Layout Wrapper */}
      <Route element={<Layout />}>
        {/* Redirect to /todo */}
        <Route path="/" element={<Navigate to="/todo" replace />} />

        {/* Main Routes */}
        <Route path="/todo" element={<Todo />} />
        <Route path="/app-spec" element={<AppSpec />} />
        <Route path="/responsive" element={<Responsive />} />
        <Route path="/fetch-data" element={<FetchData />} />

        {/* UI Sub-Routes */}
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
  );
}
