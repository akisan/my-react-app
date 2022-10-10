import axios from 'axios';
import { ReactNode, useState } from 'react';
import AuthContext from './AuthContext';

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem('auth_token')
  );

  const signin = async (parameters: { user: string; password: string }) => {
    const res = await axios.post(
      'https://jsonplaceholder.typicode.com/users',
      parameters
    );

    const success = !!res.data.id;
    if (success) {
      localStorage.setItem('auth_token', res.data.id);
    } else {
      localStorage.removeItem('auth_token');
    }

    setIsAuthenticated(success);
    return success;
  };

  const signout = (callback: VoidFunction) => {
    setIsAuthenticated(false);
    localStorage.removeItem('auth_token');
    callback();
  };

  const value = { isAuthenticated, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
