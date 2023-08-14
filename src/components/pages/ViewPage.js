import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function ViewProfilePage() {
  const { user } = useAuth0();

  return (
    <div>
      <h1>User Profile</h1>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default ViewProfilePage;
