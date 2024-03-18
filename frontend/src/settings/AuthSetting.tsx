import { ChildrenProps } from '@/types';
import { Auth0Provider } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const AuthSetting = ({ children }: ChildrenProps) => {
  const auth0Domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const auth0ClientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const auth0RedirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;
  const audience = import.meta.env.VITE_AUTH0_AUDIENCE;
  const navigate = useNavigate();

  if (!auth0Domain || !auth0ClientId || !auth0RedirectUri || !audience) {
    throw new Error('not able to initialize auth0');
  }
  const onRedirectCallback = () => {
    navigate('/auth-callback');
  };
  return (
    <Auth0Provider
      domain={auth0Domain}
      clientId={auth0ClientId}
      authorizationParams={{
        redirect_uri: auth0RedirectUri,
        audience,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthSetting;
