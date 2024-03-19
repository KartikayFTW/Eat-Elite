import Hero from '@/components/Hero';
import AppLayout from '@/layouts/AppLayout';
import AuthCallbackPage from '@/pages/AuthCallbackPage';
import HomePage from '@/pages/HomePage';
import UserProfilePage from '@/pages/UserProfilePage';
import { Route, Routes } from 'react-router-dom';

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AppLayout showHero>
            <HomePage />
          </AppLayout>
        }
      />
      <Route path="/auth-callback" element={<AuthCallbackPage />} />
      <Route
        path="/user-profile"
        element={
          <AppLayout>
            <UserProfilePage />
          </AppLayout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
