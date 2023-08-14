import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link, Route } from 'react-router-dom';
import AuthenticationButton from '../../auth/authentication-button';
import ViewProfilePage from './ViewPage';

function ProfilePage() {
  const { isAuthenticated } = useAuth0();

  const viewProfileStyle = {
    color: '#E2F0F7',
    marginRight: '10px',
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
        View Profile
      </Link>
      <AuthenticationButton />
      <Route path="/profile" component={ViewProfilePage} />
    </div>
  );
}

export default ProfilePage;
