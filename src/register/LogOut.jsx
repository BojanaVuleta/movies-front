import React, { useContext } from 'react';
import { UserContext } from './path/to/UserContext';

const LogOut = () => {
  const { logout } = useContext(UserContext);

  const handleLogout = () => {
    logout();
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogOut;