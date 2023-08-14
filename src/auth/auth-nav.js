import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import AuthenticationButton from './authentication-button';
import ProfilePage from '../components/pages/profilePage';

function AuthNav() {
  const { isAuthenticated } = useAuth0();

  return (
    <div>{isAuthenticated ? <ProfilePage /> : <AuthenticationButton />}</div>
  );
}

export default AuthNav;
