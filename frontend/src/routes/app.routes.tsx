import AppLayout from '@/layouts/AppLayout';
import AuthCallbackPage from '@/pages/AuthCallbackPage';
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
      <Route path="/auth-callback" element={<AuthCallbackPage />} />
    </Routes>
  );
};

export default AppRoutes;
