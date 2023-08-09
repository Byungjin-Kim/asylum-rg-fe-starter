import React from 'react';
import LoginButton from './login-button';
import LogoutButton from './logout-button';
import { useAuth0 } from '@auth0/auth0-react';

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();
  const buttonCommonStyle = {
    color: '#E2F0F7',
    width: '100px',
    height: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const loginButtonStyle = {
    ...buttonCommonStyle,
    backgroundColor: '#2332db',
  };
  const logoutButtonStyle = {
    ...buttonCommonStyle,
    backgroundColor: '#db2814',
  };

  return isAuthenticated ? (
    <LogoutButton buttonStyle={logoutButtonStyle}>Log Out</LogoutButton>
  ) : (
    <LoginButton buttonStyle={loginButtonStyle}>Log In</LoginButton>
  );
};

export default AuthenticationButton;
