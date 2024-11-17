import { Navigate, Route, Routes } from 'react-router-dom';
import Alert from '@/samples/Alert';
import Drawers from '@/samples/Drawer';
import FetchData from '@/samples/FetchData';
import List from '@/samples/List';
import MultiLanguage from '@/samples/MultiLanguage';
import StateControl from '@/samples/StateControl';
import AppSpec from '../samples/AppSpec';
import Color from '../samples/Color';
import DatePicker from '../samples/DatePicker';
import Form from '../samples/Form';
import Modal from '../samples/Modal';
import Notification from '../samples/Notification';
import Responsive from '../samples/Responsive';
import Todo from '../samples/Todo';
import Typography from '../samples/Typography';
import ForgotPassword from './Auth/ForgotPassword';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Layout from './Layouts/Layout';
import NotFound from './NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Not Found Route */}
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Layout Wrapper */}
      <Route element={<Layout />}>
        {/* Redirect */}
        <Route path="/" element={<Navigate to="/todo" replace />} />

        {/* Main Routes */}
        <Route path="/todo" element={<Todo />} />
        <Route path="/app-spec" element={<AppSpec />} />
        <Route path="/responsive" element={<Responsive />} />
        <Route path="/fetch-data" element={<FetchData />} />
        <Route path="/state-control" element={<StateControl />} />
        <Route path="/multi-language" element={<MultiLanguage />} />

        {/* UI Sub-Routes */}
        <Route path="/ui">
          <Route path="/ui/color" element={<Color />} />
          <Route path="/ui/typography" element={<Typography />} />
          <Route path="/ui/form" element={<Form />} />
          <Route path="/ui/date-picker" element={<DatePicker />} />
          <Route path="/ui/notification" element={<Notification />} />
          <Route path="/ui/modal" element={<Modal />} />
          <Route path="/ui/alert" element={<Alert />} />
          <Route path="/ui/drawer" element={<Drawers />} />
          <Route path="/ui/list" element={<List />} />
        </Route>
      </Route>
    </Routes>
  );
}
