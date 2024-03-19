import { useAuth0 } from '@auth0/auth0-react';

const useLogin = () => {
  const { loginWithRedirect, isAuthenticated, isLoading, user, logout } =
    useAuth0();
  const loginHandler = async () => await loginWithRedirect();
  const logoutHandler = async () => await logout();

  return {
    loginHandler,
    isAuthenticated,
    isLoading,
    user,
    logoutHandler,
  };
};

export default useLogin;
