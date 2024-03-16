import AppLayout from '@/layouts/AppLayout';
import HomePage from '@/pages/HomePage';
import { Route, Routes } from 'react-router-dom';

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AppLayout>
            <HomePage />
          </AppLayout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
