import AppLayout from '@/layouts/AppLayout';
import AuthCallbackPage from '@/pages/AuthCallbackPage';
import HomePage from '@/pages/HomePage';
import ManageRestaurantPage from '@/pages/ManageRestaurantPage';
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
      <Route
        path="/manage-restaurant"
        element={
          <AppLayout>
            <ManageRestaurantPage />
          </AppLayout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
