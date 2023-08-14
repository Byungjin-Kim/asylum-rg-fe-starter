import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import AuthenticationButton from '../../auth/authentication-button';

function ProfilePage() {
  const { isAuthenticated, user } = useAuth0();

  const viewProfileStyle = {
    color: '#E2F0F7',
    marginRight: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  };

  if (!isAuthenticated) {
    return <p>Please log in to view your profile</p>;
  }

  return (
    <div style={viewProfileStyle}>
      <Link to="/profile" style={{ color: '#E2F0F7', textDecoration: 'none' }}>
        {user.name}'s Profile
      </Link>
      <AuthenticationButton />
    </div>
  );
}

export default ProfilePage;
