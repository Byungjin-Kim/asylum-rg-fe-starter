import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = ({ buttonStyle }) => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button style={buttonStyle} onClick={() => loginWithRedirect()}>
      Log In
    </button>
  );
};

export default LoginButton;
